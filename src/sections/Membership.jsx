import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_DATA } from '../data/gymData';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function Membership({
  billingCycle,
  setBillingCycle,
  onSelectPlan
}) {
  return (
    <section className="section-padding" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <SectionHeading
            tag="CHOOSE YOUR TIER"
            title="FINEST IN"
            highlight="STRENGTH & POWER."
            subtitle="Transparent membership with zero hidden fees. Select your tier and start your transformation today."
            align="center"
          />

          <div className="billing-toggle">
            <button
              className={`toggle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              ANNUAL (SAVE 20%)
            </button>
            <button
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              MONTHLY
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {PRICING_DATA.map((tier) => (
            <div
              key={tier.id}
              className={`forge-card pricing-card ${tier.featured ? 'featured' : ''}`}
            >
              {tier.badge && <div className="popular-badge">{tier.badge}</div>}

              <div>
                <h3 className="plan-tier-name">{tier.name}</h3>
                <p className="plan-desc">{tier.desc}</p>

                <div className="plan-price-wrap">
                  <span className="plan-price">
                    {billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  <span className="plan-period">
                    {billingCycle === 'annual' ? tier.annualPeriod : tier.monthlyPeriod}
                  </span>
                </div>

                <ul className="plan-features">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="plan-feature-item">
                      <Check size={18} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={tier.featured ? 'primary' : 'secondary'}
                style={{ width: '100%', marginTop: '20px' }}
                onClick={() => onSelectPlan && onSelectPlan(tier)}
                icon={ArrowRight}
              >
                {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
