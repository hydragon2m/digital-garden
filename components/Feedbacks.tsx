"use client";

import React from "react";
import { feedbacks } from "../portfolio";
import { Quote } from "lucide-react";

export default function Feedbacks() {
  return (
    <section id="feedbacks" className="py-24 bg-white dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-white mb-4">
            Đánh giá từ đồng nghiệp
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Mọi người nói gì về tác phong làm việc và năng lực của tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/35 border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-blue-500/20 dark:text-blue-400/20">
                <Quote size={40} />
              </div>
              
              <p className="text-sm leading-relaxed italic text-zinc-600 dark:text-zinc-400 mb-8 relative z-10">
                "{item.feedback}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-4">
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
