import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const features = [
  { icon: '🎓', title: 'Expert-led Training', desc: 'Learn from practitioners actively building and deploying AI in the real world — not just educators.' },
  { icon: '🛠️', title: 'Project-Driven', desc: 'Build real systems, not just watch lectures. Every program ends with a tangible deliverable.' },
  { icon: '🌐', title: 'Global Community', desc: 'Join thousands of learners, alumni, and mentors across 120+ countries building together.' },
  { icon: '🔄', title: 'Always Current', desc: '54+ live update sessions per year to keep you ahead as AI evolves weekly.' },
];

function FeatureCard({ feature, borderRight }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2.5rem 2rem',
        borderRight: borderRight ? '1px solid var(--border)' : 'none',
        borderBottom: 'none',
        display: 'flex', flexDirection: 'column', gap: '0.5rem',
        transition: 'background 0.2s',
        background: hovered ? 'var(--surface)' : 'transparent',
      }}
    >
      <div style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>{feature.icon}</div>
      <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{feature.title}</h4>
      <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65 }}>{feature.desc}</p>
    </div>
  );
}

export default function FeaturesStrip() {
  const isTablet = useMediaQuery('(max-width: 900px)');
  const isMobile = useMediaQuery('(max-width: 480px)');

  // Determine columns: 4 on desktop, 2 on tablet, 1 on mobile
  const cols = isMobile ? 1 : isTablet ? 2 : 4;

  return (
    <div className="reveal" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}>
        {features.map((f, i) => {
          // Show right border unless last in a row
          const isLastInRow = (i + 1) % cols === 0 || i === features.length - 1;
          return (
            <div key={f.title} style={{
              borderBottom: Math.floor(i / cols) < Math.floor((features.length - 1) / cols)
                ? '1px solid var(--border)' : 'none',
            }}>
              <FeatureCard feature={f} borderRight={!isLastInRow} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
