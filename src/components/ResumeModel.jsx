import { useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import worker from "pdfjs-dist/build/pdf.worker.min?url";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

const ResumeModal = ({ isOpen, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm pt-20">
      
      {/* Modal Container */}
      <div className="relative w-[90%] h-[90%] bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl border border-white/10">

        {/* Top Bar */}
        <div className="flex justify-between items-center px-5 py-3 border-b border-white/10 bg-black/30 backdrop-blur-md">
          <h2 className="text-lg font-semibold text-white">My Resume</h2>

          <div className="flex gap-3">
            {/* Download Button */}
            <a
              href="/KartavyaShrivastav_Resume.pdf"
              download
              className="px-4 py-2 bg-white text-black hover:bg-white/90 rounded-lg text-sm font-medium shadow-md transition"
            >
              Download
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="flex justify-center items-start h-full overflow-auto p-4">
          <Document
            file="/KartavyaShrivastav_Resume.pdf"
            loading={<p className="text-white">Loading resume...</p>}
            error={<p className="text-red-500">Failed to load resume.</p>}
          >
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;