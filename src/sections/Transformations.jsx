import React from 'react';
import { TRANSFORMATIONS_DATA } from '../data/gymData';
import SectionHeading from '../components/SectionHeading';

export default function Transformations() {
  return (
    <section className="section-padding" id="transformations" style={{ background: 'var(--bg-darker)' }}>
      <div className="container">
        <SectionHeading
          tag="PROVEN RESULTS"
          title="BODY ARCHITECTURE"
          highlight="REDEFINED."
          subtitle="Real members. Relentless grit. Measurable metamorphosis documented through bio-impedance and camera."
          align="center"
        />

        <div className="trans-grid">
          {TRANSFORMATIONS_DATA.map((item, idx) => (
            <div key={idx} className="forge-card trans-card">
              <div className="trans-img-wrap">
                <img src={item.image} alt={item.name} className="trans-img" loading="lazy" />
                <div className="trans-pill">{item.duration}</div>
              </div>

              <h3 className="trans-client-name">{item.name}</h3>
              <div className="trans-program-name">{item.program}</div>
              <p style={{ fontSize: '13px', color: 'var(--text-gray-300)', marginBottom: '16px', fontStyle: 'italic' }}>
                "{item.quote}"
              </p>

              <div className="trans-stats-grid">
                <div className="trans-stat-box">
                  <div className="trans-stat-val text-orange">{item.stat1}</div>
                  <div className="trans-stat-lbl">{item.lbl1}</div>
                </div>
                <div className="trans-stat-box">
                  <div className="trans-stat-val">{item.stat2}</div>
                  <div className="trans-stat-lbl">{item.lbl2}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
