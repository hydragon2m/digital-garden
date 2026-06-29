"use client";

import React from "react";

export default function About() {
  const philosophies = [
    {
      title: "Clean Architecture & DDD",
      desc: "Luôn cấu trúc mã nguồn theo hướng độc lập với framework, phân tách nghiệp vụ rõ ràng giúp hệ thống dễ dàng mở rộng và kiểm thử.",
      icon: "🏗️"
    },
    {
      title: "Automation & GitOps",
      desc: "Tự động hóa mọi quy trình lặp đi lặp lại. Hạ tầng phải được định nghĩa bằng mã nguồn (IaC) và triển khai qua các pipeline CI/CD an toàn.",
      icon: "⚙️"
    },
    {
      title: "Data-Driven Optimization",
      desc: "Tối ưu hóa hiệu năng hệ thống dựa trên số liệu thực tế (metrics/telemetry) chứ không đoán mò. Giám sát chặt chẽ latency và tài nguyên.",
      icon: "📊"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Brief bio text */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
              Về bản thân & Triết lý làm việc
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Tôi tin rằng một phần mềm tốt không chỉ dừng lại ở việc chạy đúng, mà phải chạy hiệu quả, dễ bảo trì và sẵn sàng thích ứng trước sự thay đổi của quy mô hệ thống.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Với hơn 5 năm gắn bó cùng các dự án thực tế, tôi tập trung thiết kế các giải pháp tối ưu hóa, đảm bảo tính toàn vẹn của dữ liệu và xây dựng quy trình triển khai tự động hoàn toàn.
            </p>
          </div>

          {/* Right Column: Philosophies cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {philosophies.map((philo, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60 hover:shadow-md transition-shadow text-left"
              >
                <div className="text-3xl flex-shrink-0 p-2.5 rounded-xl bg-white dark:bg-zinc-800 shadow-sm">
                  {philo.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">
                    {philo.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {philo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
