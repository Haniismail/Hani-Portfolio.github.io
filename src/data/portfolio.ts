export type Language = "en" | "fr";

const en = {
  name: "Hani Ismail",
  title: "Tech Lead · Full-Stack Developer · AWS Solutions Architect",
  shortTitle: "Full-Stack Developer & Tech Lead",
  email: "emailofhaniismail@gmail.com",
  location: "Tunisia → Montreal",
  bio: "I architect and build scalable web applications from frontend to cloud infrastructure. With 4+ years of hands-on experience leading teams and shipping products, I help startups and businesses turn ideas into performant, production-ready software.",
  links: {
    linkedin: "https://linkedin.com/in/hanismail",
    github: "https://github.com/Haniismail",
    medium: "https://medium.com/@haniismail",
    resume: "/resume.pdf",
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    career: "Career",
    contact: "Contact",
  },
  sections: {
    heroGreeting: "Hello, I'm",
    viewWork: "View My Work",
    resume: "Resume",
    aboutTitle: "About",
    skillsTitle: "Skills",
    skillsSubtitle: "Technical Expertise",
    projectsTitle: "Projects",
    projectsSubtitle: "Selected Work",
    careerTitle: "Career",
    careerSubtitle: "Experience",
    testimonialsTitle: "Testimonials",
    testimonialsSubtitle: "What People Say",
    educationTitle: "Education",
    educationSubtitle: "Background & Certifications",
    educationLabel: "Education",
    certificationsLabel: "Certifications",
    contactTitle: "Contact",
    contactSubtitle: "Let's Work Together",
    contactDescription:
      "I'm currently available for freelance projects and consulting. Feel free to reach out if you have a project in mind.",
    contactCta: "Get in Touch",
    footerBuilt: "Built with vibes and caffeine ☕",
    chatGreeting: "Ask me anything about Hani.",
    chatTitle: "Jarvis",
    chatPowered: "Text or voice chat with me !",
    chatPlaceholder: "Ask me anything…",
    chatThinking: "Thinking…",
    chatListening: "Listening…",
    chatSpeechError: "Voice not supported in this browser.",
    chatError: "Something went wrong. Please try again later.",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "Socket.IO"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "Redis", "Sequelize", "Mongoose"],
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    },
  ],
  projects: [
    {
      name: "MyGreenWork",
      description:
        "A green workspace management platform connecting eco-conscious professionals with sustainable office spaces.",
      tags: ["React", "Node.js", "MongoDB", "AWS", "Supabase", "deepseekAPI"],
      image: "/images/section/mygreenwork.png",
    },
    {
      name: "Linkefoot",
      description:
        "Social networking platform for football enthusiasts to connect, share, and organize matches.",
      tags: ["React", "NestJS", "AWS", "Node.js", "Socket.IO"],
      image: "/images/section/linkefoot.jpeg",
    },
    {
      name: "Proximabel",
      description:
        "Proximity-based service marketplace connecting local service providers with nearby customers.",
      tags: ["Next.js", "Node.js", "MySQL"],
      image: "/images/section/proximabel.png",
    },
    {
      name: "Taki Kids",
      description:
        "Educational platform designed to make learning fun and interactive for children.",
      tags: ["React", "Express", "MongoDB"],
      image: "/images/section/takikids.jpeg",
    },
    {
      name: "Viral Ventures Media",
      description:
        "Digital marketing and media management platform for content creators and brands.",
      tags: ["React", "AWS", "Node.js"],
      image: "/images/section/vvm.jpeg",
    },
    {
      name: "Student Help",
      description:
        "Academic assistance platform helping students access tutoring and study resources.",
      tags: ["React", "Express", "MongoDB"],
      image: "/images/section/studenthelp.jpg",
    },
  ],
  career: [
    {
      role: "Freelance Full-Stack Consultant",
      company: "Self-employed",
      period: "2025 – Present",
      description:
        "Consulting for Montreal-based startups, architecting full-stack solutions and leading technical implementations.",
    },
    {
      role: "Full Stack Developer",
      company: "Softylines",
      period: "2025",
      description:
        "End-to-end development of web applications using React, Node.js, and cloud services.",
    },
    {
      role: "Backend Tech Lead",
      company: "Softylines",
      period: "2023 – 2024",
      description:
        "Led a team of developers, designed system architecture, and established coding standards and CI/CD pipelines.",
    },
    {
      role: "Backend Developer",
      company: "Softylines",
      period: "2021 – 2022",
      description:
        "Built RESTful APIs, implemented database schemas, and integrated third-party services.",
    },
  ],
  testimonials: [
    {
      name: "Reda",
      text: "Hani is an exceptional developer who consistently delivers high-quality work. His technical expertise and problem-solving abilities make him an invaluable team member.",
      image: "/images/testimonials/reda.jpeg",
    },
    {
      name: "Raed",
      text: "Working with Hani was a great experience. He understood our requirements perfectly and delivered a robust, scalable solution ahead of schedule.",
      image: "/images/testimonials/raed-pic.png",
    },
    {
      name: "Ahmed",
      text: "Hani's full-stack expertise and AWS knowledge helped us scale our platform significantly. Highly recommended for any complex project.",
      image: "/images/testimonials/ahmed.jpeg",
    },
  ],
  education: [
    {
      degree: "Software Engineering Degree",
      school: "University",
      period: "2021 – 2024",
    },
    {
      degree: "Bachelor in Computer Science & Networks",
      school: "University",
      period: "2018 – 2021",
    },
  ],
  certifications: [
    "AWS Solutions Architect",
    "TEF C1 – French Proficiency",
    "IELTS C1 – English Proficiency",
  ],
};

