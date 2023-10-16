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
    { id: 5, title: "Try it", link: "/try-it" },
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
    {
      id: 2,
      idLink: "grocery-list",
      title: "Grocery list",
      type: "Application",
      description: [
        "In today's fast-paced world, convenience is key, especially when it comes to managing our daily tasks. That's why I embarked on a journey to create a grocery list application that not only streamlines the shopping experience but also adds a touch of personalization and interactivity.",
        "My Grocery List Application is a testament to the power of modern web development technologies. It leverages HTML, SASS (for sleek styling), React, and JavaScript, making it a dynamic and responsive solution.",
        "To enhance the user experience, I implemented custom hooks, optimizing code reusability and making the application more maintainable. Additionally, I integrated an API to fetch images for products, adding visual appeal and making it easier for users to identify items on their lists.",
        "The application doesn't stop at just creating a shopping list; it's designed to cater to your preferences. With a user-friendly settings panel, you can customize the interface to match your style. Choose between dark and light modes, tweak the font, and select your preferred accent color to create a shopping environment that feels just right.",
        "Creating, deleting, or updating a product item is as intuitive as it gets. With a few clicks or taps, you can effortlessly manage your grocery list, ensuring you never forget an essential item again. The application's local storage functionality ensures that your list persists across sessions, making it a reliable companion for your shopping needs.",
      ],
      shortDescription:
        "In conclusion, My Grocery List Application is more than just a digital shopping list. It's a tool that combines technology, design, and user-centric features to make your grocery shopping experience smoother and more enjoyable. As a web developer, I'm committed to creating practical solutions that enhance daily life, and I'm excited to share this project with you.",
      technology: {
        title: "Technology",
        skills: [
          "HTML",
          "SASS",
          "JavaScript",
          "React",
          "React Hooks",
          "Custom Hooks",
          "Responsive Design",
          "Cross browser compatibility",
        ],
      },
      img: {
        dark: [
          "./images/projects/grocery-list/grocery-list-6.png",
          "./images/projects/grocery-list/grocery-list-2.png",
          "./images/projects/grocery-list/grocery-list-4.png",
          "./images/projects/grocery-list/grocery-list-8.png",
        ],
        light: [
          "./images/projects/grocery-list/grocery-list-5.png",
          "./images/projects/grocery-list/grocery-list-1.png",
          "./images/projects/grocery-list/grocery-list-3.png",
          "./images/projects/grocery-list/grocery-list-7.png",
        ],
      },
      code: "https://github.com/khreptunyevhen/grocery-list",
      preview: "https://khreptunyevhen.github.io/grocery-list/",
      time: "2023-09-15",
    },
  ],
  // challenges: [
  //   {
  //     id: 1,
  //     title: "Calculator",
  //     description:
  //       "At its core, my portfolio is built upon a foundation of web technologies. The front-end is constructed using HTML, CSS, and JavaScript, while the power of React provides the dynamic interactivity that sets it apart. React hooks like useState, useEffect, useParams, and useRef were instrumental in creating a smooth and responsive user experience.",
  //     tasks: {
  //       id: 1,
  //       title: "What you have to do",
  //       taskValues: [
  //         "open is built upon a foundation of web technologies. The front-end is constructed using HTML, CSS, and JavaScript, while the power of React provides the dynamic interactivity that sets it apart. Re",
  //         "close  foundation of web technologies. The front-end is c",
  //         "watch f web technologies. The front-end is constructed using HTML,",
  //       ],
  //       extraInfo: "",
  //     },
  //     imgs: [
  //       "./images/projects/portfolio/portfolio-2.png",
  //       "./images/projects/portfolio/portfolio-2.png",
  //     ],
  //     techMain: ["html", "css", "js", "react"],
  //     links: [
  //       { tech: "js", link: "", code: "" },
  //       { tech: "react", link: "", code: "" },
  //     ],
  //   },
  // ],
};
