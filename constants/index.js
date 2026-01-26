import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.png",
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Yarn",
      icon: "/assets/tech/yarn.svg",
      link: "https://yarnpkg.com/",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "B.Tech (Final Year)",
    company_name: "NIST University",
    icon: "/assets/company/123.png",
    iconBg: "#E6DEDD",
    date: "Berhampur, Odisha, India\n2022 – 2026",
    points: [
      "Computer Science and Engineering",
      "★ GPA: 6.5 / 10",
      "Status: Ongoing",
      "Key Coursework",
      "Data Structures and Algorithms,Database Management Systems, Object-Oriented Programming,Machine Learning,Python,Java,oops",
    ],
  },
  {
    title: "Diploma in Engineering",
    company_name: "Sanjay Memorial Institute of Technology",
    icon: "/assets/company/123.png",
    iconBg: "#E6DEDD",
    date: "Ankushpur, Odisha, India\n2020 – 2023",
    points: [
      "Computer Science and Engineering",
      "★ GPA: 85.5%",
      "Status: completed",
      "Key Coursework",
      "Operating Systems,Cloud Computing,Object-Oriented Programming,Machine Learning,Python,Java",
    ],
  },
  {
    title: "10th Standard",
    company_name: "Utkal Vidya Mandir",
    icon: "/assets/company/123.png",
    iconBg: "#E6DEDD",
    date: "Berhampur, Odisha, India\n2017 – 2018",
    points: [
      "Science Stream",
      "★ GPA: 48%",
      "Status: completed",
      "Key Coursework",
      "Physics,Chemistry,Maths,Biology,Odia,English",
    ],
  },
];

const projects = [
  {
    name: "Virtual Assistant",
    description:
      "A conversational AI assistant that enables users to interact through voice commands and text input. The assistant can perform tasks such as answering queries, executing simple commands, and responding with speech output. This project demonstrates the integration of speech recognition, voice synthesis,and dynamic user interaction using modern web technologies",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/virtualassistants.png",
    source_code_link: "https://github.com/ktirumalaachari/Virtual-Assistant",
  },
  {
    name: "Amazon Clone",
    description:
      "Creating an Amazon Clone using HTML, CSS, and JavaScript involves several steps to replicate the look and functionality of the Amazon website. Here is a brief overview of the process:",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/amazon.jpg",
    source_code_link: "https://github.com/ktirumalaachari/Amazon-Clone",
  },
  {
    name: "Credit-Card-Fraud-Detection",
    description:
      "A machine learning–based credit card fraud detection system using a hybrid ensemble of Random Forest and XGBoost. The project handles highly imbalanced data using SMOTE, performs feature engineering, threshold optimization, and evaluates performance and confusion matrices. Includes model saving and real-time fraud prediction",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "python-flask",
        color: "orange-text-gradient",
      },
      {
        name: "machine-learning",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/creditcard.png",
    source_code_link:
      "https://github.com/ktirumalaachari/Credit-Card-Fraud-Detection-Using-Machine-Learning.git",
  },
  {
    name: "Spotify Clone",
    description:
      "A responsive music streaming web application inspired by Spotify. This project allows users to browse songs, play and pause music, navigate playlists, and control audio playback. It focuses on UI design, user experience, and interactive media handling using core web technologies",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/Spotify.png",
    source_code_link: "https://github.com/ktirumalaachari/Spotify-Clone",
  },
];
const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/ktirumalaachari",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/k-tirumala-achari-921106307",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/TiruAchari",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/k_tiru_mala_achari/",
  },
];

const heroTexts = [
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Building scalable solutions with code & creativity.",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  projects,
  socials,
  heroTexts,
};
