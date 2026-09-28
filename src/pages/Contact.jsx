import React from "react";
import PageHero from "../components/PageHero";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return <>
    <PageHero eyebrow="CONTACT" title="Let's connect." text="Questions, partnership proposals, volunteering or support? Reach out to the Faith Clinic Foundation team." />
    <section className="section">
      <div className="container contact-grid">
        <div className="contact-card"><MapPin/><h3>Our Address</h3><p>200 Aba Owerri Road<br/>Aba, Abia State, Nigeria</p></div>
        <div className="contact-card"><Mail/><h3>Email</h3><p><a href="mailto:admin@faithcfoundation.com">admin@faithcfoundation.com</a><br/><a href="mailto:faithcfoundation@gmail.com">faithcfoundation@gmail.com</a></p></div>
        <div className="contact-card"><MessageCircle/><h3>Start a Conversation</h3><p>Send us an email with your enquiry, partnership idea or volunteer interest.</p></div>
      </div>
    </section>

    <section className="section">
      <div className="container narrow center">
        <span className="eyebrow">FOLLOW FCF</span>
        <h2>Connect with Faith Clinic Foundation</h2>
        <p>Follow our pages for community stories, educational initiatives, outreach activities, announcements and opportunities to get involved.</p>
        <div className="social-buttons">
          <a className="social-button" href="https://www.facebook.com/share/1D5cYFZqDC/" target="_blank" rel="noreferrer">Facebook</a>
          <a className="social-button" href="https://www.tiktok.com/@faithclinic2?_r=1&_t=ZS-99b5NAicyRB" target="_blank" rel="noreferrer">TikTok</a>
          <a className="social-button" href="https://www.linkedin.com/company/faith-clinic-foundation/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="social-button" href="https://www.instagram.com/faithclinicfoundation?stkn=MWN6OGZ1eGU0dnFtYg==" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </section>
    <section className="section soft">
      <div className="container narrow">
        <h2>Send an enquiry</h2>
        <form className="form" action="mailto:admin@faithcfoundation.com" method="post" encType="text/plain">
          <label>Name<input name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Subject<input name="subject" required /></label>
          <label>Message<textarea name="message" rows="6" required></textarea></label>
          <button className="btn btn-primary" type="submit">Send Email</button>
        </form>
      </div>
    </section>
  </>;
}