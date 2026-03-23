import { useEffect, useState } from "react";

const LeetcodeCard = () => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://leetcode-api-faisalshohag.vercel.app/Kartavya_Shrivastav")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  // 🔥 animated counter
  useEffect(() => {
    if (!data) return;

    let start = 0;
    const end = data.totalSolved;
    const duration = 1000;

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
  }, [data]);

  if (!data) {
    return (
      <div className="bg-black-100 w-[200px] h-[120px] rounded-xl flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      {/* 🔹 MAIN CARD */}
      <div className="bg-black-100 w-[250px] h-[120px] rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300">
        <img
            src="/images/leetcode.png"
            alt="LeetCode"
            className="w-40 object-contain transition-all duration-300 group-hover:opacity-0"
        />
      </div>

      {/* 🔥 EXPANDED PANEL (FULL WIDTH BELOW ROW) */}
      {open && (
        <div className="absolute left-0 top-[140px] w-[850px] bg-black-200 p-6 rounded-xl shadow-2xl z-50">

          <div className="flex gap-8">

            {/* LEFT SIDE - TEXT */}
            <div className="min-w-[200px]">
              <h3 className="text-xl font-semibold mb-3">
                LeetCode Stats
              </h3>

              <div className="text-3xl font-bold mb-2">
                🔥{data.totalSolved}
              </div>
              <p className="text-white-50 mb-4">Total Solved</p>

              <div className="space-y-2 text-sm">
                <p className="text-green-400">Easy: {data.easySolved}</p>
                <p className="text-yellow-400">Medium: {data.mediumSolved}</p>
                <p className="text-red-400">Hard: {data.hardSolved}</p>
              </div>

              <p className="text-orange-400 mt-4">
                🔥 {492} Day Streak
              </p>

              <a
                href="https://leetcode.com/Kartavya_Shrivastav/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-md hover:bg-yellow-500/20 transition"
              >
                View Profile →
              </a>
            </div>

            {/* RIGHT SIDE - HEATMAP (BIG AREA) */}
            <div className="flex-1">
              <img
                src="https://leetcard.jacoblin.cool/Kartavya_Shrivastav?theme=dark&ext=heatmap"
                alt="LeetCode Heatmap"
                className="w-full rounded-lg"
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default LeetcodeCard;