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
      title: "Personal portfolio",
      type: "Landing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit, labore cum, magni est reiciendis esse nihil id sunt saepe ullam velit molestias beatae voluptas tenetur nemo quisquam iure possimus. Aliquid culpa alias, cum, ducimus cupiditate nihil quaerat delectus facilis molestias eaque architecto odio saepe obcaecati ex ipsa provident debitis harum esse tempore itaque ea a nesciunt numquam similique. Nisi!",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technology: {
        title: "Technology",
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
      img: "./images/projects/gallery-1.jpg",
      code: "",
      preview: "",
    },
    {
      id: 2,
      title: "Polls Planet",
      type: "App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit, labore cum, magni est reiciendis esse nihil id sunt saepe ullam velit molestias beatae voluptas tenetur nemo quisquam iure possimus. Aliquid culpa alias, cum, ducimus cupiditate nihil quaerat delectus facilis molestias eaque architecto odio saepe obcaecati ex ipsa provident debitis harum esse tempore itaque ea a nesciunt numquam similique. Nisi!",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technology: {
        title: "Technology",
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
      img: "./images/projects/gallery-1.jpg",
      code: "",
      preview: "",
    },
    // {
    //   id: 3,
    //   title: "Shoes store",
    //   type: "e-commerce",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit, labore cum, magni est reiciendis esse nihil id sunt saepe ullam velit molestias beatae voluptas tenetur nemo quisquam iure possimus. Aliquid culpa alias, cum, ducimus cupiditate nihil quaerat delectus facilis molestias eaque architecto odio saepe obcaecati ex ipsa provident debitis harum esse tempore itaque ea a nesciunt numquam similique. Nisi!",
    //   shortDescription:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //   technology: {
    //     title: "Technology",
    //     skills: [
    //       "HTML",
    //       "CSS/SCSS",
    //       "TailwindCSS",
    //       "JavaScript",
    //       "React",
    //       "Debug",
    //       "Responsive Design",
    //       "BEM methodology",
    //     ],
    //   },
    //   img: "./images/projects/gallery-1.jpg",
    //   code: "",
    //   preview: "",
    // },
  ],
};
