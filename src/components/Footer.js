import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <div className="textile-services">
          <h3>Textile Services</h3>
          <ul>
            <li>Patch Fabric Works</li>
            <li>Garment Stitching</li>
            <li>Pattern, Art Making</li>
            <li>Stone Work Embroidery</li>
            <li>Computerised Embroidery</li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>4789 Melmorn Street, Zakila Ton Mashintron Town</p>
          <p>Phone: (+011) 123 456 7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
      <div className="footer-social">
        <a href="#"><img src="/path-to-your-image/facebook-icon.png" alt="Facebook" /></a>
        <a href="#"><img src="/path-to-your-image/instagram-icon.png" alt="Instagram" /></a>
        <a href="#"><img src="/path-to-your-image/twitter-icon.png" alt="Twitter" /></a>
      </div>
    </footer>
  );
}

export default Footer;
