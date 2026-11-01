import React from 'react';
import { METRICS_DATA } from '../data/gymData';

export default function Metrics() {
  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {METRICS_DATA.map((m, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-number">{m.number}</div>
              <div className="metric-title">{m.title}</div>
              <div className="metric-desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
