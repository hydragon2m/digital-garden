"use client";

import React, { useState } from "react";
import { notes, Note } from "../portfolio";
import { Search, Filter, Calendar } from "lucide-react";

interface GardenExplorerProps {
  onSelectNote: (noteId: string) => void;
}

export default function GardenExplorer({ onSelectNote }: GardenExplorerProps) {
  const [search, setSearch] = useState("");
  const [selectedStage, setSelectedStage] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  // Get unique tags
  const allTags = ["all", ...Array.from(new Set(notes.flatMap((n) => n.tags)))];

  // Filter notes
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase());
    const matchesStage = selectedStage === "all" || note.stage === selectedStage;
    const matchesTag = selectedTag === "all" || note.tags.includes(selectedTag);
    return matchesSearch && matchesStage && matchesTag;
  });

  const getStageBadge = (stage: string) => {
    switch (stage) {
      case "seedling":
        return <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">🌱 Mầm non</span>;
      case "growing":
        return <span className="text-xs px-2 py-0.5 rounded bg-teal-500/10 text-teal-500 font-bold border border-teal-500/20">🌿 Đang lớn</span>;
      default:
        return <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500 font-bold border border-indigo-500/20">🌲 Cổ thụ</span>;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded-xl p-6 shadow-sm text-left">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
          Garden Notes Directory
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Tra cứu, tìm kiếm và nghiên cứu các ghi chú kỹ thuật trong khu vườn tri thức của tôi.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col gap-4 mb-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm nội dung ghi chú..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-zinc-200 dark:border-zinc-800 bg-transparent rounded-xl text-sm focus:outline-none focus:border-cyan-500 text-zinc-900 dark:text-white"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 gap-3">
          {/* Filter Stage */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-zinc-400 uppercase">Growth Stage</span>
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none"
            >
              <option value="all">Tất cả giai đoạn</option>
              <option value="seedling">🌱 Seedling (Mầm non)</option>
              <option value="growing">🌿 Growing (Đang lớn)</option>
              <option value="evergreen">🌲 Evergreen (Cổ thụ)</option>
            </select>
          </div>

          {/* Filter Tag */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-zinc-400 uppercase">Topic / Tag</span>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none capitalize"
            >
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag === "all" ? "Tất cả chủ đề" : tag}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Notes List Grid */}
      <div className="flex-1 overflow-y-auto max-h-[300px] flex flex-col gap-4 pr-1">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              onClick={() => onSelectNote(note.id)}
              className="p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-cyan-500/50 hover:bg-white dark:hover:bg-zinc-900 cursor-pointer shadow-sm hover:shadow transition-all group"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                {getStageBadge(note.stage)}
                <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                  <Calendar size={12} />
                  <span>{note.updatedAt}</span>
                </div>
              </div>
              
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                {note.title}
              </h4>
              
              <div className="flex flex-wrap gap-1 mt-3">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-semibold px-2 py-0.5 rounded bg-white dark:bg-zinc-800 text-zinc-500 border border-zinc-200/50 dark:border-zinc-700/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-xs text-zinc-400 italic text-center py-6">
            Không tìm thấy ghi chú nào phù hợp
          </p>
        )}
      </div>
    </div>
  );
}
