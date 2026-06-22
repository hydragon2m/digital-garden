"use client";

import React, { useState } from "react";
import { systemArchitecture } from "../portfolio";

export default function ArchitectureVisualizer() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Custom descriptions to show on hover
  const nodeDetails: Record<string, { tech: string; role: string }> = {
    client: { tech: "Next.js 16 + React 19", role: "Giao diện Web/Mobile tốc độ cao, Server-side rendering để tối ưu SEO." },
    gateway: { tech: "Kong API Gateway", role: "Quản lý định tuyến, rate limiting, SSL termination và lọc bảo mật API đầu vào." },
    auth: { tech: "Golang Microservice", role: "Xác thực danh tính (JWT), kiểm tra quyền gRPC siêu tốc." },
    order: { tech: "NestJS Service", role: "Xử lý đặt hàng, quản lý giao dịch và điều phối nghiệp vụ mua sắm chính." },
    payment: { tech: "Go Consumer / Worker", role: "Lắng nghe sự kiện từ Kafka để xử lý thanh toán bất đồng bộ bảo mật." },
    cache: { tech: "Redis Cluster", role: "Bộ nhớ đệm hiệu năng cao phục vụ truy vấn thông tin sản phẩm và giỏ hàng tức thời." },
    db: { tech: "PostgreSQL (Master)", role: "Lưu trữ dữ liệu cốt lõi bền vững với transaction ACID hoàn chỉnh." },
    dbrep: { tech: "PostgreSQL (Replica)", role: "Đồng bộ hóa dữ liệu từ Master để chuyên phụ trách các tác vụ đọc dữ liệu tải nặng." }
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950 rounded-xl border border-zinc-800 p-6 text-left shadow-2xl">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white mb-1">
          {systemArchitecture.title}
        </h3>
        <p className="text-xs text-zinc-400">
          {systemArchitecture.description}
        </p>
      </div>

      {/* Diagram Area */}
      <div className="relative flex-1 min-h-[350px] border border-zinc-900 rounded-lg bg-zinc-950/80 p-4 flex flex-col justify-between overflow-hidden">
        {/* Node Layout Grid */}
        <div className="grid grid-cols-3 gap-y-10 gap-x-6 items-center text-center">
          {/* Row 1 */}
          <div />
          <div
            onMouseEnter={() => setActiveNode("client")}
            onMouseLeave={() => setActiveNode(null)}
            className={`cursor-pointer p-2.5 rounded-lg border text-xs font-bold transition-all duration-200 ${
              activeNode === "client"
                ? "bg-cyan-500/20 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.3)] text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-300"
            }`}
          >
            💻 Client App
          </div>
          <div />

          {/* Row 2 */}
          <div />
          <div
            onMouseEnter={() => setActiveNode("gateway")}
            onMouseLeave={() => setActiveNode(null)}
            className={`cursor-pointer p-2.5 rounded-lg border text-xs font-bold transition-all duration-200 ${
              activeNode === "gateway"
                ? "bg-cyan-500/20 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.3)] text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-300"
            }`}
          >
            🛡️ Kong Gateway
          </div>
          <div />

          {/* Row 3 */}
          <div
            onMouseEnter={() => setActiveNode("auth")}
            onMouseLeave={() => setActiveNode(null)}
            className={`cursor-pointer p-2.5 rounded-lg border text-xs font-bold transition-all duration-200 ${
              activeNode === "auth"
                ? "bg-indigo-500/20 border-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.3)] text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-300"
            }`}
          >
            🔑 Auth Service
          </div>
          <div
            onMouseEnter={() => setActiveNode("order")}
            onMouseLeave={() => setActiveNode(null)}
            className={`cursor-pointer p-2.5 rounded-lg border text-xs font-bold transition-all duration-200 ${
              activeNode === "order"
                ? "bg-indigo-500/20 border-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.3)] text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-300"
            }`}
          >
            🛒 Order Service
          </div>
          <div
            onMouseEnter={() => setActiveNode("payment")}
            onMouseLeave={() => setActiveNode(null)}
            className={`cursor-pointer p-2.5 rounded-lg border text-xs font-bold transition-all duration-200 ${
              activeNode === "payment"
                ? "bg-indigo-500/20 border-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.3)] text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-300"
            }`}
          >
            💸 Payment Worker
          </div>

          {/* Row 4 */}
          <div
            onMouseEnter={() => setActiveNode("cache")}
            onMouseLeave={() => setActiveNode(null)}
            className={`cursor-pointer p-2.5 rounded-lg border text-xs font-bold transition-all duration-200 ${
              activeNode === "cache"
                ? "bg-red-500/20 border-red-400 shadow-[0_0_12px_rgba(239,68,68,0.3)] text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-300"
            }`}
          >
            ⚡ Redis Cache
          </div>
          <div
            onMouseEnter={() => setActiveNode("db")}
            onMouseLeave={() => setActiveNode(null)}
            className={`cursor-pointer p-2.5 rounded-lg border text-xs font-bold transition-all duration-200 ${
              activeNode === "db"
                ? "bg-green-500/20 border-green-400 shadow-[0_0_12px_rgba(34,197,94,0.3)] text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-300"
            }`}
          >
            🛢️ Postgre Master
          </div>
          <div
            onMouseEnter={() => setActiveNode("dbrep")}
            onMouseLeave={() => setActiveNode(null)}
            className={`cursor-pointer p-2.5 rounded-lg border text-xs font-bold transition-all duration-200 ${
              activeNode === "dbrep"
                ? "bg-green-500/20 border-green-400 shadow-[0_0_12px_rgba(34,197,94,0.3)] text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-300"
            }`}
          >
            🛢️ Postgre Replica
          </div>
        </div>
      </div>

      {/* Info Hover Panel */}
      <div className="mt-4 min-h-[90px] p-4 bg-zinc-900 rounded-lg border border-zinc-800 flex flex-col justify-center">
        {activeNode ? (
          <div>
            <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              {activeNode} (Tech: {nodeDetails[activeNode].tech})
            </p>
            <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
              {nodeDetails[activeNode].role}
            </p>
          </div>
        ) : (
          <p className="text-xs text-zinc-500 italic text-center">
            Di chuột qua các khối của hệ thống để xem chi tiết kiến trúc
          </p>
        )}
      </div>
    </div>
  );
}
