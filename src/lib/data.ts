export const personalInfo = {
  name: "Alazar Tilahun",
  title: "Senior Full Stack Engineer",
  taglines: [
    "Senior Software Engineer",
    "Technical Lead",
    "Fintech Developer",
    "Senior CMS Developer",
    "Frontend & Backend Engineer",
    "Freelance Engineer",
  ],
  email: "alazartilahun13@gmail.com",
  phone: "+251-947360468",
  location: "Addis Ababa, Ethiopia",
  availability: "Available for freelance",
  bio: `Senior Full Stack Engineer with 4+ years of experience building scalable fintech 
  systems, enterprise web applications, and CMS platforms. Specialized in Java/Spring Boot 
  backends, Next.js/React frontends, and payment integrations (M-PESA, Telebirr, PayPal, 
  Eco Bank). Experienced in Joomla, WordPress, and Laravel-based CMS development with 
  proven SEO and performance results. Led teams at Arifpay (processing 50,000+ transactions/month), 
  served as Technical Lead at MPI, and worked as a Senior Software Engineer at BGWG Monster & 
  BGWG Media. Top-rated freelancer on Upwork specializing in Joomla and CMS solutions.`,
  resumeUrl: "/cv/Alazar TIlahun Professional Resume.pdf",
  profileImage: "/hero/6046238351683160933_121.jpg",
  speakingImage: "/hero/5850639360565382018_121.jpg",
  social: {
    github: "https://github.com/Alazar2018",
    linkedin: "https://www.linkedin.com/in/alazar-tilahun",
    telegram: "https://t.me/alazardev",
    upwork: "https://www.upwork.com/freelancers/~01b075e61bda176e8d",
  },
};

