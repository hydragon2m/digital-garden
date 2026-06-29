import type { DeliverableType, EducationType, ExperienceType, Language, LocalizedPortfolioContent, ProjectType, QAItem, SkillCategory } from "./types";

export const uiTranslations = {
  vi: {
    navAbout: "Giới thiệu",
    navExperience: "Kinh nghiệm",
    navBuilt: "Sản phẩm",
    navProjects: "Dự án",
    navContact: "Liên hệ",
    themeToggle: "Đổi giao diện",
    languageToggle: "Đổi ngôn ngữ",
    heroTitle: "Software Engineer",
    heroDescription:
      "Tôi xây dựng backend, API và hệ thống microservices với Node.js, gRPC, RabbitMQ và database. Tập trung vào code rõ ràng, hệ thống ổn định và giải quyết vấn đề thực tế.",
    heroExperience: "Kinh nghiệm",
    heroResume: "CV",
    experienceTitle: "Kinh nghiệm",
    builtTitle: "Sản phẩm tôi đã xây dựng",
    projectsTitle: "Dự án",
    educationTitle: "Học vấn",
    contactTitle: "Liên hệ",
    footerRights: "Bản quyền được bảo lưu.",
    builtColumn: "Đã xây dựng",
    scaleColumn: "Quy mô",
    stackColumn: "Công nghệ",
    metricsTitle: "Chỉ số",
    highlightsTitle: "Điểm nổi bật",
    architectureTitle: "Kiến trúc",
    usersMetric: "Người dùng",
    uptimeMetric: "Uptime",
    latencyMetric: "Độ trễ",
    gitlabStars: "GitLab Stars",
    assistantLabel: "Hỏi trợ lý",
    assistantTitle: "Huy AI Recruiter Bot",
    assistantStatus: "Online và sẵn sàng hỗ trợ",
    assistantPlaceholder: "Hỏi về kinh nghiệm, kỹ năng...",
    assistantFallback:
      "Xin lỗi, tôi chưa có thông tin chi tiết về câu hỏi này. Bạn có thể gõ các câu hỏi ngắn về 'kỹ năng', 'kinh nghiệm', 'dự án', hoặc 'liên hệ' để tôi hỗ trợ nhanh nhất nhé!",
  },
  en: {
    navAbout: "About",
    navExperience: "Experience",
    navBuilt: "Built",
    navProjects: "Projects",
    navContact: "Contact",
    themeToggle: "Toggle theme",
    languageToggle: "Change language",
    heroTitle: "Software Engineer",
    heroDescription:
      "I build backend services, APIs, and microservice systems with Node.js, gRPC, RabbitMQ, and databases. I focus on clear code, reliable systems, and practical problem solving.",
    heroExperience: "Experience",
    heroResume: "Resume",
    experienceTitle: "Experience",
    builtTitle: "Things I've Built",
    projectsTitle: "Projects",
    educationTitle: "Education",
    contactTitle: "Get in Touch",
    footerRights: "All rights reserved.",
    builtColumn: "Built",
    scaleColumn: "Scale",
    stackColumn: "Stack",
    metricsTitle: "Metrics",
    highlightsTitle: "Highlights",
    architectureTitle: "Architecture",
    usersMetric: "Users",
    uptimeMetric: "Uptime",
    latencyMetric: "Latency",
    gitlabStars: "GitLab Stars",
    assistantLabel: "Ask Assistant",
    assistantTitle: "Huy's AI Recruiter Bot",
    assistantStatus: "Online and ready to assist",
    assistantPlaceholder: "Ask about experience, skills...",
    assistantFallback:
      "Sorry, I do not have detailed information for that question yet. Try asking about skills, experience, projects, or contact information.",
  },
} as const;

const educationVi: EducationType[] = [
  {
    schoolName: "Trường Đại học Phú Xuân (Huế)",
    subHeader: "Cử nhân Công nghệ Thông tin",
    duration: "2020 - 2024",
    desc: "Tốt nghiệp chuyên ngành Công nghệ Thông tin, định hướng phát triển phần mềm.",
  },
];

