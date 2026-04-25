import React from 'react';

const companies = [
  'GOOGLE','MICROSOFT','AMAZON','DELOITTE','INFOSYS','TATA GROUP',
  'WIPRO','ACCENTURE','CAPGEMINI','IBM','HCL','COGNIZANT',
];

export default function Marquee() {
  const doubled = [...companies, ...companies];

  return (
    <div className="reveal" style={{
      padding: '2.5rem 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
    }}>
      <div style={{
        textAlign: 'center', fontSize: '0.72rem', letterSpacing: '0.14em',
        textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.75rem',
      }}>
        Professionals from these companies have upskilled with Outskill
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex', gap: '5rem', width: 'max-content',
          animation: 'marquee 24s linear infinite',
        }}>
          {doubled.map((name, i) => (
            <span key={i} style={{
              fontFamily: 'Syne, sans-serif', fontSize: '0.85rem', fontWeight: 700,
              letterSpacing: '0.12em', color: 'var(--muted)', whiteSpace: 'nowrap',
            }}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
