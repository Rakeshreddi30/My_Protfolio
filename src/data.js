import hotstar from "./assets/images/hotstar.webp";
import bankaggregator from "./assets/images/bank-aggregator.png";
import Youtube from "./assets/images/Youtube.jpg";
import stripe from "./assets/images/stripe.png";
import React from "./assets/images/React.avif";
import { FaCss3, FaHtml5, FaJava } from "react-icons/fa";
import { DiJavascript, DiJavascript1, DiReact } from "react-icons/di";
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "Skills" },
  { id: 4, href: "#project", text: "project" },
];
export const socialLinks = [
  {
    id: 1,
    icon: "faLinkedin",
    url: "https://www.linkedin.com/in/rakeshreddygopidi",
  },
  { id: 2, icon: "faGithub", url: "https://github.com/Rakeshreddi30" },
];

export const services = [
  {
    id: 1,
    icon: FaHtml5,
    color: "text-orange-600",
    title: "Html",
    text: "HTML structures web pages using elements like headings, paragraphs, links, and images, forming the foundation of websites and applications.",
  },
  {
    id: 2,
    icon: FaCss3,
    color: "text-blue-500",
    title: "CSS",
    text: "CSS styles websites by controlling colors, layouts, fonts, spacing, and animations, ensuring responsive, visually appealing, and consistent web designs.",
  },
  {
    id: 3,
    icon: DiJavascript1,
    color: "text-yellow-500",
    title: "javascript",
    text: "JavaScript enables interactive web features, including dynamic content, form validation, animations, API calls, and event handling for user experiences.",
  },
  {
    id: 4,
    icon: DiReact,
    color: "text-blue-400 animate-spin",
    title: "React.js",
    text: "React.js, a JavaScript library, builds dynamic UI components efficiently using a virtual DOM, reusable components, hooks, and state management.",
  },

  {
    id: 5,
    icon: FaJava,
    color: "text-blue-400 animate-spin",
    title: "Java",
    text: "Java is a versatile, object-oriented programming language used for web, mobile, and enterprise applications, featuring platform independence, strong security, and scalability.",
  },
];

export const project = [
  {
    id: 1,
    image: stripe,
    date: "July 10th, 2024",
    title: "Payment Integration using Stripe",
    info: ` I developed a secure payment integration system using Stripe, built with Java, Spring Boot, Spring Security, and MySQL. The system ensures secure transactions, handling payment processing, authentication, and database management efficiently. Spring Security protects sensitive data, while MySQL stores transaction details. This project enables seamless online payments with robust security and scalability, making it ideal for e-commerce or subscription-based applications. 🚀`,
  },
  {
    id: 2,
    image: bankaggregator,
    date: "January 10th, 2024",
    title: "Bank Statement Aggregator",
    info: `I developed a Bank Statement Aggregator using Java, Spring Boot, MySQL, and JDBC, designed to collect, process, and analyze bank statements efficiently. The system fetches transactional data from multiple sources, stores it securely in MySQL, and enables structured reporting. JDBC ensures seamless database interaction, while Spring Boot provides scalability and performance. This project enhances financial data management for businesses and users.`,
  },
  {
    id: 3,
    image: Youtube,
    date: "December, 2024",
    title: "Youtube Clone",
    info: `I developed a YouTube clone using HTML, CSS, and JavaScript, integrating external YouTube SEO based on query parameters to display relevant video results. This project showcases my front-end development skills, including UI design, responsiveness, API integration, and dynamic content handling. It highlights my ability to build real-world applications with a strong focus on user experience and search-based content delivery.`,
  },
  {
    id: 4,
    image: hotstar,
    date: "January, 2025",
    title: "Hotstar clone",
    info: ` I developed a Hotstar clone using HTML, CSS, and React.js, replicating key features like a responsive UI, dynamic content rendering, and smooth navigation. This project showcases my front-end development skills, including component-based architecture, state management, and UI/UX design. It highlights my ability to build real-world applications with a focus on performance and user experience.`,
  },
  {
    id:5,
    image: React,
    date:"March, 2024",
    title:"Various JS and React.Js mini projects",
    info:` Developed various mini projects using React.js, Bootstrap, and Chakra UI, exploring key concepts like React Hooks, pagination, routing, and API handling with Axios. My projects include a restaurant app and other interactive applications, showcasing my skills in front-end development, UI frameworks, and efficient data fetching. These experiences have strengthened my understanding of building scalable and user-friendly web applications.`,
  }
];
