import { useState, useEffect } from "react";

const GeeksForGeeksCard = ({active, setActive, clearActive, expanded }) => {
  const [count, setCount] = useState(0);

  // 🔥 Replace with your actual stats
  const totalSolved = 1046;
  const easy = 313;
  const medium = 493;
  const hard = 117;
  const streak = 455; // <-- update if needed

  // 🔥 Animated counter
  useEffect(() => {
    let start = 0;
    const end = totalSolved;
    const duration = 800;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  let timeout;

  const handleEnter = () => {
    clearTimeout(timeout);
    setActive();
  };

  const handleLeave = () => {
    timeout = setTimeout(() => {
      clearActive();
    }, 600); // delay
  };

  // ✅ SMALL CARD
  if (!expanded) {
    return (
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="card-box"
      >
        <img
          src="/images/gfg2.png"
          alt="GeeksForGeeks"
          className="h-20 object-contain transform "
        />
      </div>
    );
  }

  // ✅ EXPANDED PANEL (MATCHES LEETCODE STRUCTURE)
  return (
    <div className="w-full bg-black-200 p-6 rounded-xl shadow-2xl">
      <div className="flex flex-col md:flex-row gap-8">

        {/* 🔹 LEFT SIDE */}
        <div className="min-w-[220px]">
          {/* Line 1 */}
          <h3 className="text-xl font-semibold mb-3">
            GeeksForGeeks Stats
          </h3>

          {/* Line 2 */}
          <div className="text-3xl font-bold mb-2 text-green-400">
            🔥 {count}
          </div>

          {/* Line 3 */}
          <p className="text-white-50 mb-4">Total Solved</p>

          {/* Line 4-6 */}
          <div className="space-y-2 text-sm">
            <p className="text-green-400">Easy: {easy}</p>
            <p className="text-yellow-400">Medium: {medium}</p>
            <p className="text-red-400">Hard: {hard}</p>
          </div>

          {/* Line 7 */}
          <p className="text-orange-400 mt-4">
            🔥 {streak} Day Streak
          </p>

          {/* Line 8 (GREEN BUTTON like LeetCode yellow) */}
          <a
            href="https://www.geeksforgeeks.org/profile/kartavya_shrivastav?tab=activity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-green-500/10 text-green-400 rounded-md hover:bg-green-500/20 transition"
          >
            View Profile →
          </a>
        </div>

        {/* 🔹 RIGHT SIDE (HEATMAP AREA) */}
        <div className="flex-1 bg-black-100 p-3 rounded-lg flex items-center justify-center">
          {/* Replace with your real image */}
          <img
            src="/images/gfg-heatmap.png"
            alt="GFG Heatmap"
            className="w-full rounded-lg opacity-90"
          />
        </div>

      </div>
    </div>
  );
};

export default GeeksForGeeksCard;