import React from 'react';
import { MapPin, Clock, Phone, Mail, Shield, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';

export default function Contact({
  formData,
  setFormData,
  onSubmit
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <section className="section-padding" id="contact" style={{ background: 'var(--bg-darker)' }}>
      <div className="container">
        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info-card">
            <div>
              <div className="status-pill">
                <span className="pulse-dot"></span>
                CURRENTLY OPEN — PEAK ATMOSPHERE
              </div>

              <SectionHeading
                tag="LOCATION & SANCTUARY"
                title="VISIT"
                highlight="OUR ARENA."
                subtitle="Conveniently situated in the industrial center with dedicated private valet and secured member parking."
                style={{ marginBottom: '20px' }}
              />

              <div className="contact-details-list">
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="contact-label">SANCTUARY LOCATION</div>
                    <div className="contact-value">742 Ironworks Blvd, Industrial District, NY 10013</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="contact-label">FACILITY HOURS</div>
                    <div className="contact-value">Members 24/7 Access | Staffed: Mon-Sun 5 AM - 11 PM</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="contact-label">DIRECT PHONE</div>
                    <div className="contact-value">+1 (800) 476-6367 (IRON-FORGE)</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="contact-label">VIP CONCIERGE</div>
                    <div className="contact-value">concierge@ironforgegym.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '16px', background: 'rgba(255,85,0,0.06)', borderRadius: '6px', border: '1px solid rgba(255,85,0,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-orange)', fontWeight: 800, fontSize: '13px', textTransform: 'uppercase' }}>
                <Shield size={16} /> Guaranteed Private Orientation
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-gray-300)', marginTop: '4px' }}>
                Every visitor receives a personalized facility walk-through and movement screen.
              </div>
            </div>
          </div>

          {/* Right: Interactive Consultation Form */}
          <div className="contact-form-card">
            <h3 className="form-title">SCHEDULE A PRIVATE TOUR</h3>
            <p className="form-subtitle">
              Reserve your dedicated walk-through and consultation with our Head of Strength.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Alexander Stone"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="alexander@domain.com"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Selected Membership Plan</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Select a plan or leave blank"
                    value={formData.membershipPlan || 'Forge Pro'}
                    onChange={(e) => setFormData({ ...formData, membershipPlan: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Primary Training Goal</label>
                  <select
                    className="form-select"
                    value={formData.goal || 'Hypertrophy & Muscle Growth'}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  >
                    <option>Hypertrophy & Muscle Growth</option>
                    <option>Powerlifting & Maximum Strength</option>
                    <option>Athletic Conditioning & Agility</option>
                    <option>Body Fat Recomposition</option>
                    <option>Olympic Weightlifting</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Preferred Time Window</label>
                  <select
                    className="form-select"
                    value={formData.timePreference || 'Morning (6 AM - 11 AM)'}
                    onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
                  >
                    <option>Morning (6 AM - 11 AM)</option>
                    <option>Mid-Day (11 AM - 4 PM)</option>
                    <option>Evening (4 PM - 9 PM)</option>
                    <option>Weekend Dedicated Tour</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Specific Questions or Injury Notes</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Tell us about your background or equipment requirements..."
                    value={formData.notes || ''}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-group full-width">
                  <Button
                    type="submit"
                    variant="primary"
                    style={{ width: '100%', padding: '16px' }}
                    icon={ArrowRight}
                  >
                    CONFIRM & BOOK PRIVATE TOUR
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
