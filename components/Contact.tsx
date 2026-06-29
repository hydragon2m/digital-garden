"use client";

import React, { useState, useEffect } from "react";
import { socialLinks } from "../portfolio";

interface GithubData {
  bio: string;
  location: string;
}

export default function Contact() {
  const [profile, setProfile] = useState<GithubData | null>(null);

  useEffect(() => {
    const githubUrl = socialLinks.github || "https://gitlab.com/DQH8391";
    const username = githubUrl.split("/").pop() || "DQH8391";

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile({
          bio: data.bio || "Back-end Developer & Digital Garden Owner",
          location: data.location || "Thanh Xuân - Hà Nội",
        });
      })
      .catch(() => {
        setProfile({
          bio: "Back-end Developer & Digital Garden Owner",
          location: "Thanh Xuân - Hà Nội",
        });
      });
  }, []);

  if (!profile) {
    return null;
  }

  return (
    <section id="contact" className="py-16 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              {profile.bio}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-4">
            {profile.location && (
              <p className="text-sm text-zinc-600 dark:text-zinc-500">
                {profile.location}
              </p>
            )}
            
            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.email && (
                <a
                  href={socialLinks.email}
                  className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
                >
                  Email
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
                >
                  LinkedIn
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
                >
                  GitLab
                </a>
              )}
              {socialLinks.twitter && socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
