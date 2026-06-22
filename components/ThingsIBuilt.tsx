"use client";

import React from "react";

interface Deliverable {
  id: string;
  category: string;
  categoryIcon: string;
  name: string;
  description: string;
  tags: string[];
  achievement: string;
}

const deliverables: Deliverable[] = [
  {
    id: "sso_server",
    category: "Auth & Security",
    categoryIcon: "🔐",
    name: "SSO Identity Server",
    description: "Enterprise-grade single sign-on platform supporting SAML 2.0, OAuth 2.0, OIDC with MFA and FIDO2 authentication.",
    tags: ["NestJS", "MySQL", "Redis", "SAML", "OAuth2", "OIDC"],
    achievement: "95★ on GitLab"
  },
  {
    id: "grpc_gateway",
    category: "Microservices",
    categoryIcon: "🔗",
    name: "gRPC Service Mesh",
    description: "High-performance inter-service communication layer with protocol buffers and load balancing across distributed services.",
    tags: ["gRPC", "Protocol Buffers", "Load Balancing"],
    achievement: "20+ services connected"
  },
  {
    id: "saga_pattern",
    category: "Microservices",
    categoryIcon: "🔗",
    name: "Distributed Saga Orchestrator",
    description: "Reliable transaction management across microservices with compensating transactions and failure recovery.",
    tags: ["Saga Pattern", "RabbitMQ", "NestJS"],
    achievement: "Zero data loss guarantee"
  },
  {
    id: "outbox_pattern",
    category: "Microservices",
    categoryIcon: "🔗",
    name: "Transactional Outbox",
    description: "Message reliability system ensuring at-least-once delivery between services using database-backed message queuing.",
    tags: ["Outbox Pattern", "PostgreSQL", "Go Worker"],
    achievement: "99.99% delivery rate"
  },
  {
    id: "postgres_replication",
    category: "Database Systems",
    categoryIcon: "💾",
    name: "Master-Replica Setup",
    description: "PostgreSQL replication architecture with read/write separation for handling enterprise-scale data workloads.",
    tags: ["PostgreSQL", "Replication", "Query Optimization"],
    achievement: "1M+ daily transactions"
  },
  {
    id: "redis_cache",
    category: "Database Systems",
    categoryIcon: "💾",
    name: "Redis Cache Strategy",
    description: "High-performance caching layer with session storage, distributed locking, and cache invalidation patterns.",
    tags: ["Redis", "Cache", "Session Management"],
    achievement: "94%+ hit rate"
  },
  {
    id: "api_gateway",
    category: "Infrastructure",
    categoryIcon: "🚀",
    name: "API Gateway & Routing",
    description: "Centralized request routing with authentication, rate limiting, and request transformation for all client applications.",
    tags: ["NestJS", "REST", "GraphQL"],
    achievement: "Serving 1M+ daily requests"
  },
  {
    id: "ci_cd",
    category: "Infrastructure",
    categoryIcon: "🚀",
    name: "CI/CD Pipeline Automation",
    description: "Automated deployment pipeline with Docker containerization, testing, and staging/production rollout.",
    tags: ["Docker", "GitLab CI", "AWS EC2"],
    achievement: "Zero-downtime deployments"
  },
  {
    id: "fido2_auth",
    category: "Auth & Security",
    categoryIcon: "🔐",
    name: "FIDO2 & WebAuthn",
    description: "Passwordless authentication using hardware security keys and biometric verification for enhanced security.",
    tags: ["FIDO2", "WebAuthn", "Biometric"],
    achievement: "Enterprise security standard"
  },
];

const categories = [
  { name: "Auth & Security", icon: "🔐", color: "from-red-500 to-rose-500" },
  { name: "Microservices", icon: "🔗", color: "from-blue-500 to-cyan-500" },
  { name: "Database Systems", icon: "💾", color: "from-green-500 to-emerald-500" },
  { name: "Infrastructure", icon: "🚀", color: "from-purple-500 to-pink-500" },
];

export default function ThingsIBuilt() {
  return (
    <section id="things-built" className="py-20 bg-zinc-50 dark:bg-zinc-900/10 border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-14 h-14 rounded-full bg-white dark:bg-zinc-800 text-amber-500 shadow-md flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-amber-600 dark:text-amber-400">
              Things I've Built
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Concrete deliverables across architecture layers and domains
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`p-4 rounded-lg bg-gradient-to-br ${cat.color} text-white text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-white/20 backdrop-blur-sm`}
            >
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="text-xs font-bold uppercase tracking-wide">{cat.name}</div>
            </div>
          ))}
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 mb-4 w-fit">
                <span className="text-lg">{item.categoryIcon}</span>
                <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 leading-tight">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
                {item.description}
              </p>

              {/* Achievement Highlight */}
              <div className="mb-4 p-3 rounded-lg bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50">
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  ✓ {item.achievement}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-200/50 dark:border-zinc-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-3 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-black text-cyan-500 mb-2">9+</div>
            <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              Core Systems
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-black text-blue-500 mb-2">4</div>
            <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              Architecture Domains
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-black text-amber-500 mb-2">20+</div>
            <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
