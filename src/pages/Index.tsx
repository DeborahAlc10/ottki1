import { useEffect, useRef, useState, useCallback } from "react";
import { useUtmNavigate } from "@/hooks/use-utm";
import calendarImg from "@/assets/calendar-illustration.png";

const PARTICLES_COUNT = 20;

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
}

function createParticles(w: number, h: number): Particle[] {
  const colors = [
    "hsla(350,80%,65%,0.5)",
    "hsla(200,80%,70%,0.4)",
    "hsla(350,60%,75%,0.3)",
    "hsla(200,60%,80%,0.3)",
  ];
  return Array.from({ length: PARTICLES_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    size: Math.random() * 5 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedX: (Math.random() - 0.5) * 0.4,
    speedY: (Math.random() - 0.5) * 0.4,
  }));
}

const stats = [
  { label: "Videos watched", current: 50, target: 50 },
  { label: "Time spent on platform", current: 1000, target: 1000 },
  { label: "Videos liked", current: 100, target: 100 },
];

function getDynamicMonths() {
  const now = new Date();
  const currentMonth = now.getMonth(); // 0-11
  const currentYear = now.getFullYear();
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const pairs: { label: string; name: string }[] = [];
  // Generate 6 pairs working backwards from the current 2-month block
  // Determine which pair the current month belongs to (0=Jan/Feb, 1=Mar/Apr, ...)
  const currentPairIndex = Math.floor(currentMonth / 2);

  for (let i = 0; i < 6; i++) {
    let pairIndex = currentPairIndex - i;
    let year = currentYear;
    while (pairIndex < 0) {
      pairIndex += 6;
      year -= 1;
    }
    const m1 = pairIndex * 2;
    const m2 = m1 + 1;
    const label = `${m2 + 1}/${m2 + 1}`;
    const name = `${monthNames[m1]}/${monthNames[m2]}`;
    pairs.push({ label, name });
  }

  return pairs;
}

const months = getDynamicMonths();


