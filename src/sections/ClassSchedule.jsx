import React, { useState } from 'react';
import { Clock, User, Users, Flame, ArrowRight, Check } from 'lucide-react';
import { SCHEDULE_DAYS, SCHEDULE_DATA } from '../data/gymData';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function ClassSchedule({ onBookClass }) {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const filteredClasses = SCHEDULE_DATA.filter((item) => item.day === selectedDay);

  return (
    <section className="section-padding" id="schedule" style={{ background: 'var(--bg-black)' }}>
      <div className="container">
        <SectionHeading
          tag="WEEKLY PROGRAMMING"
          title="VANGUARD"
          highlight="CLASS SCHEDULE."
          subtitle="Precision-coached small group sessions engineered for progressive overload and metabolic supremacy. Select a day to reserve your spot."
          align="center"
        />

        {/* Day Tabs */}
        <div className="schedule-tabs-wrap">
          {SCHEDULE_DAYS.map((day) => (
            <button
              key={day}
              className={`schedule-tab-btn ${selectedDay === day ? 'active' : ''}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        {filteredClasses.length > 0 ? (
          <div className="schedule-cards-grid">
            {filteredClasses.map((item) => (
              <div
                key={item.id}
                className="forge-card schedule-card-item"
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '12px'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        color: 'var(--color-orange)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase'
                      }}
                    >
                      <Clock size={14} /> {item.time}
                    </span>
                    <span
                      className="tag-pill"
                      style={{
                        background: 'rgba(255, 85, 0, 0.1)',
                        color: 'var(--color-orange-light)',
                        border: '1px solid rgba(255, 85, 0, 0.25)',
                        fontSize: '11px'
                      }}
                    >
                      {item.intensity} Intensity
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 800,
                      marginBottom: '8px',
                      color: 'var(--text-white)'
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13.5px',
                      color: 'var(--text-gray-300)',
                      marginBottom: '18px'
                    }}
                  >
                    <User size={15} className="text-orange" />
                    <span>Coach: {item.trainer}</span>
                    <span style={{ color: 'var(--text-gray-500)' }}>•</span>
                    <span>{item.duration}</span>
                  </div>
                </div>

                <div className="schedule-card-footer">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      color: item.seatsAvailable <= 3 ? 'var(--color-gold)' : 'var(--text-gray-400)'
                    }}
                  >
                    <Users size={14} />
                    <span>
                      {item.seatsAvailable} / {item.totalSeats} spots left
                    </span>
                  </div>

                  <Button
                    variant="secondary"
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                    onClick={() => onBookClass && onBookClass(item)}
                    icon={ArrowRight}
                  >
                    BOOK CLASS
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <p style={{ color: 'var(--text-gray-400)', fontSize: '15px' }}>
              No scheduled group classes on this day. Open arena access remains 24/7 for members.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