const experienceVi: ExperienceType[] = [
  {
    role: "Back-end Developer",
    company: "Beatcolor",
    date: "08/2025 - Hiện tại",
    desc: "Beatcolor là công ty xử lý ảnh, video, 3D phục vụ khách hàng quốc tế và cung cấp giải pháp B2B.",
    descBullets: [
      "Xây dựng giao thức: REST, GraphQL, Socket.",
      "Thiết kế cơ chế giao tiếp giữa các services: gRPC, RabbitMQ.",
      "Thiết kế kiến trúc service phức tạp: CQRS, Saga, Outbox.",
      "Thiết kế giải pháp lưu trữ tối ưu: Database, Cache, Snapshot.",
    ]
  },
  {
    role: "Back-end Developer",
    company: "LifeteX",
    date: "05/2024 - 06/2025",
    desc: "LifeteX là công ty cung cấp phần mềm quản trị toàn diện cho doanh nghiệp và Chính phủ.",
    descBullets: [
      "Xây dựng RESTful API hoặc GraphQL API.",
      "Thiết kế, truy vấn và tối ưu cơ sở dữ liệu MySQL, PostgreSQL, MongoDB.",
      "Lập trình backend bằng Node.js (NestJS/Express), Python và Java.",
      "Tích hợp Authentication, Authorization, mã hóa dữ liệu Data Encryption.",
    ]
  },
  {
    role: "Game Developer Intern",
    company: "GSS",
    date: "07/2023 - 10/2023",
    desc: "Thành lập năm 2010, chuyên về lập trình game. Thương hiệu công nghệ mạnh tại Thừa Thiên Huế.",
  }
];

const projectsVi: ProjectType[] = [
  {
    name: "SSO Identity Server",
    desc: "Máy chủ quản lý người dùng tập trung hỗ trợ giao thức SAML 2.0, OAuth 2.0, OpenID Connect (OIDC). Tích hợp xác thực đa yếu tố MFA, Google Authenticator, Social Login, FIDO2/WebAuthn, Single Sign-On (SSO) và Single Logout (SLO). Kết quả định hướng tương tự Apache Knox và WSO2 IS.",
    github: "https://gitlab.com/DQH8391/sso-identity-server.git",
    tags: ["NestJS", "MySQL", "Redis", "SAML 2.0", "OAuth2", "OIDC"],
    stars: 95,
    metrics: {
      users: "1000+",
      qps: "10k/sec",
      uptime: "99.95%",
      latency: "< 100ms"
    },
    highlights: [
      "Implemented SAML 2.0 protocol with XML encryption",
      "Multi-factor authentication (MFA) with Google Authenticator",
      "FIDO2/WebAuthn for passwordless authentication",
      "Single Sign-On (SSO) and Single Logout (SLO)",
      "Session management with Redis cache (TTL-based)"
    ],
    architecture: {
      description: "Centralized identity server with load-balanced NestJS instances, MySQL primary-replica setup, Redis session cache, and event-driven SSO flows via RabbitMQ for audit logging and external integrations."
    }
  }
];

