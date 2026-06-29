"use client";

import React from "react";
import { feedbacks } from "../portfolio";

export default function Feedbacks() {
  return (
    <section id="feedbacks" className="py-20 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12">
          Feedbacks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
            >
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
                &ldquo;{item.feedback}&rdquo;
              </p>
              
              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-sm text-zinc-700 dark:text-zinc-300">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">
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
