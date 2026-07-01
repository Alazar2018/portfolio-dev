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
  bio: `Senior Full Stack Engineer with 5+ years of experience building scalable fintech 
  systems, enterprise web applications, and CMS platforms. Specialized in Java/Spring Boot 
  and .NET backends, Next.js/React frontends, and payment integrations (M-PESA, Telebirr, 
  PayPal, Eco Bank). At Arifpay I build and optimize .NET payment gateway services for user 
  and sub-user management. Experienced in Joomla, WordPress, and Laravel-based CMS development 
  with proven SEO and performance results. Led engineering teams at Arifpay and served as 
  Technical Lead at MPI. Independently built Inventra Cloud — a multi-tenant inventory 
  management SaaS for retail and wholesale. Top-rated freelancer on Upwork specializing 
  in Joomla and CMS solutions.`,
  resumeUrl: "/cv/Alazar TIlahun Professional Resume.pdf",
  profileImage: "/hero/5913780460762894724_120.jpg",
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
    role: "Senior Software Engineer → Lead Software Engineer",
    period: "Nov 2024 - Present",
    type: "On-site",
    description:
      "Hands-on Lead Software Engineer architecting recurring billing and split payment systems integrating PayPal, Telebirr, M-PESA, and Eco Bank. Built and optimized .NET payment gateway services for user and sub-user management — roles, permissions, and merchant account hierarchies. Used Groovy for custom payment modules and refactored legacy code improving throughput by 50% and reducing latency by 30%. Promoted to lead two teams (5 developers each) within 4 months.",
    highlights: [
      ".NET payment gateway — user and sub-user management with role-based access",
      ".NET optimization — refactored auth and account flows for lower latency",
      "Eco Bank payment integration alongside major wallets",
      "Groovy scripting for custom fintech modules",
      "50% throughput improvement via refactoring",
      "Led 2 teams of 5 developers each",
      "Built USSD banking module for loan management",
      "Built parking management system (Next.js + Spring Boot)",
    ],
    technologies: ["Spring Boot", "Java", ".NET", "Groovy", "NestJS", "Next.js", "Kafka", "PostgreSQL", "Docker", "Microservices"],
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
      "Senior Software Engineer at BGWG Monster and BGWG Media, building enterprise-grade solutions across the full stack. Contributed to architectural decisions, CMS and content platforms, and optimized application performance across both companies.",
    highlights: [
      "Full-stack enterprise application development",
      "CMS and content-driven product delivery",
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
    company: "Freelance (Upwork)",
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
    { name: ".NET", level: 80 },
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
      "Payment gateway integrations (M-PESA, Telebirr, PayPal, Stripe), .NET user and sub-user management, recurring billing systems, and financial transaction platforms.",
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

export interface ProjectDetail {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: "deployed" | "upcoming" | "completed";
  type: "app" | "website";
  features: string[];
  security?: string[];
  architecture?: string;
}

export const projects: ProjectDetail[] = [
  {
    title: "Arifpay Payment Platform",
    description:
      "Recurring billing and split payment system integrating PayPal, Telebirr, M-PESA, and Eco Bank. .NET gateway services handle user and sub-user management; legacy refactoring delivered 50% throughput gains and 30% lower latency.",
    longDescription:
      "Enterprise-grade fintech platform powering recurring billing and split payment workflows across multiple payment providers. Event-driven microservices integrate PayPal, Telebirr, M-PESA, and Eco Bank into a unified API, with Groovy used for complex scripting and custom payment modules. Hands-on .NET services power payment gateway user and sub-user management — merchant hierarchies, role-based permissions, and optimized account flows. Includes a USSD banking module for loan management and a parking management subsystem.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"],
    technologies: ["Spring Boot", "Java", ".NET", "Groovy", "Kafka", "PostgreSQL", "Docker", "Microservices"],
    liveUrl: "https://arifpay.net",
    githubUrl: "",
    featured: true,
    status: "deployed",
    type: "app",
    features: [
      "Recurring billing with configurable payment schedules",
      "Split payment system across multiple providers",
      "PayPal, Telebirr, M-PESA, and Eco Bank integration",
      ".NET payment gateway — user and sub-user management with merchant hierarchies",
      ".NET optimization — faster auth and account lookup on high-traffic flows",
      "Groovy scripting for custom payment modules",
      "50% throughput improvement via legacy code refactoring",
      "30% latency reduction through optimization",
      "USSD banking module for loan management",
      "Parking management subsystem with embedded payments",
    ],
    security: [
      "Payment-grade encryption for all transactions",
      "Microservice isolation with Kafka event bus",
      "Role-based access for internal dashboards",
    ],
    architecture:
      "Event-driven microservices architecture using Kafka for inter-service communication, Spring Boot for each service, and PostgreSQL for persistence. Deployed via Docker with horizontal scaling support.",
  },
  {
    title: "Ticketr — Event Ticketing Platform",
    description:
      "Full-stack event ticketing system with Telegram bot for ticket claims, Telebirr payment verification, QR code generation, and a scanner check-in app.",
    longDescription:
      "End-to-end event ticketing platform enabling organizers to create events, manage ticket tiers (VIP, VVIP, Standard, Student), and process payments via Telebirr. Attendees claim tickets through a Telegram bot, receive QR-coded e-tickets, and check in via a dedicated scanner app at the venue. The system handles the full lifecycle from ticket purchase to event-day verification.",
    image: "/projects/tocketer-event.png",
    images: ["/projects/tocketer-event.png"],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Telegram Bot", "Drizzle ORM"],
    liveUrl: "https://www.ticketr-events.com/",
    githubUrl: "",
    featured: true,
    status: "deployed",
    type: "app",
    features: [
      "Event creation with configurable pricing tiers (VIP, VVIP, Standard, Student)",
      "Telegram bot for seamless ticket claims and notifications",
      "Telebirr payment verification and processing",
      "QR code generation for e-tickets",
      "Scanner check-in app for venue entry validation",
      "Real-time ticket availability tracking",
      "Organizer dashboard with sales analytics",
    ],
    security: [
      "Telebirr payment verification with server-side validation",
      "QR code authentication to prevent ticket forgery",
      "Telegram bot webhook security",
    ],
    architecture:
      "Full-stack application with a React frontend, Express/Node.js API, and PostgreSQL database via Drizzle ORM. The Telegram bot runs as an integrated service handling ticket claims and payment confirmations.",
  },
  {
    title: "Inventra Cloud — Inventory & Retail SaaS",
    description:
      "Multi-tenant inventory management SaaS for multi-branch retail and wholesale: offline-capable scanner PWA, Stripe subscriptions (ETB plans), procurement, B2B AR, platform KPIs with cohort BI, and CHERKA in-product AI guide.",
    longDescription:
      "Inventra Cloud is a feature-complete multi-tenant inventory and operations platform, live at inventra-cloud.com. Each organization gets isolated workspaces on org subdomains or verified custom domains, with self-service signup, SaaS staff approval, trial provisioning, and a demo catalog. Tenant surfaces include marketing (with optional Arabic locale), admin (finance/procurement/ops org roles), installable scanner POS with retail offline mode (IndexedDB catalog cache, queued sales, idempotent sync on reconnect), and data-entry intake. Wholesale B2B, POs with GRN, cycle counts, forecasting, governance queues, and Telegram/EOD reporting cover day-to-day ops. The platform console manages approvals, Stripe billing, support desk (SLA, auto-assign), and investor-grade analytics including nightly materialized cohort retention. CHERKA is an in-app AI guide with tours and contextual help. Built as a NestJS + Next.js monorepo with Prisma/PostgreSQL, Redis, S3, GitHub Actions CI/CD, and VPS deploy.",
    image: "/projects/inventra-cloud.png",
    images: ["/projects/inventra-cloud.png"],
    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "S3",
      "PWA",
      "Docker",
      "Telegram Bot",
      "GitHub Actions",
    ],
    liveUrl: "https://inventra-cloud.com",
    githubUrl: "",
    featured: true,
    status: "deployed",
    type: "app",
    features: [
      "Multi-tenant SaaS: subdomains, custom domains (DNS verify), signup approval, trial + demo catalog",
      "Retail offline scanner: PWA + service worker, branch catalog cache, queued checkout, idempotent replay",
      "Scanner: retail cart checkout, wholesale (online), cash payments; Stripe Connect path for card",
      "Admin: multi-branch stock, PO/GRN, B2B quotes/invoices/AR, cycle counts, price rules, governance",
      "Org roles: Finance, Procurement, Operations — scoped admin modules without floor access",
      "CHERKA: in-product AI guide with setup tours, help KB, and spotlight walkthroughs",
      "Stripe: ETB monthly/yearly plans, Checkout, Portal, webhook idempotency + retry worker",
      "Platform console: tenant directory, MRR/plan mix, materialized cohort retention, CSV export",
      "Support desk: tenant tickets, SLA, escalations, staff threads, auto-assign routing",
      "Analytics: margins, ABC, forecasting, EOD/executive PDFs; Telegram bot commands",
      "Marketing site: CMS JSON overrides, Lighthouse CI, client chunk budgets, Arabic locale on /",
      "Security: dual JWT (tenant + SaaS staff), Argon2, tenant isolation e2e, audit on sensitive actions",
    ],
    security: [
      "Separate tenant and SaaS-staff JWT issuers with org/subdomain binding on every request",
      "Argon2 password hashing; refresh-token rotation with reuse detection",
      "Encrypted httpOnly session cookies via Next.js BFF proxy to the API",
      "Branch RBAC (Admin, Branch Manager, Data Entry, Sales, Hybrid) plus org-level Finance/Procurement/Ops",
      "Offline sales use clientMutationId for safe replay; Stripe webhooks deduped with retry cron",
      "Helmet, CSP, rate limiting; camera Permissions-Policy for scanner; Telegram webhook secrets",
      "Tenant isolation e2e (cross-org product/branch reads return 404)",
      "Audit trail on PO, invoice confirm, governance, cycle counts, and SaaS billing events",
    ],
    architecture:
      "Monorepo: inventory-api (NestJS REST, Prisma/PostgreSQL, Stripe/Telegram/S3), inventory-web (Next.js 16 — marketing, /admin, /scanner PWA with offline IndexedDB layer, /entry, /platform), inventory-local (Docker Compose: Postgres, Redis, MinIO). Tenancy from Host (subdomain or verified custom domain). Scheduled jobs: EOD, Telegram digests, Stripe webhook retries, cohort snapshots (02:00 UTC). Scanner offline: GET /sales/offline-catalog, queued sync via service worker. Optional inventra-terminal wrapper for Tap to Pay. CI: build/test on PR; SSH deploy to VPS on main.",
  },
  {
    title: "Mekenet — Personal Finance & Financial Freedom",
    description:
      "Ethiopia-first budgeting and financial-freedom platform with on-device SMS auto-import (Telebirr, CBE, Dashen), zero-based budgets, debt payoff engine, and FI planning — Android, web, and Ktor API.",
    longDescription:
      "Mekenet (መቀነት) is an Ethiopia-first personal finance and financial-freedom platform built global-ready from day one. The hero differentiator is on-device SMS auto-import from 16+ Ethiopian bank and wallet parsers (Telebirr, CBE, Dashen, Awash, and more) — raw SMS never leaves the phone. A shared plan-engine powers zero-based budgeting, safe-to-spend (ቀሪ ገንዘብ), payday playbooks, debt snowball/avalanche strategies, typed goals (equb, FI targets, debt payoff), and Ramsey Baby Steps. The Android app (Kotlin/Compose, Room, offline-first) pairs with a Next.js web client and Ktor + PostgreSQL backend for cloud sync, household/couples planning, learn content, and a credit passport model (Mekenet never lends — users share eligibility data with partner banks/MFIs). Amharic-first UI with ETB-native amounts; monetization via Free → Plus → Pro tiers with Google Play Billing.",
    image: "/projects/mekenet-icon.svg",
    images: ["/projects/mekenet-icon.svg"],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Android",
      "Next.js",
      "TypeScript",
      "Ktor",
      "PostgreSQL",
      "Room",
      "Tailwind CSS",
      "Gradle",
    ],
    liveUrl: "https://mekenet.app",
    githubUrl: "",
    featured: true,
    status: "upcoming",
    type: "app",
    features: [
      "On-device SMS auto-import — 16+ Ethiopian bank/wallet parsers; raw SMS never leaves the phone",
      "Zero-based budgeting, envelope rollover, safe-to-spend, and budget vs actual",
      "Shared plan-engine: BRIDGE / TIGHT / NORMAL / WEALTH modes with payday playbook",
      "Debt tracker with snowball/avalanche strategies and payoff simulator",
      "Typed goals: debt payoff, savings, equb, FI targets, percentage splits, milestones",
      "Ramsey Baby Steps 1–7 auto-detect with windfall and paycheck templates",
      "Accounts for CBE, Telebirr, Dashen, Awash, Coop, Equb — ETB-native, Amharic-first UI",
      "Android offline-first (Room) + Next.js web + Ktor API cloud sync",
      "Household/couples shared planning; learn & creator content modules",
      "Credit passport — eligibility sharing with partner banks (no lending on-platform)",
      "Free → Plus → Pro tiers with Google Play Billing",
    ],
    security: [
      "Raw SMS parsed on-device only — structured transactions sync; no SMS upload for credit",
      "GDPR-ready consent, export, and account deletion flows",
      "Explicit opt-in for credit data sharing with partner institutions",
      "App PIN lock; privacy-first categorization with user-controlled rules",
    ],
    architecture:
      "Multi-client: Android (Kotlin/Compose, Room, :plan-engine, :parser-core with remote-updatable parser_config.json) · Web (Next.js 15, Tailwind) · Backend (Ktor REST /v1, PostgreSQL). Shared pure plan-engine runs on device, JVM backend, and tests with no Android deps. Offline-first mobile with optional Wave 2 sync. OpenAPI contract; money stored as integer minor units + ISO 4217 currency.",
  },
  {
    title: "Auditor — Ethiopian Tax & Audit SaaS",
    description:
      "SaaS platform helping Ethiopian businesses stay tax-compliant and audit-ready with chart of accounts, journal entries, and VAT computation.",
    longDescription:
      "Cloud-based SaaS platform purpose-built for Ethiopian businesses to manage tax compliance and audit readiness. Features a full chart of accounts, journal entry system, compliance calendar with deadline tracking, VAT and turnover tax computation, and evidence/document management. Role-based access control via Keycloak ensures proper segregation of duties for accountants, auditors, and business owners.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"],
    technologies: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "Keycloak", "Docker", "Terraform"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    status: "upcoming",
    type: "app",
    features: [
      "Chart of accounts with hierarchical account structure",
      "Journal entry system with double-entry bookkeeping",
      "Compliance calendar with tax deadline tracking and reminders",
      "VAT and turnover tax computation engine",
      "Evidence and document management for audit trails",
      "Multi-tenant architecture for multiple businesses",
      "Financial reporting and statement generation",
      "Infrastructure as Code with Terraform",
    ],
    security: [
      "Keycloak-based SSO with role-based access control",
      "Segregation of duties for accountants, auditors, and owners",
      "Audit trail for all financial entries",
      "Encrypted data at rest and in transit",
    ],
    architecture:
      "Full-stack SaaS with NestJS backend, Next.js frontend, and PostgreSQL via Prisma. Keycloak handles identity and access management. Infrastructure provisioned with Terraform and containerized via Docker.",
  },
  {
    title: "Parking Management System",
    description:
      "Full-stack parking management solution with embedded payments, real-time slot tracking, and admin dashboard. Adopted by 3 commercial clients.",
    longDescription:
      "Real-time parking management system featuring slot availability tracking, embedded payment processing, and a comprehensive admin dashboard. Built for commercial parking operators, the system handles vehicle entry/exit, automated billing, and occupancy analytics.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80"],
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    status: "deployed",
    type: "app",
    features: [
      "Real-time parking slot availability tracking",
      "Embedded payment processing",
      "Admin dashboard with occupancy analytics",
      "Vehicle entry/exit management",
      "Automated billing and receipt generation",
      "Adopted by 3 commercial clients",
    ],
  },
  {
    title: "USSD Banking Module",
    description:
      "USSD-based banking module for loan management that reduced approval times from 48 hours to real-time processing for financial services.",
    longDescription:
      "USSD-based banking solution enabling loan management operations over basic mobile phones without internet. Reduced loan approval times from 48 hours to real-time processing, making financial services accessible to unbanked populations.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"],
    technologies: ["Spring Boot", "MySQL", "Microservices", "Java"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    status: "completed",
    type: "app",
    features: [
      "USSD menu-driven banking interface",
      "Real-time loan approval processing",
      "Balance inquiries and fund transfers",
      "Bill payment integration",
      "Reduced approval time from 48 hours to real-time",
    ],
  },
  {
    title: "Sebsabi — Survey Data Collection",
    description:
      "Capstone project — a comprehensive survey data collection tool with Spring Boot backend and React/Flutter frontend for field researchers.",
    longDescription:
      "Comprehensive survey data collection tool built as a capstone project, designed for field researchers to create, distribute, and analyze surveys. Features a Spring Boot backend with both React web and Flutter mobile frontends for data collection in the field.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"],
    technologies: ["Spring Boot", "React", "Flutter", "MySQL"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    status: "completed",
    type: "app",
    features: [
      "Survey creation and template management",
      "Cross-platform data collection (web + mobile)",
      "Flutter mobile app for field researchers",
      "Data analysis and reporting dashboard",
    ],
  },
  {
    title: "Noah Real Estate Website",
    description:
      "Custom real estate platform with property search filters, listing management, and responsive design. Increased client leads by 25%.",
    longDescription:
      "Custom-built real estate platform for Noah Real Estate PLC featuring advanced property search filters, listing management, and a responsive design optimized for lead generation. Delivered a 25% increase in client leads through strategic UX improvements and SEO optimization.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"],
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL", "SEO"],
    liveUrl: "https://noahrealestateplc.com",
    githubUrl: "",
    featured: false,
    status: "deployed",
    type: "website",
    features: [
      "Advanced property search with filters",
      "Listing management system",
      "25% increase in client leads",
      "SEO-optimized for local search",
      "Responsive design across all devices",
    ],
  },
  {
    title: "EZM Trade E-Commerce",
    description:
      "E-commerce platform (ezmtrade.com) handling 10K+ monthly visitors with product catalog, shopping cart, and payment integration.",
    longDescription:
      "Full-featured e-commerce platform for EZM Trade handling over 10,000 monthly visitors. Includes a complete product catalog, shopping cart, secure payment integration, and order management system.",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80"],
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL"],
    liveUrl: "https://ezmtrade.com",
    githubUrl: "",
    featured: false,
    status: "deployed",
    type: "website",
    features: [
      "Product catalog with category browsing",
      "Shopping cart and checkout flow",
      "Payment integration",
      "10K+ monthly visitors",
      "Order management system",
    ],
  },
  {
    title: "Cybersecurity Compliance Dashboard",
    description:
      "Centralized reporting dashboard for 10+ third-party apps with OAuth 2.0/LDAP auth via Keycloak, serving 500+ internal users at Safaricom.",
    longDescription:
      "Enterprise cybersecurity compliance dashboard built during internship at Safaricom ET. Centralizes reporting from 10+ third-party applications with unified OAuth 2.0 and LDAP authentication via Keycloak, serving 500+ internal users. Automated CIS compliance checks reduced manual effort by 70%.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"],
    technologies: ["Spring Boot", "Next.js", "Keycloak", "Grafana", "Python"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    status: "completed",
    type: "app",
    features: [
      "Centralized reporting for 10+ third-party apps",
      "Automated CIS compliance checks (70% effort reduction)",
      "OAuth 2.0 + LDAP integration for 500+ users",
      "Grafana/Prometheus monitoring (40% faster incident response)",
      "Python automation scripts for compliance auditing",
    ],
    security: [
      "OAuth 2.0 and LDAP via Keycloak",
      "CIS benchmark automated compliance checks",
      "Centralized identity management for 500+ users",
    ],
  },
  {
    title: "RedBrick Travel Platform",
    description:
      "Tourism website (redbricktravel.com) with tour booking, destination browsing, and responsive design handling 10K+ monthly visitors.",
    longDescription:
      "Tourism and travel platform for RedBrick Travel featuring tour package browsing, destination discovery, and booking capabilities. Handles 10,000+ monthly visitors with a responsive design optimized for travel content.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"],
    technologies: ["PHP", "Joomla", "JavaScript", "HTML/CSS"],
    liveUrl: "https://redbricktravel.com",
    githubUrl: "",
    featured: false,
    status: "deployed",
    type: "website",
    features: [
      "Tour package browsing and booking",
      "Destination discovery pages",
      "10K+ monthly visitors",
      "Responsive travel-focused design",
    ],
  },
  {
    title: "WTC Addis Ababa",
    description:
      "World Trade Center Addis Ababa platform with membership tiers, trade services, consultancy pages, and event management.",
    longDescription:
      "Corporate platform for the World Trade Center Addis Ababa, connecting local businesses with global trade networks. Features membership tier management, trade services catalog, consultancy pages, and event management for international business forums.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"],
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL"],
    liveUrl: "https://wtcaddis.com",
    githubUrl: "",
    featured: false,
    status: "deployed",
    type: "website",
    features: [
      "Membership tier management",
      "Trade services catalog",
      "Consultancy and advisory pages",
      "Event management for business forums",
      "Local-to-global business networking",
    ],
  },
  {
    title: "Bentley Luxury Apartments",
    description:
      "Luxury apartment showcase featuring 2 & 3 bedroom listings, amenity highlights, and modern responsive design for a premium brand in Addis Ababa.",
    longDescription:
      "Premium real estate showcase website for Bentley Luxury Apartments in Addis Ababa. Features elegant property listings for 2 and 3 bedroom apartments, amenity highlights, virtual tour integration, and a modern responsive design reflecting the brand's luxury positioning.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"],
    technologies: ["PHP", "Joomla", "JavaScript", "HTML/CSS"],
    liveUrl: "https://www.bentley-apartments.com",
    githubUrl: "",
    featured: false,
    status: "deployed",
    type: "website",
    features: [
      "2 & 3 bedroom apartment listings",
      "Amenity highlights and floor plans",
      "Premium luxury brand design",
      "Responsive across all devices",
    ],
  },
  {
    title: "REY Medical",
    description:
      "Medical equipment import and distribution company website with product catalog, partner showcase, and solution pages.",
    longDescription:
      "Corporate website for REY Medical, a medical equipment import and distribution company. Features a comprehensive product catalog for diagnostic and imaging platforms, partner showcase, news section, and solution pages organized by medical specialty.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"],
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL"],
    liveUrl: "https://www.rey-medical.com",
    githubUrl: "",
    featured: false,
    status: "deployed",
    type: "website",
    features: [
      "Medical equipment product catalog",
      "Diagnostic and imaging solution pages",
      "Partner and supplier showcase",
      "News and updates section",
    ],
  },
  {
    title: "Sinopia Import & Export",
    description:
      "Corporate website for a multi-sector import/export company covering furniture, solar, water solutions, coffee, and construction equipment.",
    longDescription:
      "Corporate website for Sinopia Import & Export, a multi-sector trading company. Covers product lines across office furniture, solar energy, water solutions, coffee export, and construction lab equipment, with integrated sourcing and logistics service pages.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"],
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL"],
    liveUrl: "https://sinopiaimpex.com",
    githubUrl: "",
    featured: false,
    status: "deployed",
    type: "website",
    features: [
      "Multi-sector product catalog",
      "Sourcing and logistics service pages",
      "Solar, water, furniture, and coffee divisions",
      "Construction lab equipment section",
    ],
  },
  {
    title: "Sinopia Furnitures",
    description:
      "Office furniture e-commerce website with SEO optimization that boosted organic traffic by 60% and a modern responsive storefront.",
    longDescription:
      "E-commerce storefront for Sinopia Furnitures with product categories, search functionality, and a modern responsive design. Comprehensive SEO optimization boosted organic traffic by 60%, significantly increasing the brand's online visibility.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"],
    technologies: ["PHP", "Joomla", "JavaScript", "MySQL", "SEO"],
    liveUrl: "https://sinopia-furnitures.com",
    githubUrl: "",
    featured: false,
    status: "deployed",
    type: "website",
    features: [
      "Product categories and search",
      "60% organic traffic boost via SEO",
      "Modern responsive storefront",
      "Product detail pages with specifications",
    ],
  },
  {
    title: "Orobia Furnitures",
    description:
      "Office furniture e-commerce platform with product categories, client showcase, and a modern responsive storefront for a premium brand.",
    longDescription:
      "Premium office furniture e-commerce platform for Orobia Furnitures in Addis Ababa. Features categorized product browsing (chairs, tables, sofas, cabinets), client showcase, and a modern responsive design reflecting the brand's premium market positioning.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"],
    technologies: ["PHP", "Joomla", "JavaScript", "HTML/CSS"],
    liveUrl: "https://www.orobia-furnitures.com",
    githubUrl: "",
    featured: false,
    status: "deployed",
    type: "website",
    features: [
      "Categorized product browsing (chairs, tables, sofas, cabinets)",
      "Client showcase section",
      "Premium brand responsive design",
      "Product detail pages",
    ],
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
  { value: "30%", label: "Latency Reduction (Core Services)" },
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
