import React from 'react';

export default function CTA() {
  return (
    <div style={{ background: 'var(--bg)', padding: '6rem 5%' }}>
      <div className="reveal" style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%)',
        border: '1px solid rgba(240,165,0,0.18)', borderRadius: 24,
        padding: '5rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 350,
          background: 'radial-gradient(ellipse, rgba(240,165,0,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>Ready to start?</div>

        <h2 style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1rem', position: 'relative',
        }}>
          Go from learning AI<br />to <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>earning with AI</em>
        </h2>

        <p style={{ color: 'var(--muted2)', maxWidth: 460, margin: '0 auto 2.5rem', fontWeight: 300, position: 'relative' }}>
          Join thousands of professionals who have already made the leap. Your next chapter starts here.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          <button
            style={{
              background: 'var(--accent)', color: '#080a0f', fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.95rem', fontWeight: 600, padding: '0.82rem 2rem', borderRadius: 8,
              border: 'none', cursor: 'pointer', boxShadow: '0 0 28px rgba(240,165,0,0.28)',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.target.style.background = '#ffb820'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)'; }}
          >
            Explore All Programs
          </button>
          <button
            style={{
              background: 'transparent', color: 'var(--text)', fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.95rem', fontWeight: 400, padding: '0.82rem 2rem', borderRadius: 8,
              border: '1px solid var(--border)', cursor: 'pointer',
              transition: 'border-color 0.2s, background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'rgba(255,255,255,0.18)'; e.target.style.background = 'rgba(255,255,255,0.04)'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'transparent'; e.target.style.transform = 'translateY(0)'; }}
          >
            Talk to an Advisor
          </button>
        </div>
      </div>
    </div>
  );
}
