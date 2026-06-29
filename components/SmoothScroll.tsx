"use client";

import { useEffect } from "react";

const ease = 0.075;
const wheelStrength = 0.95;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function maxScrollY() {
  return Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
}

function shouldIgnoreWheel(event: WheelEvent) {
  if (event.ctrlKey || event.metaKey) return true;

  const target = event.target as HTMLElement | null;
  return Boolean(
    target?.closest(
      "input, textarea, select, [contenteditable='true'], [data-native-scroll]"
    )
  );
}

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    if (reducedMotion.matches || coarsePointer.matches) {
      return;
    }

    let current = window.scrollY;
    let target = window.scrollY;
    let frame = 0;
    let locked = false;

    const stop = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    const tick = () => {
      current += (target - current) * ease;

      if (Math.abs(target - current) < 0.5) {
        current = target;
        locked = true;
        window.scrollTo(0, current);
        locked = false;
        frame = 0;
        return;
      }

      locked = true;
      window.scrollTo(0, current);
      locked = false;
      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (shouldIgnoreWheel(event)) return;

      event.preventDefault();
      const delta = event.deltaMode === 1 ? event.deltaY * 18 : event.deltaY;

      target = clamp(target + delta * wheelStrength, 0, maxScrollY());
      start();
    };

    const handleNavigate = (event: Event) => {
      const { detail } = event as CustomEvent<{ top: number }>;
      if (typeof detail?.top !== "number") return;

      target = clamp(detail.top, 0, maxScrollY());
      start();
    };

    const handleScroll = () => {
      if (locked) return;

      current = window.scrollY;
      target = window.scrollY;
      stop();
    };

    const handleResize = () => {
      target = clamp(target, 0, maxScrollY());
      current = clamp(current, 0, maxScrollY());
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("portfolio:smooth-scroll", handleNavigate);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      stop();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("portfolio:smooth-scroll", handleNavigate);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}
