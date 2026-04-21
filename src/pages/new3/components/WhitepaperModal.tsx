import { useState } from "react";

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhitepaperModal({ isOpen, onClose }: WhitepaperModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new URLSearchParams(new FormData(e.currentTarget) as unknown as Record<string, string>);
    try {
      await fetch("https://readdy.ai/api/form/d7iva0vkprijikushf2g", {
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
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111113] p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <i className="ri-close-line text-white text-base"></i>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#00E5CC]/15 border border-[#00E5CC]/30 mx-auto mb-4">
              <i className="ri-download-line text-[#00E5CC] text-2xl"></i>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Whitepaper on its way!</h3>
            <p className="text-[#8A8A8A] text-base">Check your inbox — the Flowvory whitepaper will arrive shortly.</p>
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
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00E5CC]/15 border border-[#00E5CC]/30 mb-4">
                <i className="ri-file-text-line text-[#00E5CC] text-xl"></i>
              </div>
              <p className="text-[#00E5CC] text-xs font-semibold tracking-widest uppercase mb-2">Free Download</p>
              <h3 className="text-white text-2xl font-bold mb-2">Flowvory Whitepaper</h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                48 pages covering the full AI growth framework, case studies, and implementation roadmap.
              </p>
            </div>

            <form
              id="whitepaper-form"
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
                <label className="block text-white text-sm font-medium mb-1.5">Job Title</label>
                <input
                  type="text"
                  name="job_title"
                  required
                  placeholder="CMO / Head of Growth / CEO"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A1C] border border-white/10 text-white text-sm placeholder-[#8A8A8A] focus:outline-none focus:border-[#00E5CC]/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full bg-[#00E5CC] text-[#0A0A0B] font-bold text-base hover:bg-[#00F5DA] transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Download Whitepaper →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
