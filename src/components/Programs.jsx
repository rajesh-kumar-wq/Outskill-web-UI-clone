import React from 'react';

const ArrowIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const programs = [
  {
    tag: 'Fellowship', tagClass: 'gold',
    title: '6-Month AI Generalist Fellowship',
    desc: 'Immersive cohort program combining technical AI training, business strategy from Kairos MBA content, and monetization mastery.',
    meta: ['⏱ 6 months', '👥 Live cohorts', '💻 Hybrid'],
  },
  {
    tag: 'Accelerator', tagClass: 'orange',
    title: 'AI Accelerator Program',
    desc: 'Build real-world AI systems and prototypes with hands-on experience. Gain the technical edge plus the strategy to turn it into value.',
    meta: ['⏱ Self-paced', '🏆 Top rated'],
  },
  {
    tag: 'Workshop', tagClass: 'blue',
    title: 'Generative AI Mastermind',
    desc: 'An intensive 2-day weekend workshop covering GenAI tools, prompt engineering, agentic workflows, and practical real-world applications.',
    meta: ['⏱ 2 days', '📅 Weekends'],
  },
  {
    tag: 'Self-Paced', tagClass: 'green',
    title: 'AI Tools Deep Dive',
    desc: 'Strategic walkthroughs of the most powerful AI tools available today — built for operators, freelancers, and creators who want to execute.',
    meta: ['⏱ Flexible', '📺 On-demand'],
  },
];

const tagColors = {
  gold: { bg: 'rgba(240,165,0,0.12)', color: 'var(--accent)' },
  orange: { bg: 'rgba(255,107,53,0.12)', color: 'var(--accent2)' },
  blue: { bg: 'rgba(99,179,237,0.12)', color: '#63b3ed' },
  green: { bg: 'rgba(104,211,145,0.12)', color: '#68d391' },
};

function ProgramCard({ program }) {
  const [hovered, setHovered] = React.useState(false);
  const tc = tagColors[program.tagClass];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg)', border: `1px solid ${hovered ? 'rgba(240,165,0,0.25)' : 'var(--border)'}`,
        borderRadius: 16, padding: '2rem', cursor: 'pointer', position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 48px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
      }} />

      {/* Arrow */}
      <div style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem',
        width: 32, height: 32, borderRadius: '50%',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hovered ? 'var(--accent)' : 'transparent',
        transition: 'background 0.2s, border-color 0.2s',
        color: hovered ? '#080a0f' : 'currentColor',
      }}>
        <ArrowIcon />
      </div>

      {/* Tag */}
      <div style={{
        display: 'inline-block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em',
        textTransform: 'uppercase', padding: '0.28rem 0.7rem', borderRadius: 4,
        marginBottom: '1.2rem', background: tc.bg, color: tc.color,
      }}>
        {program.tag}
      </div>

      <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.7rem' }}>
        {program.title}
      </h3>
      <p style={{ color: 'var(--muted2)', fontSize: '0.875rem', lineHeight: 1.7 }}>{program.desc}</p>

      <div style={{ display: 'flex', gap: '1.2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        {program.meta.map(m => (
          <span key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--muted)' }}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <section style={{ background: 'var(--surface)', padding: '7rem 5%' }}>
      <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
        <div>
          <div className="section-label">What we offer</div>
          <h2 className="section-title">Programs built for <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>every path</em></h2>
        </div>
        <p className="section-sub">From 2-day workshops to 6-month immersive fellowships — choose the depth that fits your goals and schedule.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {programs.map(p => (
          <div key={p.title} className="reveal">
            <ProgramCard program={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