const skillCategoriesVi: SkillCategory[] = [
  {
    title: "Back-end & Core Logic",
    description: "Thiết kế các API bảo mật, xử lý logic lõi và kết nối dịch vụ hiệu năng cao.",
    iconName: "Terminal",
    skills: [
      { name: "Node.js (NestJS / ExpressJS)", level: "Expert", description: "Xây dựng các backend vững chắc và cấu trúc mô-đun chuẩn." },
      { name: "FastAPI & Python", level: "Advanced", description: "Viết các dịch vụ API bất đồng bộ hiệu năng cao." },
      { name: "Microservices & Message Queue", level: "Advanced", description: "Thiết kế truyền tin qua gRPC, REST và RabbitMQ (AMQP)." },
      { name: "Security & Encryption", level: "Advanced", description: "Triển khai Authentication, Authorization, mã hóa dữ liệu Data Encryption." }
    ]
  },
  {
    title: "Database & Storage Systems",
    description: "Thiết kế kiến trúc lưu trữ, tối ưu hóa truy vấn dữ liệu lớn.",
    iconName: "Cpu",
    skills: [
      { name: "PostgreSQL & MySQL", level: "Expert", description: "Thiết kế, chuẩn hóa và tối ưu hóa truy vấn cơ sở dữ liệu quan hệ." },
      { name: "MongoDB", level: "Advanced", description: "Lưu trữ dữ liệu phi cấu trúc và tài liệu linh hoạt." },
      { name: "Redis Cache", level: "Advanced", description: "Tăng tốc truy vấn qua bộ nhớ đệm Cache và tối ưu snapshot." }
    ]
  },
  {
    title: "System Architecture Patterns",
    description: "Áp dụng các mẫu kiến trúc microservices tiên tiến.",
    iconName: "Brain",
    skills: [
      { name: "CQRS Pattern", level: "Advanced", description: "Tách biệt luồng Đọc (Query) và Ghi (Command) dữ liệu." },
      { name: "Saga Pattern", level: "Advanced", description: "Quản lý các giao dịch phân tán đảm bảo tính nhất quán dữ liệu." },
      { name: "Outbox Pattern", level: "Advanced", description: "Đảm bảo truyền tin cậy giữa các microservices bất đồng bộ." }
    ]
  },
  {
    title: "DevOps & Documentation",
    description: "Tự động hóa triển khai và cung cấp tài liệu kỹ thuật chuẩn mực.",
    iconName: "Cloud",
    skills: [
      { name: "Docker Containerization", level: "Expert", description: "Đóng gói mã nguồn và triển khai trên các môi trường đồng bộ." },
      { name: "CI/CD & AWS EC2", level: "Advanced", description: "Triển khai dịch vụ tự động hóa và quản lý máy chủ đám mây Linux." },
      { name: "Swagger & Technical Docs", level: "Expert", description: "Tạo Swagger (OpenAPI) và viết tài liệu README chuẩn chỉnh." }
    ]
  },
  {
    title: "Front-end & Tooling",
    description: "Hỗ trợ phát triển giao diện người dùng và quản lý dự án.",
    iconName: "Layout",
    skills: [
      { name: "React / Vue3 / Uniapp", level: "Intermediate", description: "Lập trình giao diện Single-Page và ứng dụng đa nền tảng." },
      { name: "Git & GitLab Flow", level: "Expert", description: "Quản lý phiên bản mã nguồn, nhánh phát triển và review code." },
      { name: "Jira & Agile/Scrum", level: "Advanced", description: "Quản lý công việc và tiến độ dự án chuyên nghiệp." }
    ]
  }
];

const aiQAVi: QAItem[] = [
  {
    keywords: ["chào", "hello", "hi", "ai", "là ai", "giới thiệu"],
    answer: "Xin chào! Tôi là Trợ lý ảo của anh Đỗ Quốc Huy. Đây là Khu vườn tri thức số (Digital Garden) của anh Huy, nơi anh ghi chép lại các kiến thức chuyên sâu về NestJS, Python, gRPC, RabbitMQ, kiến trúc CQRS/Saga và bảo mật SSO. Bạn muốn tìm hiểu thông tin nào?"
  },
  {
    keywords: ["kỹ năng", "công nghệ", "skill", "tech stack", "biết gì", "ngôn ngữ"],
    answer: "Kỹ năng chính của anh Huy gồm: Backend (NodeJS/NestJS, Express, FastAPI, Java), Database (MySQL, PostgreSQL, MongoDB, Redis), Microservices (REST, gRPC, RabbitMQ), DevOps (Docker, CI/CD, AWS EC2) và Frontend cơ bản (React, Vue3, Uniapp)."
  },
  {
    keywords: ["kinh nghiệm", "làm việc", "công ty", "lịch sử"],
    answer: "Anh Huy từng làm việc tại: 1. Beatcolor (08/2025 - Hiện tại): Backend Developer chuyên trách gRPC, RabbitMQ, Saga, Outbox, CQRS. 2. LifeteX (05/2024 - 06/2025): Backend Developer chuyên trách REST/GraphQL, MySQL/Postgre/MongoDB, Data Encryption. 3. GSS: Th��c tập sinh."
  },
  {
    keywords: ["sso", "identity", "oauth2", "oidc", "saml", "dự án"],
    answer: "Anh Huy đã phát triển dự án cá nhân nổi bật là 'SSO Identity Server' (NestJS, MySQL, Redis, SAML 2.0, OAuth 2.0, OIDC). Dự án hỗ trợ MFA, FIDO2/WebAuthn, Social Login, SSO và SLO."
  },
  {
    keywords: ["lệnh", "terminal", "console", "gõ gì"],
    answer: "Bạn có thể gõ các câu lệnh: 'skills' (kỹ năng), 'projects' (dự án), 'contact' (liên hệ), 'about' (giới thiệu) hoặc 'clear' để làm việc trực tiếp trên Terminal của trang web này!"
  }
];

