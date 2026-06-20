import { useState } from "react";
import { content } from "../data/content";
import EscapeButton from "./EscapeButton";
import CelebrationEffect from "./CelebrationEffect";
import "./ContractSection.css";

export default function ContractSection() {
  const [accepted, setAccepted] = useState(false);
  const [secondAccepted, setSecondAccepted] = useState(false);
  const [celebrated, setCelebrated] = useState(false);

  const canComplete = accepted && secondAccepted;

  const handleComplete = () => {
    if (!canComplete) return;
    setCelebrated(true);
    setTimeout(() => {
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
    }, 2800);
  };

  return (
    <section id="contract" className="contract-section">
      <CelebrationEffect active={celebrated} />

      <div className="contract-inner fade-in-scroll">
        <h2 className="contract-title">{content.contract.title}</h2>

        <div className="contract-card glass-card">
          <ol className="contract-list">
            {content.contract.items.map((item, i) => (
              <li key={i} className="contract-item">
                <span className="contract-num">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="accept-area">
          <div className="accept-buttons">
            <button
              className={`accept-btn ${accepted ? "accept-btn--active" : ""}`}
              onClick={() => setAccepted(true)}
            >
              {content.contract.acceptButton}
            </button>

            <EscapeButton label={content.contract.rejectButton} />
          </div>

          {accepted && (
            <div className="second-accept fade-in">
              <label className="second-accept-label">
                <input
                  type="checkbox"
                  checked={secondAccepted}
                  onChange={(e) => setSecondAccepted(e.target.checked)}
                  className="second-accept-checkbox"
                />
                <span>{content.contract.secondAccept}</span>
              </label>
            </div>
          )}

          <button
            className={`complete-btn ${canComplete ? "complete-btn--active" : ""}`}
            onClick={handleComplete}
            disabled={!canComplete}
          >
            {content.contract.completeButton}
          </button>
        </div>
      </div>
    </section>
  );
}
