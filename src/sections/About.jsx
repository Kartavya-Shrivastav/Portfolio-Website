import ProfileCard from "../components/models/about/ProfileCard";
import PixelCard from "../components/models/about/PixelCard";
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
                <div className="scale-150 md:scale-125 opacity-100">
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
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I'm a passionate developer who enjoys building modern, interactive, and visually engaging web experiences.
            I focus on writing clean, efficient code while constantly exploring new technologies and design patterns.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            My journey started with problem-solving and data structures, and over time I’ve expanded into frontend
            development, animations, and crafting polished user interfaces.
          </p>

          <p className="text-gray-400 leading-relaxed">
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
    </section>
  );
};

export default About;