export const experiences = [
  {
    company: "Arifpay Financial Technologies",
    role: "Spring Boot Developer → Team Lead → Senior Software Engineer",
    period: "Nov 2024 - Present",
    type: "On-site",
    description:
      "Architected recurring billing and split payment systems integrating PayPal, Telebirr, and M-PESA, processing 50,000+ transactions/month. Refactored legacy code improving throughput by 50% and reducing latency by 30%. Promoted to lead two teams (5 developers each) within 4 months.",
    highlights: [
      "50,000+ transactions/month processed",
      "50% throughput improvement via refactoring",
      "Led 2 teams of 5 developers each",
      "Built USSD banking module for loan management",
      "Built parking management system (Next.js + Spring Boot)",
    ],
    technologies: ["Spring Boot", "Java", "Groovy", "NestJS", "Next.js", "Kafka", "PostgreSQL", "Docker", "Microservices"],
  },
  {
    company: "Mindsight Performance Institute (MPI)",
    role: "Senior Software Engineer, Technical Lead & Frontend Developer",
    period: "Jul 2025 - Present",
    type: "Remote",
    description:
      "Served as Technical Lead and Senior Software Engineer, leading frontend and backend development remotely. Architected scalable UI systems, drove technical strategy, mentored developers, and delivered production-grade features for the performance analytics platform.",
    highlights: [
      "Led frontend & backend architecture decisions remotely",
      "Built scalable UI component systems with React/Next.js",
      "Mentored developers and drove technical strategy",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "NestJS", "Redux"],
  },
  {
    company: "BGWG Monster & BGWG Media",
    role: "Senior Software Engineer & Backend Developer",
    period: "2024 - Present",
    type: "Remote",
    description:
      "Senior Software Engineer at BGWG Monster and BGWG Media, building enterprise-grade solutions across the full stack. Developed fintech features including Eco Bank payment integrations, contributed to architectural decisions, and optimized application performance across both companies.",
    highlights: [
      "Eco Bank payment integration & fintech development",
      "Full-stack enterprise application development",
      "Performance optimization and architectural decisions",
    ],
    technologies: ["PHP", "MySQL", "Docker", "Joomla", "WordPress"],
  },
  {
    company: "Safaricom ET",
    role: "Backend Developer Intern (Cybersecurity Team)",
    period: "Apr 2024 - Jul 2024",
    type: "On-site",
    description:
      "Developed Python scripts automating CIS compliance checks, reducing manual effort by 70%. Built centralized reporting for 10+ third-party apps using Spring Boot APIs and a Next.js dashboard. Implemented OAuth 2.0 and LDAP integration via Keycloak for 500+ internal users.",
    highlights: [
      "70% reduction in manual compliance effort",
      "OAuth 2.0 + LDAP for 500+ users",
      "40% faster incident response with Grafana/Prometheus",
    ],
    technologies: ["Spring Boot", "Python", "Next.js", "Keycloak", "Grafana", "Prometheus"],
  },
  {
    company: "Gebeya Inc.",
    role: "Backend Developer (Training Program)",
    period: "Sep 2023 - Jun 2024",
    type: "On-site",
    description:
      "Developed a USSD banking API handling balance inquiries, transfers, and bill payments. Built a school management system using microservices (Eureka, Spring Cloud Gateway) serving 1,200+ users. Led development of Sebsabi, a survey data collection tool.",
    highlights: [
      "USSD banking API for transactions",
      "School management system for 1,200+ users",
      "Led Sebsabi capstone project",
    ],
    technologies: ["Spring Boot", "MySQL", "Eureka", "Spring Cloud Gateway", "React", "Flutter"],
  },
  {
    company: "Freelance (Upwork & Betolo IT Solutions)",
    role: "Senior CMS Developer (Joomla, WordPress, PHP)",
    period: "Mar 2023 - Present",
    type: "Remote",
    description:
      "Top-rated Upwork freelancer specializing in Joomla, WordPress, and PHP development. Delivered Noah Real Estate's website increasing leads by 25%. Optimized Sinopia Furnitures' SEO boosting organic traffic by 60%. Remote work for Bosst Performances (USA), reducing page load time by 35%.",
    highlights: [
      "Top-rated Upwork freelancer for CMS development",
      "25% increase in client leads (Noah Real Estate)",
      "60% organic traffic boost via SEO optimization",
      "35% faster page loads for US client",
    ],
    technologies: ["PHP", "Joomla", "WordPress", "Laravel", "JavaScript", "MySQL", "SEO"],
  },
  {
    company: "Betolo IT Solution PLC",
    role: "Frontend Developer → Team Lead",
    period: "Jun 2022 - Feb 2023",
    type: "On-site",
    description:
      "Built ezmtrade.com (e-commerce) and redbricktravel.com (tourism) handling 10K+ monthly visitors. Promoted to lead after 4 months; trained 2 junior developers in Joomla and client communication.",
    highlights: [
      "10K+ monthly visitors across platforms",
      "Promoted to Team Lead in 4 months",
      "Mentored 2 junior developers",
    ],
    technologies: ["PHP", "Joomla", "JavaScript", "HTML/CSS", "MySQL"],
  },
  {
    company: "Adika Internship",
    role: "Junior Laravel Developer",
    period: "Dec 2021 - May 2022",
    type: "On-site",
    description:
      "Developed a car rental platform with dynamic pricing using Laravel and Stripe integration. Contributed to AdikaTaxi.com, implementing real-time ride tracking using Google Maps API.",
    highlights: [
      "Car rental platform with dynamic pricing",
      "Real-time ride tracking with Google Maps",
    ],
    technologies: ["Laravel", "PHP", "Stripe", "Google Maps API", "MySQL"],
  },
];

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "NgRx", level: 75 },
    { name: "GraphQL", level: 80 },
    { name: "Figma", level: 80 },
  ],
  backend: [
    { name: "Java", level: 95 },
    { name: "Spring Boot", level: 95 },
    { name: "NestJS", level: 85 },
    { name: "PHP", level: 85 },
    { name: "Laravel", level: 85 },
    { name: "Joomla", level: 90 },
    { name: "WordPress", level: 80 },
    { name: "Groovy", level: 80 },
    { name: "Kafka", level: 80 },
    { name: "Microservices", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "Python", level: 75 },
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 75 },
    { name: "Jenkins", level: 75 },
    { name: "Git/GitLab", level: 95 },
    { name: "PostgreSQL", level: 90 },
    { name: "MySQL", level: 90 },
    { name: "Redis", level: 80 },
    { name: "Keycloak", level: 80 },
    { name: "Grafana", level: 75 },
  ],
};

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development from responsive React/Next.js frontends to scalable Spring Boot and Node.js backend APIs.",
    icon: "code",
  },
  {
    title: "Fintech & Payment Integration",
    description:
      "Payment gateway integrations (M-PESA, Telebirr, PayPal, Stripe), recurring billing systems, and financial transaction platforms.",
    icon: "payment",
  },
  {
    title: "CMS & E-Commerce Development",
    description:
      "Senior CMS Developer — Joomla, WordPress, and Laravel-based websites with SEO optimization, custom modules, e-commerce, and performance tuning. Top-rated on Upwork.",
    icon: "store",
  },
  {
    title: "Technical Leadership & Consultation",
    description:
      "Architecture reviews, performance optimization, code audits, and team mentoring. Led teams of 5+ developers at Arifpay.",
    icon: "leadership",
  },
];

