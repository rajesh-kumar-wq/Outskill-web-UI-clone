import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Interactive Gallery
      </h2>

      <div style={{ display: "grid", gap: "20px" }}>
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="fade-item"
            onClick={() => setActiveIndex(index)}
            style={{
              overflow: "hidden",
              borderRadius: "16px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <img
              src={img}
              alt={`img-${index}`}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                transition: "all 0.4s ease",
                filter:
                  activeIndex === index
                    ? "grayscale(0%)"
                    : "grayscale(100%)",
                transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "grayscale(0%)")
              }
              onMouseLeave={(e) =>
              (e.currentTarget.style.filter =
                activeIndex === index ? "grayscale(0%)" : "grayscale(100%)")
              }
            />

            {activeIndex === index && (
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  background: "rgba(0,0,0,0.6)",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "8px",
                }}
              >
                Selected
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CSS */}
      <style>{`
        .fade-item {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
        }

        .fade-item.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}