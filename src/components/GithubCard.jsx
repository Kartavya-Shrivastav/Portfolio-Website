import { useEffect, useState, useRef } from "react";

const GithubCard = ({ active, setActive, clearActive, expanded }) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const timeoutRef = useRef(null);

  const username = "Kartavya-Shrivastav";

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then(res => res.json()),
      fetch(`https://api.github.com/users/${username}/repos`).then(res => res.json())
    ])
      .then(([userData, reposData]) => {
        setUser(userData);
        setRepos(reposData);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  // 🔥 hover logic (same as others)
  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive();
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      clearActive();
    }, 700);
  };

  if (loading) {
    return (
      <div className="card-box">
        <p className="text-white text-lg">GitHub</p>
      </div>
    );
  }

  if (!user) return null;

  // ⭐ total stars (sum of all repos)
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

  // 🔹 SMALL CARD
  if (!expanded) {
    return (
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="card-box"
      >
        <img
          src="/images/github.png"
          alt="GitHub"
          className="h-20 object-contain transform scale-200 mt-3"
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

        {/* 🔹 LEFT SIDE */}
        <div className="min-w-[240px]">
          <h3 className="text-xl font-semibold mb-3">
            GitHub Stats
          </h3>

          {/* Username */}
          <p className="text-lg font-medium text-white">
            {user.login}
          </p>

          {/* Public repos */}
          <p className="text-sm mt-2">
            Repositories: <span className="text-blue-400">{user.public_repos}</span>
          </p>

          {/* Followers */}
          <p className="text-sm">
            Followers: <span className="text-green-400">{user.followers}</span>
          </p>

          {/* Following */}
          <p className="text-sm">
            Following: <span className="text-yellow-400">{user.following}</span>
          </p>

          {/* Stars */}
          <p className="text-sm mt-2 text-orange-400">
            ⭐ {totalStars} Stars
          </p>

          {/* Profile link */}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-gray-500/10 text-gray-300 rounded-md hover:bg-gray-500/20 transition"
          >
            View Profile →
          </a>
        </div>

        {/* 🔹 RIGHT SIDE (PLACEHOLDER FOR HEATMAP) */}
        <div className="flex-1 bg-black-100 p-3 rounded-lg flex items-center justify-center">
          <img
            src="/images/github-heatmap.png"
            alt="Github Heatmap"
            className="w-full rounded-lg opacity-90"
          />
        </div>

      </div>
    </div>
  );
};

export default GithubCard;