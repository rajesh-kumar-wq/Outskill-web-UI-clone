import React from 'react';

const testimonials = [
  {
    text: '"The 2-day Generative AI program truly changed my thought process. For years I\'d been wondering how to safeguard and grow my career — this gave me a clear path forward with real confidence."',
    initials: 'SA', name: 'Samantha A.', role: 'Marketing Director', avatarBg: 'var(--accent)', avatarColor: '#080a0f',
  },
  {
    text: '"Even as an engineering student I could see immediately how to integrate AI into my projects. Best 18 hours invested — structured, practical, and genuinely life-changing."',
    initials: 'RK', name: 'Rahul K.', role: 'Engineering Student', avatarBg: '#63b3ed', avatarColor: '#080a0f',
  },
  {
    text: '"One of the best platforms to develop and deploy AI learnings. All mentors are industry experts in their domains. The sessions were uniquely interactive and eye-opening."',
    initials: 'PL', name: 'Priya L.', role: 'Business Analyst', avatarBg: '#68d391', avatarColor: '#080a0f',
  },
  {
    text: '"Kudos to the whole team for a wonderful learning experience. It helped me understand clearly how to start and grow using AI in my own business — practical, not theoretical."',
    initials: 'MT', name: 'Marcus T.', role: 'Entrepreneur', avatarBg: 'var(--accent2)', avatarColor: '#080a0f',
  },
  {
    text: '"An amazing exploration of generative AI and its possibilities. The sessions were unique and deeply interactive — every mentor brought real passion and domain expertise."',
    initials: 'FO', name: 'Fatima O.', role: 'Product Manager', avatarBg: '#b794f4', avatarColor: '#080a0f',
  },
  {
    text: '"My first AI class and it was absolutely excellent. I\'m a self-employed craftsman and now I can clearly see how AI will transform my work and grow my business in ways I never imagined."',
    initials: 'JB', name: 'James B.', role: 'Self-employed Craftsman', avatarBg: '#fbb6ce', avatarColor: '#800040',
  },
];

function TestimonialCard({ t }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg)', border: `1px solid ${hovered ? 'rgba(255,255,255,0.1)' : 'var(--border)'}`,
        borderRadius: 16, padding: '2rem',
        display: 'flex', flexDirection: 'column', gap: '1.1rem',
        transition: 'transform 0.2s, border-color 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      <div style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: 1 }}>★★★★★</div>
      <p style={{ color: 'var(--muted2)', fontSize: '0.875rem', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 300 }}>{t.text}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: 'auto' }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Syne, sans-serif', fontSize: '0.75rem', fontWeight: 700,
          background: t.avatarBg, color: t.avatarColor,
        }}>{t.initials}</div>
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{t.name}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ background: 'var(--surface)', padding: '7rem 5%' }}>
      <div className="reveal">
        <div className="section-label">What learners say</div>
        <h2 className="section-title">1,500+ professionals have transformed their careers</h2>
        <p className="section-sub">Real stories from real people. Verified on Trustpilot with a 4.9 average rating.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
        {testimonials.map((t, i) => (
          <div key={i} className="reveal">
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
    </section>
  );
}
