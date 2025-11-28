"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 3, 100));  // never > 100
    }, 70);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!visible) return null;

  const totalBars = 30; // or whatever you want
  const filledBars = Math.round((progress / 100) * totalBars);
  const emptyBars = Math.max(totalBars - filledBars, 0);

  // Tailwind's emerald-400 color
  const emerald = "#34d399";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black font-bold"
      style={{ color: emerald }}
    >
      <div
        className="px-8 py-6 border"
        style={{
          borderColor: emerald,
          minWidth: "400px",
          boxShadow: `0 0 20px ${emerald}40`,
        }}
      >
        {/* ASCII Title */}
{/* SVG Logo */}
<div className="flex justify-center mb-6">
  <img
    src="/secureithubLogo.svg"
    alt="SecureIT-Hub Logo"
    className="
      w-[220px]        /* Mobile */
      sm:w-[220px]     /* Small screens */
      md:w-[260px]     /* Medium */
      lg:w-[300px]     /* Desktop */
      drop-shadow-[0_0_12px_rgba(52,211,153,0.7)] 
    "
  />
</div>


        {/* Loading label */}
        <div className="flex justify-between text-xs mb-2 opacity-75">
          <span>Loading system</span>
          <span>{progress.toString().padStart(3, "0")}%</span>
        </div>

        {/* ASCII bar */}
        <div className="text-base leading-relaxed">
          <div>┌{"─".repeat(totalBars + 2)}┐</div>
          <div>
  │{" "}
  <span style={{ color: emerald }}>
    {"█".repeat(filledBars)}
  </span>
  <span className="opacity-30">
    {"░".repeat(emptyBars)}   {/* <- uses safe value */}
  </span>{" "}
  │
</div>
          <div>└{"─".repeat(totalBars + 2)}┘</div>
        </div>

        {/* Subtitle */}
        <div
          className="text-center mt-4 opacity-70"
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            color: emerald,
          }}
        >
          SYSTEM INITIALIZING…
        </div>
      </div>
    </div>
  );
}
