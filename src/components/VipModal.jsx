import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function VipModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="section-tag">VIP PASS ACCESS</div>
        <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>
          CLAIM YOUR <span className="text-orange">7-DAY PASS</span>
        </h3>
        <p style={{ color: 'var(--text-gray-300)', fontSize: '14px', marginBottom: '24px' }}>
          Gain unconditional access to our full facility, calibrated equipment, and sauna lounge for 7 consecutive days. Zero credit card required.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '14px' }}>
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Marcus Sterling"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group" style={{ marginBottom: '14px' }}>
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="marcus@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group" style={{ marginBottom: '24px' }}>
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-input"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <Button type="submit" variant="primary" style={{ width: '100%', padding: '16px' }} icon={ArrowRight}>
            ISSUE MY DIGITAL KEY
          </Button>
        </form>
      </div>
    </div>
  );
}
