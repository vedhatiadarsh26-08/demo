import React from "react";
import { FileCheck, Truck, Users, Shield } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description:
        "Expert handling of all customs procedures, documentation, and regulatory compliance for smooth border crossings.",
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description:
        "End-to-end logistics solutions including warehousing, freight forwarding, and last-mile delivery services.",
    },
    {
      icon: Users,
      title: "Trade Consulting",
      description:
        "Strategic guidance on international trade regulations, market entry strategies, and business expansion opportunities.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Comprehensive insurance solutions and risk assessment to protect your cargo and business interests globally.",
    },
  ];

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
    transition: "all 0.3s",
    textAlign: "center",
    cursor: "pointer",
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

  const handleMouseOver = (e) => {
    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
    e.currentTarget.style.transform = "translateY(-4px)";
    const icon = e.currentTarget.querySelector(".icon-container");
    if (icon) icon.style.backgroundColor = "rgba(0, 122, 204, 0.2)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
    e.currentTarget.style.transform = "translateY(0)";
    const icon = e.currentTarget.querySelector(".icon-container");
    if (icon) icon.style.backgroundColor = "rgba(0, 122, 204, 0.1)";
  };

  return (
    <section
      id="services"
      style={{
        padding: "80px 16px",
        backgroundColor: "rgba(240, 244, 248, 0.2)",
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
            Comprehensive Trade Solutions
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#708090", maxWidth: "512px", margin: "0 auto" }}>
            From customs clearance to final delivery, we handle every aspect of your international trade operations
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className="icon-container" style={iconContainerStyle}>
                <service.icon style={{ width: "32px", height: "32px", color: "#007acc" }} />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#003366",
                  marginBottom: "16px",
                }}
              >
                {service.title}
              </h3>
              <p style={{ color: "#708090", fontSize: "0.875rem", lineHeight: 1.6 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
