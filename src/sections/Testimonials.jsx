import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/gymData';
import SectionHeading from '../components/SectionHeading';

export default function Testimonials() {
  return (
    <section className="section-padding" id="testimonials">
      <div className="container">
        <SectionHeading
          tag="TESTIMONIALS"
          title="TESTED IN"
          highlight="THE IRON."
          align="center"
        />

        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((test) => (
            <div key={test.id} className="forge-card testimonial-card">
              <div>
                <div className="stars-row">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--color-orange)" stroke="none" />
                  ))}
                </div>
                <p className="testimonial-quote">"{test.quote}"</p>
              </div>

              <div className="author-info">
                <img src={test.avatar} alt={test.author} className="author-avatar" loading="lazy" />
                <div>
                  <div className="author-name">{test.author}</div>
                  <div className="author-role">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
