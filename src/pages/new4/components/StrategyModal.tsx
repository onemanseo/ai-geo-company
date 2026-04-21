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
    const form = e.currentTarget;
    const textarea = form.querySelector("textarea");
    if (textarea && textarea.value.length > 500) {
      alert("Message must be 500 characters or less.");
      return;
    }
    setSubmitting(true);
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
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
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111113] p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <i className="ri-close-line text-white text-base"></i>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#00E5CC]/15 border border-[#00E5CC]/30 mx-auto mb-4">
              <i className="ri-check-line text-[#00E5CC] text-2xl"></i>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Strategy request sent!</h3>
            <p className="text-[#8A8A8A] text-base">We&apos;ll review your business and reach out within 24 hours.</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-3 rounded-full bg-[#00E5CC] text-[#0A0A0B] font-bold text-sm cursor-pointer whitespace-nowrap"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-[#00E5CC] text-xs font-semibold tracking-widest uppercase mb-2">Strategy Session</p>
              <h3 className="text-white text-2xl font-bold mb-2">Get a strategy for your business</h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                Tell us about your business and we&apos;ll prepare a custom AI growth strategy.
              </p>
            </div>

            <form
              id="strategy-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-white text-sm font-medium mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1C] border border-white/10 text-white text-sm placeholder-[#8A8A8A] focus:outline-none focus:border-[#00E5CC]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1.5">Work Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1C] border border-white/10 text-white text-sm placeholder-[#8A8A8A] focus:outline-none focus:border-[#00E5CC]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1.5">Company / Website</label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="acme.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1C] border border-white/10 text-white text-sm placeholder-[#8A8A8A] focus:outline-none focus:border-[#00E5CC]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1.5">Business Type</label>
                <select
                  name="business_type"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1C] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00E5CC]/50 transition-colors cursor-pointer"
                >
                  <option value="">Select your type</option>
                  <option value="classic_ecommerce">Classic eCommerce</option>
                  <option value="marketplace">Marketplace / Aggregator</option>
                  <option value="high_consideration">High-Consideration Purchase</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1.5">
                  What&apos;s your biggest growth challenge? <span className="text-[#8A8A8A] font-normal">(max 500 chars)</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  maxLength={500}
                  placeholder="Describe your current situation..."
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1C] border border-white/10 text-white text-sm placeholder-[#8A8A8A] focus:outline-none focus:border-[#00E5CC]/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full bg-[#00E5CC] text-[#0A0A0B] font-bold text-base hover:bg-[#00F5DA] transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Get My Strategy →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
