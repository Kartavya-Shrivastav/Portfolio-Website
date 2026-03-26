import { useState } from "react";
import LeetcodeCard from "../components/LeetcodeCard";
import GeeksForGeeksCard from "../components/GeeksForGeeksCard";
import CodeforcesCard from "../components/CodeforcesCard";  
import GithubCard from "../components/GithubCard";

const Stats = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="section-padding mt-5">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12 flex items-center gap-4">
  
        {/* LEFT LINE */}
        <div className="flex-1 h-[1px] bg-white/20 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        {/* TEXT */}
        <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap tracking-wide">
          <span className="text-green-400">&lt;</span>
          <span className="mx-2 text-white">Coding Stats</span>
          <span className="text-green-400">/&gt;</span>
        </h2>

        {/* RIGHT LINE */}
        <div className="flex-1 h-[1px] bg-white/20 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      </div>

      <div onMouseLeave={() => setActiveCard(null)}>
          {/* 🔹 BUTTONS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <LeetcodeCard
              active={activeCard === "leetcode"}
              setActive={() => setActiveCard("leetcode")}
            />

            <GeeksForGeeksCard
              active={activeCard === "gfg"}
              setActive={() => setActiveCard("gfg")}
            />

            <CodeforcesCard
              active={activeCard === "codeforces"}
              setActive={() => setActiveCard("codeforces")}
            />

            <GithubCard
              active={activeCard === "github"}
              setActive={() => setActiveCard("github")}
            />
          </div>

          {/* 🔥 EXPANDED PANEL */}
          <div
            className={`mt-6 transition-all duration-500 ${
              activeCard ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {activeCard === "leetcode" && <LeetcodeCard expanded />}
            {activeCard === "gfg" && <GeeksForGeeksCard expanded />}
            {activeCard === "codeforces" && <CodeforcesCard expanded />}
            {activeCard === "github" && <GithubCard expanded />}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;