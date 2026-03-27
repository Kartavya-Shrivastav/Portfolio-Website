import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { timelineData } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
  gsap.fromTo(
    ".timeline-line",
    { width: "0%" },
    {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "#experience",
        start: "top 70%",
        end: "bottom 60%",
        scrub: true,
      },
    }
  );

  // Cards animation
  gsap.utils.toArray(".timeline-item").forEach((item, i) => {
    gsap.from(item, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
      },
    });
  });
}, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-8 mt-8 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="TIMELINE"
          sub="💼 My Career Overview"
        />
        
        <div className=" relative">

          {/* LINE */}
          <div className="absolute top-1/2 left-1/2 w-[85%] -translate-x-1/2 h-[3px] bg-white/10 -translate-y-1/2">
            <div className="timeline-line h-full w-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
          </div>

          {/* CARDS */}
          <div className="flex justify-center gap-15 items-start md:gap-20 py-24">

            {timelineData.map((card, index) => {

              return (
                <div
                  key={index}
                  className="timeline-item relative flex flex-col items-center w-full max-w-[220px] md:max-w-[240px] h-[260px]"
                >

                {/* CARD */}
                <div
  className={`absolute top-1/2 left-1/2 -translate-x-1/2
  ${card.type === "education" ? "w-[180px]" : "w-[260px]"}
  translate-y-[70px]`}
>
                  <div
  className={`bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md 
  border border-white/10 rounded-xl 
  ${card.type === "education" ? "p-4 text-center" : "p-5 text-left"}
  transition-all duration-500 hover:scale-105 hover:border-white/20`}
>

                    <h3 className="text-sm md:text-base font-semibold">
  {card.title}
</h3>

<p className="text-xs text-blue-300 mb-1">
  {card.date}
</p>

{card.type === "education" ? (
  <>
    <p className="text-xs text-white-50">{card.institute}</p>
    <p className="text-cyan-400 text-sm font-semibold mt-1">
      {card.score}
    </p>
  </>
) : (
  <ul className="text-xs text-white-50 space-y-1 mt-2 leading-relaxed">
    {card.points.map((p, i) => (
      <li key={i}>• {p}</li>
    ))}
  </ul>
)}
                  </div>
                </div>

                {/* CONNECTOR LINE */}
                <div
  className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[2px] h-[40px] bg-white/20 translate-y-[20px]"
/>

                {/* LOGO (ON TIMELINE) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                w-14 h-14 rounded-full bg-black border border-white/20 
                                flex items-center justify-center z-10
                                shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                        <img
                          src={card.logo}
                          className="w-12 h-12 rounded-full object-contain"
                        />
                </div>

                </div>
            );
          })}
        </div>
      </div>

      </div>
    </section>
  );
};

export default Experience;
