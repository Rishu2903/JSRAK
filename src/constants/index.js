import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  tripguide,
  asp,
} from "../assets";

import celectLogo from '../assets/company/celectcep.png'
import iitLogo from '../assets/company/iit.png'
import javaLogo from '../assets/tech/javalogo.png'
import expressLogo from '../assets/tech/expresslogo.png'
import DECK from '../assets/deck.jpg'
import BiblioSys from '../assets/bibliosys.jpg'
import finePayPicture from '../assets/finePay.webp'

export const navLinks = [
  { id: "about", title: "About", path: "/about" },
  { id: "work", title: "Our Work", path: "/work" },
  { id: "contact", title: "Get in Touch", path: "/contact" },
 
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "ASP.Net",
    icon: asp,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: javaLogo,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Express",
    icon: expressLogo,
  }
];

const experiences = [
  {
    title: "Software Development Full-time",
    company_name: "CELECT",
    icon: celectLogo,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      " User Interface Design: I am dedicated to creating visually stunning and user-friendly interfaces tha resonate with the target audience.",
      "Functionality Implementation: With a keen eye for detail, I implement a wide range of functionalities tailored to the specific needs of clients and end-users.",
      "Bug and Error Fixing: I excel in identifying and resolving bugs and errors promptly to ensure optimal performance and reliability of websites and apps.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "CELECT",
    icon: celectLogo,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - June 2024",
    points: [
      "User Interface Design: I am dedicated to creating visually stunning and user-friendly interfaces that resonate with the target audience.",
      "Functionality Implementation: With a keen eye for detail, I implement a wide range of functionalities tailored to the specific needs of clients and end-users.",
      "Bug and Error Fixing: I excel in identifying and resolving bugs and errors promptly to ensure optimal performance and reliability of websites and apps.",
    ],
  },
  {
    title: "Frontend Development Intern",
    company_name: "IIT Academy",
    icon: iitLogo,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Dec 2023",
    points: [
      `Design Customization: Crafting unique and visually appealing designs tailored to client's preferences and brand identity.`,
      "Optimization for Performance: Ensuring websites are fully optimized for speed, responsiveness, and user experience across devices and browsers.",
      "SEO Integration: Implementing SEO best practices to enhance website visibility and ranking on search engine results pages, thereby driving organic traffic and improving online presence.",
    ],
  },
];

const projects = [
  {
    name: "DECK",
    description:
      "DECK Digital Signage works over an Internet connection or an offline mode, delivering rich media content to your digital screens. Use DECK Digital Signage to grow your audience, reduce your cost and reinforce your brand. The idea behind the system is to provide dynamic content which can be controlled from a centralized location.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "Asp.net core",
        color: "pink-text-gradient",
      }
    ],
    image: DECK,
    // source_code_link: "https://github.com/Dev2927?tab=repositories",
  },
  {
    name: "BiblioSys",
    description:
      "It is a marketplace interface which is helping libraries to bridge the gap between its book offerings and patrons. It also helps a supplier to showcase its catalogues to a wider audience and thus achieve more sales. Library patrons get the flexibility to choose from a bigger Catalog and make requisitions through their libraries.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "Asp.net core",
        color: "pink-text-gradient",
      }
    ],
    image: BiblioSys,
    // source_code_link: "https://github.com/Dev2927/youtubeClone",
  },
  {
    name: "Fine Pay",
    description:
      "The idea is to provide a simple to use intuitive interface through which a library patron can make the payments to its library with involving hard cash. This first of its kind system is intended to help libraries collect fines easily without worrying about the underlying complexities.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "react-native-paper",
        color: "green-text-gradient",
      },
      {
        name: "Asp.net Web Api",
        color: "pink-text-gradient",
      },
    ],
    image: finePayPicture,
    // source_code_link: "https://github.com/Dev2927?tab=repositories",
  },
];

export { services, technologies, experiences, projects };
