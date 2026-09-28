import React from "react";
import PageHero from "../components/PageHero";
import { HeartHandshake, HandHeart, Users, Megaphone } from "lucide-react";

const ways = [
  [HeartHandshake, "Become a Faith Partner", "Support the mission with a recurring or one-time contribution."],
  [Users, "Volunteer", "Offer your time, professional skills or field support to community programmes."],
  [HandHeart, "Partner With Us", "Organisations and institutions can collaborate on projects and community initiatives."],
  [Megaphone, "Share the Mission", "Help more people discover the work by sharing our campaigns and stories."]
];

export default function GetInvolved() {
  return <>
    <PageHero
      eyebrow="GET INVOLVED"
      title="Become a voice of hope."
      text="Your time, skills, resources and voice can help strengthen educational, humanitarian and community development programmes."
      background="/backgrounds/volunteer-message.jpg"
    />

    <section className="section">
      <div className="container cards four">
        {ways.map(([Icon,title,text]) => <article className="card" key={title}><div className="icon"><Icon/></div><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="section message-panel-section">
      <div className="container message-panel volunteer-message-panel">
        <img src="/backgrounds/volunteer-message.jpg" alt="Become a voice of hope through volunteering with Faith Clinic Foundation" loading="lazy" />
        <div className="message-panel-overlay">
          <span className="eyebrow light">BECOME A VOICE OF HOPE</span>
          <h2>Your time, skills and energy can strengthen a community.</h2>
          <p>Volunteers can support educational outreach, community development, feeding initiatives, healthcare awareness, youth mentorship, advocacy, event coordination and media support.</p>
          <a className="btn btn-primary" href="#volunteer-form">Apply to Volunteer</a>
        </div>
      </div>
    </section>

    <section className="section soft" id="volunteer-form">
      <div className="container split">
        <div>
          <span className="eyebrow">VOLUNTEER APPLICATION</span>
          <h2>Tell us how you would like to serve.</h2>
          <p className="lead">Complete the form and the Foundation team can review your interest and contact you about suitable opportunities.</p>
          <p>Volunteer opportunities may include education outreach, community development, humanitarian support, healthcare awareness, youth mentorship, administration, media and event support.</p>
        </div>
        <form className="form card" name="volunteer-application" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="volunteer-application" />
          <input type="hidden" name="bot-field" />
          <label>Full Name<input type="text" name="name" placeholder="Your full name" required /></label>
          <label>Email Address<input type="email" name="email" placeholder="you@example.com" required /></label>
          <label>Phone / WhatsApp<input type="tel" name="phone" placeholder="Your phone number" required /></label>
          <label>Location<input type="text" name="location" placeholder="City / State / Country" required /></label>
          <label>Area of Interest<select name="interest" defaultValue="" required><option value="" disabled>Select an area</option><option>Education & School Outreach</option><option>Community Development</option><option>Humanitarian & Feeding Support</option><option>Healthcare Awareness</option><option>Youth & Women Empowerment</option><option>Disability Inclusion</option><option>Media & Communications</option><option>Administration & Events</option><option>Other</option></select></label>
          <label>Skills / Experience<textarea name="skills" rows="4" placeholder="Tell us briefly about your skills, experience or professional background" required /></label>
          <label>How would you like to contribute?<textarea name="message" rows="4" placeholder="Tell us how you would like to support FCF" required /></label>
          <label className="checkbox-label"><input type="checkbox" name="consent" value="yes" required /> I agree that Faith Clinic Foundation may contact me regarding volunteer opportunities.</label>
          <button className="btn btn-primary full" type="submit">Submit Volunteer Application</button>
        </form>
      </div>
    </section>

    <section className="section">
      <div className="container narrow center">
        <span className="eyebrow">STAY CONNECTED</span>
        <h2>Follow the journey and hear about new opportunities.</h2>
        <p>Subscribe to the FCF newsletter for occasional programme updates, community stories, volunteer opportunities and announcements.</p>
      </div>
    </section>
  </>;
}
