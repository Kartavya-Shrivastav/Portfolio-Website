import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { timelineData } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "top bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top 80%",
        end: "bottom 60%",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-24 mt-12 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-16 relative">

  {/* CENTER LINE */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10">
    <div className="timeline gradient-line w-full absolute top-0 left-1/2 -translate-x-1/2 h-[110%]" />
  </div>

  <div className="flex flex-col gap-5 md:gap-6">
    {timelineData.map((card, index) => {
      const isLeft = index % 2 === 0;

      return (
        <div
          key={card.title}
          className={`timeline-card flex items-center w-full ${
            isLeft ? "justify-start" : "justify-end"
          }`}
        >
          {/* CONTENT BOX */}
          <div
            className={`expText w-[45%] ${
              isLeft ? "text-right pr-10" : "text-left pl-10"
            }`}
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              {card.title}
            </h2>

            <p className="text-sm text-white-50 mt-1">
              🗓️ {card.date}
            </p>

            <ul className="mt-2 text-sm text-white-50 space-y-1.5">
              {card.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>

          {/* CENTER DOT + LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 z-20">
            <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center">
              <img
                src={card.logo}
                alt="logo"
                className="w-10 h-10 object-contain"
              />
            </div>
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
