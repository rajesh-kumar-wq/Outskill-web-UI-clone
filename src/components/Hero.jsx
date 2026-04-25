import React from 'react';
import img from '../img/img.jpg'

const stats = [
  { num: '50', suffix: 'K+', label: 'Professionals trained' },
  { num: '4.9', suffix: '★', label: 'Average rating' },
  { num: '120', suffix: '+', label: 'Countries reached' },
  { num: '1.5', suffix: 'K+', label: 'Verified reviews' },
];

export default function Hero() {
  return (
<section style={{
  minHeight: '100vh',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
  textAlign: 'center', padding: '120px 5% 80px', position: 'relative', overflow: 'hidden',
}}>

  {/* ── Background image ── */}
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.18,
    filter: 'saturate(0.4) brightness(0.6)',
    pointerEvents: 'none',
  }} />

  {/* ── Dark gradient overlay (keeps text readable + fades bottom) ── */}
  <div style={{
    position: 'absolute', inset: 0,
    // background: 'linear-gradient(to bottom, rgba(8,10,15,0.55) 0%, rgba(8,10,15,0.3) 50%, rgba(8,10,15,0.85) 100%)',
    pointerEvents: 'none',
  }} />

  {/* Glow */}
  <div style={{
    position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
    width: '900px', height: '600px',
    // background: 'radial-gradient(ellipse, rgba(240,165,0,0.09) 0%, rgba(255,107,53,0.04) 40%, transparent 70%)',
    pointerEvents: 'none',
  }} />

  {/* Grid bg */}
  <div style={{
    position: 'absolute', inset: 0,
    // backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)',
    pointerEvents: 'none',
  }} />

  {/* Badge */}
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    background: 'rgba(240,165,0,0.1)', border: '1px solid rgba(240,165,0,0.28)',
    borderRadius: '100px', padding: '0.35rem 1rem', fontSize: '0.8rem',
    fontWeight: 500, color: 'var(--accent)', marginBottom: '2rem',
    animation: 'fadeUp 0.8s 0.1s ease both', position: 'relative', zIndex: 1,
  }}>
    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'blink 1.6s infinite', display: 'inline-block' }} />
    Now enrolling — AI Generalist Fellowship 2025
  </div>

  {/* H1 */}
  <h1 style={{
    fontFamily: 'Syne, sans-serif', fontWeight: 800,
    fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
    lineHeight: 1.07, letterSpacing: '-0.045em',
    maxWidth: '880px', position: 'relative', zIndex: 1,
    animation: 'fadeUp 0.8s 0.2s ease both',
  }}>
    Master AI.<br />
    <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Advance your career.</em><br />
    <span style={{ color: 'var(--muted2)' }}>Stay ahead.</span>
  </h1>

  {/* Sub */}
  <p style={{
    maxWidth: '540px', color: 'var(--muted2)', fontSize: '1.05rem', fontWeight: 300,
    marginTop: '1.5rem', lineHeight: 1.8,
    animation: 'fadeUp 0.8s 0.35s ease both', position: 'relative', zIndex: 1,
  }}>
    Fellowships, workshops, and self-paced programs designed for professionals who want to{' '}
    <em style={{ fontStyle: 'italic', color: 'var(--text)' }}>do</em> more with AI — not just talk about it.
  </p>

  {/* Actions */}
  <div style={{
    display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap', justifyContent: 'center',
    animation: 'fadeUp 0.8s 0.5s ease both', position: 'relative', zIndex: 1,
  }}>
    <button
      style={{
        background: 'var(--accent)', color: '#080a0f', fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.95rem', fontWeight: 600, padding: '0.82rem 2rem', borderRadius: '8px',
        border: 'none', cursor: 'pointer', transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
        boxShadow: '0 0 28px rgba(240,165,0,0.28)',
      }}
      onMouseEnter={e => { e.target.style.background = '#ffb820'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 36px rgba(240,165,0,0.4)'; }}
      onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0 28px rgba(240,165,0,0.28)'; }}
    >
      Explore Programs
    </button>
    <button
      style={{
        background: 'transparent', color: 'var(--text)', fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.95rem', fontWeight: 400, padding: '0.82rem 2rem', borderRadius: '8px',
        border: '1px solid var(--border)', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        transition: 'border-color 0.2s, background 0.2s, transform 0.15s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <span style={{
        width: 22, height: 22, borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.6rem', paddingLeft: 2,
      }}>▶</span>
      Watch Demo
    </button>
  </div>
  
      {/* Stats */}
      <div style={{
        display: 'flex', gap: '3.5rem', marginTop: '4rem', flexWrap: 'wrap', justifyContent: 'center',
        animation: 'fadeUp 0.8s 0.65s ease both', position: 'relative', zIndex: 1,
      }}>
        {stats.map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.1rem', fontWeight: 800, letterSpacing: '-0.05em' }}>
              {s.num}<span style={{ color: 'var(--accent)' }}>{s.suffix}</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.1rem', letterSpacing: '0.02em' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'fadeUp 0.8s 0.9s ease both', color: 'var(--muted)',
        fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
      }}>
        <div style={{
          width: 1, height: 36,
          background: 'linear-gradient(to bottom, rgba(107,114,128,0.8), transparent)',
          animation: 'grow 1.8s infinite', transformOrigin: 'top',
        }} />
        scroll
      </div>
    </section>
  );
}
