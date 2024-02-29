import {
  backend,
  creator,
  web,
  java,
  html,
  css,
  reactjs,
  git,
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

import { todolist } from "../assets/projects";
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
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
    name: "GIT",
    icon: git,
  },
  {
    name: "Intelij Idea",
    icon: idea,
  },
  {
    name: "Maven",
    icon: maven,
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

const testimonials = [];

const projects = [
  {
    name: "Users/Tasks Mangement",
    description:
      "A full-stack web application. The platform features secure user authentication with JWT, role-based access control, and email verification to ensure a seamless and secure experience. Built with Spring Boot for the backend and React for the frontend.",
    tags: [
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/kwGh0st/task-app-client",
    web_link: "https://usersandtodos.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