const fr: typeof en = {
  name: "Hani Ismail",
  title: "Tech Lead · Développeur Full-Stack · Architecte AWS",
  shortTitle: "Développeur Full-Stack & Tech Lead",
  email: "emailofhaniismail@gmail.com",
  location: "Tunisie → Montréal",
  bio: "Je conçois et développe des applications web évolutives, du frontend à l'infrastructure cloud. Avec plus de 4 ans d'expérience en gestion d'équipes et en livraison de produits, j'aide les startups et entreprises à transformer leurs idées en logiciels performants et prêts pour la production.",
  links: {
    linkedin: "https://linkedin.com/in/hanismail",
    github: "https://github.com/Haniismail",
    medium: "https://medium.com/@haniismail",
    resume: "/resume.pdf",
  },
  nav: {
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    career: "Carrière",
    contact: "Contact",
  },
  sections: {
    heroGreeting: "Bonjour, je suis",
    viewWork: "Voir mes projets",
    resume: "CV",
    aboutTitle: "À propos",
    skillsTitle: "Compétences",
    skillsSubtitle: "Expertise technique",
    projectsTitle: "Projets",
    projectsSubtitle: "Travaux sélectionnés",
    careerTitle: "Carrière",
    careerSubtitle: "Expérience",
    testimonialsTitle: "Témoignages",
    testimonialsSubtitle: "Ce qu'on dit de moi",
    educationTitle: "Formation",
    educationSubtitle: "Parcours & Certifications",
    educationLabel: "Formation",
    certificationsLabel: "Certifications",
    contactTitle: "Contact",
    contactSubtitle: "Travaillons ensemble",
    contactDescription:
      "Je suis actuellement disponible pour des projets en freelance et du consulting. N'hésitez pas à me contacter si vous avez un projet en tête.",
    contactCta: "Me contacter",
    footerBuilt: "Réalisé avec React & Tailwind CSS",
    chatGreeting: "Bon Matin ! Posez-moi vos questions sur Hani.",
    chatTitle: "Ask Hani",
    chatPowered: "Propulsé par la caféine ☕",
    chatPlaceholder: "Posez-moi une question…",
    chatThinking: "Réflexion…",
    chatListening: "Écoute…",
    chatSpeechError: "Voix non supportée dans ce navigateur.",
    chatError: "Une erreur est survenue. Veuillez réessayer plus tard.",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "GraphQL", "Socket.IO"],
    },
    {
      category: "Bases de données",
      items: ["MongoDB", "MySQL", "Redis", "Sequelize", "Mongoose"],
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    },
  ],
  projects: [
    {
      name: "MyGreenWork",
      description:
        "Plateforme de gestion d'espaces de travail écologiques connectant les professionnels éco-responsables avec des bureaux durables.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/images/section/mygreenwork.png",
    },
    {
      name: "Linkefoot",
      description:
        "Réseau social pour les passionnés de football permettant de se connecter, partager et organiser des matchs.",
      tags: ["React", "NestJS", "GraphQL"],
      image: "/images/section/linkefoot.jpeg",
    },
    {
      name: "Proximabel",
      description:
        "Place de marché de services de proximité connectant les prestataires locaux avec les clients à proximité.",
      tags: ["Next.js", "Node.js", "MySQL"],
      image: "/images/section/proximabel.png",
    },
    {
      name: "Taki Kids",
      description:
        "Plateforme pédagogique conçue pour rendre l'apprentissage ludique et interactif pour les enfants.",
      tags: ["React", "Express", "MongoDB"],
      image: "/images/section/takikids.jpeg",
    },
    {
      name: "Viral Ventures Media",
      description:
        "Plateforme de marketing digital et de gestion média pour les créateurs de contenu et les marques.",
      tags: ["React", "AWS", "Node.js"],
      image: "/images/section/vvm.jpeg",
    },
    {
      name: "Student Help",
      description:
        "Plateforme d'assistance académique aidant les étudiants à accéder au tutorat et aux ressources d'étude.",
      tags: ["React", "Express", "MongoDB"],
      image: "/images/section/studenthelp.jpg",
    },
  ],
  career: [
    {
      role: "Consultant Full-Stack Freelance",
      company: "Indépendant",
      period: "2025 – Présent",
      description:
        "Consulting pour des startups montréalaises, conception d'architectures full-stack et direction d'implémentations techniques.",
    },
    {
      role: "Développeur Full Stack",
      company: "Softylines",
      period: "2025",
      description:
        "Développement de bout en bout d'applications web utilisant React, Node.js et les services cloud.",
    },
    {
      role: "Tech Lead Backend",
      company: "Softylines",
      period: "2023 – 2024",
      description:
        "Direction d'une équipe de développeurs, conception d'architectures système et mise en place de standards de code et pipelines CI/CD.",
    },
    {
      role: "Développeur Backend",
      company: "Softylines",
      period: "2021 – 2022",
      description:
        "Conception d'APIs RESTful, implémentation de schémas de bases de données et intégration de services tiers.",
    },
  ],
  testimonials: [
    {
      name: "Reda",
      text: "Hani est un développeur exceptionnel qui livre constamment un travail de haute qualité. Son expertise technique et ses capacités de résolution de problèmes en font un membre d'équipe inestimable.",
      image: "/images/testimonials/reda.jpeg",
    },
    {
      name: "Raed",
      text: "Travailler avec Hani a été une excellente expérience. Il a parfaitement compris nos besoins et a livré une solution robuste et évolutive en avance sur le calendrier.",
      image: "/images/testimonials/raed-pic.png",
    },
    {
      name: "Ahmed",
      text: "L'expertise full-stack de Hani et ses connaissances AWS nous ont aidés à faire évoluer notre plateforme de manière significative. Fortement recommandé pour tout projet complexe.",
      image: "/images/testimonials/ahmed.jpeg",
    },
  ],
  education: [
    {
      degree: "Diplôme d'Ingénieur en Génie Logiciel",
      school: "Université",
      period: "2021 – 2024",
    },
    {
      degree: "Licence en Informatique & Réseaux",
      school: "Université",
      period: "2018 – 2021",
    },
  ],
  certifications: [
    "AWS Solutions Architect",
    "TEF C1 – Compétence en français",
    "IELTS C1 – Compétence en anglais",
  ],
};

const translations = { en, fr } as const;

export const getPortfolio = (lang: Language) => translations[lang];

// Keep backward compat — default English export
export const portfolio = en;