const contactFallbackVi = {
  bio: "Software Engineer & Digital Garden Owner",
  location: "Thanh Xuân - Hà Nội",
};

const scaleVi = {
  Beatcolor: [
    "Xử lý hàng triệu ảnh/video",
    "99.95% uptime trên 20+ services",
    "1M+ requests mỗi ngày",
  ],
  LifeteX: [
    "Hệ thống doanh nghiệp cho khối chính phủ và công ty",
    "Hàng triệu giao dịch mỗi ngày",
    "Tối ưu nhiều loại database",
  ],
  default: ["Nền tảng phát triển game"],
};

const educationEn: EducationType[] = [
  {
    schoolName: "Phu Xuan University (Hue)",
    subHeader: "Bachelor of Information Technology",
    duration: "2020 - 2024",
    desc: "Graduated in Information Technology with a software development orientation.",
  },
];

const experienceEn: ExperienceType[] = [
  {
    role: "Back-end Developer",
    company: "Beatcolor",
    date: "08/2025 - Present",
    desc: "Beatcolor processes images, videos, and 3D assets for international customers and B2B solutions.",
    descBullets: [
      "Built REST, GraphQL, and Socket protocols.",
      "Designed inter-service communication with gRPC and RabbitMQ.",
      "Designed complex service architecture with CQRS, Saga, and Outbox.",
      "Designed optimized storage with Database, Cache, and Snapshot strategies.",
    ],
  },
  {
    role: "Back-end Developer",
    company: "LifeteX",
    date: "05/2024 - 06/2025",
    desc: "LifeteX provides comprehensive management software for enterprises and government organizations.",
    descBullets: [
      "Built RESTful APIs and GraphQL APIs.",
      "Designed, queried, and optimized MySQL, PostgreSQL, and MongoDB databases.",
      "Developed backend services with Node.js (NestJS/Express), Python, and Java.",
      "Integrated authentication, authorization, and data encryption.",
    ],
  },
  {
    role: "Game Developer Intern",
    company: "GSS",
    date: "07/2023 - 10/2023",
    desc: "Founded in 2010, GSS specializes in game programming and is a strong technology brand in Hue.",
  },
];

const projectsEn: ProjectType[] = [
  {
    name: "SSO Identity Server",
    desc: "A centralized user management server supporting SAML 2.0, OAuth 2.0, and OpenID Connect (OIDC). It integrates MFA, Google Authenticator, Social Login, FIDO2/WebAuthn, Single Sign-On (SSO), and Single Logout (SLO), with a direction similar to Apache Knox and WSO2 IS.",
    github: "https://gitlab.com/DQH8391/sso-identity-server.git",
    tags: ["NestJS", "MySQL", "Redis", "SAML 2.0", "OAuth2", "OIDC"],
    stars: 95,
    metrics: {
      users: "1000+",
      qps: "10k/sec",
      uptime: "99.95%",
      latency: "< 100ms"
    },
    highlights: [
      "Implemented SAML 2.0 protocol with XML encryption",
      "Multi-factor authentication (MFA) with Google Authenticator",
      "FIDO2/WebAuthn for passwordless authentication",
      "Single Sign-On (SSO) and Single Logout (SLO)",
      "Session management with Redis cache (TTL-based)",
    ],
    architecture: {
      description: "Centralized identity server with load-balanced NestJS instances, MySQL primary-replica setup, Redis session cache, and event-driven SSO flows via RabbitMQ for audit logging and external integrations."
    }
  }
];

const skillCategoriesEn = skillCategoriesVi;

