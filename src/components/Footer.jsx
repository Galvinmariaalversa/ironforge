import React, { useState } from 'react';
import { Flame, Trophy, Activity, Mail } from 'lucide-react';
import Button from './Button';

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    if (onSubscribe) onSubscribe(email);
    setEmail('');
  };

  return (
    <footer className="forge-footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1 */}
          <div>
            <div className="logo-brand">
              <img
                src="/images/Ironforge Fitness Shield Logo.png"
                alt="Ironforge Fitness"
                className="footer-brand-logo"
              />
            </div>
            <p className="footer-brand-desc">
              The premier temple for serious athletes, powerlifters, and champions. Uncompromised biomechanics, brutalist atmosphere, and scientific coaching.
            </p>
            <div className="social-links">
              <a href="#" className="social-btn" aria-label="Instagram"><Flame size={18} /></a>
              <a href="#" className="social-btn" aria-label="YouTube"><Trophy size={18} /></a>
              <a href="#" className="social-btn" aria-label="Twitter"><Activity size={18} /></a>
              <a href="#" className="social-btn" aria-label="Mail"><Mail size={18} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="footer-col-title">PROGRAMS</h4>
            <ul className="footer-links-list">
              <li><a href="#programs" className="footer-link">Hypertrophy Systems</a></li>
              <li><a href="#programs" className="footer-link">Powerlifting Supremacy</a></li>
              <li><a href="#programs" className="footer-link">Athletic Conditioning</a></li>
              <li><a href="#programs" className="footer-link">Olympic Weightlifting</a></li>
              <li><a href="#programs" className="footer-link">Recovery & Contrast</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="footer-col-title">SANCTUARY</h4>
            <ul className="footer-links-list">
              <li><a href="#about" className="footer-link">Our Philosophy</a></li>
              <li><a href="#coaches" className="footer-link">Master Vanguard</a></li>
              <li><a href="#facilities" className="footer-link">Equipment Roster</a></li>
              <li><a href="#pricing" className="footer-link">Memberships</a></li>
              <li><a href="#contact" className="footer-link">Book Consultation</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="footer-col-title">FORGE DISPATCH</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-gray-400)', marginBottom: '12px' }}>
              Receive weekly biomechanical training breakdowns, nutrition science, and exclusive events.
            </p>
            <form onSubmit={handleSubmit} className="newsletter-box">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="primary" style={{ padding: '0 16px' }}>
                JOIN
              </Button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} IRONFORGE ATHLETICS LLC. ALL RIGHTS RESERVED.
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Membership</a>
            <a href="#">Biosecurity Protocols</a>
            <a href="#">Code of Discipline</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
