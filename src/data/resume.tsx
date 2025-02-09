import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nafis Reza",
  initials: "NR",
  url: "https://github.com/nafisreza",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka",
  description:
    "I architect softwares that drive business forward.",
  summary:
    "I taught myself to code when I was a high school freshman (while most were trying to survive algebra). Since then, it's been a nonstop journey of leveling up and expanding my skill set. Recently, I've been diving into open source because, hey, it's time to give back. I've even contributed to some big names like Apache, Web-PHP, and TypeHero. On the side, I freelance on Fiverr, where I’ve teamed up with over 60 clients from 17 countries, turning their ideas into web realities. As for the startup world, I was a founding engineer at Guideasy — a remote travel startup, building the MVP from scratch. Now, Guideasy operates across 3 countries and serves 50K+ users monthly.",
  avatarUrl: "/nafisreza.jpg",
  skills: [
    "React",
    "Next.js",
    "Redux",
    "Javascript",
    "Typescript",
    "Node.js",
    "Express",
    "TailwindCSS",
    "Shadcn",
    "Cypress/Jest",
    "Git",
    "MongoDB",
    "PostgreSQL",
    "Linux",
    "Prisma",
    "Drizzle",
    "WebSocket",
    "REST API",
    "GraphQL",
    "Docker",
    "Nginx",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "nafisrezabd@gmail.com",
    tel: "+8801730831515",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nafisreza",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nafisreza",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nafisreza_",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:nafisrezabd@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Liten Media",
      href: "https://www.liten.media/",
      badges: [],
      title: "Founder",
      logoUrl: "/liten_media.jpg",
      start: "2024",
      end: "Present",
      location: "London, UK - Hybrid",
      description: [
        "We are a digital agency specializing in Software Development based in London, United Kingdom.",
        "Spearheaded the development of innovative digital solutions for businesses, focusing on software development.",
        "Implemented cutting-edge technologies to create accessible and impactful digital solutions for clients.",
        "Collaborated with a talented team to deliver high-quality software products that met client needs and exceeded expectations.",
      ],
    },
    {
      company: "Guideasy",
      href: "https://www.guideasy.com/",
      badges: [],
      title: "Software Engineer",
      logoUrl: "/guideasy.png",
      start: "2023",
      end: "2024",
      location: "Istanbul, Turkey - Remote",
      description: [
        "Built the front end of Guideasy's user app using React.js and Next.js, achieving a 40% increase in page load speed, which now averages just 1.5 seconds",
        "Managed global state effectively with Redux.js and Context API, reducing data-fetching times.",
        "Integrated RESTful APIs for Visa, Holiday, & Flight, enhancing backend connectivity and enabling seamless data handling across 50K+ monthly users",
        "Implemented secure user authentication with NextAuth using HTTP POST and JWT token validation.",
        "Integrated secure payment processing with Stripe and bKash.",
        "Developed multi-language support using Next-Intl, dynamically adapting language based on users’ geolocation.",
        "OForm validation with React-Hook-Form and Yup/Zod, decreasing form errors.",
        "Brought Figma designs to life with responsive, high-performance interfaces using TailwindCSS, MaterialUI, and ShadCn etc.",
      ],
    },
    {
      company: "Fiverr",
      href: "https://www.fiverr.com/",
      badges: [],
      location: "New York, USA - Remote",
      title: "Freelance Software Engineer",
      logoUrl: "/fiverr.webp",
      start: "2020",
      end: "Present",
      description: [
        "Partnered with 60+ clients from 17 countries, delivering web solutions that align with diverse business goals and user needs.",
        "Developed a wide range of applications using React, Next.js, Python, and WordPress, improving clients' digital presence and user engagement.",
        "Provided consulting services to new businesses, offering insights on building scalable and maintainable web systems.",
        "Managed projects from inception to deployment, ensuring timely delivery and client satisfaction.",
        "Tutored beginners in web development, guiding them on how to be a successful freelancer.",
        "5 star rating from every client I worked with."
      ],
    },
  ],
  education: [
    {
      school: "Islamic University of Technology",
      href: "https://www.iutoic-dhaka.edu/",
      degree: "BSc. in Software Engineering",
      logoUrl: "/iut.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Guideasy Travel Platform",
      href: "https://guideasy.com",
      dates: "November 2023",
      active: true,
      description:
       [
         "Comprehensive travel management platform with user-friendly features for booking visas, holidays, flights, and tour guides.",
         "Users can log in, sign up, and manage multiple travelers via a dedicated dashboard.",
         "Designed holiday package system with advanced filters and customizable itineraries, enabling dynamic pricing.",
         "Flight booking system with support for one-way, round-trip, and multi-stop options, including filters for fastest and cheapest flights."

       ],
      technologies: [
        "Next.js",
        "React.jS",
        "Redux",
        "Typescript",
        "NextAuth",
        "Next-Intl",
        "Mapbox",
        "React-Hook-Form",
        "Zod",
        "TailwindCSS",
        "Shadcn",
        "MUI",
      ],
      links: [
        {
          type: "Live",
          href: "https://guideasy.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nafisreza/guide-guideasy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/guideasy_home.png",
      video: "",
    },
    {
      title: "Liten Media",
      href: "https://liten.media",
      dates: "January 2025",
      active: true,
      description:
       [
         "Comprehensive travel management platform with user-friendly features for booking visas, holidays, flights, and tour guides.",
         "Users can log in, sign up, and manage multiple travelers via a dedicated dashboard.",
         "Designed holiday package system with advanced filters and customizable itineraries, enabling dynamic pricing.",
         "Flight booking system with support for one-way, round-trip, and multi-stop options, including filters for fastest and cheapest flights."

       ],
      technologies: [
        "Next.js",
        "React.jS",
        "Typescript",
        "TailwindCSS",
        "GSAP",
        "Framer Motion",
        "Anime.js",
        "Swiper.js",
        "Styled Components",
      ],
      links: [
        {
          type: "Live",
          href: "https://liten.media",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Liten-Media/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/liten_home.png",
      video: "",
    },
    {
      title: "Film Buzz",
      href: "https://film-buzz-3729799f06ec.herokuapp.com/",
      dates: "October 2024",
      active: true,
      description:
       [
         "Fullstack blog platform for movie lovers to create watchlist, share reviews and recommendations.",
         "Users can log in, sign up, manage their profile and create reviews.",
         "Implemented secure user authentication with Django.",
         "TMDB API integration for fetching movie data and images.",
         "Integrated with Cloudinary for image and video upload, and Summernote for rich text editing.",
         "PostgreSQL (NeonDB) for database management and Heroku for deployment."
       ],
      technologies: [
        "Django",
        "Python",
        "PostgreSQL",
        "Summernote",
        "CKEditor",
        "Pillow",
        "Cloudinary",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Live",
          href: "https://film-buzz-3729799f06ec.herokuapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nafisreza/film-buzz/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/filmbuzz.png",
      video: "",
    },
    {
      title: "Cevisezi",
      href: "https://cevisezi.ro/",
      dates: "August 2024",
      active: true,
      description:
       [
         "Dream exploration platform for users to share and analyze their dreams.",
         "Appwrite backend for user authentication, data storage, and image upload.",
         "Users can find dream interpretations and share dreams with the community.",
         "Redux for auth state management and TinyMCE for rich text editing.",
         "TailwindCSS for responsive design and Framer Motion for animations.",
       ],
      technologies: [
        "Next.js",
        "React.jS",
        "Redux",
        "Appwrite",
        "React-Hook-Form",
        "Zod",
        "TinyMCE",
        "TailwindCSS",
        "Framer Motion",
        "Lucide",
      ],
      links: [
        {
          type: "Live",
          href: "https://cevisezi.ro/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nafisreza/cevisezi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cevisezi.png",
      video: "",
    },
  ],
  openSource: [
    {
      name: "Web-PHP",
      stars: 894,
      details: "The Official Website for PHP Language. www.php.net",
      repo: "https://github.com/php/web-php",
      fork: 554,
    },
    {
      name: "TypeHero",
      stars: "6.2k",
      details: "Connect, collaborate, and grow with a community of TypeScript developers",
      repo: "https://github.com/typehero/typehero",
      fork: 446,
    },
    {
      name: "Apache",
      stars: 912,
      details: "Lake-native data warehouse and architecture for users and platforms.",
      repo: "https://github.com/apache/amoro",
      fork: 308,
    },
  ]
} as const;
