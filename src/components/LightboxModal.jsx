import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: '840px', padding: '24px', position: 'relative' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close lightbox">
          <X size={20} />
        </button>

        <div style={{ position: 'relative' }}>
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '440px',
              objectFit: 'cover',
              borderRadius: '6px',
              marginBottom: '20px'
            }}
          />

          {onPrev && (
            <button
              onClick={onPrev}
              aria-label="Previous image"
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(6, 6, 8, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              aria-label="Next image"
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(6, 6, 8, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>

        <div className="section-tag">{item.tag}</div>
        <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{item.title}</h3>
        <p style={{ color: 'var(--text-gray-300)', fontSize: '14px' }}>{item.desc}</p>
      </div>
    </div>
  );
}
