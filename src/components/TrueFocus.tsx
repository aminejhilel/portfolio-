"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrueFocusProps {
  words: string[];
  interval?: number; // ms between focus shifts
  blurAmount?: number; // px
  glowColor?: string;
}

export default function TrueFocus({
  words,
  interval = 2200,
  blurAmount = 5,
  glowColor = "rgba(99,102,241,0.85)",
}: TrueFocusProps) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [rect, setRect] = useState<{ left: number; width: number; top: number; height: number } | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Cycle focus
  useEffect(() => {
    const timer = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  // Measure focused word for bracket overlay
  useEffect(() => {
    const word = wordRefs.current[focusedIndex];
    const container = containerRef.current;
    if (!word || !container) return;

    const wordRect = word.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setRect({
      left: wordRect.left - containerRect.left,
      top: wordRect.top - containerRect.top,
      width: wordRect.width,
      height: wordRect.height,
    });
  }, [focusedIndex]);

  // Re-measure on resize
  useEffect(() => {
    const handleResize = () => {
      const word = wordRefs.current[focusedIndex];
      const container = containerRef.current;
      if (!word || !container) return;
      const wordRect = word.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setRect({
        left: wordRect.left - containerRect.left,
        top: wordRect.top - containerRect.top,
        width: wordRect.width,
        height: wordRect.height,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [focusedIndex]);

  const cornerSize = 10;
  const cornerThickness = 2.5;
  const padding = 6;

  return (
    <span
      ref={containerRef}
      style={{ position: "relative", display: "inline-flex", flexWrap: "wrap", gap: "0.25em", alignItems: "center" }}
    >
      {/* Animated bracket overlay */}
      {rect && (
        <motion.span
          key={focusedIndex}
          animate={{
            left: rect.left - padding,
            top: rect.top - padding,
            width: rect.width + padding * 2,
            height: rect.height + padding * 2,
            opacity: 1,
          }}
          initial={{
            left: rect.left - padding,
            top: rect.top - padding,
            width: rect.width + padding * 2,
            height: rect.height + padding * 2,
            opacity: 0,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.8 }}
          style={{
            position: "absolute",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {/* Top-left */}
          <span style={{
            position: "absolute", top: 0, left: 0,
            width: cornerSize, height: cornerSize,
            borderTop: `${cornerThickness}px solid ${glowColor}`,
            borderLeft: `${cornerThickness}px solid ${glowColor}`,
            boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}`,
            borderRadius: "2px 0 0 0",
          }} />
          {/* Top-right */}
          <span style={{
            position: "absolute", top: 0, right: 0,
            width: cornerSize, height: cornerSize,
            borderTop: `${cornerThickness}px solid ${glowColor}`,
            borderRight: `${cornerThickness}px solid ${glowColor}`,
            boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}`,
            borderRadius: "0 2px 0 0",
          }} />
          {/* Bottom-left */}
          <span style={{
            position: "absolute", bottom: 0, left: 0,
            width: cornerSize, height: cornerSize,
            borderBottom: `${cornerThickness}px solid ${glowColor}`,
            borderLeft: `${cornerThickness}px solid ${glowColor}`,
            boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}`,
            borderRadius: "0 0 0 2px",
          }} />
          {/* Bottom-right */}
          <span style={{
            position: "absolute", bottom: 0, right: 0,
            width: cornerSize, height: cornerSize,
            borderBottom: `${cornerThickness}px solid ${glowColor}`,
            borderRight: `${cornerThickness}px solid ${glowColor}`,
            boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}`,
            borderRadius: "0 0 2px 0",
          }} />
        </motion.span>
      )}

      {/* Words */}
      {words.map((word, i) => (
        <motion.span
          key={word + i}
          ref={(el) => { wordRefs.current[i] = el; }}
          animate={{
            filter: i === focusedIndex ? "blur(0px)" : `blur(${blurAmount}px)`,
            opacity: i === focusedIndex ? 1 : 0.35,
          }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          style={{ display: "inline-block", whiteSpace: "nowrap", cursor: "default" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
