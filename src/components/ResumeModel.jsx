import { useEffect } from "react";

const ResumeModal = ({ isOpen, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-[90%] h-[90%] bg-black rounded-xl overflow-hidden shadow-2xl">

        {/* Top Bar */}
        <div className="flex justify-between items-center px-5 py-3 border-b border-white/10">
          <h2 className="text-lg font-semibold">My Resume</h2>

          <div className="flex gap-3">
            {/* Download Button */}
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm font-medium"
            >
              Download
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ResumeModal;