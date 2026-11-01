import React from 'react';
import { X, ArrowRight, Award, Clock } from 'lucide-react';
import Button from './Button';

export default function TrainerModal({ trainer, onClose, onBookSession }) {
  if (!trainer) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src={trainer.image}
            alt={trainer.name}
            style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-orange)' }}
          />
          <div>
            <div className="section-tag" style={{ marginBottom: '2px' }}>{trainer.badge}</div>
            <h3 style={{ fontSize: '24px', fontWeight: 800 }}>{trainer.name}</h3>
            <div style={{ color: 'var(--color-orange)', fontSize: '13px', fontWeight: 600 }}>{trainer.role}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 14px', borderRadius: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-gray-400)', textTransform: 'uppercase' }}>
              <Clock size={14} className="text-orange" /> Experience
            </div>
            <div style={{ fontWeight: 800, color: '#fff', fontSize: '13.5px', marginTop: '4px' }}>{trainer.experience}</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 14px', borderRadius: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-gray-400)', textTransform: 'uppercase' }}>
              <Award size={14} className="text-orange" /> Credentials
            </div>
            <div style={{ fontWeight: 800, color: 'var(--color-orange)', fontSize: '13px', marginTop: '4px' }}>{trainer.certifications}</div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', letterSpacing: '0.1em', color: 'var(--color-orange)', marginBottom: '8px', textTransform: 'uppercase' }}>
            Biography & Philosophy
          </div>
          <p style={{ color: 'var(--text-gray-300)', fontSize: '14px', lineHeight: '1.6' }}>
            {trainer.bio}
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', letterSpacing: '0.1em', color: 'var(--color-orange)', marginBottom: '8px', textTransform: 'uppercase' }}>
            Core Disciplines
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {trainer.tags.map((tag, idx) => (
              <span key={idx} className="tag-pill" style={{ padding: '5px 12px', fontSize: '12px' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Button
          variant="primary"
          style={{ width: '100%' }}
          onClick={() => {
            onClose();
            if (onBookSession) onBookSession(trainer);
          }}
          icon={ArrowRight}
        >
          BOOK A SESSION WITH {trainer.name.split(' ')[0].toUpperCase()}
        </Button>
      </div>
    </div>
  );
}
