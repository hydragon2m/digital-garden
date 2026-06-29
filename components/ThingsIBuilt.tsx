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

export default function ThingsIBuilt() {
  return (
    <section id="things-built" className="py-20 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12">
          Things I&apos;ve Built
        </h2>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col h-full"
            >
              {/* Category Badge */}
              <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-2">
                {item.category}
              </p>

              {/* Title */}
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 leading-tight">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
                {item.description}
              </p>

              {/* Achievement Highlight */}
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4">
                {item.achievement}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
