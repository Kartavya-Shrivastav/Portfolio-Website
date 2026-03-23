import { useState } from "react";
import LeetcodeCard from "../components/LeetcodeCard";
import GeeksForGeeksCard from "../components/GeeksForGeeksCard";
import CodeforcesCard from "../components/CodeforcesCard";  
import GithubCard from "../components/GithubCard";

const Stats = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="section-padding mt-5">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">
          Coding Stats
        </h2>

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
            active={activeCard === "cf"}
            setActive={() => setActiveCard("cf")}
            clearActive={() => setActiveCard(null)}
          />

          <GithubCard
            active={activeCard === "githbu"}
            setActive={() => setActiveCard("github")}
            clearActive={() => setActiveCard(null)}
          />
        </div>

        {/* 🔥 EXPANDED PANEL AREA */}
        <div className="mt-8 min-h-[300px]">
          {activeCard === "leetcode" && <LeetcodeCard expanded />}
          {activeCard === "gfg" && <GeeksForGeeksCard expanded />}
          {activeCard === "cf" && <CodeforcesCard expanded />}
          {activeCard === "github" && <GithubCard expanded />}
        </div>

      </div>
    </section>
  );
};

export default Stats;