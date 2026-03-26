import { useRef, useEffect } from "react";

const GithubCard = ({ setActive, clearActive, expanded }) => {
  const timeoutRef = useRef(null);
  const username = "Kartavya-Shrivastav";

  // 🔥 hover logic (same system)
  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive();
  };

  const handleLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      clearActive();
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {!expanded ? (
        // 🔹 SMALL CARD
        <div className="card-box">
          <img
            src="/images/github2.png"
            alt="GitHub"
            className="h-18 object-contain"
          />
        </div>
      ) : (
        // 🔥 EXPANDED PANEL
        <div className="w-full bg-black-200 p-6 rounded-xl shadow-2xl transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-8">

            {/* 🔹 LEFT SIDE */}
            <div className="min-w-[240px]">
              <h3 className="text-xl font-semibold mb-3">
                GitHub Stats
              </h3>

              <p className="text-sm text-white-50 mb-4">
                @{username}
              </p>

              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-gray-500/10 text-gray-300 rounded-md hover:bg-gray-500/20 transition"
              >
                View Profile →
              </a>
            </div>

            {/* 🔹 RIGHT SIDE (STATS IMAGES) */}
            <div className="flex-1 bg-black-100 p-4 rounded-lg flex items-center justify-center overflow-hidden relative group">

  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

  <img
    src={`https://ghchart.rshah.org/409ba5/${username}`}
    alt="GitHub Contribution Graph"
    className={`
      relative w-full rounded-lg
      transition-all duration-700 ease-out delay-150
      ${expanded 
        ? "opacity-100 translate-y-0 scale-100" 
        : "opacity-0 translate-y-6 scale-95"}
      
    `}
  />

</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default GithubCard;