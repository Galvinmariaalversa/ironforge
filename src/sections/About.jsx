import React from 'react';
import { Shield, Dumbbell, Zap, Flame, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';

export default function About({ onReadManifesto }) {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div className="philosophy-grid">
          <div className="philosophy-media">
            <img
              src="/images/gym_interior.jpg"
              alt="Ironforge luxury dark gym interior and turf track"
              className="philosophy-img"
              loading="lazy"
            />
            <div className="philosophy-badge">
              <Shield size={20} className="text-orange" />
              <div className="philosophy-badge-text">
                60,000 SQ FT OF ARCHITECTURAL PRECISION
              </div>
            </div>
          </div>

          <div className="philosophy-content">
            <SectionHeading
              tag="THE PHILOSOPHY"
              title="MORE THAN A GYM."
              highlight="A TEMPLE OF DISCIPLINE."
              subtitle="We believe true physical strength is the bedrock of relentless mental dominance. IronForge was engineered to strip away superficial trends, commercial compromises, and excuses."
            />

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon-box">
                  <Dumbbell size={22} />
                </div>
                <div>
                  <h3 className="feature-title">BIOMECHANICALLY SUPERIOR GEAR</h3>
                  <p className="feature-desc">
                    Custom fabricated steel racks, calibrated competition plates, and precision cam-driven machines engineered for exact resistance curves.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-box">
                  <Zap size={22} />
                </div>
                <div>
                  <h3 className="feature-title">ELITE PERFORMANCE PROTOCOLS</h3>
                  <p className="feature-desc">
                    Data-driven periodization tailored to your biology. Every rep, set, and recovery cycle is tracked and optimized for progressive overload.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-box">
                  <Flame size={22} />
                </div>
                <div>
                  <h3 className="feature-title">UNCOMPROMISING BROTHERHOOD</h3>
                  <p className="feature-desc">
                    An electric iron sanctuary surrounded by serious athletes, competitive powerlifters, and coaches who will never let you settle for mediocrity.
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="secondary"
              onClick={onReadManifesto}
              icon={ChevronRight}
            >
              READ OUR MANIFESTO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
