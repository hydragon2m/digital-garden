"use client";

import React, { useState, useRef, useEffect } from "react";
import { skillCategories, projects, socialLinks, greetings } from "../portfolio";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function Console() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="text-zinc-400 text-xs sm:text-sm">
          <p className="text-cyan-400 font-bold">Huy OS v2.0.26 console initialized.</p>
          <p>Nhập <span className="text-green-400 font-bold">help</span> để xem các lệnh có sẵn.</p>
        </div>
      ),
    },
  ]);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode = "";

    switch (cmd) {
      case "help":
        response = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300">
            <div><span className="text-green-400 font-bold">skills</span> - Liệt kê các mảng kỹ năng chính</div>
            <div><span className="text-green-400 font-bold">projects</span> - Hiển thị danh sách dự án nổi bật</div>
            <div><span className="text-green-400 font-bold">contact</span> - Thông tin liên hệ dạng JSON</div>
            <div><span className="text-green-400 font-bold">clear</span> - Xóa lịch sử câu lệnh</div>
            <div><span className="text-green-400 font-bold">about</span> - Tóm tắt thông tin bản thân</div>
          </div>
        );
        break;
      case "skills":
        response = (
          <div className="flex flex-col gap-3 text-zinc-300">
            {skillCategories.map((cat, idx) => (
              <div key={idx}>
                <p className="text-cyan-400 font-bold">✦ {cat.title}</p>
                <div className="pl-4 flex flex-wrap gap-2 mt-1">
                  {cat.skills.map((s, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                      {s.name} ({s.level})
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case "projects":
        response = (
          <div className="flex flex-col gap-3 text-zinc-300">
            {projects.map((proj, idx) => (
              <div key={idx} className="border-l-2 border-cyan-500 pl-3">
                <p className="font-bold text-white">{proj.name}</p>
                <p className="text-xs text-zinc-400">{proj.desc}</p>
                <p className="text-xs text-green-400 mt-1">Tech Stack: {proj.tags.join(", ")}</p>
              </div>
            ))}
          </div>
        );
        break;
      case "contact":
        response = (
          <pre className="text-xs text-green-400 font-mono bg-zinc-950 p-3 rounded-lg border border-zinc-800">
            {JSON.stringify(
              {
                name: greetings.name,
                role: greetings.subtitle,
                email: socialLinks.email.replace("mailto:", ""),
                phone: socialLinks.phone,
                gitlab: socialLinks.gitlab,
                status: "Available for new opportunities",
              },
              null,
              2
            )}
          </pre>
        );
        break;
      case "about":
        response = (
          <p className="text-zinc-300 leading-relaxed text-sm">
            {greetings.description}
          </p>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = <p className="text-red-400">Lệnh không hợp lệ. Gõ "help" để xem danh sách lệnh.</p>;
    }

    setHistory([...history, { command: input, output: response }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full min-h-[320px] rounded-xl bg-zinc-950/95 border border-zinc-800 text-left font-mono overflow-hidden shadow-2xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 border-b border-zinc-800 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-zinc-500 font-bold">quochuy@terminal: ~</span>
        <span className="w-8" />
      </div>

      {/* Terminal Console Output area */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 text-xs sm:text-sm">
        {history.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1.5">
            {item.command !== "welcome" && (
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">quochuy:~$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
            )}
            <div>{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input prompt */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 p-3 bg-zinc-900 border-t border-zinc-800">
        <span className="text-green-500 font-bold text-xs sm:text-sm">quochuy:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="help..."
          className="flex-1 bg-transparent text-white focus:outline-none text-xs sm:text-sm caret-cyan-400 font-bold"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </form>
    </div>
  );
}
