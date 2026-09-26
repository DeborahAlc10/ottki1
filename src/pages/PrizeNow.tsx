import { useState, useEffect, useRef } from "react";
import { useUtmNavigate } from "@/hooks/use-utm";
import { Check, X } from "lucide-react";

function getCheckInDateRange(): string {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(end);
  start.setDate(start.getDate() - 13);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  return `• ${fmt(start)} - ${fmt(end)}`;
}

const BALANCE_TARGET = 2893.27;
const BALANCE_START = 100;

function useAnimatedBalance() {
  const [value, setValue] = useState(BALANCE_START);
  useEffect(() => {
    const duration = 3000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(BALANCE_START + (BALANCE_TARGET - BALANCE_START) * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);
  return value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const BALANCE = "2,893.27";

const checkInDays = [
  { day: 1, points: 50 },
  { day: 2, points: 100 },
  { day: 3, points: 150 },
  { day: 4, points: 200 },
  { day: 5, points: 250 },
  { day: 6, points: 300 },
  { day: 7, points: 350 },
  { day: 8, points: 400 },
  { day: 9, points: 450 },
  { day: 10, points: 500 },
  { day: 11, points: 550 },
  { day: 12, points: 600 },
  { day: 13, points: 650 },
  { day: 14, points: 700 },
];

const videoRewards = [
  { label: "Watch for 10 min", points: 50 },
  { label: "Watch for 30 min", points: 100 },
  { label: "Watch for 60 min", points: 150 },
  { label: "Watch for 120 min", points: 225 },
];

const searchMilestones = [
  { label: "16 searches", points: 252 },
  { label: "36 searches", points: 504 },
  { label: "60 searches", points: 756 },
];

const PrizeNow = () => {
  const navigate = useUtmNavigate();
  const animatedBalance = useAnimatedBalance();
  const [showPrizePopup, setShowPrizePopup] = useState(true);
  const [showWithdrawPanel, setShowWithdrawPanel] = useState(false);
  const [showPixForm, setShowPixForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pixKeyType, setPixKeyType] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [pixName, setPixName] = useState("");
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 16, s: 38 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { m--; s = 59; }
        else if (h > 0) { h--; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const handleWithdraw = () => {
    navigate("/withdraw");
  };

  const handlePixSubmit = () => {
    if (pixName && pixKeyType && pixKey) {
      setShowPixForm(false);
      setShowConfirmation(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] pb-24">
      {/* Header */}
      <div className="bg-card text-center py-3 border-b border-border sticky top-0 z-30">
        <span className="text-base font-semibold text-card-foreground">TikTok Bonus</span>
      </div>

      <div className="max-w-xl mx-auto px-4 pt-4 space-y-3">
        {/* Balance Card */}
        <div className="bg-card rounded-xl p-4 flex items-center justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              Your balance <img src="/images/p-saldo.svg" alt="" className="w-4 h-4" />
            </div>
            <div className="text-2xl font-bold text-card-foreground mt-1">$ {animatedBalance}</div>
          </div>
          <button
            onClick={handleWithdraw}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5"
          >
            Withdraw
          </button>
        </div>

        {/* Congratulations Banner */}
        <div className="bg-card rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-card-foreground leading-tight">
              Congratulations!<br />You've completed<br />all tasks
            </h2>
            <div className="text-xl font-bold text-primary mt-1">$ {animatedBalance}</div>
          </div>
          <img src="/images/parabens-img.png" alt="Congratulations" className="w-24 h-24 object-contain" />
        </div>

        {/* Check-in Section */}
        <TaskSection
          title="Check in for 14 days to earn"
          highlight="8,414 points"
          subtitle={getCheckInDateRange()}
          completed
        >
          <p className="text-xs text-muted-foreground mb-3 bg-[#f8f8f8] rounded-lg p-2.5">
            You've completed all check-in days.
          </p>
          <div className="grid grid-cols-7 gap-2">
            {checkInDays.map((d) => (
              <div key={d.day} className="flex flex-col items-center gap-1">
                <div className="relative">
                  <img src="/images/p-dia.svg" alt="" className="w-8 h-8" />
                  <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-card-foreground">
                    {d.points}
                  </span>
                </div>
                <img src="/images/fi-bs-check.svg" alt="✓" className="w-3.5 h-3.5" />
                <span className="text-[9px] text-muted-foreground">Day {pad(d.day)}</span>
              </div>
            ))}
          </div>
        </TaskSection>

        {/* Ads Section */}
        <TaskSection
          title="Watch daily targeted ads to earn up to"
          highlight="2,730 points"
          subtitle="• 30/30 ads watched"
          completed
        />

        {/* Videos Section */}
        <TaskSection
          title="Watch videos"
          highlight="500 points"
          subtitle=""
          completed
        >
          <div className="space-y-2 mt-2">
            {videoRewards.map((v) => (
              <div key={v.label} className="flex items-center justify-between bg-[#f8f8f8] rounded-lg p-3">
                <span className="text-sm text-card-foreground">{v.label}</span>
                <div className="flex items-center gap-2">
                  <img src="/images/p-assista.svg" alt="" className="w-5 h-5" />
                  <span className="text-xs font-semibold text-primary">{v.points} points</span>
                </div>
              </div>
            ))}
          </div>
        </TaskSection>

        {/* Rewards Redemption */}
        <TaskSection
          title="Redeem your rewards and earn"
          highlight="640 points"
          subtitle="• 8/8 redeemed"
          completed
        />

        {/* Search Section */}
        <TaskSection
          title="Make 60 daily searches to earn up to"
          highlight="996 points"
          subtitle="• 60 searches made today"
          completed
        >
          <div className="flex items-center justify-end mb-2">
            <span className="text-xs bg-[#f8f8f8] rounded-full px-3 py-1 text-muted-foreground">Up to 756 points</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {searchMilestones.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 bg-[#f8f8f8] rounded-lg p-2">
                <img src="/images/p-assista.svg" alt="" className="w-5 h-5" />
                <span className="text-[10px] text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">
            Earn 21 points by typing a query in the search bar, or 0 points by tapping a suggested search like "You may like".
          </p>
        </TaskSection>

        {/* Invite Friends */}
        <TaskSection
          title="Invite 1 friend to sign up and earn"
          highlight="100,000 points - 200,000 points"
          subtitle=""
          completed
        />

        {/* Expiration + Withdraw */}
        <div className="bg-card rounded-xl shadow-sm overflow-hidden">
          <div className="text-center py-3 border-b border-border">
            <span className="text-xs text-muted-foreground tracking-wider">YOUR BALANCE EXPIRES IN</span>
            <div className="flex items-center justify-center gap-1 mt-1">
              <TimeBox value={pad(timeLeft.h)} />
              <span className="text-card-foreground font-bold">:</span>
              <TimeBox value={pad(timeLeft.m)} />
              <span className="text-card-foreground font-bold">:</span>
              <TimeBox value={pad(timeLeft.s)} />
            </div>
          </div>
          <button
            onClick={handleWithdraw}
            className="w-full bg-primary text-primary-foreground font-semibold py-3.5 text-center hover:opacity-90 transition-opacity"
          >
            Redeem rewards
          </button>
        </div>

        {/* Balance Detail */}
        <div className="bg-card rounded-xl p-5 shadow-sm">
          <div className="text-sm text-muted-foreground mb-1">Your balance</div>
          <div className="flex items-center gap-3">
            <div>
              <span className="text-3xl font-bold text-card-foreground">$</span>
              <span className="text-3xl font-bold text-card-foreground ml-1">{BALANCE}</span>
              <div className="text-xs text-muted-foreground">= 28,347,200 points</div>
            </div>
            <img src="/images/p-saldo-maior.png" alt="" className="w-16 h-16 object-contain ml-auto" />
          </div>
          <div className="text-xs text-muted-foreground mt-2">Last reward: $ 646.43</div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-30">
        <div className="max-w-xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground">Your balance</span>
            <img src="/images/p-saldo.svg" alt="" className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-card-foreground">$ {animatedBalance}</span>
          <button
            onClick={handleWithdraw}
            className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1"
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* Prize Popup */}
      {showPrizePopup && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fffde7] rounded-2xl p-6 w-full max-w-sm shadow-2xl text-center">
            <h2 className="text-xl font-bold text-card-foreground mb-2">Prize Goal</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Congratulations! As part of an exclusive rewards campaign.
            </p>
            <div className="text-4xl font-black text-card-foreground mb-3">$ {animatedBalance}</div>
            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-4">
              Expires in
              <span className="bg-card rounded px-1.5 py-0.5 font-mono font-bold text-card-foreground text-xs">{pad(timeLeft.h)}</span>
              :
              <span className="bg-card rounded px-1.5 py-0.5 font-mono font-bold text-card-foreground text-xs">{pad(timeLeft.m)}</span>
              :
              <span className="bg-card rounded px-1.5 py-0.5 font-mono font-bold text-card-foreground text-xs">{pad(timeLeft.s)}</span>
            </div>
            <button
              onClick={() => setShowPrizePopup(false)}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Thank you
            </button>
          </div>
        </div>
      )}

      {/* Withdraw Panel */}
      {showWithdrawPanel && !showPixForm && !showConfirmation && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-end justify-center">
          <div className="bg-card rounded-t-2xl w-full max-w-xl shadow-2xl animate-in slide-in-from-bottom">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-semibold text-card-foreground">Withdraw money</span>
              <button onClick={() => setShowWithdrawPanel(false)}>
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-3 bg-[#f8f8f8] rounded-xl p-3">
                <img src="/images/fi-rs-credit-card.png" alt="" className="w-6 h-6" />
                <span className="text-sm text-card-foreground">Transfer via /</span>
                <img src="/images/pix-logo.svg" alt="PIX" className="w-5 h-5" />
              </div>
              <div className="flex gap-2">
                {["$1.50", "$5", "$10"].map((v) => (
                  <span key={v} className="bg-[#f8f8f8] rounded-full px-4 py-1.5 text-xs text-muted-foreground">{v}</span>
                ))}
              </div>
              <div className="text-center text-2xl font-bold text-card-foreground">$ {BALANCE}</div>
              <button
                onClick={() => { setShowWithdrawPanel(false); setShowPixForm(true); }}
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl"
              >
                Withdraw money
              </button>
              <p className="text-[10px] text-muted-foreground text-center">
                To withdraw money, you need a minimum balance of $1.50. Withdrawal limits for individual and monthly transactions may vary by country or region.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* PIX Form */}
      {showPixForm && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <h3 className="font-semibold text-card-foreground text-center mb-4">Link Account</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={pixName}
                onChange={(e) => setPixName(e.target.value)}
                className="w-full bg-[#f8f8f8] border border-border rounded-lg px-3 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
              />
              <select
                value={pixKeyType}
                onChange={(e) => setPixKeyType(e.target.value)}
                className="w-full bg-[#f8f8f8] border border-border rounded-lg px-3 py-2.5 text-sm text-card-foreground outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Choose account type</option>
                <option value="cpf">CPF</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="random">Random Key</option>
              </select>
              <input
                type="text"
                placeholder="Account Key"
                value={pixKey}
                onChange={(e) => setPixKey(e.target.value)}
                className="w-full bg-[#f8f8f8] border border-border rounded-lg px-3 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                onClick={handlePixSubmit}
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation / Payment Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-center mb-4">
              <img src="/images/tiktok-logo.png" alt="TikTok" className="h-8 object-contain" />
            </div>
            <div className="text-center mb-4">
              <span className="text-xs text-muted-foreground tracking-wider">AVAILABLE BALANCE</span>
              <div className="text-2xl font-bold text-card-foreground mt-1">$ {BALANCE}</div>
            </div>
            <div className="bg-[#f8f8f8] rounded-xl p-4 mb-4 text-center">
              <span className="text-sm text-muted-foreground">Awaiting withdrawal confirmation</span>
            </div>

            <div className="border border-border rounded-xl p-4 mb-4">
              <h4 className="text-xs font-semibold text-card-foreground tracking-wider mb-3">IDENTITY CONFIRMATION</h4>
              <div className="text-center mb-2">
                <span className="text-2xl font-bold text-primary">$ 39.00</span>
                <div className="text-[10px] text-muted-foreground">REFUNDABLE AMOUNT</div>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Required fee to release the withdrawal of $ {BALANCE}. The $39.00 amount will be fully refunded to you within 1 minute.
              </p>
            </div>

            <div className="border border-border rounded-xl p-4 mb-4">
              <h4 className="text-xs font-semibold text-card-foreground tracking-wider mb-3">REFUND DETAILS</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span className="text-card-foreground font-medium">{pixName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account</span>
                  <span className="text-card-foreground font-medium">{pixKey}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount to receive</span>
                  <span className="text-card-foreground font-bold">$ {BALANCE}</span>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-4 mb-4">
              <h4 className="text-xs font-semibold text-card-foreground tracking-wider mb-3">RELEASE PROCESS</h4>
              <div className="space-y-3">
                <StepItem number="1" title="Pay confirmation fee" desc="$39.00 for identity verification" active />
                <StepItem number="✓" title="Receive automatic refund" desc="Amount returned within 1 minute" />
                <StepItem number="3" title="Access full balance" desc={`$ ${BALANCE} released for withdrawal`} />
              </div>
            </div>

            <button className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl mb-2 hover:opacity-90 transition-opacity">
              Pay fee to Release Withdrawal
            </button>
            <p className="text-xs text-center text-muted-foreground">⏱️ Automatic refund in 1 minute</p>

          </div>
        </div>
      )}

      {/* Discount popup */}
      {showDiscountPopup && (
        <div className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-6 w-full max-w-sm shadow-2xl relative">
            <button onClick={() => setShowDiscountPopup(false)} className="absolute top-3 right-3">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
            <h3 className="font-bold text-card-foreground text-center mb-2">ATTENTION: Fee Amount Updated!</h3>
            <div className="text-center mb-2">
              <span className="text-2xl font-bold text-primary">$ 19.80</span>
              <div className="text-[10px] text-muted-foreground">REFUNDABLE AMOUNT</div>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-3">
              <strong>Ownership confirmation required</strong><br />
              To release your withdrawal, ownership confirmation is needed. The amount of <strong>$ 19.80</strong> will be <strong>automatically refunded</strong> within 1 minute after payment.
            </p>
            <div className="flex justify-center gap-6 text-xs text-muted-foreground">
              <span>Automatic refund<br />in 1 minute</span>
              <span>Ownership<br />confirmation</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* Sub-components */

function TaskSection({
  title,
  highlight,
  subtitle,
  completed,
  children,
}: {
  title: string;
  highlight: string;
  subtitle: string;
  completed?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-card rounded-xl p-4 shadow-sm">
      <div className="flex items-start justify-between mb-1">
        <div className="flex-1">
          <p className="text-sm text-card-foreground font-medium">
            {title} <span className="text-primary font-semibold">{highlight}</span>
          </p>
          {subtitle && <p className="text-xs text-primary mt-0.5">{subtitle}</p>}
        </div>
        {completed && (
          <span className="text-[10px] bg-[#f8f8f8] text-muted-foreground rounded-full px-3 py-1 ml-2 whitespace-nowrap">
            Completed
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function TimeBox({ value }: { value: string }) {
  return (
    <span className="bg-card-foreground text-card rounded px-2 py-1 font-mono font-bold text-sm min-w-[28px] text-center">
      {value}
    </span>
  );
}

function StepItem({
  number,
  title,
  desc,
  active,
}: {
  number: string;
  title: string;
  desc: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
          active
            ? "bg-primary text-primary-foreground"
            : number === "✓"
            ? "bg-[hsl(var(--success))] text-white"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {number}
      </div>
      <div>
        <p className="text-sm font-medium text-card-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

export default PrizeNow;
