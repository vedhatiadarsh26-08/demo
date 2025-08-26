import React from "react";
import { Ship, Plane } from "lucide-react";

export function ImportExportSection() {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
    transition: "box-shadow 0.3s",
    textAlign: "center",
  };

  const iconContainerStyle = {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 122, 204, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px auto",
    transition: "background-color 0.3s",
  };

  const bulletStyle = {
    width: "8px",
    height: "8px",
    backgroundColor: "#007acc",
    borderRadius: "50%",
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
    const icon = e.currentTarget.querySelector(".icon-container");
    if (icon) icon.style.backgroundColor = "rgba(0, 122, 204, 0.2)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
    const icon = e.currentTarget.querySelector(".icon-container");
    if (icon) icon.style.backgroundColor = "rgba(0, 122, 204, 0.1)";
  };

  return (
    <section
      style={{
        padding: "80px 16px",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 16px" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              fontSize: "2.25rem",
              color: "#003366",
              marginBottom: "16px",
            }}
          >
            Our Core Services
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#708090", maxWidth: "512px", margin: "0 auto" }}>
            Comprehensive import and export solutions tailored to your business needs
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {/* Import Services Card */}
          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="icon-container" style={iconContainerStyle}>
              <Ship style={{ width: "32px", height: "32px", color: "#007acc" }} />
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#003366",
                marginBottom: "16px",
              }}
            >
              Import Services
            </h3>
            <p style={{ color: "#708090", lineHeight: 1.6, marginBottom: "16px" }}>
              Streamlined import processes covering customs clearance, documentation, and logistics coordination from
              over 50+ countries worldwide.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={bulletStyle}></div>
                <span>Customs clearance and documentation</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={bulletStyle}></div>
                <span>Quality inspection and compliance</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={bulletStyle}></div>
                <span>Door-to-door delivery services</span>
              </li>
            </ul>
          </div>

          {/* Export Services Card */}
          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="icon-container" style={iconContainerStyle}>
              <Plane style={{ width: "32px", height: "32px", color: "#007acc" }} />
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#003366",
                marginBottom: "16px",
              }}
            >
              Export Services
            </h3>
            <p style={{ color: "#708090", lineHeight: 1.6, marginBottom: "16px" }}>
              Comprehensive export solutions ensuring your products reach global markets efficiently with full
              regulatory compliance.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={bulletStyle}></div>
                <span>Export documentation and permits</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={bulletStyle}></div>
                <span>International shipping coordination</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={bulletStyle}></div>
                <span>Market entry consultation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
