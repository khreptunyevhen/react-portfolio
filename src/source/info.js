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
      id: 5,
      idLink: "loopstudio-landing",
      title: "Loopstudio landing",
      type: "Static landing",
      description: [
        "Experience the future of web design with LoopStudio's responsive landing page.",
        "Responsive Design: Whether you're browsing on a desktop, tablet, or smartphone, the WeekAway page adapts seamlessly, ensuring you can access it from anywhere.",
        "Mobile Menu: With our intuitive mobile menu, navigating the site on smaller screens is a breeze. Finding your dream destination is just a tap away..",
      ],
      shortDescription:
        "Unleash your musical genius with LoopStudio! Our responsive landing page ensures a seamless experience on any device, featuring an intuitive burger menu for effortless navigation. Dive into a world of creativity, powerful tools, and a global community of artists. Join LoopStudio today and turn your beats into masterpieces.",
      technology: {
        title: "Technology",
        skills: [
          "HTML",
          "TailwindCSS",
          "JavaScript",
          "Responsive Design",
          "Cross browser compatibility",
        ],
      },
      img: {
        dark: [
          "./images/projects/loopstudio/loopstudio-1.png",
          "./images/projects/loopstudio/loopstudio-2.png",
        ],
        light: [
          "./images/projects/loopstudio/loopstudio-1.png",
          "./images/projects/loopstudio/loopstudio-2.png",
        ],
      },
      code: "https://github.com/khreptunyevhen/tailwindCSS-projects/tree/main/loopstudio",
      preview:
        "https://khreptunyevhen.github.io/tailwindCSS-projects/loopstudio/",
      time: "2023-07-25",
    },
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
    {
      id: 4,
      idLink: "weekaway-landing",
      title: "Weekaway landing",
      type: "Static landing",
      description: [
        "Welcome to the WeekAway landing page, where your next unforgettable travel experience begins. Created using the powerful combination of Tailwind CSS and React, this static webpage offers a sneak peek into the world of hassle-free trip booking.",
        "Responsive Design: Whether you're browsing on a desktop, tablet, or smartphone, the WeekAway page adapts seamlessly, ensuring you can access it from anywhere.",
        "Mobile Menu: With our intuitive mobile menu, navigating the site on smaller screens is a breeze. Finding your dream destination is just a tap away..",
      ],
      shortDescription:
        "Discover WeekAway - Your Go-To for Easy Trip Booking! 🌍✈️. Experience responsive design and a user-friendly mobile menu. Your journey to unforgettable adventures starts here!",
      technology: {
        title: "Technology",
        skills: [
          "HTML",
          "TailwindCSS",
          "JavaScript",
          "React",
          "Responsive Design",
          "Cross browser compatibility",
        ],
      },
      img: {
        dark: [
          "./images/projects/weekaway/weekaway-1.png",
          "./images/projects/weekaway/weekaway-2.png",
          "./images/projects/weekaway/weekaway-3.png",
          "./images/projects/weekaway/weekaway-4.png",
        ],
        light: [
          "./images/projects/weekaway/weekaway-1.png",
          "./images/projects/weekaway/weekaway-2.png",
          "./images/projects/weekaway/weekaway-3.png",
          "./images/projects/weekaway/weekaway-4.png",
        ],
      },
      code: "https://github.com/khreptunyevhen/weekaway-react",
      preview: "https://khreptunyevhen.github.io/weekaway-react/",
      time: "2023-06-22",
    },
    {
      id: 3,
      idLink: "miralou-simple-e-commerce",
      title: "Miralou e-commerce store",
      type: "SPA",
      description: [
        "In today's online shopping world, I've created a user-friendly e-commerce store. While it's not as complicated as big online retailers, it has a lot to offer.",
        "I used a special kind of data called JSON to make the products look real. You can add and remove items from your wishlist and cart. When you do, the cart will show you how much everything costs, just like a real store. It's a simple way to shop.",
        "The store works on all sorts of devices, from big computers to small phones. I added fun things like sliders to show products better. You can slide through the products and see more pictures and information. If you want to look at different pages of products, there's something called 'pagination' to help you do that easily.",
        "Looking for something specific? No problem! I added a search bar to help you find products quickly. Just type in what you're looking for, and the store will find it for you. It's all about making your shopping experience smoother and more convenient.",
      ],
      shortDescription:
        "While it doesn't feature authentication or payment systems, it offers a multi-page shopping experience with dynamic product data from a JSON file. You can build wishlists, manage your cart, and see prices update in real-time as you shop. The site is fully responsive, features sliders, pagination, and even has a handy search bar to quickly find the products you're looking for. It's all about making online shopping a breeze!",
      technology: {
        title: "Technology",
        skills: [
          "HTML",
          "SASS",
          "JavaScript",
          "JSON",
          "React",
          "React Hooks",
          "Responsive Design",
          "Cross browser compatibility",
        ],
      },
      img: {
        dark: [
          "./images/projects/miralou/miralou-2.png",
          "./images/projects/miralou/miralou-4.png",
          "./images/projects/miralou/miralou-6.png",
          "./images/projects/miralou/miralou-8.png",
        ],
        light: [
          "./images/projects/miralou/miralou-2.png",
          "./images/projects/miralou/miralou-3.png",
          "./images/projects/miralou/miralou-5.png",
          "./images/projects/miralou/miralou-7.png",
        ],
      },
      code: "https://github.com/khreptunyevhen/simple-e-commerce",
      preview: "https://admirable-quokka-63c35d.netlify.app/",
      time: "2023-07-13",
    },
  ],
  challenges: [
    {
      id: 1,
      title: "Calculator",
      description:
        "This minimalist calculator not only provides essential mathematical operations but also showcases the power of vanilla web technologies. It's perfect for anyone who wants to learn, tinker with, or integrate a basic calculator into their web projects.",
      tasks: {
        id: 1,
        title: "What you have to do",
        taskValues: [
          "Set up your HTML structure.",
          "Style your calculator with CSS.",
          "Implement JavaScript logic.",
          "Implement calculator logic.",
        ],
        extraInfo: "",
      },
      imgs: ["./images/challenges/calculator/calculator.png"],
      techMain: ["HTML", "CSS", "JS"],
      links: [
        {
          tech: "JS",
          link: "https://khreptunyevhen.github.io/js-challenges/calculator/",
          code: "https://github.com/khreptunyevhen/js-challenges/tree/main/calculator",
        },
      ],
    },
    {
      id: 2,
      title: "Hangman game",
      description:
        "A Hangman game is a classic word puzzle game. The game is often represented visually with a 'hangman' figure, which is gradually drawn as incorrect guesses are made. The goal for the player guessing the word is to guess the word correctly before the hangman is fully drawn.",
      tasks: {
        id: 1,
        title: "What you have to do",
        taskValues: [
          "Display hangman pole and figure using SVG or pure HTML/CSS.",
          "Generate a random word and question(hint).",
          "Show notification when select a letter twice.",
          "Show results when the user wins or loses.",
          "Restart the game",
        ],
        extraInfo: "",
      },
      imgs: ["./images/challenges/hangman/hangman.png"],
      techMain: ["HTML", "CSS", "JS"],
      links: [
        {
          tech: "JS",
          link: "https://khreptunyevhen.github.io/js-challenges/hangman-game/",
          code: "https://github.com/khreptunyevhen/js-challenges/tree/main/hangman-game",
        },
      ],
    },
  ],
};
