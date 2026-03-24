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

        {/* 🔹 ROW OF CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <LeetcodeCard
            active={activeCard === "leetcode"}
            setActive={() => setActiveCard("leetcode")}
            clearActive={() => setActiveCard(null)}
          />

          <GeeksForGeeksCard
            active={activeCard === "gfg"}
            setActive={() => setActiveCard("gfg")}
            clearActive={() => setActiveCard(null)}
          />

          <CodeforcesCard
            active={activeCard === "codeforces"}
            setActive={() => setActiveCard("codeforces")}
            clearActive={() => setActiveCard(null)}
          />

          <GithubCard
            active={activeCard === "githbu"}
            setActive={() => setActiveCard("github")}
            clearActive={() => setActiveCard(null)}
          />
        </div>

        {/* 🔥 EXPANDED PANEL AREA */}
        <div
        className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${
          activeCard ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {activeCard === "leetcode" && <LeetcodeCard expanded />}
        {activeCard === "gfg" && <GeeksForGeeksCard expanded />}
        {activeCard === "codeforces" && <CodeforcesCard expanded />}
        {activeCard === "github" && <GithubCard expanded />}
      </div>

      </div>
    </section>
  );
};

export default Stats;