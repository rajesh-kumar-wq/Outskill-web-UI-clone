import React, { useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const NAV_LINKS = ['Programs', 'Fellowship', 'For Teams', 'Community', 'About'];

export default function Nav() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 5%', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(8,10,15,0.88)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid var(--border)',
        animation: 'slideDown 0.7s ease forwards',
      }}>
        <a href="#" style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem',
          letterSpacing: '-0.03em', color: 'var(--text)', textDecoration: 'none',
        }}>
          Out<span style={{ color: 'var(--accent)' }}>skill</span>
        </a>

        {!isMobile && (
          <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none' }}>
            {NAV_LINKS.map(link => (
              <li key={link}><NavLink href="#">{link}</NavLink></li>
            ))}
            <li><CtaLink href="#">Get Started →</CtaLink></li>
          </ul>
        )}

        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CtaLink href="#">Get Started</CtaLink>
            <HamburgerBtn open={menuOpen} onClick={() => setMenuOpen(p => !p)} />
          </div>
        )}
      </nav>

      {isMobile && (
        <MobileDrawer open={menuOpen} links={NAV_LINKS} onClose={() => setMenuOpen(false)} />
      )}
    </>
  );
}

function NavLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? 'var(--text)' : 'var(--muted2)',
        textDecoration: 'none', fontSize: '0.875rem',
        transition: 'color 0.2s',
      }}
    >{children}</a>
  );
}

function CtaLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#ffb820' : 'var(--accent)',
        color: '#080a0f', fontWeight: 600,
        padding: '0.45rem 1.2rem', borderRadius: 6,
        textDecoration: 'none', fontSize: '0.875rem',
        display: 'inline-block',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'background 0.2s, transform 0.15s',
      }}
    >{children}</a>
  );
}

function HamburgerBtn({ open, onClick }) {
  return (
    <button onClick={onClick} aria-label="Toggle menu" style={{
      background: 'transparent', border: '1px solid var(--border)',
      borderRadius: 8, width: 38, height: 38,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 5, cursor: 'pointer', padding: '0 9px',
    }}>
      {[
        open ? 'translateY(6.5px) rotate(45deg)' : 'none',
        null,
        open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
      ].map((transform, i) =>
        i === 1 ? (
          <span key={i} style={{
            display: 'block', width: '100%', height: 1.5,
            background: 'var(--text)',
            opacity: open ? 0 : 1,
            transition: 'opacity 0.2s ease',
          }} />
        ) : (
          <span key={i} style={{
            display: 'block', width: '100%', height: 1.5,
            background: 'var(--text)',
            transform,
            transition: 'transform 0.25s ease',
          }} />
        )
      )}
    </button>
  );
}

function MobileDrawer({ open, links, onClose }) {
  return (
    <div style={{
      position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99,
      background: 'rgba(8,10,15,0.97)',
      backdropFilter: 'blur(20px)',
      borderBottom: open ? '1px solid var(--border)' : 'none',
      padding: open ? '1.5rem 5% 2rem' : '0 5%',
      maxHeight: open ? '400px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.35s ease, padding 0.3s ease',
    }}>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {links.map(link => (
          <li key={link}>
            <a href="#" onClick={onClose} style={{
              display: 'block', padding: '0.85rem 0',
              color: 'var(--muted2)', textDecoration: 'none',
              fontSize: '1.05rem', fontFamily: 'Syne, sans-serif', fontWeight: 600,
              borderBottom: '1px solid var(--border)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted2)'}
            >{link}</a>
          </li>
        ))}
        <li style={{ marginTop: '1.25rem' }}>
          <a href="#" onClick={onClose} style={{
            display: 'inline-block', background: 'var(--accent)', color: '#080a0f',
            fontWeight: 700, padding: '0.75rem 2rem', borderRadius: 8,
            textDecoration: 'none', fontSize: '0.95rem',
          }}>Get Started →</a>
        </li>
      </ul>
    </div>
  );
}
