import ProfileCard from "../components/models/about/ProfileCard";
import PixelCard from "../components/models/about/PixelCard";
import TextType from "../components/TypeText"; 
import { useState } from "react";

const About = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="section-padding overflow-visible">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - Profile Card ONLY */}
        <div className="flex justify-center items-center relative"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            {/* Pixel Background */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="scale-150 md:scale-150 opacity-110">
                    <PixelCard variant="pink" isActive={active} />
                </div>
            </div>

            {/* Profile Card (Foreground) */}
            <div className="relative z-10">
                <ProfileCard
                name="Kartavya Shrivastav"
                title="Software Developer"
                handle="kartavya"
                status="Open to Opportunities"
                contactText="Contact Me"
                avatarUrl="/images/profile.png"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowEnabled
                behindGlowColor="rgba(125, 190, 255, 0.4)"
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                />
            </div>

        </div>

        {/* RIGHT SIDE - Content */}
        <div className="relative">

  {/* subtle glow background */}
  <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-2xl opacity-40"></div>

  <div className="relative">
    
    {/* Heading */}
    <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-transparent bg-clip-text leading-tight">
      About Me
    </h2>

    {/* Animated Text */}
    <div className="text-lg md:text-xl text-white/80 mb-6">
      <TextType
        text={[
          "Building modern web experiences",
          "Crafting smooth UI & animations",
          "Turning ideas into reality"
        ]}
        typingSpeed={60}
        pauseDuration={1200}
        deletingSpeed={40}
        showCursor
        cursorCharacter="|"
      />
    </div>

    {/* Paragraphs */}
    <p className="text-gray-400 leading-relaxed mb-5 text-[15px] md:text-[16px]">
      I'm a passionate developer who enjoys building modern, interactive, and visually engaging web experiences.
      I focus on writing clean, efficient code while constantly exploring new technologies and design patterns.
    </p>

    <p className="text-gray-400 leading-relaxed mb-5 text-[15px] md:text-[16px]">
      My journey started with problem-solving and data structures, and over time I’ve expanded into frontend
      development, animations, and crafting polished user interfaces.
    </p>

    <p className="text-gray-400 leading-relaxed text-[15px] md:text-[16px]">
      I aim to build impactful products and continuously improve my skills to stay ahead in the ever-evolving
      tech world.
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-3 mt-6">
      <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10">Frontend</span>
      <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10">DSA</span>
      <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10">Animations</span>
    </div>

  </div>
</div>

      </div>
    </section>
  );
};

export default About;