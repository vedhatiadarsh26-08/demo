import React from "react";
import { Globe, MapPin } from "lucide-react";

export function GlobalReachSection() {
  const regions = [
    {
      name: "North America",
      countries: ["United States", "Canada", "Mexico"],
      flag: "🇺🇸",
    },
    {
      name: "South America",
      countries: ["Brazil", "Argentina", "Chile", "Colombia"],
      flag: "🇧🇷",
    },
    {
      name: "Europe",
      countries: ["Germany", "United Kingdom", "France", "Netherlands"],
      flag: "🇪🇺",
    },
    {
      name: "Asia",
      countries: ["China", "Japan", "India", "Singapore"],
      flag: "🇨🇳",
    },
    {
      name: "Africa",
      countries: ["South Africa", "Nigeria", "Egypt", "Kenya"],
      flag: "🌍",
    },
    {
      name: "Oceania",
      countries: ["Australia", "New Zealand"],
      flag: "🇦🇺",
    },
  ];

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
    border: "1px solid #f0f4f8",
    transition: "all 0.3s",
  };

  const statsCardStyle = {
    backgroundColor: "#fff",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
    border: "1px solid #f0f4f8",
    marginTop: "32px",
  };

  return (
    <section
      style={{
        padding: "80px 16px",
        background: "linear-gradient(to bottom right, #f8fafc, #e0f2fe)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <Globe style={{ width: "32px", height: "32px", color: "#003366" }} />
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#111827" }}>Global Reach</h2>
          </div>
          <p style={{ fontSize: "1.25rem", color: "#4b5563", maxWidth: "768px", margin: "0 auto" }}>
            We connect businesses across continents with our extensive network spanning over 50 countries worldwide
          </p>
        </div>

        {/* Region Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            marginBottom: "48px",
          }}
        >
          {regions.map((region) => (
            <div
              key={region.name}
              style={cardStyle}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)")}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ fontSize: "1.5rem" }}>{region.flag}</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#111827" }}>{region.name}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {region.countries.map((country) => (
                  <div key={country} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#4b5563" }}>
                    <MapPin style={{ width: "16px", height: "16px", color: "#003366" }} />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Card */}
        <div style={statsCardStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#003366", marginBottom: "8px" }}>50+</div>
              <div style={{ color: "#4b5563" }}>Countries Served</div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#003366", marginBottom: "8px" }}>6</div>
              <div style={{ color: "#4b5563" }}>Continents</div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#003366", marginBottom: "8px" }}>200+</div>
              <div style={{ color: "#4b5563" }}>Trade Partners</div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#003366", marginBottom: "8px" }}>24/7</div>
              <div style={{ color: "#4b5563" }}>Global Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
