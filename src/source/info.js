import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const info = {
  navigation: [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About me", link: "/about-me" },
    { id: 3, title: "Portfolio", link: "/portfolio" },
    { id: 4, title: "Contact", link: "/contacts" },
  ],
  socialLinks: [
    { id: 1, url: "https://github.com/khreptunyevhen", icon: faGithub },
    {
      id: 2,
      url: "https://www.linkedin.com/in/yevhen-khreptun/",
      icon: faLinkedin,
    },
    {
      id: 3,
      url: "https://www.facebook.com/profile.php?id=100009189044722",
      icon: faFacebook,
    },
    { id: 4, url: "https://www.instagram.com/khreptun.e/", icon: faInstagram },
  ],
  skillBoxes: [
    {
      id: 1,
      title: "Front End 💻",
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "TailwindCSS",
        "JavaScript",
        "React",
        "React Router",
        "Debug",
        "Responsive Design",
        "BEM methodology",
        "Cross browser compatibility",
      ],
    },
    {
      id: 2,
      title: "Back End 🌐",
      skills: ["Node.js", "REST API", "Express.js", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Tools 🔧",
      skills: [
        "VSCode",
        "Git",
        "GitHub",
        "NPM",
        "Figma",
        "Adobe photoshop",
        "Insomnia",
        "Postman",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      idLink: "personal-website",
      title: "Personal portfolio",
      type: "SPA",
      description: [
        "At its core, my portfolio is built upon a foundation of web technologies. The front-end is constructed using HTML, CSS, and JavaScript, while the power of React provides the dynamic interactivity that sets it apart. React hooks like useState, useEffect, useParams, and useRef were instrumental in creating a smooth and responsive user experience.",
        "One of the foremost considerations in this project was ensuring that it could be accessed and enjoyed by users on various devices and browsers. As such, the portfolio boasts a responsive design that adapts flawlessly to different screen sizes. Extensive testing and optimization efforts were put into achieving cross-browser compatibility, guaranteeing a consistent look and feel for everyone.",
        "User preferences matter, which is why I incorporated a dark/light mode toggle. This feature not only adds a touch of personalization but also enhances readability and user comfort. Leveraging local storage, the portfolio remembers the user's theme choice, providing continuity across visits.",
        "Navigating through my portfolio is a breeze, especially on smaller screens, thanks to a well-designed burger menu. This clean and intuitive menu ensures that users can effortlessly explore my projects and learn more about me.",
        "To captivate visitors, I added captivating hover effects and animations throughout the portfolio. These subtle yet visually pleasing interactions not only make the content more engaging but also convey my attention to detail and design sensibility.",
      ],
      shortDescription:
        "My personal portfolio is a carefully crafted collection of my creative and professional work, showcasing my skills, experiences, and passion. It serves as a digital window into my world, providing a glimpse into my journey, achievements, and projects. Whether you're a potential employer, collaborator, or simply curious about my work, my portfolio offers a comprehensive overview of who I am and what I bring to the table.",
      technology: {
        title: "Technology",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "React Hooks",
          "React Router",
          "Responsive Design",
          "Cross browser compatibility",
          "BEM methodology",
        ],
      },
      img: {
        dark: [
          "./images/projects/portfolio/portfolio-2.png",
          "./images/projects/portfolio/portfolio-4.png",
          "./images/projects/portfolio/portfolio-6.png",
        ],
        light: [
          "./images/projects/portfolio/portfolio-1.png",
          "./images/projects/portfolio/portfolio-3.png",
          "./images/projects/portfolio/portfolio-5.png",
        ],
      },
      code: "https://github.com/khreptunyevhen/react-portfolio",
      preview: "https://ykwebdev.com/",
      time: "2023-09-05",
    },
  ],
};
