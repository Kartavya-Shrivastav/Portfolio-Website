import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  const [activeProject, setActiveProject] = useState(null);

  useGSAP(() => {
    gsap.fromTo(
      ".projects-heading",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top bottom-=100",
        },
      }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: "WebNexus",
      video: "/videos/WebNexus.mp4",
      live: "https://webnexus.rf.gd/",
      github: "https://github.com/Kartavya-Shrivastav/Web-Nexus-Project",
      ref: rydeRef,
      description:
        "On-Demand Rides Made Simple with a Powerful, User-Friendly App",
    },
    {
      title: "FarmEasy",
      video: "/videos/FarmEasy.mp4",
      live: "https://farmeasy-10ce.onrender.com/",
      github: "https://github.com/Kartavya-Shrivastav/FarmEasy",
      ref: libraryRef,
    },
    {
      title: "YC Directory",
      video: "/videos/project3.mp4",
      live: "https://your-live-link.com",
      github: "https://github.com/your-repo",
      ref: ycDirectoryRef,
    },
  ];

  return (
    <div id="work" ref={sectionRef} className="app-showcase relative">
      <div className="w-full">

        {/* Heading */}
        <div className="text-center mb-16 px-5 projects-heading">
          <h1 className="text-4xl md:text-6xl font-bold">
            My <span className="text-orange-400">PROJECTS</span>
          </h1>
          <p className="text-white-50 mt-4 text-lg md:text-xl">
            A selection of projects that showcase my skills in building
            scalable, user-focused applications.
          </p>
        </div>

        <div className="showcaselayout grid lg:grid-cols-3 gap-6 ">
  
          {/* LEFT: MAIN PROJECT */}
          <div ref={rydeRef} className="lg:col-span-2 h-full min-h-[650px]">
            <ProjectCard
              video="/videos/WebNexus.mp4"
              title="WebNexus"
              description="A platform to explore and practice OWASP Top 10 vulnerabilities in a real-world environment."
              liveLink="https://webnexus.rf.gd/"
              repoLink="https://github.com/Kartavya-Shrivastav/Web-Nexus-Project"
              className="h-full"
            />
          </div>

          {/* RIGHT: STACKED PROJECTS */}
          <div className="flex flex-col gap-6 h-full">
            
            <div ref={libraryRef} className="min-h-[310px]">
              <ProjectCard
                video="/videos/FarmEasy.mp4"
                title="FarmEasy"
                description="A platform for farmers to manage their crops and sales."
                liveLink="https://farmeasy-10ce.onrender.com/"
                repoLink="https://github.com/Kartavya-Shrivastav/FarmEasy"
                className="h-full"
              />
            </div>

            <div ref={ycDirectoryRef} className="min-h-[310px]">
              <ProjectCard
                video="/videos/project3.mp4"
                title="YC Directory App"
                description="Startup discovery platform inspired by Y Combinator."
                liveLink="https://your-live-link.com"
                repoLink="https://github.com/your-repo"
                className="h-full"
              />
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 MODAL PREVIEW */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50 flex items-center justify-center px-5">

          {/* Close Button */}
          <button
            onClick={() => setActiveProject(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

          <div className="max-w-4xl w-full bg-[#0b0b0f] rounded-xl overflow-hidden shadow-2xl">

            {/* Video Preview */}
            <video
              src={activeProject.video}
              controls
              autoPlay
              className="w-full h-[400px] object-cover"
            />

            {/* Actions */}
            <div className="p-6 flex justify-between items-center flex-wrap gap-4">
              <h2 className="text-xl font-semibold">{activeProject.title}</h2>

              <div className="flex gap-4">
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-white text-black rounded-lg"
                >
                  Live Site
                </a>

                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 border border-white/20 rounded-lg"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Project;