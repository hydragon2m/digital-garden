import type { GraphData, Note, SeoData, SocialLinks, SystemArchitecture } from "./types";

export const socialLinks: SocialLinks = {
  email: "mailto:dohuy8391@gmail.com",
  phone: "0337 998 303",
  linkedin: "https://linkedin.com/in/quochuy",
  github: "",
  gitlab: "https://gitlab.com/DQH8391",
  twitter: "",
};

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

export const feedbacks = [];

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

Tại LifeteX, cơ sở dữ liệu PostgreSQL phải xử lý khối lượng dữ liệu lớn và nhiều truy vấn nghiệp vụ cùng lúc.

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

export const seoData: SeoData = {
  title: "Backend Developer | Distributed Systems & Security",
  description: "Software engineer tập trung vào backend systems, microservices, identity server, SSO/OIDC/SAML và tối ưu database.",
  author: "Đỗ Quốc Huy",
  image: "/opengraph-image",
  url: (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://info.quochuy.xyz").replace(/\/$/, ""),
  keywords: [
    "Đỗ Quốc Huy",
    "Software Engineer",
    "Backend Systems",
    "NestJS Developer",
    "Single Sign-On SSO",
    "Microservices",
  ],
};
