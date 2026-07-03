import type { DeliverableType, EducationType, ExperienceType, Language, LocalizedPortfolioContent, ProjectType, QAItem, SkillCategory } from "./types";

export const uiTranslations = {
  vi: {
    navAbout: "Giới thiệu",
    navExperience: "Kinh nghiệm",
    navBuilt: "Sản phẩm",
    navProjects: "Dự án",
    navContact: "Liên hệ",
    navEducation: "Học vấn",
    themeToggle: "Đổi giao diện",
    languageToggle: "Đổi ngôn ngữ",
    heroTitle: "Software Engineer · Backend Systems",
    heroDescription:
      "Tôi phát triển phần mềm với trọng tâm ở backend systems, API, microservices và database. Tập trung vào tính ổn định, khả năng mở rộng và giải quyết bài toán thực tế.",
    heroExperience: "Kinh nghiệm",
    heroResume: "CV",
    experienceTitle: "Kinh nghiệm",
    builtTitle: "Sản phẩm tôi đã xây dựng",
    projectsTitle: "Dự án",
    educationTitle: "Học vấn",
    contactTitle: "Liên hệ",
    aboutTitle: "Về bản thân",
    aboutIntro:
      "Tôi hướng tới việc xây dựng các hệ thống có thiết kế chuẩn hóa, vận hành ổn định và cấu trúc mạch lạc, giúp toàn đội ngũ dễ dàng tiếp quản và phát triển tiếp mà không bị rối.",
    aboutHistory:
      "Tôi ưu tiên cách tiếp cận thực tế: thống nhất chuẩn kết nối (API contracts) trước khi triển khai, đánh giá hiệu năng dựa trên số liệu thực tế, và xây dựng cơ chế tự phục hồi thay vì giả định hệ thống luôn chạy ổn định.",
    aboutCard1Title: "Contract-first",
    aboutCard1Desc: "Thống nhất rõ ràng interface trước khi viết logic để Front-end và Back-end phát triển song song, giảm thiểu tối đa việc sửa đổi lại (rework).",
    aboutCard2Title: "Reliability by design",
    aboutCard2Desc: "Áp dụng cơ chế retry, idempotency (tính toàn vẹn) và Outbox pattern để đảm bảo tính sẵn sàng cao, thay vì giả định đường truyền mạng luôn hoạt động tốt.",
    aboutCard3Title: "Tối ưu dựa trên dữ liệu",
    aboutCard3Desc: "Luôn sử dụng EXPLAIN ANALYZE, benchmark hiệu năng và ghi log chi tiết để tìm đúng điểm nghẽn trước khi quyết định thêm cache hay index mới.",
    landingIntroTitle: "Systems that stay usable when they grow",
    landingIntroDescription:
      "I build software systems with clear contracts, reliable messaging, and practical performance work. The goal is not just to ship features, but to keep the system understandable and maintainable as it scales.",
    landingIntroFocus1Title: "API contracts",
    landingIntroFocus1Desc: "OpenAPI, gRPC, and API design that let teams move in parallel with less friction.",
    landingIntroFocus2Title: "Identity & security",
    landingIntroFocus2Desc: "SSO, OAuth2, OIDC, SAML, and auth flows built with a security-first mindset.",
    landingIntroFocus3Title: "Performance work",
    landingIntroFocus3Desc: "PostgreSQL tuning, caching, and operational discipline that keep services predictable.",
    footerRights: "Bản quyền được bảo lưu.",
    openToWork: "Đang tìm việc",
    openToWorkLong: "Đang tìm kiếm cơ hội mới",
    heroContact: "Liên hệ",
    heroYearsExp: "3+ năm kinh nghiệm",
    heroLocation: "Hà Nội, Việt Nam",
    contactHeadline: "Hãy cùng xây dựng điều gì đó tốt hơn.",
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
    assistantGreeting:
      "Xin chào! Tôi là Trợ lý Tuyển dụng ảo. Bạn cần tìm hiểu thông tin gì về hồ sơ này?",
    assistantFallback:
      "Xin lỗi, tôi chưa có thông tin chi tiết về câu hỏi này. Bạn có thể gõ các câu hỏi ngắn về 'kỹ năng', 'kinh nghiệm', 'dự án', hoặc 'liên hệ' để tôi hỗ trợ nhanh nhất nhé!",
  },
  en: {
    navAbout: "About",
    navExperience: "Experience",
    navBuilt: "Built",
    navProjects: "Projects",
    navContact: "Contact",
    navEducation: "Education",
    themeToggle: "Toggle theme",
    languageToggle: "Change language",
    heroTitle: "Software Engineer · Backend Systems",
    heroDescription:
      "I build software with a focus on backend systems, APIs, microservices, and databases. I focus on reliability, scalability, and practical problem solving.",
    heroExperience: "Experience",
    heroResume: "Resume",
    experienceTitle: "Experience",
    builtTitle: "Things I've Built",
    projectsTitle: "Projects",
    educationTitle: "Education",
    contactTitle: "Get in Touch",
    aboutTitle: "About Me",
    aboutIntro:
      "I prefer systems with clear contracts, stable operations, and a shape that lets the team keep moving without getting tangled.",
    aboutHistory:
      "My working style is practical: define the contract first, measure before optimizing, and rely on mechanisms instead of hoping the network stays kind.",
    aboutCard1Title: "Contract-first",
    aboutCard1Desc: "Define interfaces before implementation so backend and frontend can move in parallel with less rework.",
    aboutCard2Title: "Reliability by design",
    aboutCard2Desc: "Use retry, idempotency, outbox, and recovery mechanisms instead of assuming the network will behave.",
    aboutCard3Title: "Measure before optimizing",
    aboutCard3Desc: "Use EXPLAIN ANALYZE, benchmarks, and the right logs before adding a cache or a new index.",
    landingIntroTitle: "Systems that stay usable when they grow",
    landingIntroDescription:
      "I build software systems with clear contracts, reliable messaging, and practical performance work. The goal is not just to ship features, but to keep the system understandable and maintainable as it scales.",
    landingIntroFocus1Title: "API contracts",
    landingIntroFocus1Desc: "OpenAPI, gRPC, and API design that let teams move in parallel with less friction.",
    landingIntroFocus2Title: "Identity & security",
    landingIntroFocus2Desc: "SSO, OAuth2, OIDC, SAML, and auth flows built with a security-first mindset.",
    landingIntroFocus3Title: "Performance work",
    landingIntroFocus3Desc: "PostgreSQL tuning, caching, and operational discipline that keep services predictable.",
    footerRights: "All rights reserved.",
    openToWork: "Open to Work",
    openToWorkLong: "Open to New Opportunities",
    heroContact: "Get in Touch",
    heroYearsExp: "3+ years experience",
    heroLocation: "Hanoi, Vietnam",
    contactHeadline: "Let's build something great together.",
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
    assistantGreeting:
      "Hello! I am the virtual recruiter assistant. Ask me about experience, skills, projects, or contact information.",
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
    role: "Software Engineer",
    company: "Beatcolor",
    date: "08/2025 - Hiện tại",
    desc: "Beatcolor là công ty xử lý ảnh, video, 3D phục vụ khách hàng quốc tế và cung cấp giải pháp B2B.",
    descBullets: [
      "Phát triển lớp API cho pipeline xử lý ảnh/video, kết hợp REST, GraphQL và WebSocket cho các luồng tương tác khác nhau.",
      "Triển khai giao tiếp inter-service bằng gRPC và RabbitMQ để tách rõ luồng đồng bộ và bất đồng bộ.",
      "Áp dụng CQRS, Saga và Outbox cho các luồng nghiệp vụ cần tính nhất quán cao giữa nhiều service.",
      "Tối ưu truy cập dữ liệu bằng chiến lược cache, snapshot và tổ chức lưu trữ phù hợp với từng loại tác vụ.",
    ],
    stack: ["NestJS", "gRPC", "RabbitMQ", "PostgreSQL", "Docker", "CQRS"],
  },
  {
    role: "Software Engineer",
    company: "LifeteX",
    date: "05/2024 - 06/2025",
    desc: "LifeteX là công ty cung cấp phần mềm quản trị toàn diện cho doanh nghiệp và Chính phủ.",
    descBullets: [
      "Xây dựng RESTful API và GraphQL API cho các module quản trị doanh nghiệp.",
      "Tối ưu truy vấn trên MySQL, PostgreSQL và MongoDB để giữ hệ thống ổn định khi dữ liệu tăng.",
      "Phát triển backend bằng Node.js (NestJS/Express), Python và Java tùy theo bài toán.",
      "Tích hợp authentication, authorization và mã hóa dữ liệu cho các luồng nghiệp vụ quan trọng.",
    ],
    stack: ["Node.js", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Python"],
  },
  {
    role: "Game Developer Intern",
    company: "GSS",
    date: "07/2023 - 10/2023",
    desc: "Thành lập năm 2010, chuyên về lập trình game. Thương hiệu công nghệ mạnh tại Thừa Thiên Huế.",
    descBullets: ["Tham gia phát triển game với Unity/C# và làm quen quy trình làm việc nhóm cùng version control."],
    stack: ["Unity", "C#"],
  }
];

const projectsVi: ProjectType[] = [
  {
    name: "SSO Identity Server",
    desc: "Máy chủ quản lý người dùng tập trung hỗ trợ SAML 2.0, OAuth 2.0 và OpenID Connect (OIDC). Tích hợp xác thực đa yếu tố, Google Authenticator, Social Login, FIDO2/WebAuthn, Single Sign-On (SSO) và Single Logout (SLO).",
    github: "https://gitlab.com/DQH8391/sso-identity-server.git",
    tags: ["NestJS", "MySQL", "Redis", "SAML 2.0", "OAuth2", "OIDC"],
    highlights: [
      "Tích hợp SAML 2.0 và OpenID Connect cho luồng đăng nhập tập trung.",
      "Thêm MFA, Google Authenticator và social login cho các luồng xác thực phổ biến.",
      "Nghiên cứu FIDO2/WebAuthn cho hướng xác thực không mật khẩu.",
      "Quản lý phiên đăng nhập bằng Redis cache và TTL-based session handling.",
    ],
    architecture: {
      description: "Centralized identity server with NestJS, MySQL, Redis session cache, and event-driven SSO flows."
    }
  }
];

const skillCategoriesVi: SkillCategory[] = [
  {
    title: "Back-end & Core Logic",
    description: "Thiết kế các API bảo mật, xử lý logic lõi và kết nối dịch vụ hiệu năng cao.",
    iconName: "Terminal",
    skills: [
      { name: "Node.js (NestJS / ExpressJS)", level: "Advanced", description: "Xây dựng các backend vững chắc và cấu trúc mô-đun chuẩn." },
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
      { name: "PostgreSQL & MySQL", level: "Advanced", description: "Thiết kế, chuẩn hóa và tối ưu hóa truy vấn cơ sở dữ liệu quan hệ." },
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
      { name: "Docker Containerization", level: "Advanced", description: "Đóng gói mã nguồn và triển khai trên các môi trường đồng bộ." },
      { name: "CI/CD & AWS EC2", level: "Advanced", description: "Triển khai dịch vụ tự động hóa và quản lý máy chủ đám mây Linux." },
      { name: "Swagger & Technical Docs", level: "Advanced", description: "Tạo Swagger (OpenAPI) và viết tài liệu README chuẩn chỉnh." }
    ]
  },
  {
    title: "Front-end & Tooling",
    description: "Hỗ trợ phát triển giao diện người dùng và quản lý dự án.",
    iconName: "Layout",
    skills: [
      { name: "React / Vue3 / Uniapp", level: "Intermediate", description: "Lập trình giao diện Single-Page và ứng dụng đa nền tảng." },
      { name: "Git & GitLab Flow", level: "Advanced", description: "Quản lý phiên bản mã nguồn, nhánh phát triển và review code." },
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
  bio: "Software Engineer · Backend Systems",
  location: "Hà Nội, Việt Nam",
};

const scaleVi = {
  Beatcolor: [
    "Hệ thống xử lý ảnh/video cho khách hàng quốc tế",
    "Giao tiếp giữa nhiều service bằng gRPC và RabbitMQ",
    "Luồng nghiệp vụ ưu tiên tính ổn định và khả năng mở rộng",
  ],
  LifeteX: [
    "Phần mềm quản trị cho doanh nghiệp và khối chính phủ",
    "Nhiều module nghiệp vụ với dữ liệu lớn",
    "Tối ưu MySQL, PostgreSQL và MongoDB theo nhu cầu thực tế",
  ],
  default: ["Nền tảng phát triển game và quy trình làm việc nhóm"],
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
    role: "Software Engineer",
    company: "Beatcolor",
    date: "08/2025 - Present",
    desc: "Beatcolor processes images, videos, and 3D assets for international customers and B2B solutions.",
    descBullets: [
      "Built REST, GraphQL, and Socket protocols.",
      "Designed inter-service communication with gRPC and RabbitMQ.",
      "Designed complex service architecture with CQRS, Saga, and Outbox.",
      "Designed optimized storage with Database, Cache, and Snapshot strategies.",
    ],
    stack: ["NestJS", "gRPC", "RabbitMQ", "PostgreSQL", "Docker", "CQRS"],
  },
  {
    role: "Software Engineer",
    company: "LifeteX",
    date: "05/2024 - 06/2025",
    desc: "LifeteX provides comprehensive management software for enterprises and government organizations.",
    descBullets: [
      "Built RESTful APIs and GraphQL APIs.",
      "Designed, queried, and optimized MySQL, PostgreSQL, and MongoDB databases.",
      "Developed backend services with Node.js (NestJS/Express), Python, and Java.",
      "Integrated authentication, authorization, and data encryption.",
    ],
    stack: ["Node.js", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Python"],
  },
  {
    role: "Game Developer Intern",
    company: "GSS",
    date: "07/2023 - 10/2023",
    desc: "Founded in 2010, GSS specializes in game programming and is a strong technology brand in Hue.",
    stack: ["Unity", "C#"],
  },
];

const projectsEn: ProjectType[] = [
  {
    name: "SSO Identity Server",
    desc: "A centralized user management server supporting SAML 2.0, OAuth 2.0, and OpenID Connect (OIDC). It integrates MFA, Google Authenticator, Social Login, FIDO2/WebAuthn, Single Sign-On (SSO), and Single Logout (SLO).",
    github: "https://gitlab.com/DQH8391/sso-identity-server.git",
    tags: ["NestJS", "MySQL", "Redis", "SAML 2.0", "OAuth2", "OIDC"],
    highlights: [
      "Integrated SAML 2.0 and OpenID Connect for centralized login flows.",
      "Added MFA, Google Authenticator, and social login support.",
      "Explored FIDO2/WebAuthn as a passwordless authentication direction.",
      "Managed login sessions with Redis cache and TTL-based handling.",
    ],
    architecture: {
      description: "Centralized identity server with NestJS, MySQL, Redis session cache, and event-driven SSO flows."
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
  bio: "Software Engineer · Backend Systems",
  location: "Hanoi, Vietnam",
};

const scaleEn = {
  Beatcolor: [
    "Image/video processing systems for international customers",
    "Inter-service communication with gRPC and RabbitMQ",
    "Operationally stable and scalable backend workflows",
  ],
  LifeteX: [
    "Enterprise software for corporate and public-sector use",
    "Large-scale business modules with growing data volume",
    "Practical optimization across MySQL, PostgreSQL, and MongoDB",
  ],
  default: ["Game development and team workflow foundations"],
};

const deliverablesVi: DeliverableType[] = [
  {
    id: "sso_server",
    category: "Auth & Security",
    name: "SSO Identity Server",
    description:
      "Nền tảng đăng nhập một lần cấp doanh nghiệp hỗ trợ SAML 2.0, OAuth 2.0, OIDC, MFA và FIDO2.",
    tags: ["NestJS", "MySQL", "Redis", "SAML", "OAuth2", "OIDC"],
    achievement: "Đã triển khai trong dự án cá nhân",
  },
  {
    id: "grpc_gateway",
    category: "Microservices",
    name: "gRPC Service Mesh",
    description:
      "Lớp giao tiếp hiệu năng cao giữa các service bằng Protocol Buffers và cân bằng tải cho hệ phân tán.",
    tags: ["gRPC", "Protocol Buffers", "Load Balancing"],
    achievement: "Kết nối nhiều service qua gRPC",
  },
  {
    id: "saga_pattern",
    category: "Microservices",
    name: "Distributed Saga Orchestrator",
    description:
      "Quản lý giao dịch phân tán tin cậy với compensating transactions và cơ chế phục hồi lỗi.",
    tags: ["Saga Pattern", "RabbitMQ", "NestJS"],
    achievement: "Giảm rủi ro sai lệch dữ liệu giữa các bước",
  },
  {
    id: "outbox_pattern",
    category: "Microservices",
    name: "Transactional Outbox",
    description:
      "Hệ thống đảm bảo truyền tin at-least-once giữa các service bằng hàng đợi dựa trên database.",
    tags: ["Outbox Pattern", "PostgreSQL", "Go Worker"],
    achievement: "Đảm bảo luồng gửi tin cậy hơn",
  },
  {
    id: "postgres_replication",
    category: "Database Systems",
    name: "Master-Replica Setup",
    description:
      "Kiến trúc PostgreSQL replication tách đọc/ghi để phục vụ workload dữ liệu cấp doanh nghiệp.",
    tags: ["PostgreSQL", "Replication", "Query Optimization"],
    achievement: "Phục vụ workload dữ liệu lớn",
  },
  {
    id: "redis_cache",
    category: "Database Systems",
    name: "Redis Cache Strategy",
    description:
      "Lớp cache hiệu năng cao cho session storage, distributed locking và chiến lược invalidation.",
    tags: ["Redis", "Cache", "Session Management"],
    achievement: "Giảm tải cho database chính",
  },
  {
    id: "api_gateway",
    category: "Infrastructure",
    name: "API Gateway & Routing",
    description:
      "Định tuyến request tập trung với xác thực, rate limiting và biến đổi request cho client apps.",
    tags: ["NestJS", "REST", "GraphQL"],
    achievement: "Hỗ trợ định tuyến request tập trung",
  },
  {
    id: "ci_cd",
    category: "Infrastructure",
    name: "CI/CD Pipeline Automation",
    description:
      "Pipeline triển khai tự động với Docker, kiểm thử và rollout staging/production.",
    tags: ["Docker", "GitLab CI", "AWS EC2"],
    achievement: "Quy trình triển khai ổn định",
  },
  {
    id: "fido2_auth",
    category: "Auth & Security",
    name: "FIDO2 & WebAuthn",
    description:
      "Xác thực không mật khẩu bằng security key phần cứng và biometric verification.",
    tags: ["FIDO2", "WebAuthn", "Biometric"],
    achievement: "Hướng tới xác thực an toàn hơn",
  },
];

const deliverablesEn: DeliverableType[] = deliverablesVi.map((item) => {
  const translations: Record<string, { description: string; achievement: string }> = {
    sso_server: {
      description:
        "Enterprise-grade single sign-on platform supporting SAML 2.0, OAuth 2.0, OIDC with MFA and FIDO2 authentication.",
      achievement: "Personal project implementation",
    },
    grpc_gateway: {
      description:
        "High-performance inter-service communication layer with protocol buffers and load balancing across distributed services.",
      achievement: "Connected multiple services via gRPC",
    },
    saga_pattern: {
      description:
        "Reliable transaction management across microservices with compensating transactions and failure recovery.",
      achievement: "Reduced inconsistency risk between steps",
    },
    outbox_pattern: {
      description:
        "Message reliability system ensuring at-least-once delivery between services using database-backed message queuing.",
      achievement: "Improved delivery reliability",
    },
    postgres_replication: {
      description:
        "PostgreSQL replication architecture with read/write separation for enterprise-scale data workloads.",
      achievement: "Handled large data workloads",
    },
    redis_cache: {
      description:
        "High-performance caching layer with session storage, distributed locking, and cache invalidation patterns.",
      achievement: "Reduced load on the primary database",
    },
    api_gateway: {
      description:
        "Centralized request routing with authentication, rate limiting, and request transformation for client applications.",
      achievement: "Centralized request routing support",
    },
    ci_cd: {
      description:
        "Automated deployment pipeline with Docker containerization, testing, and staging/production rollout.",
      achievement: "Stable deployment workflow",
    },
    fido2_auth: {
      description:
        "Passwordless authentication using hardware security keys and biometric verification for enhanced security.",
      achievement: "A more secure auth direction",
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
      subtitle: "Software Engineer · Backend Systems",
      description:
        "Software engineer với kinh nghiệm làm việc trên backend systems, microservices, identity server (SSO/OIDC/SAML) và tối ưu database. Hiện tôi đang phát triển hạ tầng xử lý ảnh/video quy mô lớn tại Beatcolor.",
      resumeLink: "",
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
      subtitle: "Software Engineer · Backend Systems",
      description:
        "Software engineer with experience in backend systems, microservices, identity servers (SSO/OIDC/SAML), and database optimization. I am currently building large-scale image/video processing infrastructure at Beatcolor.",
      resumeLink: "",
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
