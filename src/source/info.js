import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const info = {
  navigation: ["Home", "About me", "Portfolio", "Contact"],
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
        "CSS/SCSS",
        "TailwindCSS",
        "JavaScript",
        "React",
        "Debug",
        "Responsive Design",
        "BEM methodology",
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
      skills: ["VSCode", "Git/GitHub", "Figma", "Adobe photoshop", "Insomnia"],
    },
  ],
};
