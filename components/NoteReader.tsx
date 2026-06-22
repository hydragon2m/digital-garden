"use client";

import React from "react";
import { notes, graphData } from "../portfolio";
import { X, Calendar, Tag, Link2 } from "lucide-react";

interface NoteReaderProps {
  noteId: string | null;
  onClose: () => void;
  onSelectNote: (noteId: string) => void;
}

export default function NoteReader({ noteId, onClose, onSelectNote }: NoteReaderProps) {
  const note = notes.find((n) => n.id === noteId);

  if (!note) return null;

  // Find backlinks (nodes that connect to this note)
  const backlinks = graphData.links
    .filter((l) => l.target === noteId || l.source === noteId)
    .map((l) => {
      const connectedId = l.target === noteId ? l.source : l.target;
      const node = graphData.nodes.find((n) => n.id === connectedId);
      return node;
    })
    .filter((n): n is NonNullable<typeof n> => !!n && n.id !== "huy");

  // Simple custom Markdown-like parser for note rendering
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    let isCodeBlock = false;
    let codeLines: string[] = [];

    return lines.map((line, index) => {
      // Code Block Parsing
      if (line.trim().startsWith("```")) {
        if (isCodeBlock) {
          isCodeBlock = false;
          const codeText = codeLines.join("\n");
          codeLines = [];
          return (
            <pre
              key={index}
              className="bg-zinc-950 text-green-400 p-4 rounded-xl border border-zinc-800 text-xs sm:text-sm font-mono my-4 overflow-x-auto whitespace-pre-wrap"
            >
              <code>{codeText}</code>
            </pre>
          );
        } else {
          isCodeBlock = true;
          return null;
        }
      }

      if (isCodeBlock) {
        // Collect code lines
        codeLines.push(line);
        return null;
      }

      // Headings
      if (line.trim().startsWith("###")) {
        return (
          <h3 key={index} className="text-lg font-black text-zinc-900 dark:text-white mt-6 mb-3 border-b border-zinc-100 dark:border-zinc-800 pb-1">
            {line.replace("###", "").trim()}
          </h3>
        );
      }
      if (line.trim().startsWith("####")) {
        return (
          <h4 key={index} className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mt-4 mb-2">
            {line.replace("####", "").trim()}
          </h4>
        );
      }

      // Lists
      if (line.trim().startsWith("- ")) {
        return (
          <li key={index} className="ml-4 list-disc text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 my-1.5 marker:text-cyan-500">
            {line.replace("- ", "").trim()}
          </li>
        );
      }

      // Inline code highlights (like `code`)
      if (line.includes("`")) {
        const parts = line.split("`");
        return (
          <p key={index} className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 my-3">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <code key={i} className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-cyan-500 font-mono text-xs border border-zinc-200/50 dark:border-zinc-700/50">
                  {part}
                </code>
              ) : (
                part
              )
            )}
          </p>
        );
      }

      // Standard Paragraph
      if (line.trim() === "") return <div key={index} className="h-2" />;

      return (
        <p key={index} className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 my-3">
          {line}
        </p>
      );
    });
  };

  const getStageLabel = (stage: string) => {
    switch (stage) {
      case "seedling":
        return "🌱 Seedling (Mầm non)";
      case "growing":
        return "🌿 Growing (Đang lớn)";
      default:
        return "🌲 Evergreen (Cổ thụ)";
    }
  };

  return (
    <>
      {/* Backdrop shadow overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity duration-300"
      />

      {/* Slide-over Panel from the right */}
      <div className="fixed top-0 right-0 h-full w-full sm:max-w-xl bg-white dark:bg-zinc-950 shadow-2xl z-[100] flex flex-col overflow-hidden animate-scale-up border-l border-zinc-200 dark:border-zinc-800">
        
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold">
              {getStageLabel(note.stage)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Note Body Content */}
        <div className="flex-1 p-8 overflow-y-auto text-left flex flex-col gap-4">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white leading-tight">
            {note.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>Cập nhật ngày {note.updatedAt}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag size={14} />
              <span>Tags: {note.tags.join(", ")}</span>
            </div>
          </div>

          <div className="mt-2 flex-1">
            {renderContent(note.content)}
          </div>

          {/* Backlinks Section */}
          {backlinks.length > 0 && (
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <h4 className="text-xs font-black tracking-wider text-zinc-400 uppercase flex items-center gap-1.5 mb-3">
                <Link2 size={14} />
                Kết nối liên quan (Backlinks)
              </h4>
              <div className="flex flex-wrap gap-2">
                {backlinks.map((link) => {
                  const isNote = link.type === "note";
                  return (
                    <button
                      key={link.id}
                      onClick={() => isNote && onSelectNote(link.id)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1 transition-all ${
                        isNote
                          ? "bg-green-500/5 hover:bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400 cursor-pointer"
                          : "bg-zinc-100 dark:bg-zinc-900 border-zinc-200/50 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-default"
                      }`}
                    >
                      {link.type === "note" ? "📄" : link.type === "project" ? "💻" : "💼"}
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
}