const Index = () => {
  const navigate = useUtmNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  const [showModal, setShowModal] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [targetZone] = useState(() => 30 + Math.random() * 40);
  const [verified, setVerified] = useState(false);
  const [dragging, setDragging] = useState(false);
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  // Progress popup
  const [showProgress, setShowProgress] = useState(false);
  const [loadedMonths, setLoadedMonths] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [showRedeemBtn, setShowRedeemBtn] = useState(false);

  // Show progress popup after 20 seconds if user hasn't clicked the main button
  useEffect(() => {
    if (showModal) return;
    const timer = setTimeout(() => setShowProgress(true), 20000);
    return () => clearTimeout(timer);
  }, [showModal]);

  // Animate month loading
  useEffect(() => {
    if (!showProgress) return;
    if (loadedMonths >= months.length) {
      setLoadingText("");
      setShowRedeemBtn(true);
      return;
    }
    setLoadingText(`Loading ${months[loadedMonths].name}…`);
    const timer = setTimeout(() => setLoadedMonths((p) => p + 1), 1500);
    return () => clearTimeout(timer);
  }, [showProgress, loadedMonths]);

  // Animated counters
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((s, i) => {
      const steps = 30;
      let step = 0;
      return setInterval(() => {
        step++;
        setAnimatedStats((prev) => {
          const next = [...prev];
          next[i] = Math.round((s.current / steps) * Math.min(step, steps));
          return next;
        });
        if (step >= steps) clearInterval(timers[i]);
      }, 40);
    });
    return () => timers.forEach(clearInterval);
  }, []);

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = createParticles(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Slider drag
  const handlePointerDown = useCallback(() => {
    if (verified) return;
    setDragging(true);
  }, [verified]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging || verified) return;
      const track = sliderTrackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      setSliderValue(pct);
    },
    [dragging, verified]
  );

  const handlePointerUp = useCallback(() => {
    if (!dragging) return;
    setDragging(false);
    const inZone = sliderValue >= targetZone && sliderValue <= targetZone + 30;
    if (inZone) {
      setVerified(true);
      setTimeout(() => navigate("/prize"), 1000);
    } else {
      setSliderValue(0);
    }
  }, [dragging, sliderValue, targetZone]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-card rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-card-foreground leading-tight mb-2">
          You've met all the{" "}
          <span className="text-primary">activity criteria.</span>
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          We've confirmed that your account meets the minimum usage requirements. Check the summary below and
          tap to unlock your progress.
        </p>

        {/* Stats */}
        <div className="bg-secondary rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--success))]" />
            <span className="text-xs text-muted-foreground font-medium">Your activity details</span>
          </div>
          {stats.map((s, i) => (
            <div key={s.label} className="mb-3 last:mb-0">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-card-foreground font-medium">{s.label}</span>
                <span className={animatedStats[i] >= s.target ? "text-[hsl(var(--success))] font-semibold" : "text-muted-foreground"}>
                  {animatedStats[i]}/{s.target}
                </span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700"
                  style={{ width: `${(animatedStats[i] / s.target) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mb-4">
          Analyzing your watched videos…
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          </svg>
          Unlock my progress
        </button>

        <p className="text-[10px] text-muted-foreground text-center mt-4">
          The data above is automatically generated based on your recent platform activity.
        </p>
      </div>

      {/* Verification Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="bg-card rounded-2xl p-6 w-full max-w-sm shadow-2xl"
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <h2 className="text-lg font-bold text-card-foreground text-center mb-1">
              Security Verification
            </h2>
            <p className="text-xs text-muted-foreground text-center mb-5">
              Drag the slider to the green area to continue
            </p>

            {/* Slider */}
            <div
              ref={sliderTrackRef}
              className="relative h-12 bg-muted rounded-full select-none touch-none"
            >
              {/* Target zone */}
              <div
                className="absolute top-0 h-full bg-[hsl(var(--success))]/20 rounded-full"
                style={{ left: `${targetZone}%`, width: "30%" }}
              />
              {/* Target indicator line */}
              <div
                className="absolute top-0 h-full w-0.5 bg-[hsl(var(--success))]"
                style={{ left: `${targetZone + 15}%` }}
              />
              {/* Fill */}
              <div
                className="absolute top-0 left-0 h-full bg-primary/20 rounded-full transition-none"
                style={{ width: `${sliderValue}%` }}
              />
              {/* Text */}
              {!verified && sliderValue < 5 && (
                <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground pointer-events-none">
                  Drag to the green area →
                </span>
              )}
              {/* Handle */}
              <div
                className={`absolute top-1 w-10 h-10 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing transition-colors ${
                  verified ? "bg-[hsl(var(--success))]" : "bg-card border-2 border-primary"
                }`}
                style={{ left: `clamp(0px, calc(${sliderValue}% - 20px), calc(100% - 40px))` }}
                onPointerDown={handlePointerDown}
              >
                {verified ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-5 h-5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" className="w-5 h-5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </div>
            </div>

            {verified && (
              <p className="text-center text-sm text-[hsl(var(--success))] font-medium mt-3">
                ✓ Successfully verified!
              </p>
            )}
            <p className="text-[10px] text-muted-foreground text-center mt-3">
              Stop when the button enters the green area
            </p>
          </div>
        </div>
      )}

      {/* Progress Popup */}
      {showProgress && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-8 w-full max-w-2xl shadow-2xl relative">
            <h2 className="text-2xl font-bold text-card-foreground leading-tight">
              Congratulations!<br />
              You've completed all 2026 activities<br />
              <span className="text-primary">Check your progress!</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2 mb-6">
              We're loading your history month by month. Please wait a few seconds while we confirm all steps.
            </p>

            <div className="flex justify-center mb-6">
              <img src={calendarImg} alt="Calendar" className="w-36 h-36 object-contain" />
            </div>

            {/* Month grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {months.map((m, i) => {
                const loaded = i < loadedMonths;
                const loading = i === loadedMonths && loadedMonths < months.length;
                return (
                  <div
                    key={m.label}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${
                      loaded
                        ? "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))] border border-[hsl(var(--success))]/30"
                        : loading
                        ? "bg-primary/10 text-primary/60 border border-primary/20 animate-pulse"
                        : "bg-muted text-muted-foreground border border-border"
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      loaded ? "border-[hsl(var(--success))] bg-[hsl(var(--success))]" : "border-primary/40"
                    }`}>
                      {loaded && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-2.5 h-2.5">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    {m.label}
                  </div>
                );
              })}
            </div>

            {loadingText && (
              <p className="text-xs text-muted-foreground mb-4">{loadingText}</p>
            )}

            {showRedeemBtn && (
              <button
                onClick={() => {
                  setShowProgress(false);
                  setShowModal(true);
                }}
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Redeem progress
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


export default Index;
