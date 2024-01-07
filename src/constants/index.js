import {
  backend,
  creator,
  web,
  java,
  html,
  css,
  reactjs,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  spring,
  maven,
  sql,
  hibernate,
  postman,
  linux,
  windows,
  idea,
  javascript,
} from "../assets";

import fire from "../assets/company/fire.png";
import learn from "../assets/company/learn.png";

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
    title: "Web Developer",
    icon: web,
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

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Maven",
    icon: maven,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Hibernate",
    icon: hibernate,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Windows",
    icon: windows,
  },
  {
    name: "GIT",
    icon: git,
  },
  {
    name: "Intelij Idea",
    icon: idea,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Senior Rescuer",
    company_name: "State Fire Service of Poland",
    icon: fire,
    iconBg: "#383E56",
    date: "August 2020 - Present",
    points: [
      "Direct involvement in rescue operations.",
      "Configuration and maintenance of the company's computer network.",
      "Troubleshooting hardware and network issues.",
      "Conducting safety and first aid training sessions for children and youth.",
      "Developing teamwork skills and the ability to work under pressure as a firefighter.",
    ],
  },
  {
    title: "Commencement of learning",
    company_name: "",
    icon: learn,
    iconBg: "#383E56",
    date: "June  2021 - Present",
    points: [
      "Self-study of Java programming fundamentals and more advanced concepts.",
      "Completion of online courses.",
      "Design and implementation of initial applications in Java and JavaScript.",
      "Initiation of self-directed creation of more advanced applications to further develop my technical skills.",
      "Development of problem-solving skills through the creation of real-world projects.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    demo_video: "src\\assets\\demo\\calculator.webm",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    demo_video: "src\\assets\\demo\\email-client.webm",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    demo_video: "src\\assets\\demo\\file-archiver.webm",
  },
];

export { services, technologies, experiences, testimonials, projects };
