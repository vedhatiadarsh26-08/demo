import React from "react";
import { ArrowRight, Quote } from "lucide-react";
import image from './download.png'
import image1 from '../background.png'
export function HeroSection() {
  const buttonStyle = {
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    border: "none",
    color:'black'
  };

  const primaryButton = {
    ...buttonStyle,
    backgroundColor: "#007acc",
    color: "#ffffff",
  };

  const outlineButton = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#003366",
    border: "2px solid #003366",
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        background: "linear-gradient(to bottom right, #ffffff, #f0f4f8)",
        padding: "80px 16px",
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700",
                fontSize: "3rem",
                color: "#101011ff",
                lineHeight: 1.2,
              }}
            >
              SOUTH Rocks export and import services
            </h1>
            <p style={{ fontSize: "1.25rem", color: "#090909ff", lineHeight: 1.6,fontSize:'20px',fontWeight:'bolder' }}>
              Connecting Businesses Across Borders Efficiently and Reliably
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <button style={primaryButton}>
                Learn More <ArrowRight style={{ width: "20px", height: "20px" }} />
              </button>
              <button style={outlineButton}>
                <Quote style={{ width: "20px", height: "20px" }} /> Request a Quote
              </button>
            </div>
          </div>

          {/* Right image */}
          <div style={{ position: "relative" }}>
            <img
              src={image}
              alt="Global shipping and logistics operations"
              style={{
                borderRadius: "16px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
