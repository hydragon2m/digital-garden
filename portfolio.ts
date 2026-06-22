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
  subtitle: "Back-end Developer & Digital Garden Owner",
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
    stars: 95
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
    answer: "Anh Huy từng làm việc tại: 1. Beatcolor (08/2025 - Hiện tại): Backend Developer chuyên trách gRPC, RabbitMQ, Saga, Outbox, CQRS. 2. LifeteX (05/2024 - 06/2025): Backend Developer chuyên trách REST/GraphQL, MySQL/Postgre/MongoDB, Data Encryption. 3. GSS: Thực tập sinh."
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

export const seoData = {
  title: greetings.name + " | " + greetings.subtitle,
  description: greetings.description,
  author: greetings.name,
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://portfolio.quochuy.dev",
  keywords: [
    greetings.name,
    "Back-end Developer",
    "Digital Garden",
    "NestJS Developer",
    "Single Sign-On SSO",
    "Đỗ Quốc Huy Backend",
  ],
};
