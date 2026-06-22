"use client";

import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";

export default function Hero() {
  const [redisHitRate, setRedisHitRate] = useState(94);
  const [chatEvents, setChatEvents] = useState(12);

  // Simple interval to change metrics slightly, making the dashboard feel alive
  useEffect(() => {
    const timer = setInterval(() => {
      setRedisHitRate(prev => Math.min(98, Math.max(92, prev + (Math.random() > 0.5 ? 1 : -1))));
      setChatEvents(prev => Math.min(25, Math.max(8, prev + (Math.random() > 0.5 ? 2 : -2))));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 border-b border-zinc-800 bg-[#09090b] text-left">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Bio and Links */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <h1 className="text-5xl font-black tracking-tight text-white mb-2 uppercase">
              {greetings.name}
            </h1>
            <p className="text-xl font-bold text-blue-500 tracking-wide">
              {greetings.subtitle}
            </p>
          </div>

          <p className="text-base text-zinc-400 leading-relaxed max-w-md">
            Building products from beautiful interfaces to scalable distributed systems.
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-300 hover:text-white rounded font-mono text-xs transition-all"
            >
              [ Github ]
            </a>
            <a
              href="#projects"
              className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-300 hover:text-white rounded font-mono text-xs transition-all"
            >
              [ Projects ]
            </a>
            <a
              href={greetings.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-300 hover:text-white rounded font-mono text-xs transition-all"
            >
              [ Resume ]
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic System Flow & Metrics */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          
          {/* SVG System Flow Diagram */}
          <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 shadow-xl overflow-hidden relative">
            <span className="absolute top-3 right-4 font-mono text-[9px] text-zinc-600">FLOW DIAGRAM v1.0</span>
            <div className="flex justify-center select-none w-full">
              <svg viewBox="0 0 540 180" className="w-full h-auto text-zinc-500">
                {/* Connection lines with dash arrays */}
                <line x1="75" y1="90" x2="165" y2="90" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 3" />
                <line x1="235" y1="90" x2="315" y2="40" stroke="#a1a1aa" strokeWidth="1.5" />
                <line x1="235" y1="90" x2="315" y2="90" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
                <line x1="235" y1="90" x2="315" y2="140" stroke="#a1a1aa" strokeWidth="1.5" />
                
                <line x1="395" y1="40" x2="465" y2="40" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="395" y1="90" x2="465" y2="90" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="395" y1="140" x2="465" y2="140" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />

                {/* Nodes */}
                {/* Client Node */}
                <rect x="15" y="65" width="60" height="50" rx="6" fill="#18181b" stroke="#3b82f6" strokeWidth="2" />
                <text x="45" y="94" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">React</text>

                {/* Gateway Node */}
                <rect x="165" y="65" width="70" height="50" rx="6" fill="#18181b" stroke="#3b82f6" strokeWidth="2" />
                <text x="200" y="94" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Gateway</text>

                {/* Services Nodes */}
                <rect x="315" y="15" width="80" height="50" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1.5" />
                <text x="355" y="44" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontWeight="bold">User Svc</text>

                <rect x="315" y="65" width="80" height="50" rx="6" fill="#18181b" stroke="#3b82f6" strokeWidth="2" />
                <text x="355" y="94" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Chat Svc</text>

                <rect x="315" y="115" width="80" height="50" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1.5" />
                <text x="355" y="144" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontWeight="bold">Auth Svc</text>

                {/* Storage Nodes */}
                <rect x="465" y="15" width="65" height="50" rx="6" fill="#18181b" stroke="#10b981" strokeWidth="2" />
                <text x="497" y="44" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Postgres</text>

                <rect x="465" y="65" width="65" height="50" rx="6" fill="#18181b" stroke="#3b82f6" strokeWidth="2" />
                <text x="497" y="94" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Redis</text>

                <rect x="465" y="115" width="65" height="50" rx="6" fill="#18181b" stroke="#f59e0b" strokeWidth="2" />
                <text x="497" y="144" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">RabbitMQ</text>
              </svg>
            </div>
          </div>

          {/* Metric and Queue Dashboard (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Metric Panel */}
            <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800 shadow-lg flex flex-col justify-between font-mono text-xs">
              <span className="text-zinc-500 font-bold uppercase tracking-wider mb-3">SYSTEM METRICS</span>
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between border-b border-zinc-800/40 pb-1">
                  <span className="text-zinc-400">services:</span>
                  <span className="text-white font-bold">6</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800/40 pb-1">
                  <span className="text-zinc-400">queues:</span>
                  <span className="text-green-400 font-bold">healthy</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800/40 pb-1">
                  <span className="text-zinc-400">deployment:</span>
                  <span className="text-blue-500 font-bold">online</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">redis hit rate:</span>
                  <span className="text-green-400 font-bold">{redisHitRate}%</span>
                </div>
              </div>
            </div>

            {/* RabbitMQ Queues Status Panel */}
            <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800 shadow-lg font-mono text-xs text-left">
              <span className="text-zinc-500 font-bold uppercase tracking-wider block mb-3">RABBITMQ QUEUES</span>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-400">notifications</span>
                    <span className="text-amber-500 font-bold">45</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded overflow-hidden">
                    <div className="h-full bg-amber-500 w-[70%]" />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-400">chat-events</span>
                    <span className="text-blue-500 font-bold">{chatEvents}</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${(chatEvents / 25) * 100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-400">emails</span>
                    <span className="text-green-500 font-bold">34</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded overflow-hidden">
                    <div className="h-full bg-green-500 w-[55%]" />
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-zinc-500 mt-3 block">status: healthy</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
