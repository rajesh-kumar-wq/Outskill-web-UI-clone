import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const steps = [
  { num: '01', icon: '🧠', title: 'Learn the Fundamentals', sub: 'Expert-led AI education', desc: 'Master AI concepts, tools, and workflows through expert-led, hands-on sessions that build genuine competency from day one.' },
  { num: '02', icon: '⚙️', title: 'Build Real Systems', sub: 'Apply skills with real deliverables', desc: 'Apply your knowledge by building actual AI workflows, prototypes, and automations with dedicated mentor office hours.' },
  { num: '03', icon: '💼', title: 'Add Business Strategy', sub: 'Strategy meets technical skill', desc: 'Combine your technical edge with the Kairos MBA content — systems thinking, business clarity, and strategic execution.' },
  { num: '04', icon: '💰', title: 'Monetize Your Skills', sub: 'Go from learning to earning', desc: "Turn expertise into income with Monetization Mastery — whether you're a freelancer, consultant, or driving innovation in-house." },
];

export default function HowItWorks() {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState({
    icon: steps[0].icon,
    label: steps[0].title,
    sub: steps[0].sub,
  });

  const stepRefs = useRef([]);
  const lockRef = useRef(false);
  const timeoutRef = useRef(null); // Added to track timeout

  // 🔥 Single source of truth
  const updateStep = (idx) => {
    if (idx === activeIdx || lockRef.current) return;

    lockRef.current = true;
    setAnimating(true);

    // Clear existing timeout to prevent memory leaks or overlapping animations
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setVisible({
        icon: steps[idx].icon,
        label: steps[idx].title,
        sub: steps[idx].sub,
      });
      setAnimating(false);
      lockRef.current = false;
    }, 180);

    setActiveIdx(idx);
  };

  // 🖱 Click handler
  const handleClick = (idx) => {
    updateStep(idx);

    stepRefs.current[idx]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  // 📜 Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            updateStep(idx);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section style={{ background: 'var(--bg)', padding: '7rem 5%' }}>
      <div className="reveal">
        <div className="section-label">The method</div>
        <h2 className="section-title">Designed to build on itself — step by step</h2>
        <p className="section-sub">
          Each stage prepares you for the next. From AI fundamentals to income — in a system that compounds.
        </p>
      </div>

      <div
        className="reveal"
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '3rem' : '5rem',
          alignItems: 'start',
          marginTop: '4rem',
        }}
      >
        {/* LEFT: Steps */}
        <div>
          {steps.map((step, i) => (
            <div
              key={step.num}
              role="button" // Accessibility: Defines element as a button
              tabIndex={0}  // Accessibility: Makes element focusable via keyboard
              data-index={i}
              ref={(el) => (stepRefs.current[i] = el)}
              onClick={() => handleClick(i)}
              onKeyDown={(e) => { // Accessibility: Allows trigger via Enter or Space
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClick(i);
                }
              }}
              style={{
                display: 'flex',
                gap: '1.4rem',
                padding: '4rem 0',
                borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: activeIdx === i ? 'var(--accent)' : 'var(--surface2)',
                  border: `1px solid ${activeIdx === i ? 'var(--accent)' : 'var(--border)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: activeIdx === i ? '#080a0f' : 'var(--muted)',
                }}
              >
                {step.num}
              </div>

              <div>
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: activeIdx === i ? 'var(--text)' : 'var(--muted2)',
                  }}
                >
                  {step.title}
                </div>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--muted)',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Visual */}
        {!isMobile && (
          <div
            style={{
              position: 'sticky',
              top: '120px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              aspectRatio: '4/3',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            <div
              style={{
                fontSize: '3.5rem',
                opacity: animating ? 0 : 1,
                transform: animating ? 'scale(0.7)' : 'scale(1)',
                transition: 'all 0.2s ease',
              }}
            >
              {visible.icon}
            </div>

            <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>
              {visible.label}
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
              {visible.sub}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}