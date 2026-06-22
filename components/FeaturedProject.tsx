"use client";

import React from "react";

const SSOArchitectureDiagram = () => (
  <svg viewBox="0 0 600 220" className="w-full h-auto">
    <defs>
      <marker id="arrowFeat" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
      </marker>
    </defs>
    
    <rect x="20" y="20" width="70" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="55" y="50" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">App 1</text>
    
    <rect x="100" y="20" width="70" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="135" y="50" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">App 2</text>
    
    <rect x="180" y="20" width="70" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="215" y="50" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">App 3</text>
    
    <line x1="55" y1="70" x2="130" y2="110" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrowFeat)" />
    <line x1="135" y1="70" x2="135" y2="110" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowFeat)" />
    <line x1="215" y1="70" x2="140" y2="110" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrowFeat)" />
    
    <rect x="90" y="110" width="90" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2.5" rx="6" />
    <text x="135" y="135" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">SSO Identity</text>
    <text x="135" y="148" textAnchor="middle" fill="#06b6d4" fontSize="8">(NestJS)</text>
    
    <line x1="180" y1="135" x2="240" y2="75" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrowFeat)" />
    <line x1="180" y1="135" x2="280" y2="135" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrowFeat)" />
    <line x1="180" y1="135" x2="240" y2="180" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrowFeat)" />
    
    <rect x="240" y="50" width="70" height="50" fill="#18181b" stroke="#3b82f6" strokeWidth="2" rx="6" />
    <text x="275" y="75" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">MySQL</text>
    <text x="275" y="88" textAnchor="middle" fill="#a1a1aa" fontSize="7">(Primary)</text>
    
    <rect x="330" y="110" width="70" height="50" fill="#18181b" stroke="#10b981" strokeWidth="2" rx="6" />
    <text x="365" y="135" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Redis</text>
    <text x="365" y="148" textAnchor="middle" fill="#10b981" fontSize="7">(Session)</text>
    
    <rect x="240" y="170" width="70" height="50" fill="#18181b" stroke="#f59e0b" strokeWidth="2" rx="6" />
    <text x="275" y="195" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">RabbitMQ</text>
    <text x="275" y="208" textAnchor="middle" fill="#f59e0b" fontSize="7">(Audit)</text>
  </svg>
);

export default function FeaturedProject() {
  return (
    <section className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-3">
            Featured Project
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">Enterprise-grade identity & access management</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left: Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                  SSO Identity Server
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">95 GitLab Stars</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Centralized identity server supporting SAML 2.0, OAuth 2.0, and OpenID Connect (OIDC). Includes multi-factor authentication (MFA), social login, FIDO2/WebAuthn, and enterprise SSO/SLO capabilities. Architected for high availability and security.
                </p>
              </div>

              {/* Metrics */}
              <div>
                <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest mb-3">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/50">
                    <p className="text-[10px] text-zinc-600 dark:text-zinc-400 uppercase font-bold mb-1">Users</p>
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400">1000+</p>
                  </div>
                  <div className="p-3 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200/50 dark:border-cyan-800/50">
                    <p className="text-[10px] text-zinc-600 dark:text-zinc-400 uppercase font-bold mb-1">QPS</p>
                    <p className="text-lg font-bold text-cyan-600 dark:text-cyan-400">10k/sec</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200/50 dark:border-green-800/50">
                    <p className="text-[10px] text-zinc-600 dark:text-zinc-400 uppercase font-bold mb-1">Uptime</p>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">99.95%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-800/50">
                    <p className="text-[10px] text-zinc-600 dark:text-zinc-400 uppercase font-bold mb-1">Latency</p>
                    <p className="text-lg font-bold text-purple-600 dark:text-purple-400">&lt;100ms</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest mb-3">Key Features</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                    <span className="text-cyan-500 font-bold flex-shrink-0">✓</span>
                    SAML 2.0 with XML encryption & digital signatures
                  </li>
                  <li className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                    <span className="text-cyan-500 font-bold flex-shrink-0">✓</span>
                    Multi-factor authentication (TOTP, SMS, WebAuthn)
                  </li>
                  <li className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                    <span className="text-cyan-500 font-bold flex-shrink-0">✓</span>
                    Distributed session management via Redis
                  </li>
                  <li className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                    <span className="text-cyan-500 font-bold flex-shrink-0">✓</span>
                    Audit logging with RabbitMQ event streaming
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["NestJS", "MySQL", "Redis", "RabbitMQ", "gRPC", "Docker", "CQRS"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-200/50 dark:border-zinc-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://gitlab.com/DQH8391/sso-identity-server.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                View on GitLab
              </a>
            </div>

            {/* Right: Architecture Diagram */}
            <div className="flex flex-col">
              <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest mb-4">System Architecture</h4>
              <div className="bg-zinc-900 rounded-lg p-6 flex-1 flex items-center justify-center border border-zinc-800">
                <SSOArchitectureDiagram />
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
                Load-balanced NestJS instances with MySQL primary-replica replication, Redis session cache, and RabbitMQ for audit logging. Supports high concurrency with gRPC inter-service communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
