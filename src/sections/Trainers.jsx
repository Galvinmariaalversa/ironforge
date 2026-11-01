import React from 'react';
import { TRAINERS_DATA } from '../data/gymData';
import SectionHeading from '../components/SectionHeading';

export default function Trainers({ onSelectTrainer }) {
  return (
    <section className="section-padding" id="coaches">
      <div className="container">
        <SectionHeading
          tag="WORLD-CLASS COACHES"
          title="TRAIN WITH THE"
          highlight="VANGUARD."
          subtitle="Learn from Olympians, IFBB pros, and master strength scientists who live by the discipline they teach."
          align="center"
        />

        <div className="trainers-grid">
          {TRAINERS_DATA.map((t) => (
            <div
              key={t.id}
              className="trainer-card"
              onClick={() => onSelectTrainer && onSelectTrainer(t)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (onSelectTrainer) onSelectTrainer(t);
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              <div className="trainer-img-wrap">
                <img src={t.image} alt={t.name} className="trainer-img" loading="lazy" />
                <div className="trainer-overlay"></div>
                <div className="trainer-badge">{t.badge}</div>
              </div>

              <div className="trainer-details">
                <h3 className="trainer-name">{t.name}</h3>
                <div className="trainer-role">{t.role}</div>
                <p className="trainer-bio">{t.bio}</p>
                <div className="trainer-tags">
                  {t.tags.map((tag, i) => (
                    <span key={i} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
