import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="footer-col">

<img src="/kiroo-ride-app/assets/footer-img.png" alt="Small Feature" width="70%" />

      </div>
      <div className="footer-col">
        <h4>Community</h4>
        <ul>
          <li><a href="#">Career</a></li>
          <li><a href="#">Team Slate</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Media</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Rider</h4>
        <ul>
          <li><a href="#">Join</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Fees</a></li>
          <li><a href="#">Benefits</a></li>
          <li><a href="#" className="footer-more">See More &gt;</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Sales</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Socials</h4>
        <ul className="footer-socials">
          <li><a href="#"><Instagram size={16} /> Instagram</a></li>
          <li><a href="#"><Twitter size={16} /> Twitter</a></li>
          <li><a href="#"><Facebook size={16} /> Facebook</a></li>
          <li><a href="#"><Linkedin size={16} /> LinkedIn</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;