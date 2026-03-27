const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  
  { text: "Scalable Apps", imgPath: "/images/code.svg" },
  { text: "3D Experiences", imgPath: "/images/designs.svg" },
  { text: "Clean Interfaces", imgPath: "/images/concepts.svg" },
  { text: "Real Impact", imgPath: "/images/ideas.svg" },
  { text: "Scalable Apps", imgPath: "/images/code.svg" },
  { text: "3D Experiences", imgPath: "/images/designs.svg" },
  { text: "Clean Interfaces", imgPath: "/images/concepts.svg" },
  { text: "Real Impact", imgPath: "/images/ideas.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];
const timelineData = [
  {
    type: "education",
    title: "Matriculation",
    date: "March 2020",
    institute: "Vidya Bharti School",
    score: "91%",
    logo: "/images/vbs.jpg",
  },
  {
    type: "education",
    title: "Intermediate",
    date: "May 2022",
    institute: "Vidya Bharti School",
    score: "92.6%",
    logo: "/images/vbs.jpg",
  },
  {
    type: "education",
    title: "B.Tech (Computer Science)",
    date: "Aug 2023",
    institute: "Lovely Professional University",
    score: "CGPA: 8.92",
    logo: "/images/lpu.png",
  },
  {
    type: "work",
    title: "Internship – Uninxt Study Overseas",
    date: "Jan 2025 – Apr 2025",
    logo: "/images/uninxt.png",
    points: [
      "Revamped UI and improved performance.",
      "Implemented responsive and dynamic features.",
      "Worked on authentication and SEO improvements.",
    ],
  },
];
const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/iamkartavya/"
  },
  
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/kartavyashrivastav/"
  },
];

export {
  words,
  logoIconsList,
  counterItems,
  timelineData,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
