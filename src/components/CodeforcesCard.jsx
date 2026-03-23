import { useEffect, useState, useRef } from "react";

const CodeforcesCard = ({ setActive, clearActive, expanded }) => {
  const [user, setUser] = useState(null);
  const [ratingData, setRatingData] = useState([]);
  const [loading, setLoading] = useState(true);

  const timeoutRef = useRef(null);

  const handle = "Kartavya28"; // ✅ your handle

  // 🔥 Fetch data once
  useEffect(() => {
    Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${handle}`).then(res => res.json()),
      fetch(`https://codeforces.com/api/user.rating?handle=${handle}`).then(res => res.json())
    ])
      .then(([userRes, ratingRes]) => {
        setUser(userRes.result[0]);
        setRatingData(ratingRes.result);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  // 🔥 FIXED hover logic
  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive();
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      clearActive();
    }, 1000);
  };

  // 🔹 Loading state (clean UX)
  if (loading) {
    return (
      <div className="card-box">
        <p className="text-white text-lg">Codeforces</p>
      </div>
    );
  }

  if (!user) return null;

  // 🎨 Rating color
  const getColor = (rating) => {
    if (rating >= 2400) return "text-red-500";
    if (rating >= 2100) return "text-orange-400";
    if (rating >= 1900) return "text-purple-400";
    if (rating >= 1600) return "text-blue-400";
    if (rating >= 1400) return "text-cyan-400";
    if (rating >= 1200) return "text-green-400";
    return "text-gray-400";
  };

  const stars = Math.max(1, Math.floor(user.rating / 300));

  // 🔹 SMALL CARD
  if (!expanded) {
    return (
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="card-box"
      >
        <img
          src="/images/codeforces.png"
          alt="Codeforces"
          className="h-20 object-contain transform scale-250 mt-3"
        />
      </div>
    );
  }

  // 🔥 EXPANDED PANEL
  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="w-full bg-black-200 p-6 rounded-xl shadow-2xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-8">

        {/* LEFT */}
        <div className="min-w-[240px]">
          <h3 className="text-xl font-semibold mb-3">
            Codeforces Stats
          </h3>

          {/* Line 1 */}
          <p className={`text-3xl font-bold ${getColor(user.rating)}`}>
            {user.rating}
          </p>
          <p className="text-white-50 mb-3">Rating</p>

          {/* Line 2 */}
          <p className="text-sm mb-1">
            Rank: <span className={getColor(user.rating)}>{user.rank}</span>
          </p>

          {/* Line 3 */}
          <p className="text-sm mb-1">
            Max Rating: <span className="text-orange-400">{user.maxRating}</span>
          </p>

          {/* Line 4 */}
          <p className="text-yellow-400 mt-2 text-lg">
            {"⭐".repeat(stars)}
          </p>

          {/* Line 5 */}
          <a
            href={`https://codeforces.com/profile/${handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-md hover:bg-blue-500/20 transition"
          >
            View Profile →
          </a>
        </div>

        {/* RIGHT (GRAPH) */}
        <div className="flex-1 bg-black-100 p-3 rounded-lg overflow-hidden">
          {ratingData.length > 0 ? (
            <svg width="100%" height="220">
              {ratingData.map((item, index) => {
                if (index === 0) return null;

                const maxRating = Math.max(...ratingData.map(d => d.newRating));

                const x1 = (index - 1) * (600 / ratingData.length);
                const y1 = 200 - (ratingData[index - 1].newRating / maxRating) * 180;

                const x2 = index * (600 / ratingData.length);
                const y2 = 200 - (item.newRating / maxRating) * 180;

                return (
                  <line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                );
              })}
            </svg>
          ) : (
            <div className="text-white-50 text-center">
              Loading Graph...
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CodeforcesCard;