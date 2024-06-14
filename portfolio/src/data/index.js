import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Adrenaline",
    date: "2023 - Present",
    details: [
      "Architected and engineered user interfaces using <span style='color: white;'>C# .NET, Python, and React</span> for AI model training and state management.",
      "Developed and deployed AI models for data streaming using WebSockets on AWS in a <span style='color: white;'>CI/CD environment</span>.",
      "Led cross-regional teams, managed AWS products, and handled <span style='color: white;'>10,000+ queries daily</span>, enhancing system performance and project delivery.",
    ],
  },
  {
    title: "Computer Science Post Bacculerate",
    company_name: "Tufts Engineering",
    date: "2023 - Present",
    details: [
      "Optimized a recruiter-focused web platform using React, ensuring data security for <span style='color: white;'>1000+ global clients</span>, and modernized legacy systems to <span style='color: white;'>.NET 7</span>",
      "Developed interactive UI components and back-end services with <span style='color: white;'>JavaScript, HTML, CSS</span>, and integrated <span style='color: white;'>C# with Entity Framework</span> for REST API and MySQL database",
      "Automated marketing platforms' user-experience testing process by integrating <span style='color: white;'>Nightwatch Selenium</span>",
    ],
  },
  {
    title: "Full Stack Software Developer",
    company_name: "Foxhire",
    date: "2022 - 2023",
    details: [
      "Optimized a recruiter-focused web platform using React, ensuring data security for <span style='color: white;'>1000+ global clients</span>, and modernized legacy systems to <span style='color: white;'>.NET 7</span>",
      "Developed interactive UI components and back-end services with <span style='color: white;'>JavaScript, HTML, CSS</span>, and integrated <span style='color: white;'>C# with Entity Framework</span> for REST API and MySQL database",
      "Automated marketing platforms' user-experience testing process by integrating <span style='color: white;'>Nightwatch Selenium</span>",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Credit Union Student Choice",
    date: "2021 - 2022",
    details: [
      "Designed database schema with <span style='color: white;'>C# .NET</span> and established <span style='color: white;'>Azure DevOps pipeline</span>",
      "Developed dynamic UI elements with front-to-back integration in <span style='color: white;'>Vue</span>",
      "Managed <span style='color: white;'>SQL</span> database operations, built APIs, integrated 100 third-party systems, and increased Q1 revenue by 23%",             
    ],
  },

];

const portfolio = [
  {
    name: "Machine Learning & Big Tech Clones",
    description:
      "A GitHub repository showcasing projects in machine learning and Big Tech replicas.",
    image: oscs,
  },
  {
    name: "Disney Plus Clone",
    description:
      "A clone of Disney’s streaming platform using React, Redux, Styled Components and Firebase.",
    image: devnotes,
  },
  {
    name: "Logistic Regression for Image Classification",
    description:
    "Coefficients determine the most likely class for an image, with classes representing categories the model distinguishes, such as digits 8 vs. 9 or trousers vs. dresses.",
    image: algorithms,
  },
];

export { experiences, portfolio };

