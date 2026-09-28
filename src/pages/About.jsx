import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, HeartHandshake, UsersRound, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";

export default function About() {
  return <>
    <PageHero
      eyebrow="ABOUT FAITH CLINIC FOUNDATION"
      title="Restoring hope, empowering communities, changing lives."
      text="Faith Clinic Foundation is a humanitarian and community-focused organisation working to support vulnerable children, families and underserved communities through education, healthcare, empowerment and practical community development."
      background="/backgrounds/about-community-bg.jpg"
    />

    <section className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">WHO WE ARE</span>
          <h2>A mission shaped by compassion and service.</h2>
        </div>
        <div>
          <p className="lead">Faith Clinic Foundation was established from a desire to turn personal experiences of hardship into practical support for people facing vulnerability.</p>
          <p>Our work focuses on creating opportunities for children, families and communities through educational support, humanitarian assistance, healthcare-related outreach, skills development and community engagement.</p>
          <p>We believe sustainable change grows when people, communities, volunteers, donors and partners work together with dignity, responsibility and compassion.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/our-story">Read Our Story <ArrowRight size={17}/></Link>
            <Link className="btn btn-outline-dark" to="/transparency-governance">Transparency & Governance</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container">
        <div className="section-head"><div><span className="eyebrow">OUR FOCUS</span><h2>People, opportunity and community.</h2></div></div>
        <div className="cards four">
          <article className="card"><div className="icon"><BookOpen/></div><h3>Education</h3><p>School materials, scholarships, educational empowerment and community learning support.</p></article>
          <article className="card"><div className="icon"><HeartHandshake/></div><h3>Humanitarian Support</h3><p>Practical assistance, feeding support and community outreach for people facing hardship.</p></article>
          <article className="card"><div className="icon"><UsersRound/></div><h3>Empowerment</h3><p>Skills acquisition, youth participation, women and family empowerment, and community development.</p></article>
          <article className="card"><div className="icon"><ShieldCheck/></div><h3>Inclusion & Protection</h3><p>Promoting dignity, safeguarding, gender equality and inclusion for people with disabilities and vulnerable groups.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container story-grid">
        <div className="story-copy">
          <span className="eyebrow">ISSUES THAT MATTER</span>
          <h2>Every child, every family and every community matters.</h2>
          <p>Our programmes are informed by the realities faced by underserved communities, including barriers to education, economic hardship, gender inequality, disability-related exclusion and limited access to essential support.</p>
          <p>We work with communities and local stakeholders to identify needs and deliver practical initiatives that promote opportunity, dignity and participation.</p>
          <Link className="text-link" to="/what-we-do">Explore what we do <ArrowRight size={16}/></Link>
        </div>
        <figure className="story-photo">
          <img src="/backgrounds/outreach-2.jpg" alt="Faith Clinic Foundation educational outreach with children" loading="lazy" />
          <figcaption>Educational empowerment and community engagement are central to the Foundation's mission.</figcaption>
        </figure>
      </div>
    </section>
  </>;
}
