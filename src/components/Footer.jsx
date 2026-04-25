import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const footerLinks = {
  Programs: ['AI Fellowship', 'AI Accelerator', 'Mastermind', 'AI Tools Deep Dive', 'For Teams'],
  Company: ['About Us', 'Mentors', 'Scholarships', 'Reviews', 'Blog'],
  Support: ['Contact', 'Community', 'Privacy Policy', 'Terms'],
};

const socials = ['in', 'tw', 'yt', 'ig'];

export default function Footer() {
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 480px)');

  const gridCols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '2fr 1fr 1fr 1fr';

  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '4rem 5% 2rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: gridCols,
        gap: isMobile ? '2rem' : '3rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* Brand */}
        <div>
          <a href="#" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem',
            letterSpacing: '-0.03em', color: 'var(--text)', textDecoration: 'none',
          }}>
            Out<span style={{ color: 'var(--accent)' }}>skill</span>
          </a>
          <p style={{
            color: 'var(--muted)', fontSize: '0.875rem', marginTop: '1rem',
            maxWidth: 270, lineHeight: 1.75, fontWeight: 300,
          }}>
            AI upskilling for modern careers. Fellowships, workshops, and self-paced programs for professionals ready to lead in an AI-first world.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 style={{
              fontFamily: 'Syne, sans-serif', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--muted2)', marginBottom: '1.2rem',
            }}>
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {links.map(link => (
                <li key={link}>
                  <FooterLink href="#">{link}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem',
      }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>© 2025 Outskill. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {socials.map(s => <SocialBtn key={s} label={s} />)}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? 'var(--text)' : 'var(--muted)',
        fontSize: '0.875rem', textDecoration: 'none',
        transition: 'color 0.2s',
      }}
    >{children}</a>
  );
}

function SocialBtn({ label }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 34, height: 34, borderRadius: 8,
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? 'var(--accent)' : 'var(--muted)',
        background: hovered ? 'rgba(240,165,0,0.06)' : 'transparent',
        fontSize: '0.72rem', fontWeight: 700, fontFamily: 'Syne, sans-serif',
        textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s, background 0.2s',
      }}
    >{label}</a>
  );
}
