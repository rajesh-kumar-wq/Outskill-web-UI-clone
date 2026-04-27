import React from "react";

const testimonials = [
  {
    text: "The AI program completely changed my thinking and career direction.",
    name: "Samantha A.",
    role: "Marketing Director",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Best investment for learning AI practically.",
    name: "Rahul K.",
    role: "Engineering Student",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Mentors are industry experts. Sessions were powerful.",
    name: "Priya L.",
    role: "Business Analyst",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "Helped me grow my business using AI tools.",
    name: "Marcus T.",
    role: "Entrepreneur",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "Very interactive and insightful AI training.",
    name: "Fatima O.",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    text: "Now I clearly understand how AI fits into my work.",
    name: "James B.",
    role: "Craftsman",
    img: "https://randomuser.me/api/portraits/men/90.jpg",
  },
];

function TestimonialCard({ t }) {
  const [hovered, setHovered] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        borderRadius: 16,
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-8px) scale(1.02)" : "none",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.5)"
          : "none",
      }}
    >
      {/* Stars */}
      <div style={{ color: "#ffcc00" }}>★★★★★</div>

      {/* Text */}
      <p style={{ opacity: 0.8, fontSize: "14px", lineHeight: 1.7 }}>
        "{t.text}"
      </p>

      {/* Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "auto" }}>

        {!imgError ? (
          <img
            src={t.img}
            alt={t.name}
            onError={() => setImgError(true)}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#555",
              color: "#fff",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {t.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}

        <div>
          <div style={{ fontWeight: 600 }}>{t.name}</div>
          <div style={{ fontSize: "12px", opacity: 0.6 }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ padding: "100px 10%" }}>
      <h2 style={{ textAlign: "center" }}>
        1,500+ professionals transformed their careers
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </section>
  );
}