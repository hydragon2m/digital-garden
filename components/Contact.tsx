"use client";

import React, { useState, useEffect } from "react";
import { socialLinks } from "../portfolio";

interface GithubData {
  avatar_url: string;
  bio: string;
  location: string;
}

export default function Contact() {
  const [profile, setProfile] = useState<GithubData | null>(null);

  useEffect(() => {
    // Extract username from github link
    const githubUrl = socialLinks.github || "https://github.com/hydragon2m";
    const username = githubUrl.split("/").pop() || "hydragon2m";

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile({
          avatar_url: data.avatar_url || "https://avatars.githubusercontent.com/u/59178380?v=4",
          bio: data.bio || "Thảo luận dự án hoặc kết nối cơ hội hợp tác Back-end Developer.",
          location: data.location || "Thanh Xuân - Hà Nội",
        });
      })
      .catch(() => {
        // Fallback
        setProfile({
          avatar_url: "https://avatars.githubusercontent.com/u/59178380?v=4",
          bio: "Thảo luận dự án hoặc kết nối cơ hội hợp tác Back-end Developer.",
          location: "Thanh Xuân - Hà Nội",
        });
      });
  }, []);

  if (!profile) {
    return null;
  }

  return (
    <section id="contact" className="py-12 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 shadow-xl border-0 p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side text and info */}
            <div className="lg:col-span-8 order-2 lg:order-1 flex flex-col gap-6">
              <h2 className="text-3xl font-extrabold text-white">
                Reach Out to me!
              </h2>
              <p className="text-lg text-white/90 font-medium">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                {profile.bio}
              </p>

              {profile.location && (
                <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded bg-white text-cyan-600 font-bold text-xs shadow-sm">
                  <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {profile.location}
                </div>
              )}

              {/* Social links (circular buttons) */}
              <div className="flex flex-wrap items-center gap-3 mt-2">
                {socialLinks.email && (
                  <a
                    href={socialLinks.email}
                    className="w-10 h-10 rounded-full bg-white text-red-500 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#24292e] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right side avatar image */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <img
              src={profile.avatar_url}
              alt="Github Avatar"
              className="w-48 h-48 rounded-full shadow-lg border-4 border-white/20 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
