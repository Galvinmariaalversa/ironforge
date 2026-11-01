import React from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function ProgramModal({ program, onClose, onEnroll }) {
  if (!program) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="section-tag">TRAINING CURRICULUM /// {program.id}</div>
        <h3 style={{ fontSize: '28px', marginBottom: '12px' }}>
          {program.title}
        </h3>
        <p style={{ color: 'var(--text-gray-300)', fontSize: '14.5px', marginBottom: '20px' }}>
          {program.desc}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 14px', borderRadius: '4px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-gray-400)', textTransform: 'uppercase' }}>Cycle Duration</div>
            <div style={{ fontWeight: 800, color: '#fff', fontSize: '14px' }}>{program.duration}</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 14px', borderRadius: '4px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-gray-400)', textTransform: 'uppercase' }}>Frequency</div>
            <div style={{ fontWeight: 800, color: 'var(--color-orange)', fontSize: '14px' }}>{program.frequency}</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 14px', borderRadius: '4px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-gray-400)', textTransform: 'uppercase' }}>Difficulty</div>
            <div style={{ fontWeight: 800, color: '#fff', fontSize: '14px' }}>{program.difficulty}</div>
          </div>
        </div>

        {program.benefits && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', letterSpacing: '0.1em', color: 'var(--color-orange)', marginBottom: '10px', textTransform: 'uppercase' }}>
              Key Performance Benefits
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {program.benefits.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--text-gray-200)' }}>
                  <CheckCircle2 size={16} className="text-orange" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {program.curriculum && (
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', letterSpacing: '0.1em', color: 'var(--color-orange)', marginBottom: '10px', textTransform: 'uppercase' }}>
              Core Focus Modules
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {program.curriculum.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--text-gray-200)' }}>
                  <CheckCircle2 size={16} className="text-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button
          variant="primary"
          style={{ width: '100%' }}
          onClick={() => {
            onClose();
            if (onEnroll) onEnroll(program);
          }}
          icon={ArrowRight}
        >
          ENQUIRE ABOUT THIS PROGRAM
        </Button>
      </div>
    </div>
  );
}
