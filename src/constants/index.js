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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Devoloper",
    icon: web,
  },
  {
    title: "Software Devoloper",
    icon: mobile,
  },
  {
    title: "Robotic Engineer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Devoloper",
    company_name: "MIT Academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - December 2024",
    points: [
      "Developing and maintaining web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a focus on React and TypeScript for building scalable and maintainable user interfaces. Leveraging TypeScript’s strong typing to enhance code quality and developer experience through better tooling and error checking.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products. This involves using Agile methodologies and tools such as JIRA to track progress and manage project tasks effectively, ensuring alignment on product requirements and timelines.",
      "Implementing responsive design principles using CSS and React libraries such as Material-UI or Styled-Components to ensure a consistent user experience across various devices and screen sizes. Additionally, performing cross-browser testing using tools like BrowserStack to guarantee compatibility across major web browsers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Robotic Engineer",
    company_name: "INTech Academy",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2025",
    points: [
      "Developing and maintaining robotic systems using C++ and Arduino.",
      "Utilizing Python for developing algorithms and controlling robotic systems.",
      "Integrating artificial intelligence algorithms to enhance the intelligence and efficiency of systems.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Devoloper",
    company_name: "Azerbaijan Technical University",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing the backend of web applications using the MERN stack (MongoDB, Express.js, Node.js). This includes configuring the MongoDB database, managing data, creating RESTful APIs with Express.js, and developing server-side applications using Node.js.",
      "Interacting with the MongoDB database by writing queries, optimizing database performance, and participating in data modeling processes.",
      "Defining server routing and middleware using Express.js, integrating authentication methods like JWT to ensure API security.",


      "Enhancing application performance with Node.js by utilizing asynchronous programming and event-driven architecture, as well as developing error handling and logging practices.",
    ],
  },
  {
    title: "Android Devoloper",
    company_name: "Non-Company",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Learning...",
    points: [
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Residence Seller ",
    description:
      "This website is designed to showcase and facilitate the sale of luxury residential properties. It provides users with detailed information about available units, amenities, pricing, and the benefits of living in premium residential complexes",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/RufoTech/react-mudafie-project-main-main-main",
  },
  {
    name: "Clothing Store",
    description:
      "Check out the latest enhancements I've made to this clothing store website! From an improved user interface to streamlined navigation, the site now offers an even smoother shopping experience. Key updates include a modernized design with faster load times, mobile responsiveness, and secure payment integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/RufoTech/moda-sayt",
  },
  {
    name: "E-Commerce",
    description:
      "Coming Soon....",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "script",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Rufo",
  },
];

export { services, technologies, experiences, testimonials, projects };
