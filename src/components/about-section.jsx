import React from "react";
import { Globe, Award, Clock, Users } from "lucide-react";
import image1 from './backend.png'
export function AboutSection() {
  const stats = [
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Customer Support" },
    { icon: Users, value: "500+", label: "Happy Clients" },
  ];

  return (
    <section
      id="about"
      style={{ padding: "80px 0", backgroundColor: "#ffffff" }} // bg-background
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
          {/* Left text content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700",
                fontSize: "2rem",
                color: "#003366", // primary
              }}
            >
              About SOUTH Rocks export and import services
            </h2>
            <p style={{ fontSize: "1.125rem", color: "#708090", lineHeight: 1.6 }}>
              With over 15 years of experience in international trade, we are your trusted partner for seamless export
              and import operations. Our mission is to simplify global commerce by providing reliable, efficient, and
              cost-effective trade solutions.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <h3 style={{ fontWeight: "600", color: "#003366", marginBottom: "8px" }}>Our Mission</h3>
                <p style={{ color: "#708090" }}>
                  To bridge global markets by providing exceptional trade services that enable businesses to expand
                  internationally with confidence.
                </p>
              </div>
              <div>
                <h3 style={{ fontWeight: "600", color: "#003366", marginBottom: "8px" }}>Our Vision</h3>
                <p style={{ color: "#708090" }}>
                  To be the leading global trade facilitator, known for innovation, reliability, and customer-centric
                  solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div style={{ position: "relative" }}>
            <img
              src={image1}
              alt="Our professional team"
              style={{ borderRadius: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Stats cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            marginTop: "64px",
          }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "24px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  transition: "box-shadow 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)")}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)")}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    margin: "0 auto 12px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 122, 204, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon style={{ width: "24px", height: "24px", color: "#007acc" }} />
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    color: "#003366",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.875rem", color: "#708090" }}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
