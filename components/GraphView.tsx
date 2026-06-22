"use client";

import React, { useState, useRef, useEffect } from "react";
import { graphData, GraphNode } from "../portfolio";

interface GraphViewProps {
  onSelectNote: (noteId: string) => void;
}

interface Point {
  x: number;
  y: number;
}

export default function GraphView({ onSelectNote }: GraphViewProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  // Set up initial positions for all nodes
  const [positions, setPositions] = useState<Record<string, Point>>({
    huy: { x: 250, y: 175 },
    beatcolor: { x: 140, y: 110 },
    lifetex: { x: 360, y: 110 },
    nestjs: { x: 420, y: 180 },
    go: { x: 80, y: 180 },
    rabbitmq: { x: 120, y: 50 },
    grpc: { x: 60, y: 100 },
    postgres: { x: 380, y: 50 },
    sso_concept: { x: 440, y: 260 },
    sso_proj: { x: 330, y: 240 },
    note_sso: { x: 250, y: 280 },
    note_saga: { x: 170, y: 240 },
    note_rabbitmq: { x: 80, y: 280 },
    note_postgres: { x: 380, y: 310 },
    note_fido2: { x: 440, y: 320 }
  });

  const svgRef = useRef<SVGSVGElement>(null);
  const dragNodeRef = useRef<string | null>(null);
  const dragOffsetRef = useRef<Point>({ x: 0, y: 0 });

  // Handle Drag Events
  const handleMouseDown = (e: React.MouseEvent, nodeId: string) => {
    e.preventDefault();
    if (!svgRef.current) return;
    
    dragNodeRef.current = nodeId;
    setActiveNode(nodeId);

    const svgRect = svgRef.current.getBoundingClientRect();
    // Get mouse coordinates relative to SVG coordinate space
    const x = ((e.clientX - svgRect.left) / svgRect.width) * 500;
    const y = ((e.clientY - svgRect.top) / svgRect.height) * 350;

    const currentPos = positions[nodeId];
    dragOffsetRef.current = {
      x: x - currentPos.x,
      y: y - currentPos.y
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragNodeRef.current || !svgRef.current) return;

    const svgRect = svgRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - svgRect.left) / svgRect.width) * 500;
    const mouseY = ((e.clientY - svgRect.top) / svgRect.height) * 350;

    // Bound node coordinates inside the 500x350 box
    const x = Math.max(15, Math.min(485, mouseX - dragOffsetRef.current.x));
    const y = Math.max(15, Math.min(335, mouseY - dragOffsetRef.current.y));

    setPositions(prev => ({
      ...prev,
      [dragNodeRef.current!]: { x, y }
    }));
  };

  const handleMouseUp = () => {
    dragNodeRef.current = null;
    setActiveNode(null);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [positions]);

  const handleNodeClick = (node: GraphNode) => {
    // Only select if not dragging
    if (node.type === "note") {
      onSelectNote(node.id);
    }
  };

  const getNodeColor = (type: string, isHovered: boolean, isActive: boolean) => {
    if (isActive) return "fill-cyan-400 stroke-cyan-300";
    if (type === "skill") return isHovered ? "fill-blue-400 stroke-blue-300" : "fill-blue-500 stroke-blue-600";
    if (type === "experience") return isHovered ? "fill-purple-400 stroke-purple-300" : "fill-purple-500 stroke-purple-600";
    if (type === "project") return isHovered ? "fill-amber-400 stroke-amber-300" : "fill-amber-500 stroke-amber-600";
    return isHovered ? "fill-green-400 stroke-green-300" : "fill-green-500 stroke-green-600";
  };

  const isLinkActive = (source: string, target: string) => {
    if (!hoveredNode) return true;
    return source === hoveredNode || target === hoveredNode;
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950 rounded-xl border border-zinc-800 p-5 shadow-2xl text-left">
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <h3 className="text-lg font-bold text-white">Obsidian Knowledge Graph View</h3>
        </div>
        <p className="text-xs text-zinc-400 mt-1">
          Kéo thả các nút để co giãn liên kết và nhấn vào ghi chú (nút màu xanh lá) để đọc nội dung.
        </p>
      </div>

      {/* SVG Canvas */}
      <div className="relative flex-1 min-h-[350px] bg-zinc-950/80 rounded-lg border border-zinc-900 overflow-hidden select-none">
        <svg
          ref={svgRef}
          className="w-full h-full min-h-[350px] cursor-grab active:cursor-grabbing"
          viewBox="0 0 500 350"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connection Lines (Links) */}
          <g>
            {graphData.links.map((link, idx) => {
              const start = positions[link.source];
              const end = positions[link.target];
              if (!start || !end) return null;
              
              const active = isLinkActive(link.source, link.target);

              return (
                <line
                  key={idx}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  className={`transition-colors duration-200 stroke-2 ${
                    active 
                      ? hoveredNode 
                        ? "stroke-cyan-400/80" 
                        : "stroke-zinc-800" 
                      : "stroke-zinc-900/30"
                  }`}
                />
              );
            })}
          </g>

          {/* Nodes */}
          <g>
            {graphData.nodes.map((node) => {
              const pos = positions[node.id];
              if (!pos) return null;

              const isHovered = hoveredNode === node.id;
              const isActive = activeNode === node.id;
              const isDirectlyConnected = hoveredNode 
                ? graphData.links.some(l => 
                    (l.source === hoveredNode && l.target === node.id) || 
                    (l.target === hoveredNode && l.source === node.id) ||
                    node.id === hoveredNode
                  )
                : true;

              return (
                <g
                  key={node.id}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  className={`transition-opacity duration-300 ${
                    isDirectlyConnected ? "opacity-100" : "opacity-25"
                  }`}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onMouseDown={(e) => handleMouseDown(e, node.id)}
                  onClick={() => handleNodeClick(node)}
                >
                  {/* Outer glowing layer on hover */}
                  {(isHovered || isActive) && (
                    <circle r="12" className="fill-transparent stroke-cyan-400/50 stroke-2 animate-pulse" />
                  )}
                  {/* Main Circle */}
                  <circle
                    r={node.id === "huy" ? "9" : "7"}
                    className={`stroke-2 transition-all duration-200 ${getNodeColor(node.type, isHovered, isActive)}`}
                  />
                  {/* Node Label Text */}
                  <text
                    y={node.id === "huy" ? "-14" : "-11"}
                    textAnchor="middle"
                    className={`font-mono text-[9px] font-bold select-none pointer-events-none ${
                      isHovered || isActive ? "fill-cyan-400" : "fill-zinc-400"
                    }`}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Legend key indicators */}
      <div className="mt-4 flex flex-wrap gap-4 text-[10px] font-mono text-zinc-500 border-t border-zinc-900 pt-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span>Kỹ năng</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
          <span>Kinh nghiệm</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span>Dự án</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span>Ghi chú (Click)</span>
        </div>
      </div>
    </div>
  );
}
