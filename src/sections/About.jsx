import ProfileCard from "../components/models/about/ProfileCard";
import PixelCard from "../components/models/about/PixelCard";
import TextType from "../components/TypeText"; 
import DecryptedText from "../components/LetterDecryptedText";
import WordDecryptedText from "../components/WordDecryptText";

import { useState } from "react";

const About = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="section-padding overflow-visible">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE - Profile Card ONLY */}
        <div className="flex justify-center items-center relative mt-6 md:mt-12"
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
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-xl opacity-30"></div>

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
            <div className="text-white/90 leading-relaxed text-[15px] md:text-[16px]">
              <WordDecryptedText
                text={`Ever wondered what makes a website truly unforgettable?

                It’s the perfect blend of performance, design, and interaction — the subtle animations, the responsiveness, and the feeling that everything just works.

                I’m a developer who focuses on crafting exactly that. From fluid animations to pixel-perfect interfaces, I build experiences that don’t just work — they feel right. My journey started with problem-solving and data structures, and over time evolved into frontend development and interactive design. Today, I enjoy turning ideas into clean, efficient, and visually engaging products.

                I believe great code is invisible — users should only notice how seamless the experience feels.`}
                    speed={80}
              />
            </div>

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