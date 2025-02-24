import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
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
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Telone",
    icon: starbucks,
    iconBg: "#3B4252 ",
    date: "",
    points: [
      "Building and managing web applications with React.js and related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Artificial intelligence and Security",
    companyName: "NedBank",
    icon: tesla,
    iconBg: "#DAEED6",
    date: "",
    points: [
      "Developing and maintaining AI-driven applications, utilizing advanced technologies and frameworks.",
      "Collaborating with cross-functional teams including data scientists, security experts, product managers, and other developers to create high-quality, secure products.",
      "Participating in code reviews, providing constructive feedback to other developers, and ensuring adherence to security best practices..",
      "Ensuring AI models and applications are secure and compliant with industry standards and regulations.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Netone",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Ensuring responsive design implementation and guaranteeing cross-browser compatibility for seamless user experiences.",
      "Staying updated with industry trends and emerging technologies to continuously improve skills and stay competitive.",
      "Integrating third-party APIs to enhance website functionality and provide additional features.",
      "Documenting code and maintaining clear, comprehensive documentation for easier collaboration and future reference.",
    ],
  },
  {
    title: "Cloud Computing and Internet of Things",
    companyName: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Scalable Cloud Infrastructure: Designing and deploying cloud-based solutions that can scale dynamically to handle varying workloads and resource demands.",
      "IoT Device Integration: Developing applications and systems that integrate with IoT devices to collect, analyze, and act upon sensor data.",
      "Edge Computing: Leveraging edge computing capabilities to process data closer to the source, reducing latency and improving real-time responsiveness for IoT applications.",
      "",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I never thought a website could match the beauty of our product until Abel made it happen.",
    name: "DiorHomme",
    designation: "CFO",
    company: "Telone",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Abel is the first web developer I've encountered who genuinely prioritizes his clients' success.",
    name: "Miss Mageza",
    designation: "COO",
    company: "Hotplate",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Thanks to Abel's optimization, our website traffic soared by 50%. We are incredibly grateful!",
    name: "Mr Chomunodisa",
    designation: "CTO",
    company: "NedBank",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "FindMyKey",
    description:
      " A realtime GPS tracker device, which you can track from anywhere in the world, using Raspberry Pi, Python, Javascript and Firebase. ",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Sparta503/FindKey",
  },
  {
    name: "Marketing Website",
    description:
      "Web application that enables users to search for their choice of converse pairs, view estimated costs,adding products to cart, and locate available pairs based on their current location.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Sparta503/Converse-Collections",
  },
  {
    name: "Music Player",
    description:
      " A versatile platform that offers a seamless experience for music enthusiasts. Discover a vast library of songs, albums, and playlists from your favorite artists across genres. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Sparta503/Groovy",
  },
];

export { services, technologies, experiences, testimonials, projects };
