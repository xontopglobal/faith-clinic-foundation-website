import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-donation">
        <div className="container footer-donation-inner">
          <div><span className="eyebrow light">SUPPORT THE MISSION</span><h3>Help Faith Clinic Foundation reach more people and communities.</h3><p>Support education, gender equality, disability inclusion, healthcare and community development.</p></div>
          <a className="btn btn-primary" href="https://business.quickteller.com/link/pay/FaithClyHpM1" target="_blank" rel="noreferrer">Donate Now</a>
        </div>
      </div>
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <img className="brand-logo" src="/gallery/fcf-logo.jpg" alt="Faith Clinic Foundation logo" />
            <span><b>Faith Clinic</b><small>Foundation International</small></span>
          </div>
          <p>Serving communities through education, healthcare, empowerment and practical community development.</p>
          <p className="footer-registration"><strong>RC No.: 162293</strong><br/><strong>FIRS Corporate TIN: 23983385</strong></p>
          <div className="socials">
            <a href="https://www.facebook.com/share/1D5cYFZqDC/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={19}/></a>
            <a href="https://www.instagram.com/faithclinicfoundation?stkn=MWN6OGZ1eGU0dnFtYg==" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19}/></a>
            <a href="https://www.linkedin.com/company/faith-clinic-foundation/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>
            <a className="tiktok-social" href="https://www.tiktok.com/@faithclinic2?_r=1&_t=ZS-99b5NAicyRB" target="_blank" rel="noreferrer" aria-label="TikTok">♪</a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/our-story">Our Story</Link>
          <Link to="/transparency-governance">Transparency & Governance</Link>
          <Link to="/what-we-do">What We Do</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/gallery">Impact Gallery</Link>
          <Link to="/get-involved">Volunteer</Link>
          <Link to="/donate">Donate</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p><MapPin size={16}/> 200 Aba Owerri Road, Aba, Abia State, Nigeria</p>
          <p><Mail size={16}/> <a href="mailto:faithcfoundation@gmail.com">faithcfoundation@gmail.com</a></p>
          <p><Phone size={16}/> <a href="tel:+2348115459455">+234 811 545 9455</a></p>
          <p><MapPin size={16}/> ZIP Code: 450272</p>
        </div>
      </div>

      <div className="footer-newsletter">
        <div className="container footer-newsletter-inner">
          <div>
            <span className="eyebrow light">STAY CONNECTED</span>
            <h3>Subscribe to the FCF Newsletter</h3>
            <p>Receive occasional updates about programmes, community outreach, opportunities and impact.</p>
          </div>
          <form className="newsletter-form" name="newsletter-signup" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="newsletter-signup" />
            <input type="hidden" name="bot-field" />
            <label className="sr-only" htmlFor="footer-newsletter-email">Email address</label>
            <input id="footer-newsletter-email" type="email" name="email" placeholder="Your email address" required />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <div className="container">© {new Date().getFullYear()} Faith Clinic Foundation International. All rights reserved.</div>
      </div>
    </footer>
  );
}