export const projects = [
  {
    title: "Arifpay Payment Platform",
    description:
      "Recurring billing and split payment system integrating PayPal, Telebirr, and M-PESA. Processing 50,000+ transactions/month with 50% improved throughput.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["Spring Boot", "Java", "Kafka", "PostgreSQL", "Docker"],
    liveUrl: "https://arifpay.net",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Ticketr — Event Ticketing Platform",
    description:
      "Full-stack event ticketing system with Telegram bot for ticket claims, Telebirr payment verification, QR code generation, and a scanner check-in app. Features configurable pricing tiers (VIP, VVIP, Standard, Student).",
    image: "/projects/ticketr-preview.png",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Telegram Bot", "Drizzle ORM"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Inventory Management Platform",
    description:
      "Multi-app inventory and sales platform with three web apps (data entry, admin, scanner) plus a Telegram bot. Features barcode generation, scan-to-sell, per-branch analytics, and real-time stock tracking.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    technologies: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "Redis", "Docker", "Telegram Bot"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Auditor — Ethiopian Tax & Audit SaaS",
    description:
      "SaaS platform helping Ethiopian businesses stay tax-compliant and audit-ready. Features chart of accounts, journal entries, compliance calendar, VAT/turnover computation, and evidence management with role-based access via Keycloak.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    technologies: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "Keycloak", "Docker", "Terraform"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Parking Management System",
    description:
      "Full-stack parking management solution with embedded payments, real-time slot tracking, and admin dashboard. Adopted by 3 commercial clients.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    title: "USSD Banking Module",
    description:
      "USSD-based banking module for loan management that reduced approval times from 48 hours to real-time processing for financial services.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    technologies: ["Spring Boot", "MySQL", "Microservices", "Java"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Sebsabi — Survey Data Collection",
    description:
      "Capstone project — a comprehensive survey data collection tool with Spring Boot backend and React/Flutter frontend for field researchers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["Spring Boot", "React", "Flutter", "MySQL"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Noah Real Estate Website",
    description:
      "Custom real estate platform with property search filters, listing management, and responsive design. Increased client leads by 25%.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL", "SEO"],
    liveUrl: "https://noahrealestateplc.com",
    githubUrl: "",
    featured: false,
  },
  {
    title: "EZM Trade E-Commerce",
    description:
      "E-commerce platform (ezmtrade.com) handling 10K+ monthly visitors with product catalog, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL"],
    liveUrl: "https://ezmtrade.com",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Cybersecurity Compliance Dashboard",
    description:
      "Centralized reporting dashboard for 10+ third-party apps with OAuth 2.0/LDAP auth via Keycloak, serving 500+ internal users at Safaricom.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    technologies: ["Spring Boot", "Next.js", "Keycloak", "Grafana", "Python"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    title: "RedBrick Travel Platform",
    description:
      "Tourism website (redbricktravel.com) with tour booking, destination browsing, and responsive design handling 10K+ monthly visitors.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    technologies: ["PHP", "Joomla", "JavaScript", "HTML/CSS"],
    liveUrl: "https://redbricktravel.com",
    githubUrl: "",
    featured: false,
  },
  {
    title: "WTC Addis Ababa",
    description:
      "World Trade Center Addis Ababa platform with membership tiers, trade services, consultancy pages, and event management for connecting local businesses with global firms.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL"],
    liveUrl: "https://wtcaddis.com",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Bentley Luxury Apartments",
    description:
      "Luxury apartment showcase website featuring 2 & 3 bedroom listings, amenity highlights, and a modern responsive design for a premium real estate brand in Addis Ababa.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    technologies: ["PHP", "Joomla", "JavaScript", "HTML/CSS"],
    liveUrl: "https://www.bentley-apartments.com",
    githubUrl: "",
    featured: false,
  },
  {
    title: "REY Medical",
    description:
      "Medical equipment import and distribution company website with product catalog, partner showcase, news section, and solution pages for diagnostic and imaging platforms.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL"],
    liveUrl: "https://www.rey-medical.com",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Sinopia Import & Export",
    description:
      "Corporate website for a multi-sector import/export company covering office furniture, solar, water solutions, coffee, and construction lab equipment with sourcing and logistics services.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL"],
    liveUrl: "https://sinopiaimpex.com",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Sinopia Furnitures",
    description:
      "Office furniture e-commerce website with product categories, SEO optimization that boosted organic traffic by 60%, and a modern responsive storefront.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL", "SEO"],
    liveUrl: "https://sinopia-furnitures.com",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Orobia Furnitures",
    description:
      "Office furniture e-commerce platform with product categories (chairs, tables, sofas, cabinets), client showcase, and a modern responsive storefront for a premium furniture brand in Addis Ababa.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    technologies: ["PHP", "Joomla", "JavaScript", "HTML/CSS"],
    liveUrl: "https://www.orobia-furnitures.com",
    githubUrl: "",
    featured: false,
  },
];

export const testimonials = [
  {
    name: "Bosst Performances",
    role: "Upwork Client — USA · 232 hrs · ★ 5.0",
    content:
      "Alazar did an outstanding job optimizing our Joomla website across multiple fronts — performance, SEO, and accessibility. He approached the project methodically, starting with a comprehensive audit that clearly identified areas for improvement. We saw noticeable improvements in both speed and search engine visibility. Throughout the project, Alazar was communicative, reliable, and proactive. Highly recommended for any Joomla-related development work.",
  },
  {
    name: "Hässelby Client",
    role: "Upwork Client — Sweden · Fixed Price · ★ 5.0",
    content:
      "I was pleasantly surprised by Alazar — he delivered above my expectations in terms of the technical solution but also the design was just perfect. The communication was effective and he understood the requirement quite well right from the start. I will likely use his services in similar future projects and want to encourage him to keep this level of performance going forward.",
  },
];

export const achievements = [
  { value: "50%", label: "Performance Gain at ArifPay" },
  { value: "7+", label: "Developers Mentored" },
  { value: "10+", label: "Full-Stack Projects Delivered" },
  { value: "50K+", label: "Transactions/Month Processed" },
];

export const education = {
  degree: "BSc in Software Engineering",
  university: "Mekelle University",
  period: "2017/2018 - 2022",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
