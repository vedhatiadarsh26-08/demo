import React from "react";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

export function TopBar() {
  return (
    <div
      style={{
        backgroundColor: "#f0f4f8", // muted background
        borderBottom: "1px solid #b0b7c3", // border
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 0",
            fontSize: "0.875rem", // text-sm
          }}
        >
          {/* Left: Email */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Mail style={{ width: "16px", height: "16px", color: "#708090" }} />
            <span style={{ color: "#708090" }}>SouthRocks@gmail.com</span>
          </div>

          {/* Right: Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="#"
              style={{ color: "#708090", transition: "color 0.3s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#007acc")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#708090")}
            >
              <Linkedin style={{ width: "16px", height: "16px" }} />
            </a>
            <a
              href="#"
              style={{ color: "#708090", transition: "color 0.3s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#007acc")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#708090")}
            >
              <MessageCircle style={{ width: "16px", height: "16px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
