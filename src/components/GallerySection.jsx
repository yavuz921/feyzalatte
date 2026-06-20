import { content } from "../data/content";
import "./GallerySection.css";

export default function GallerySection() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-inner">
        <h2 className="gallery-title">{content.gallery.title}</h2>
        <div className="gallery-grid">
          {content.gallery.items.map((item) => (
            <div key={item.id} className="polaroid-card glass-card">
              <div className="polaroid-photo">
                {item.image ? (
                  <img src={item.image} alt={item.title} />
                ) : (
                  <div className="polaroid-placeholder">
                    <span>🌸</span>
                    <span className="polaroid-placeholder-text">Yakında...</span>
                  </div>
                )}
              </div>
              <div className="polaroid-info">
                <p className="polaroid-title">{item.title}</p>
                <p className="polaroid-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
