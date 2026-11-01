import React from 'react';
import { GALLERY_DATA } from '../data/gymData';
import SectionHeading from '../components/SectionHeading';

export default function Gallery({ onSelectImage }) {
  return (
    <section className="section-padding" id="facilities" style={{ background: 'var(--bg-darker)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <SectionHeading
            tag="WORLD CLASS SPACES"
            title="ARCHITECTURAL"
            highlight="PERFECTION."
            subtitle="60,000 sq ft of brutalist concrete, precision calibrated steel, engineered acoustic control, and cinematic lighting."
            style={{ marginBottom: 0 }}
          />
        </div>

        <div className="gallery-bento">
          {GALLERY_DATA.map((item) => (
            <div
              key={item.id}
              className={`bento-item ${item.className}`}
              onClick={() => onSelectImage && onSelectImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (onSelectImage) onSelectImage(item);
                }
              }}
            >
              <img src={item.image} alt={item.title} className="bento-img" loading="lazy" />
              <div className="bento-overlay">
                <div className="bento-tag">{item.tag}</div>
                <h3 className="bento-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
