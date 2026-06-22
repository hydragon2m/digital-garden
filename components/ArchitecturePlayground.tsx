"use client";

import React, { useState, ReactNode } from "react";

interface Pattern {
  id: string;
  name: string;
  description: string;
  useCases: string[];
  tradeoffs: string[];
  icon: string;
  color: string;
  textColor: string;
  diagram: () => ReactNode;
}

// SVG Diagram Components
const CQRSDiagram = () => (
  <svg viewBox="0 0 500 200" className="w-full h-auto">
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
      </marker>
    </defs>
    
    {/* Client */}
    <rect x="10" y="50" width="70" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="45" y="80" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Client</text>
    
    {/* Command & Query Split */}
    <line x1="80" y1="75" x2="140" y2="50" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
    <line x1="80" y1="95" x2="140" y2="120" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead)" />
    
    {/* Command Handler */}
    <rect x="140" y="30" width="80" height="50" fill="#18181b" stroke="#3b82f6" strokeWidth="2" rx="6" />
    <text x="180" y="60" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Command</text>
    <text x="180" y="73" textAnchor="middle" fill="#a1a1aa" fontSize="9">Handler</text>
    
    {/* Query Handler */}
    <rect x="140" y="100" width="80" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="180" y="130" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Query</text>
    <text x="180" y="143" textAnchor="middle" fill="#a1a1aa" fontSize="9">Handler</text>
    
    {/* Write Model DB */}
    <line x1="220" y1="55" x2="280" y2="55" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
    <rect x="280" y="30" width="80" height="50" fill="#18181b" stroke="#3b82f6" strokeWidth="2" rx="6" />
    <text x="320" y="60" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Write Model</text>
    <text x="320" y="73" textAnchor="middle" fill="#a1a1aa" fontSize="9">(PostgreSQL)</text>
    
    {/* Read Model Cache */}
    <line x1="220" y1="125" x2="280" y2="125" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead)" />
    <rect x="280" y="100" width="80" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="320" y="130" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Read Model</text>
    <text x="320" y="143" textAnchor="middle" fill="#a1a1aa" fontSize="9">(Redis Cache)</text>
    
    {/* Event Stream */}
    <line x1="360" y1="55" x2="420" y2="90" stroke="#10b981" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arrowhead)" />
    <rect x="420" y="75" width="70" height="40" fill="#18181b" stroke="#10b981" strokeWidth="2" rx="6" />
    <text x="455" y="100" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Event Bus</text>
  </svg>
);

const SagaDiagram = () => (
  <svg viewBox="0 0 500 200" className="w-full h-auto">
    <defs>
      <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
      </marker>
    </defs>
    
    {/* Orchestrator */}
    <rect x="10" y="75" width="70" height="50" fill="#18181b" stroke="#f59e0b" strokeWidth="2" rx="6" />
    <text x="45" y="100" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Saga</text>
    <text x="45" y="113" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Manager</text>
    
    {/* Service 1 */}
    <line x1="80" y1="100" x2="130" y2="40" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
    <rect x="130" y="20" width="80" height="40" fill="#18181b" stroke="#f59e0b" strokeWidth="2" rx="6" />
    <text x="170" y="45" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Payment</text>
    
    {/* Service 2 */}
    <line x1="80" y1="100" x2="130" y2="100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
    <rect x="130" y="80" width="80" height="40" fill="#18181b" stroke="#f59e0b" strokeWidth="2" rx="6" />
    <text x="170" y="105" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Booking</text>
    
    {/* Service 3 */}
    <line x1="80" y1="100" x2="130" y2="160" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
    <rect x="130" y="140" width="80" height="40" fill="#18181b" stroke="#f59e0b" strokeWidth="2" rx="6" />
    <text x="170" y="165" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Notification</text>
    
    {/* Compensating Transactions (return) */}
    <line x1="210" y1="40" x2="260" y2="40" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead2)" />
    <line x1="210" y1="100" x2="260" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead2)" />
    <line x1="210" y1="160" x2="260" y2="160" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead2)" />
    
    {/* Compensation Label */}
    <rect x="260" y="70" width="80" height="60" fill="#18181b" stroke="#ef4444" strokeWidth="1.5" rx="4" />
    <text x="300" y="90" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">Compensating</text>
    <text x="300" y="103" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">Transaction</text>
    <text x="300" y="116" textAnchor="middle" fill="#ef4444" fontSize="8">(on failure)</text>
  </svg>
);

