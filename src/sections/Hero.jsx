import React from 'react';
import { Sparkles, ArrowRight, Play, Dumbbell } from 'lucide-react';
import Button from '../components/Button';

export default function Hero({ onClaimPass, onExploreFacility }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-wrapper">
        <img
          src="/images/hero_athlete.jpg"
          alt="Elite strength athlete deadlifting barbell in dark industrial gym"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-glow-orb"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} className="text-orange" />
            WELCOME TO THE TEMPLE OF STRENGTH
          </div>

          <h1 className="hero-title">
            BUILD YOUR
            <span className="highlight-line">STRONGEST SELF.</span>
          </h1>

          <p className="hero-desc">
            Experience elite coaching, cutting-edge biomechanical equipment, and an unyielding culture designed to forge champions. Step into the arena.
          </p>

          <div className="hero-buttons">
            <Button
              variant="primary"
              className="animate-glow"
              onClick={onClaimPass}
              icon={ArrowRight}
            >
              CLAIM 7-DAY VIP PASS
            </Button>
            <a 
              href="#programs" 
              className="btn-secondary" 
              onClick={(e) => {
                e.preventDefault();
                const progElem = document.getElementById('programs');
                if (progElem) progElem.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Dumbbell size={16} className="text-orange" />
              EXPLORE PROGRAMS
            </a>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <div className="hero-stat-num">100<span>+</span></div>
              <div className="hero-stat-label">Elite Equipment</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-num">15<span>+</span></div>
              <div className="hero-stat-label">Master Coaches</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-num">12K<span>+</span></div>
              <div className="hero-stat-label">Members Forged</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
