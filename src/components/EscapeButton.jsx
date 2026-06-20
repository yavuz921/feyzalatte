import { useRef } from "react";
import "./EscapeButton.css";

export default function EscapeButton({ label }) {
  const btnRef = useRef(null);

  const escape = () => {
    const btn = btnRef.current;
    if (!btn) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const rect = btn.getBoundingClientRect();
    const margin = 20;

    let newX, newY;
    let attempts = 0;

    do {
      newX = margin + Math.random() * (vw - rect.width - margin * 2);
      newY = margin + Math.random() * (vh - rect.height - margin * 2);
      attempts++;
    } while (
      attempts < 10 &&
      Math.abs(newX - rect.left) < 80 &&
      Math.abs(newY - rect.top) < 80
    );

    btn.style.position = "fixed";
    btn.style.left = newX + "px";
    btn.style.top = newY + "px";
    btn.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg) scale(0.95)`;

    setTimeout(() => {
      if (btn) btn.style.transform = "rotate(0deg) scale(1)";
    }, 300);
  };

  return (
    <button
      ref={btnRef}
      className="escape-btn"
      onMouseEnter={escape}
      onClick={(e) => e.preventDefault()}
      tabIndex={-1}
      aria-hidden="true"
    >
      {label}
    </button>
  );
}
