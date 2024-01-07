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

import {
  filearchiver,
  mail,
  pong,
  snake,
  todolist,
  personalweb,
} from "../assets/projects";

import {
  emaildemo,
  archiverdemo,
  personalwebdemo,
  pongdemo,
  snakedemo,
  tododemo,
} from "../assets/demo";

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
  {
    id: "projects",
    title: "Projects",
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

const testimonials = [];

const projects = [
  {
    name: "Snake Game",
    description:
      "Snake Game in Java is a classic game where the player controls a snake, attempting to collect as many apples as possible while avoiding collisions with its own body and the boundaries of the board.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
    ],
    image: snake,
    source_code_link: "https://github.com/kwGh0st/java-snake-game",
    demo_video: snakedemo,
  },
  {
    name: "File Archiver",
    description: "A program that performs operations on .zip files.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javafx",
        color: "green-text-gradient",
      },
      {
        name: "gradle",
        color: "pink-text-gradient",
      },
    ],

    image: filearchiver,
    source_code_link: "https://github.com/kwGh0st/java-email-client",
    demo_video: archiverdemo,
  },
  {
    name: "Pong Game",
    description:
      "In this two-player game, each player controls a paddle to bounce a ball back and forth. The game supports two players, allowing them to compete head-to-head on a single screen.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
    ],
    image: pong,
    source_code_link: "https://github.com/kwGh0st/java-pong-game",
    demo_video: pongdemo,
  },
  {
    name: "Email Client",
    description:
      "Email Client - an email application that features a complete user interface developed using the JavaFX library and the SceneBuilder application. ",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javafx",
        color: "green-text-gradient",
      },
      {
        name: "gradle",
        color: "pink-text-gradient",
      },
    ],
    image: mail,
    source_code_link: "https://github.com/kwGh0st/java-email-client",
    demo_video: emaildemo,
  },
  {
    name: "Todo App",
    description:
      "A web application built using the Spring framework. After logging in, users can browse, create, edit, and delete tasks.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "hibernate",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "",
      },
    ],
    image: todolist,
    source_code_link:
      "https://github.com/kwGh0st/springframework/tree/master/TodoApp",
    demo_video: tododemo,
  },
  {
    name: "This Website",
    description: "My personal website.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: personalweb,
    source_code_link: "https://github.com/kwGh0st/wojtachakarol/tree/master",
    demo_video: personalwebdemo,
  },
];

export { services, technologies, experiences, testimonials, projects };
