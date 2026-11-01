import React from 'react';
import { X } from 'lucide-react';
import Button from './Button';

export default function ManifestoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="section-tag">THE IRONFORGE CODE</div>
        <h3 style={{ fontSize: '30px', marginBottom: '14px' }}>
          OUR <span className="text-orange">MANIFESTO</span>
        </h3>

        <div
          style={{
            color: 'var(--text-gray-300)',
            fontSize: '14.5px',
            lineHeight: '1.8',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            marginBottom: '24px'
          }}
        >
          <p>
            We live in a world that glorifies shortcuts and comfortable illusions. IronForge was built as an uncompromising counter-culture.
          </p>
          <p>
            Here, the barbell does not lie. It does not care about opinions, status, or intentions. It moves only through physical force, discipline, and absolute presence.
          </p>
          <p>
            When you step beneath the iron in our temple, you shed all outside noise. You commit to progressive mastery, biological integrity, and relentless execution.
          </p>
        </div>

        <Button variant="primary" style={{ width: '100%' }} onClick={onClose}>
          UNDERSTOOD. ENTER THE ARENA.
        </Button>
      </div>
    </div>
  );
}