const OutboxDiagram = () => (
  <svg viewBox="0 0 500 200" className="w-full h-auto">
    <defs>
      <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
      </marker>
    </defs>
    
    {/* Business Logic Service */}
    <rect x="10" y="75" width="90" height="50" fill="#18181b" stroke="#8b5cf6" strokeWidth="2" rx="6" />
    <text x="55" y="100" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Business</text>
    <text x="55" y="113" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Logic</text>
    
    {/* Database with Outbox */}
    <rect x="120" y="60" width="100" height="80" fill="#18181b" stroke="#8b5cf6" strokeWidth="2" rx="6" />
    <text x="170" y="85" textAnchor="middle" fill="#a1a1aa" fontSize="10" fontWeight="bold">Database</text>
    <line x1="130" y1="95" x2="210" y2="95" stroke="#8b5cf6" strokeWidth="1" />
    <text x="170" y="110" textAnchor="middle" fill="#ffffff" fontSize="9">Business Data</text>
    <text x="170" y="128" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Outbox Table</text>
    
    {/* Transaction Arrow */}
    <line x1="100" y1="100" x2="120" y2="100" stroke="#8b5cf6" strokeWidth="2.5" markerEnd="url(#arrowhead3)" />
    <text x="110" y="70" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontWeight="bold">ATOMIC</text>
    
    {/* Message Poller Worker */}
    <rect x="250" y="60" width="90" height="80" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="295" y="100" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Poller</text>
    <text x="295" y="113" textAnchor="middle" fill="#06b6d4" fontSize="9">(Go/Rust)</text>
    
    {/* Poll Outbox */}
    <line x1="220" y1="100" x2="250" y2="100" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead3)" />
    
    {/* Message Broker */}
    <rect x="370" y="60" width="90" height="80" fill="#18181b" stroke="#10b981" strokeWidth="2" rx="6" />
    <text x="415" y="100" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Message</text>
    <text x="415" y="113" textAnchor="middle" fill="#10b981" fontSize="9">Broker</text>
    
    {/* Publish to Broker */}
    <line x1="340" y1="100" x2="370" y2="100" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead3)" />
  </svg>
);

const EventSourcingDiagram = () => (
  <svg viewBox="0 0 500 200" className="w-full h-auto">
    <defs>
      <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
      </marker>
    </defs>
    
    {/* Command */}
    <rect x="10" y="75" width="70" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="45" y="100" textAnchor="middle" fill="#06b6d4" fontSize="11" fontWeight="bold">Command</text>
    
    {/* Event Store */}
    <line x1="80" y1="100" x2="130" y2="100" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead4)" />
    <rect x="130" y="50" width="100" height="100" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="180" y="80" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Event Store</text>
    <text x="180" y="95" textAnchor="middle" fill="#a1a1aa" fontSize="8">(Immutable)</text>
    <text x="180" y="110" textAnchor="middle" fill="#06b6d4" fontSize="8">EventLog</text>
    <text x="180" y="125" textAnchor="middle" fill="#a1a1aa" fontSize="8">(PostgreSQL)</text>
    
    {/* Replay Events */}
    <line x1="230" y1="100" x2="280" y2="50" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead4)" />
    <line x1="230" y1="100" x2="280" y2="150" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead4)" />
    
    {/* Read Models */}
    <rect x="280" y="25" width="80" height="50" fill="#18181b" stroke="#10b981" strokeWidth="2" rx="6" />
    <text x="320" y="55" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Projection</text>
    
    <rect x="280" y="125" width="80" height="50" fill="#18181b" stroke="#10b981" strokeWidth="2" rx="6" />
    <text x="320" y="155" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Analytics</text>
    
    {/* Time Travel */}
    <text x="180" y="30" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">Audit Trail / Time Travel</text>
  </svg>
);

