import "./HeroSection.css";
import { content } from "../data/content";

export default function HeroSection() {
  const handleScroll = () => {
    document.getElementById("contract")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-inner fade-in">
        <div className="hero-milk-icon">🥛</div>
        <h1 className="hero-title">{content.hero.title}</h1>
        {content.hero.subtitle && <p className="hero-subtitle">{content.hero.subtitle}</p>}
        <button className="scroll-down-btn" onClick={handleScroll} aria-label="Aşağı kaydır">
          <span className="scroll-arrow">↓</span>
        </button>
      </div>
    </section>
  );
}
