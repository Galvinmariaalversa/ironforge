import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function CtaBanner({ onClaimPass }) {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner">
          <div>
            <div className="section-tag" style={{ marginBottom: '6px' }}>LIMITED PASSES AVAILABLE</div>
            <h2 className="cta-banner-title">
              STEP INSIDE <span className="text-orange">THE FORGE.</span>
            </h2>
            <p className="cta-banner-desc">
              Your first session is entirely on us. Experience the atmosphere, test the equipment, and consult with a Vanguard coach.
            </p>
          </div>
          <Button
            variant="primary"
            className="animate-glow"
            onClick={onClaimPass}
            icon={ArrowRight}
          >
            CLAIM YOUR FREE VIP PASS
          </Button>
        </div>
      </div>
    </section>
  );
}
