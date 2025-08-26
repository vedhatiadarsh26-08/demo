import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #b0b7c3",
    position: "sticky",
    top: 0,
    zIndex: 50,
  };

  const containerStyle = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 16px",
  };

  const navInnerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
  };

  const brandStyle = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: "#003366",
  };

  const linkStyle = {
    color: "#1f2937",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#007acc",
  };

  const desktopLinksStyle = {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  };

  const mobileMenuStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    paddingBottom: "16px",
  };

  const buttonStyle = {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "4px",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={navInnerStyle}>
          <div style={brandStyle}>SOUTH Rocks export and import services</div>

          {/* Desktop Navigation */}
          {isDesktop && (
            <div style={desktopLinksStyle}>
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={linkStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = linkHoverStyle.color)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = linkStyle.color)
                  }
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <button style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X style={{ width: "24px", height: "24px" }} />
              ) : (
                <Menu style={{ width: "24px", height: "24px" }} />
              )}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {!isDesktop && isOpen && (
          <div style={mobileMenuStyle}>
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = linkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = linkStyle.color)
                }
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
