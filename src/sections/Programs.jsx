import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/gymData';
import SectionHeading from '../components/SectionHeading';

export default function Programs({ onSelectProgram }) {
  return (
    <section className="section-padding" id="programs" style={{ background: 'var(--bg-darker)' }}>
      <div className="container">
        <div className="programs-header">
          <SectionHeading
            tag="TRAINING SYSTEMS"
            title="ENGINEERED FOR"
            highlight="PEAK SUPREMACY."
            subtitle="Every program at IronForge is built on peer-reviewed sports science, biomechanical principles, and battle-tested execution."
            style={{ marginBottom: 0 }}
          />
        </div>

        <div className="programs-grid">
          {PROGRAMS_DATA.map((prog) => {
            const IconComponent = prog.icon;
            return (
              <div
                key={prog.id}
                className="forge-card program-card"
                onClick={() => onSelectProgram(prog)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProgram(prog);
                  }
                }}
              >
                <div className="program-top">
                  <span className="program-number">{prog.id}</span>
                  <IconComponent size={28} className="program-icon" />
                </div>
                <div>
                  <h3 className="program-title">{prog.title}</h3>
                  <p className="program-desc">{prog.desc}</p>
                </div>
                <div className="program-footer">
                  <span>EXPLORE PROGRAM</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
