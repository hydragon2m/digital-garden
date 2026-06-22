"use client";

import React from "react";

export default function LandingIntro() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Main Value Proposition */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white leading-tight">
              Building Scalable Systems That <span className="text-cyan-500">Actually Work</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
              I design and build distributed systems handling millions of requests daily. Specializing in microservices architecture, enterprise authentication, and high-performance backends that scale.
            </p>
          </div>

          {/* Three Core Focuses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200/50 dark:border-cyan-900/50">
              <div className="text-2xl mb-2">🏗️</div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Systems Architecture</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">CQRS, Event Sourcing, Microservices patterns for production-grade systems</p>
            </div>

            <div className="p-6 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/50">
              <div className="text-2xl mb-2">🔐</div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Enterprise Auth</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">SAML 2.0, OAuth 2.0, OIDC, MFA, FIDO2/WebAuthn integration</p>
            </div>

            <div className="p-6 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/50">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-2">High Performance</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Optimized for 10k+ QPS, sub-100ms latency, 99.95%+ uptime</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <div className="text-center">
              <p className="text-3xl font-black text-cyan-500">6+</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 uppercase tracking-wide font-semibold">Systems Built</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-blue-500">20+</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 uppercase tracking-wide font-semibold">Services</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-emerald-500">1M+</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 uppercase tracking-wide font-semibold">Daily Requests</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-amber-500">99.95%</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 uppercase tracking-wide font-semibold">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
