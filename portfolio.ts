export interface AdvancedSkill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: AdvancedSkill[];
}

export interface QAItem {
  keywords: string[];
  answer: string;
}

export interface SystemArchitecture {
  title: string;
  description: string;
  nodes: { id: string; label: string; type: "client" | "gateway" | "service" | "db" | "cache"; status: "active" | "standby" }[];
  connections: { from: string; to: string; label?: string }[];
}

export interface Note {
  id: string;
  title: string;
  stage: "seedling" | "growing" | "evergreen";
  tags: string[];
  content: string;
  updatedAt: string;
}

export interface GraphNode {
  id: string;
  label: string;
  type: "skill" | "project" | "note" | "experience";
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export interface ProjectType {
  name: string;
  desc: string;
  github?: string;
  link?: string;
  tags: string[];
  stars?: number;
  metrics?: {
    users?: string;
    qps?: string;
    uptime?: string;
    latency?: string;
  };
  highlights?: string[];
  architecture?: {
    description: string;
  };
}

export interface DeliverableType {
  id: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  achievement: string;
}

export interface EducationType {
  schoolName: string;
  subHeader: string;
  duration: string;
  desc: string;
  grade?: string;
  descBullets?: string[];
}

export interface ExperienceType {
  role: string;
  company: string;
  companyLogo?: string;
  date: string;
  desc: string;
  descBullets?: string[];
}

export const greetings = {
  name: "Đỗ Quốc Huy",
  title: "Đỗ Quốc Huy",
  subtitle: "Software Engineer & Digital Garden Owner",
  description:
    "Chào mừng bạn đến với Khu vườn Tri thức Số (Digital Garden) của tôi. Đây là nơi tôi ghi lại hành trình nghiên cứu công nghệ, ghi chú hệ thống phân tán, bảo mật SSO và các trải nghiệm lập trình Back-end hàng ngày.",
  resumeLink: "#",
};

export const socialLinks = {
  email: "mailto:dohuy8391@gmail.com",
  phone: "0337 998 303",
  linkedin: "https://linkedin.com/in/quochuy",
  github: "https://gitlab.com/DQH8391",
  gitlab: "https://gitlab.com/DQH8391",
  twitter: "",
};

export const educationInfo: EducationType[] = [
  {
    schoolName: "Trường Đại học Phú Xuân (Huế)",
    subHeader: "Cử nhân Công nghệ Thông tin",
    duration: "2020 - 2024",
    desc: "Tốt nghiệp chuyên ngành Công nghệ Thông tin, định hướng phát triển phần mềm.",
  },
];

export const experience: ExperienceType[] = [
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

export const projects: ProjectType[] = [
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

export const skillCategories: SkillCategory[] = [
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

export const systemArchitecture: SystemArchitecture = {
  title: "Distributed SSO Identity & Microservices Flow",
  description: "Bản vẽ mô phỏng luồng xác thực tập trung SSO (SAML 2.0 / OIDC) kết nối đến các Service trung gian qua gRPC & RabbitMQ.",
  nodes: [
    { id: "client", label: "Client App (React/Vue3)", type: "client", status: "active" },
    { id: "gateway", label: "SSO Identity (NestJS)", type: "gateway", status: "active" },
    { id: "auth", label: "User Database (MySQL)", type: "db", status: "active" },
    { id: "order", label: "Core Service (NodeJS)", type: "service", status: "active" },
    { id: "payment", label: "Event Broker (RabbitMQ)", type: "service", status: "active" },
    { id: "cache", label: "Redis Session Cache", type: "cache", status: "active" }
  ],
  connections: [
    { from: "client", to: "gateway", label: "OIDC Auth" },
    { from: "gateway", to: "auth", label: "Credentials" },
    { from: "gateway", to: "cache", label: "Session TTL" },
    { from: "gateway", to: "order", label: "gRPC Token verify" },
    { from: "order", to: "payment", label: "AMQP Events" }
  ]
};

export const feedbacks = [
  {
    name: "Lãnh đạo Tech tại LifeteX",
    role: "Solution Architect",
    feedback:
      "Huy là một lập trình viên Backend có khả năng nghiên cứu công nghệ sâu rộng. Cậu ấy tự tay triển khai các chuẩn bảo mật phức tạp, cấu trúc API sạch sẽ và tối ưu hóa hệ cơ sở dữ liệu quan hệ vô cùng hiệu quả."
  },
  {
    name: "Quản lý Dự án tại Beatcolor",
    role: "Project Manager",
    feedback:
      "Huy hòa nhập rất nhanh vào các dự án lớn, xử lý tốt các bài toán kiến trúc phân tán (gRPC, RabbitMQ). Cậu ấy viết tài liệu hướng dẫn kỹ thuật cực kỳ chi tiết và dễ đọc."
  }
];

export const graphData: GraphData = {
  nodes: [
    { id: "huy", label: "Đỗ Quốc Huy", type: "skill" },
    { id: "beatcolor", label: "Beatcolor (Current)", type: "experience" },
    { id: "lifetex", label: "LifeteX (Past)", type: "experience" },
    { id: "nestjs", label: "NestJS", type: "skill" },
    { id: "go", label: "Golang", type: "skill" },
    { id: "rabbitmq", label: "RabbitMQ", type: "skill" },
    { id: "grpc", label: "gRPC Communication", type: "skill" },
    { id: "postgres", label: "PostgreSQL Database", type: "skill" },
    { id: "sso_concept", label: "Single Sign-On (SSO)", type: "skill" },
    { id: "sso_proj", label: "SSO Identity Server Project", type: "project" },
    { id: "note_sso", label: "Ghi chú: Thiết kế SSO Identity Server", type: "note" },
    { id: "note_saga", label: "Ghi chú: Saga & Outbox Patterns", type: "note" },
    { id: "note_rabbitmq", label: "Ghi chú: Microservices Message Broker", type: "note" },
    { id: "note_postgres", label: "Ghi chú: Tối ưu PostgreSQL Replication", type: "note" },
    { id: "note_fido2", label: "Ghi chú: Tìm hiểu FIDO2 & WebAuthn", type: "note" }
  ],
  links: [
    { source: "huy", target: "beatcolor" },
    { source: "huy", target: "lifetex" },
    { source: "beatcolor", target: "grpc" },
    { source: "beatcolor", target: "rabbitmq" },
    { source: "beatcolor", target: "note_saga" },
    { source: "lifetex", target: "nestjs" },
    { source: "lifetex", target: "postgres" },
    { source: "lifetex", target: "sso_proj" },
    { source: "nestjs", target: "sso_proj" },
    { source: "sso_proj", target: "sso_concept" },
    { source: "sso_proj", target: "note_sso" },
    { source: "grpc", target: "note_rabbitmq" },
    { source: "rabbitmq", target: "note_rabbitmq" },
    { source: "postgres", target: "note_postgres" },
    { source: "sso_concept", target: "note_fido2" }
  ]
};

export const notes: Note[] = [
  {
    id: "note_sso",
    title: "Thiết kế & Kiến trúc máy chủ SSO Identity Server",
    stage: "evergreen",
    tags: ["Security", "SSO", "OIDC", "SAML2.0", "FIDO2"],
    updatedAt: "2026-05-12",
    content: `
### Kiến trúc Xác thực Tập trung SSO

Để giải quyết bài toán đăng nhập một lần cho hàng loạt dịch vụ, tôi đã xây dựng **SSO Identity Server** dựa trên NestJS và MySQL, tích hợp các giao thức chuẩn hóa bảo mật quốc tế.

#### 1. OAuth 2.0 & OpenID Connect (OIDC)
- Sử dụng quy trình **Authorization Code Flow with PKCE** cho các ứng dụng client (SPA) để ngăn chặn rò rỉ mã xác thực trên trình duyệt.
- Quản lý phiên đăng nhập thông qua cơ chế lưu trữ **Access Token** & **Refresh Token** tự hủy bằng **Redis Cache (TTL)**.

#### 2. Tích hợp SAML 2.0 & FIDO2 (WebAuthn)
- Triển khai trao đổi dữ liệu định danh qua file XML ký số bảo mật của **SAML 2.0**.
- Tích hợp chuẩn **FIDO2 / WebAuthn** giúp xác thực không mật khẩu (passwordless) thông qua cảm biến vân tay hoặc FaceID trên thiết bị của người dùng, nâng cấp tính bảo mật vượt trội.
    `
  },
  {
    id: "note_saga",
    title: "Triển khai Saga & Outbox Pattern trong NestJS/Go",
    stage: "growing",
    tags: ["Architecture", "Microservices", "Design Patterns"],
    updatedAt: "2026-06-15",
    content: `
### Giao dịch Phân tán trong Hệ thống Microservices

Khi tách rời cơ sở dữ liệu cho từng dịch vụ riêng biệt tại Beatcolor, việc duy trì tính nhất quán của dữ liệu là thử thách lớn nhất.

#### 1. Saga Pattern (Orchestrator-based)
- Thay vì dùng 2-Phase Commit gây nghẽn hệ thống, tôi áp dụng **Saga Pattern** sử dụng một bộ điều phối trung tâm.
- Nếu một bước trong chuỗi giao dịch (ví dụ: Thanh toán) thất bại, bộ điều phối sẽ tự động gửi lệnh **Compensating Transactions (Giao dịch bù)** để hủy bỏ các bước trước đó (ví dụ: Đặt chỗ).

#### 2. Transactional Outbox Pattern
- Để đảm bảo tin nhắn gửi đến RabbitMQ không bị mất nếu mạng lỗi, tin nhắn sẽ được ghi trực tiếp vào bảng \`outbox\` trong cùng một database transaction của nghiệp vụ.
- Một worker Go chạy ngầm quét bảng \`outbox\` và đảm bảo tin nhắn được đẩy thành công đến broker ít nhất một lần (**At-least-once delivery**).
    `
  },
  {
    id: "note_rabbitmq",
    title: "Giao tiếp Microservices: gRPC vs RabbitMQ",
    stage: "evergreen",
    tags: ["Microservices", "gRPC", "RabbitMQ", "AMQP"],
    updatedAt: "2026-04-20",
    content: `
### Đồng bộ vs Bất đồng bộ trong Microservices

#### 1. gRPC (Đồng bộ - HTTP/2)
- Sử dụng cho các tác vụ cần phản hồi tức thì giữa các services (ví dụ: Service Order cần xác thực token từ Service Auth).
- Định nghĩa dữ liệu bằng **Protocol Buffers (Proto3)** giúp tối giản dung lượng gói tin và tăng tốc độ serialization/deserialization gấp nhiều lần REST API JSON.

#### 2. RabbitMQ (Bất đồng bộ - AMQP 0-9-1)
- Áp dụng cho các tác vụ tốn tài nguyên và không cần phản hồi ngay (ví dụ: gửi mail, render ảnh 3D tại Beatcolor, xử lý hàng đợi sự kiện).
- Triển khai cơ chế **Publisher Confirms** và **Consumer Acknowledgements** để tránh thất thoát gói tin khi broker hoặc worker bị crash đột ngột.
    `
  },
  {
    id: "note_postgres",
    title: "Tối ưu hóa PostgreSQL & Thiết lập Master-Replica",
    stage: "evergreen",
    tags: ["Database", "PostgreSQL", "Replication", "Optimization"],
    updatedAt: "2026-03-10",
    content: `
### Tối ưu hóa Database cho Hệ thống Doanh nghiệp lớn

Tại LifeteX, cơ sở dữ liệu PostgreSQL chịu tải rất lớn với hàng triệu bản ghi ghi nhận mỗi ngày.

#### 1. Phân tách Đọc/Ghi (Master-Replica Replication)
- Thiết lập **PostgreSQL Streaming Replication**:
  - Dịch vụ Ghi (Write) tương tác trực tiếp với **Master Node**.
  - Dịch vụ Đọc (Read / Reports) được điều hướng hoàn toàn qua **Replica Nodes** để giảm tải tối đa cho Master.

#### 2. Tối ưu hóa Hiệu năng truy vấn (Query Tuning)
- Sử dụng công cụ \`EXPLAIN ANALYZE\` để phát hiện các truy vấn thực hiện quét toàn bảng (Sequential Scan).
- Thiết lập các chỉ mục tối ưu (B-Tree, GIN index cho các cột chứa dữ liệu JSON) và phân chia bảng dữ liệu theo thời gian (Table Partitioning).
    `
  },
  {
    id: "note_fido2",
    title: "Nghiên cứu FIDO2 & WebAuthn cho xác thực Không mật khẩu",
    stage: "seedling",
    tags: ["Security", "Passwordless", "FIDO2", "WebAuthn"],
    updatedAt: "2026-06-20",
    content: `
### Xu hướng Xác thực Không mật khẩu (Passwordless)

Ghi chú này ghi lại quá trình tôi nghiên cứu giao diện và cơ chế hoạt động của tiêu chuẩn **WebAuthn / FIDO2** để tích hợp vào Identity Server.

#### Cơ chế hoạt động của WebAuthn:
1. **Đăng ký (Registration)**: Thiết bị Client tạo cặp khóa mật mã công khai/bí mật. Khóa công khai được gửi lên Server SSO, khóa bí mật được lưu an toàn trong chip bảo mật phần cứng (TPM/Secure Enclave) của máy khách.
2. **Xác thực (Assertion/Login)**: Server gửi một chuỗi thách thức (challenge). Thiết bị client ký số chuỗi này bằng khóa bí mật sau khi người dùng quét vân tay/FaceID và gửi chữ ký lại lên Server để đối chiếu bằng khóa công khai.
- **Lợi ích**: Chống hoàn toàn tấn công Phishing (đánh cắp mật khẩu) và tấn công Replay.
    `
  }
];

export const aiQA = [
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

export type Language = "vi" | "en";

export interface LocalizedPortfolioContent {
  greetings: typeof greetings;
  educationInfo: EducationType[];
  experience: ExperienceType[];
  projects: ProjectType[];
  skillCategories: SkillCategory[];
  deliverables: DeliverableType[];
  aiQA: QAItem[];
  contactFallback: { bio: string; location: string };
  scale: Record<string, string[]>;
}

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

export const localizedPortfolio: Record<Language, LocalizedPortfolioContent> = {
  vi: {
    greetings,
    educationInfo,
    experience,
    projects,
    skillCategories,
    deliverables: deliverablesVi,
    aiQA,
    contactFallback: {
      bio: "Software Engineer & Digital Garden Owner",
      location: "Thanh Xuân - Hà Nội",
    },
    scale: {
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
    },
  },
  en: {
    greetings: {
      ...greetings,
      subtitle: "Software Engineer & Digital Garden Owner",
      description:
        "Welcome to my Digital Garden. This is where I document my research journey across backend engineering, distributed systems, SSO security, and day-to-day software development.",
    },
    educationInfo: [
      {
        schoolName: "Phu Xuan University (Hue)",
        subHeader: "Bachelor of Information Technology",
        duration: "2020 - 2024",
        desc: "Graduated in Information Technology with a software development orientation.",
      },
    ],
    experience: [
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
    ],
    projects: [
      {
        ...projects[0],
        desc: "A centralized user management server supporting SAML 2.0, OAuth 2.0, and OpenID Connect (OIDC). It integrates MFA, Google Authenticator, Social Login, FIDO2/WebAuthn, Single Sign-On (SSO), and Single Logout (SLO), with a direction similar to Apache Knox and WSO2 IS.",
        highlights: [
          "Implemented SAML 2.0 protocol with XML encryption",
          "Multi-factor authentication (MFA) with Google Authenticator",
          "FIDO2/WebAuthn for passwordless authentication",
          "Single Sign-On (SSO) and Single Logout (SLO)",
          "Session management with Redis cache (TTL-based)",
        ],
      },
    ],
    skillCategories,
    deliverables: deliverablesVi.map((item) => {
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

      return {
        ...item,
        description: en.description,
        achievement: en.achievement,
      };
    }),
    aiQA: [
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
    ],
    contactFallback: {
      bio: "Software Engineer & Digital Garden Owner",
      location: "Thanh Xuan - Hanoi",
    },
    scale: {
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
    },
  },
};

export const seoData = {
  title: greetings.name + " | " + greetings.subtitle,
  description: greetings.description,
  author: greetings.name,
  image: "/avatar.png",
  url: "https://portfolio.quochuy.dev",
  keywords: [
    greetings.name,
    "Software Engineer",
    "Digital Garden",
    "NestJS Developer",
    "Single Sign-On SSO",
    "Đỗ Quốc Huy Backend",
  ],
};