const aiQAEn: QAItem[] = [
  {
    keywords: ["hello", "hi", "who", "about", "intro", "introduce"],
    answer:
      "Hello! I am the virtual assistant for Do Quoc Huy. This Digital Garden shares Huy's work across NestJS, Python, gRPC, RabbitMQ, CQRS/Saga architecture, and SSO security. What would you like to explore?",
  },
  {
    keywords: ["skill", "technology", "tech stack", "language"],
    answer:
      "Huy's main skills include Backend (NodeJS/NestJS, Express, FastAPI, Java), Database (MySQL, PostgreSQL, MongoDB, Redis), Microservices (REST, gRPC, RabbitMQ), DevOps (Docker, CI/CD, AWS EC2), and basic Frontend (React, Vue3, Uniapp).",
  },
  {
    keywords: ["experience", "work", "company", "history"],
    answer:
      "Huy has worked at Beatcolor as a Backend Developer focused on gRPC, RabbitMQ, Saga, Outbox, and CQRS; at LifeteX as a Backend Developer focused on REST/GraphQL, databases, and encryption; and at GSS as a Game Developer Intern.",
  },
  {
    keywords: ["sso", "identity", "oauth2", "oidc", "saml", "project"],
    answer:
      "Huy built SSO Identity Server with NestJS, MySQL, Redis, SAML 2.0, OAuth 2.0, and OIDC. It supports MFA, FIDO2/WebAuthn, Social Login, SSO, and SLO.",
  },
];

const contactFallbackEn = {
  bio: "Software Engineer & Digital Garden Owner",
  location: "Thanh Xuan - Hanoi",
};

const scaleEn = {
  Beatcolor: [
    "Processing millions of images/videos",
    "99.95% uptime across 20+ services",
    "1M+ requests daily",
  ],
  LifeteX: [
    "Enterprise systems for government & corporate",
    "Millions of daily transactions",
    "Multi-database optimization",
  ],
  default: ["Game development platform"],
};

const deliverablesVi: DeliverableType[] = [
  {
    id: "sso_server",
    category: "Auth & Security",
    name: "SSO Identity Server",
    description:
      "Nền tảng đăng nhập một lần cấp doanh nghiệp hỗ trợ SAML 2.0, OAuth 2.0, OIDC, MFA và FIDO2.",
    tags: ["NestJS", "MySQL", "Redis", "SAML", "OAuth2", "OIDC"],
    achievement: "95 sao trên GitLab",
  },
  {
    id: "grpc_gateway",
    category: "Microservices",
    name: "gRPC Service Mesh",
    description:
      "Lớp giao tiếp hiệu năng cao giữa các service bằng Protocol Buffers và cân bằng tải cho hệ phân tán.",
    tags: ["gRPC", "Protocol Buffers", "Load Balancing"],
    achievement: "Kết nối 20+ services",
  },
  {
    id: "saga_pattern",
    category: "Microservices",
    name: "Distributed Saga Orchestrator",
    description:
      "Quản lý giao dịch phân tán tin cậy với compensating transactions và cơ chế phục hồi lỗi.",
    tags: ["Saga Pattern", "RabbitMQ", "NestJS"],
    achievement: "Đảm bảo không mất dữ liệu",
  },
  {
    id: "outbox_pattern",
    category: "Microservices",
    name: "Transactional Outbox",
    description:
      "Hệ thống đảm bảo truyền tin at-least-once giữa các service bằng hàng đợi dựa trên database.",
    tags: ["Outbox Pattern", "PostgreSQL", "Go Worker"],
    achievement: "99.99% tỉ lệ gửi thành công",
  },
  {
    id: "postgres_replication",
    category: "Database Systems",
    name: "Master-Replica Setup",
    description:
      "Kiến trúc PostgreSQL replication tách đọc/ghi để phục vụ workload dữ liệu cấp doanh nghiệp.",
    tags: ["PostgreSQL", "Replication", "Query Optimization"],
    achievement: "1M+ giao dịch mỗi ngày",
  },
  {
    id: "redis_cache",
    category: "Database Systems",
    name: "Redis Cache Strategy",
    description:
      "Lớp cache hiệu năng cao cho session storage, distributed locking và chiến lược invalidation.",
    tags: ["Redis", "Cache", "Session Management"],
    achievement: "94%+ cache hit rate",
  },
  {
    id: "api_gateway",
    category: "Infrastructure",
    name: "API Gateway & Routing",
    description:
      "Định tuyến request tập trung với xác thực, rate limiting và biến đổi request cho client apps.",
    tags: ["NestJS", "REST", "GraphQL"],
    achievement: "Phục vụ 1M+ request mỗi ngày",
  },
  {
    id: "ci_cd",
    category: "Infrastructure",
    name: "CI/CD Pipeline Automation",
    description:
      "Pipeline triển khai tự động với Docker, kiểm thử và rollout staging/production.",
    tags: ["Docker", "GitLab CI", "AWS EC2"],
    achievement: "Triển khai không downtime",
  },
  {
    id: "fido2_auth",
    category: "Auth & Security",
    name: "FIDO2 & WebAuthn",
    description:
      "Xác thực không mật khẩu bằng security key phần cứng và biometric verification.",
    tags: ["FIDO2", "WebAuthn", "Biometric"],
    achievement: "Chuẩn bảo mật doanh nghiệp",
  },
];

