import { useState } from "react";

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StrategyModal({ isOpen, onClose }: StrategyModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new URLSearchParams(new FormData(e.currentTarget) as unknown as Record<string, string>);
    try {
      await fetch("https://readdy.ai/api/form/d7iva0fkprijikushf20", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(14,14,18,0.62)", backdropFilter: "blur(12px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-xl rounded-[34px] border border-[#171717]/10 bg-[#fff8ef] p-6 md:p-8 relative shadow-[0_30px_80px_rgba(23,23,23,0.18)] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(circle at 12% 18%, rgba(255,126,78,0.20), transparent 20%), radial-gradient(circle at 84% 16%, rgba(89,170,255,0.18), transparent 20%), radial-gradient(circle at 72% 76%, rgba(255,205,82,0.16), transparent 18%)",
          }}
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-[#171717]/6 hover:bg-[#171717]/10 transition-colors cursor-pointer"
        >
          <i className="ri-close-line text-[#171717] text-base"></i>
        </button>

        {submitted ? (
          <div className="relative z-10 text-center py-8">
            <div className="w-16 h-16 flex items-center justify-center rounded-[20px] bg-[#171717] text-[#fff8ef] mx-auto mb-4 shadow-[6px_6px_0_rgba(89,170,255,0.22)]">
              <i className="ri-check-line text-2xl"></i>
            </div>
            <h3 className="text-[#171717] text-2xl font-black tracking-[-0.04em] mb-2">Request received</h3>
            <p className="text-[#4f4f4f] text-base leading-relaxed max-w-md mx-auto">
              Thanks. Flowvory will review your details and come back with the next step.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-3 rounded-full bg-[#171717] text-[#fff8ef] font-bold text-sm cursor-pointer whitespace-nowrap shadow-[6px_6px_0_rgba(255,126,78,0.18)]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="relative z-10 mb-6 pr-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold mb-3">Book Call</p>
              <h3 className="text-[#171717] text-3xl md:text-4xl font-black tracking-[-0.06em] leading-[0.94] mb-3">Book a call with Flowvory</h3>
              <p className="text-[#4f4f4f] text-sm md:text-base leading-relaxed max-w-lg">
                Leave your details and Flowvory will get back to you about GEO, AI visibility, conversion systems, and the right next step for your business.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#171717] text-sm font-semibold mb-1.5">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-[18px] bg-white/82 border border-[#171717]/10 text-[#171717] text-sm placeholder-[#7a7a7a] focus:outline-none focus:border-[#59aaff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#171717] text-sm font-semibold mb-1.5">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-[18px] bg-white/82 border border-[#171717]/10 text-[#171717] text-sm placeholder-[#7a7a7a] focus:outline-none focus:border-[#59aaff] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#171717] text-sm font-semibold mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (310) 555-0123"
                    className="w-full px-4 py-3 rounded-[18px] bg-white/82 border border-[#171717]/10 text-[#171717] text-sm placeholder-[#7a7a7a] focus:outline-none focus:border-[#59aaff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#171717] text-sm font-semibold mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-[18px] bg-white/82 border border-[#171717]/10 text-[#171717] text-sm placeholder-[#7a7a7a] focus:outline-none focus:border-[#59aaff] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#171717] text-sm font-semibold mb-1.5">Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-[18px] bg-white/82 border border-[#171717]/10 text-[#171717] text-sm placeholder-[#7a7a7a] focus:outline-none focus:border-[#59aaff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#171717] text-sm font-semibold mb-1.5">Website</label>
                  <input
                    type="text"
                    name="website"
                    required
                    placeholder="example.com"
                    className="w-full px-4 py-3 rounded-[18px] bg-white/82 border border-[#171717]/10 text-[#171717] text-sm placeholder-[#7a7a7a] focus:outline-none focus:border-[#59aaff] transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 w-full py-4 rounded-full bg-[#171717] text-[#fff8ef] font-black text-base hover:translate-y-[-1px] transition-all duration-200 cursor-pointer whitespace-nowrap shadow-[6px_6px_0_rgba(255,126,78,0.18)] disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Book Call"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
