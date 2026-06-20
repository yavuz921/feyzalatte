import { useEffect, useRef, useState } from "react";
import "./CelebrationEffect.css";

const PARTICLES = ["💗", "🌸", "🥛", "💕", "🌼", "🩷", "💧", "🌺"];

export default function CelebrationEffect({ active }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) return;
    setVisible(true);

    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < 50; i++) {
      const el = document.createElement("span");
      el.className = "celebrate-particle";
      el.textContent = PARTICLES[i % PARTICLES.length];
      el.style.left = Math.random() * 100 + "vw";
      el.style.animationDelay = Math.random() * 1.5 + "s";
      el.style.fontSize = 1 + Math.random() * 1.5 + "rem";
      el.style.animationDuration = 1.5 + Math.random() * 2 + "s";
      container.appendChild(el);
    }

    const timer = setTimeout(() => {
      setVisible(false);
      container.innerHTML = "";
    }, 2500);

    return () => clearTimeout(timer);
  }, [active]);

  if (!visible) return null;

  return (
    <div className="celebration-wrapper">
      <div ref={containerRef} className="celebration-particles" aria-hidden="true" />
      <div className="celebration-message fade-in-pop">
        <span className="celebration-text">%100 Barışıldı 💖</span>
      </div>
    </div>
  );
}
