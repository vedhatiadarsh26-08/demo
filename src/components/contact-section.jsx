import React, { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #b0b7c3",
    marginBottom: "16px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007acc",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const cardStyle = {
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    marginBottom: "24px",
    backgroundColor: "#fff",
  };

  return (
    <section
      id="contact"
      style={{ padding: "80px 16px", backgroundColor: "rgba(240,244,248,0.3)" }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              fontSize: "2rem",
              color: "#003366",
              marginBottom: "16px",
            }}
          >
            Get In Touch
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#708090", maxWidth: "600px", margin: "0 auto" }}>
            Ready to expand your business globally? Contact us today for a consultation
          </p>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
          }}
        >
          {/* Contact Form */}
          <div style={cardStyle}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#003366", marginBottom: "16px" }}>
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                style={inputStyle}
              />
              <textarea
                name="message"
                placeholder="Message *"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={inputStyle}
              ></textarea>
              <button type="submit" style={buttonStyle}>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            {/* Office Address */}
            <div style={cardStyle}>
              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(0,122,204,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin style={{ width: "24px", height: "24px", color: "#007acc" }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: "600", color: "#003366", marginBottom: "8px" }}>Office Address</h4>
                  <p style={{ color: "#708090" }}>
                    <br />
                    <br />
                    
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div style={cardStyle}>
              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(0,122,204,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Phone style={{ width: "24px", height: "24px", color: "#007acc" }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: "600", color: "#003366", marginBottom: "8px" }}>Phone & Email</h4>
                  <p style={{ color: "#708090" }}>
                    <br />
                    
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div style={cardStyle}>
              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(0,122,204,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Clock style={{ width: "24px", height: "24px", color: "#007acc" }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: "600", color: "#003366", marginBottom: "8px" }}>Business Hours</h4>
                  <p style={{ color: "#708090" }}>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div style={{ borderRadius: "12px", overflow: "hidden", marginTop: "24px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959542207!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
