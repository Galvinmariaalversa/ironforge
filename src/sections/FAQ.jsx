import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/gymData';
import SectionHeading from '../components/SectionHeading';

export default function FAQ() {
  const [openId, setOpenId] = useState(FAQ_DATA[0]?.id || null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-padding" id="faq" style={{ background: 'var(--bg-black)' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        <SectionHeading
          tag="FREQUENT QUESTIONS"
          title="CLARITY ON"
          highlight="THE IRON SANCTUARY."
          subtitle="Everything you need to know about our standards, membership privileges, and training philosophy."
          align="center"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="forge-card"
                style={{
                  border: isOpen ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s ease'
                }}
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    color: 'var(--text-white)',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    gap: '16px'
                  }}
                >
                  <span style={{ color: isOpen ? 'var(--color-orange)' : 'var(--text-white)' }}>
                    {item.question}
                  </span>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '4px',
                      background: isOpen ? 'var(--color-orange)' : 'rgba(255, 255, 255, 0.05)',
                      color: isOpen ? '#fff' : 'var(--text-gray-300)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    style={{
                      padding: '0 24px 22px 24px',
                      color: 'var(--text-gray-300)',
                      fontSize: '14.5px',
                      lineHeight: '1.7',
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    <p style={{ marginTop: '14px' }}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