const deliverablesEn: DeliverableType[] = deliverablesVi.map((item) => {
  const translations: Record<string, { description: string; achievement: string }> = {
    sso_server: {
      description:
        "Enterprise-grade single sign-on platform supporting SAML 2.0, OAuth 2.0, OIDC with MFA and FIDO2 authentication.",
      achievement: "95 stars on GitLab",
    },
    grpc_gateway: {
      description:
        "High-performance inter-service communication layer with protocol buffers and load balancing across distributed services.",
      achievement: "20+ services connected",
    },
    saga_pattern: {
      description:
        "Reliable transaction management across microservices with compensating transactions and failure recovery.",
      achievement: "Zero data loss guarantee",
    },
    outbox_pattern: {
      description:
        "Message reliability system ensuring at-least-once delivery between services using database-backed message queuing.",
      achievement: "99.99% delivery rate",
    },
    postgres_replication: {
      description:
        "PostgreSQL replication architecture with read/write separation for enterprise-scale data workloads.",
      achievement: "1M+ daily transactions",
    },
    redis_cache: {
      description:
        "High-performance caching layer with session storage, distributed locking, and cache invalidation patterns.",
      achievement: "94%+ hit rate",
    },
    api_gateway: {
      description:
        "Centralized request routing with authentication, rate limiting, and request transformation for client applications.",
      achievement: "Serving 1M+ daily requests",
    },
    ci_cd: {
      description:
        "Automated deployment pipeline with Docker containerization, testing, and staging/production rollout.",
      achievement: "Zero-downtime deployments",
    },
    fido2_auth: {
      description:
        "Passwordless authentication using hardware security keys and biometric verification for enhanced security.",
      achievement: "Enterprise security standard",
    },
  };

  const en = translations[item.id];
  return { ...item, description: en.description, achievement: en.achievement };
});

export const localizedPortfolio: Record<Language, LocalizedPortfolioContent> = {
  vi: {
    greetings: {
      name: "Đỗ Quốc Huy",
      title: "Đỗ Quốc Huy",
      subtitle: "Software Engineer & Digital Garden Owner",
      description:
        "Chào mừng bạn đến với Khu vườn Tri thức Số (Digital Garden) của tôi. Đây là nơi tôi ghi lại hành trình nghiên cứu công nghệ, ghi chú hệ thống phân tán, bảo mật SSO và các trải nghiệm lập trình Back-end hàng ngày.",
      resumeLink: "#",
    },
    educationInfo: educationVi,
    experience: experienceVi,
    projects: projectsVi,
    skillCategories: skillCategoriesVi,
    deliverables: deliverablesVi,
    aiQA: aiQAVi,
    contactFallback: contactFallbackVi,
    scale: scaleVi,
  },
  en: {
    greetings: {
      name: "Do Quoc Huy",
      title: "Do Quoc Huy",
      subtitle: "Software Engineer & Digital Garden Owner",
      description:
        "Welcome to my Digital Garden. This is where I document my research journey across backend engineering, distributed systems, SSO security, and day-to-day software development.",
      resumeLink: "#",
    },
    educationInfo: educationEn,
    experience: experienceEn,
    projects: projectsEn,
    skillCategories: skillCategoriesEn,
    deliverables: deliverablesEn,
    aiQA: aiQAEn,
    contactFallback: contactFallbackEn,
    scale: scaleEn,
  },
};
