"use client";

import React, { useState, useRef, useEffect } from "react";
import { aiQA, greetings } from "../portfolio";
import { MessageSquare, X, Send, Bot } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: `Xin chào! Tôi là Trợ lý Tuyển dụng ảo của anh ${greetings.name}. Bạn cần tìm hiểu thông tin gì về anh ${greetings.name.split(" ").pop()} (kinh nghiệm, kỹ năng, dự án, thông tin liên hệ...)?` },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const userMsg = input.trim();
    if (!userMsg) return;

    // Add user message
    const updatedMessages = [...messages, { sender: "user" as const, text: userMsg }];
    setMessages(updatedMessages);
    setInput("");

    // Simple AI Answer processing based on keyword matches
    setTimeout(() => {
      const matchedQA = aiQA.find((item) =>
        item.keywords.some((kw) => userMsg.toLowerCase().includes(kw))
      );

      const botReply = matchedQA
        ? matchedQA.answer
        : "Xin lỗi, tôi chưa có thông tin chi tiết về câu hỏi này. Bạn có thể gõ các câu hỏi ngắn về 'kỹ năng', 'kinh nghiệm', 'dự án', hoặc 'liên hệ' để tôi hỗ trợ nhanh nhất nhé!";

      setMessages((prev) => [...prev, { sender: "bot" as const, text: botReply }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-cyan-500 text-white shadow-xl hover:scale-110 active:scale-95 hover:bg-cyan-600 transition-all cursor-pointer"
        aria-label="Ask Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[340px] sm:w-[380px] h-[480px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-scale-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3.5 flex items-center gap-3 text-white">
            <Bot size={22} className="text-white animate-bounce" />
            <div>
              <h3 className="text-sm font-bold">{"Huy's AI Recruiter Bot"}</h3>
              <p className="text-[10px] text-white/80">Online & Ready to assist</p>
            </div>
          </div>

          {/* Chat message display area */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-zinc-50 dark:bg-zinc-950/40">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                  msg.sender === "user"
                    ? "bg-cyan-500 text-white self-end rounded-tr-none"
                    : "bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 self-start rounded-tl-none border border-zinc-100 dark:border-zinc-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Form input messaging */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hỏi về kinh nghiệm, kỹ năng..."
              className="flex-1 px-3 py-2 text-xs sm:text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-cyan-500 text-zinc-900 dark:text-white"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