const patterns: Pattern[] = [
  {
    id: "cqrs",
    name: "CQRS Pattern",
    description: "Separate read and write models for optimizing query and command handling independently.",
    useCases: [
      "High-traffic read-heavy systems",
      "Complex query requirements",
      "Analytics and reporting",
      "Real-time dashboards"
    ],
    tradeoffs: [
      "Increased complexity (two models)",
      "Eventual consistency between models",
      "More databases to manage",
      "Higher operational cost"
    ],
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-100",
    diagram: CQRSDiagram
  },
  {
    id: "saga",
    name: "Saga Pattern",
    description: "Manage distributed transactions across microservices without 2-Phase Commit.",
    useCases: [
      "Cross-service transactions",
      "Order management systems",
      "Payment processing",
      "Booking systems"
    ],
    tradeoffs: [
      "Complex failure handling",
      "Requires compensation logic",
      "Testing is difficult",
      "Debugging distributed failures"
    ],
    icon: "🔄",
    color: "from-amber-500 to-orange-500",
    textColor: "text-amber-100",
    diagram: SagaDiagram
  },
  {
    id: "outbox",
    name: "Outbox Pattern",
    description: "Ensure reliable message delivery using transactional outbox and event poller.",
    useCases: [
      "Reliable event publishing",
      "Database + Message Broker sync",
      "Guaranteed message delivery",
      "Preventing message loss"
    ],
    tradeoffs: [
      "Requires background poller",
      "At-least-once semantics",
      "Duplicate message handling",
      "Added database overhead"
    ],
    icon: "📮",
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-100",
    diagram: OutboxDiagram
  },
  {
    id: "eventsourcing",
    name: "Event Sourcing",
    description: "Store state as a sequence of immutable events instead of current state.",
    useCases: [
      "Complete audit trails",
      "Time-travel debugging",
      "Complex domain models",
      "Event-driven applications"
    ],
    tradeoffs: [
      "Steep learning curve",
      "Event schema versioning",
      "Storage space (all events)",
      "Query performance issues"
    ],
    icon: "📜",
    color: "from-green-500 to-emerald-500",
    textColor: "text-green-100",
    diagram: EventSourcingDiagram
  }
];

export default function ArchitecturePlayground() {
  const [selectedPatternId, setSelectedPatternId] = useState<string>("cqrs");

  const selectedPattern = patterns.find((p) => p.id === selectedPatternId);

  return (
    <section id="architecture-playground" className="py-20 bg-zinc-50 dark:bg-zinc-900/10 border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-full bg-white dark:bg-zinc-800 text-purple-500 shadow-md flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">
              Architecture Playground
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Interactive exploration of distributed system design patterns
            </p>
          </div>
        </div>

        {/* Pattern Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {patterns.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => setSelectedPatternId(pattern.id)}
              className={`p-4 rounded-lg text-left transition-all duration-300 border-2 ${
                selectedPatternId === pattern.id
                  ? `bg-gradient-to-br ${pattern.color} ${pattern.textColor} border-white shadow-lg`
                  : "bg-white dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-300 border-zinc-200/50 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              <div className="text-2xl mb-2">{pattern.icon}</div>
              <div className="text-xs font-bold uppercase tracking-wide">{pattern.name}</div>
            </button>
          ))}
        </div>

        {selectedPattern && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Diagram (Left) */}
            <div className="lg:col-span-2 bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl p-8 shadow-md">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-2">
                  System Flow
                </h3>
              </div>
              <div className="w-full">
                <selectedPattern.diagram />
              </div>
            </div>

            {/* Details (Right) */}
            <div className="flex flex-col gap-6">
              {/* Description */}
              <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl p-6 shadow-md">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 uppercase tracking-widest">
                  Overview
                </h4>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {selectedPattern.description}
                </p>
              </div>

              {/* Use Cases */}
              <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl p-6 shadow-md">
                <h4 className="text-sm font-bold text-green-600 dark:text-green-400 mb-3 uppercase tracking-widest">
                  ✓ When to Use
                </h4>
                <ul className="space-y-2">
                  {selectedPattern.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-xs text-zinc-600 dark:text-zinc-400 flex gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trade-offs */}
              <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl p-6 shadow-md">
                <h4 className="text-sm font-bold text-amber-600 dark:text-amber-400 mb-3 uppercase tracking-widest">
                  ⚠️ Trade-offs
                </h4>
                <ul className="space-y-2">
                  {selectedPattern.tradeoffs.map((tradeoff, idx) => (
                    <li key={idx} className="text-xs text-zinc-600 dark:text-zinc-400 flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      {tradeoff}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
