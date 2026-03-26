import { useState, useEffect } from "react";

const ProjectCard = ({ video, title, description, liveLink, repoLink, className = ""}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  // ESC key support
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowOverlay(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div
      className={`relative group rounded-2xl overflow-hidden cursor-pointer 
                 border border-white/10 bg-white/5
                 transition-all duration-500
                 hover:shadow-[0_0_60px_rgba(0,255,255,0.15)] ${className}`}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)} // ✅ FIXED
    >
      {/* VIDEO */}
      <div className="absolute inset-0">

  {/* 🔥 Blurred Background Fill */}
  <video
    src={video}
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
  />

  {/* ✅ Main Video (no crop) */}
  <video
    src={video}
    autoPlay
    loop
    muted
    playsInline
    className="relative w-full h-full object-contain"
  />
</div>

      {/* BASE GRADIENT (always visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* OVERLAY */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-6
        transition-all duration-300
        ${
          showOverlay
            ? "bg-black/50 backdrop-blur-[2px] opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="translate-y-6 group-hover:translate-y-0 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>

          <p className="text-white-50 text-sm md:text-base mb-4">
            {description}
          </p>

          <div className="flex gap-3">
            <a
  href={liveLink}
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 rounded-lg border border-white/30 hover:bg-white hover:text-black transition"
>
  Live Website
</a>

<a
  href={repoLink}
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 rounded-lg border border-white/30 hover:bg-white hover:text-black transition"
>
  Github Repo
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;