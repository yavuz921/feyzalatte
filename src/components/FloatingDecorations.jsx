import { useEffect, useRef } from "react";
import "./FloatingDecorations.css";

const DECORATIONS = [
  { type: "daisy", symbol: "🌼" },
  { type: "daisy", symbol: "🌸" },
  { type: "milk", symbol: "🥛" },
  { type: "heart", symbol: "💗" },
  { type: "petal", symbol: "🌺" },
  { type: "heart", symbol: "💕" },
  { type: "daisy", symbol: "🌼" },
  { type: "milk", symbol: "💧" },
  { type: "petal", symbol: "🌸" },
  { type: "heart", symbol: "🩷" },
  { type: "daisy", symbol: "🌼" },
  { type: "milk", symbol: "🥛" },
  { type: "heart", symbol: "💗" },
  { type: "petal", symbol: "🌺" },
  { type: "daisy", symbol: "🌸" },
];

export default function FloatingDecorations() {
  return (
    <div className="floating-container" aria-hidden="true">
      {DECORATIONS.map((dec, i) => (
        <span
          key={i}
          className={`floating-item floating-${dec.type}`}
          style={{
            left: `${(i * 6.5 + 2) % 96}%`,
            animationDelay: `${(i * 1.3) % 12}s`,
            animationDuration: `${12 + (i % 5) * 2.5}s`,
            fontSize: `${1.1 + (i % 3) * 0.4}rem`,
          }}
        >
          {dec.symbol}
        </span>
      ))}
    </div>
  );
}
