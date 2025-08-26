import React from "react";
import { Linkedin, MessageCircle, Mail } from "lucide-react";
import "./Footer.css"; // import the CSS file

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div>
          <h3 className="footer-heading">South Rocks</h3>
          <p className="footer-paragraph">
            Your trusted partner for seamless international trade operations across 50+ countries worldwide.
          </p>
          <div className="footer-social">
            <a href="#" className="footer-link">
              <Linkedin className="footer-icon" />
            </a>
            <a href="#" className="footer-link">
              <MessageCircle className="footer-icon" />
            </a>
            <a href="#" className="footer-link">
              <Mail className="footer-icon" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          {["Home", "About Us", "Services", "Contact"].map((item) => (
            <div key={item}>
              <a href={`#${item.toLowerCase().replace(/\s/g, "")}`} className="footer-link">
                {item}
              </a>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div>
          <h4 className="footer-heading">Legal</h4>
          {["Privacy Policy", "Terms of Service", "FAQs", "Compliance"].map((item) => (
            <div key={item}>
              <a href="#" className="footer-link">
                {item}
              </a>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="footer-heading">Newsletter</h4>
          <p className="footer-paragraph">Stay updated with the latest trade insights and company news.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Your email" className="footer-input" />
            <button className="footer-button">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        © SOUTH Rocks export and import services. All rights reserved.
      </div>
    </footer>
  );
}
