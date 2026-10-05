import React from "react";
import PageHero from "../components/PageHero";
import { programs } from "../data";

export default function Programs() {
  return <>
    <PageHero
      eyebrow="OUR PROGRAMS"
      title="Practical support. Sustainable opportunity."
      text="Our programmes respond to education, health, livelihood, inclusion and community-development needs."
      background="/backgrounds/education-bg.jpg"
    />
    <section className="section">
      <div className="container">
        <div className="cards two">
          {programs.map((p) => <article className="card program-large" key={p.title}>
            <div className="big-icon">{p.icon}</div><h2>{p.title}</h2><p>{p.text}</p>
            <ul><li>Community-focused delivery</li><li>Partnership and volunteer support</li><li>Designed around practical needs</li></ul>
          </article>)}
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">WAYS TO GIVE</span>
            <h2>Support a cause close to your heart.</h2>
          </div>
        </div>
        <p className="section-intro">
          Your generosity helps Faith Clinic Foundation International reach children,
          families and communities with practical support. Choose an area below to make
          your contribution.
        </p>

        <div className="cards two">
          <article className="card donation-campaign">
            <span className="eyebrow">01 · EDUCATION</span>
            <h3>Education Empowerment</h3>
            <p>Help us provide learning resources and educational support that give children better opportunities to learn and grow.</p>
            <a className="btn btn-primary" href="https://pay.squadco.com/5WAEJD" target="_blank" rel="noreferrer">Support Education Empowerment</a>
          </article>

          <article className="card donation-campaign">
            <span className="eyebrow">02 · SCHOLARSHIPS</span>
            <h3>Support Our Scholarship Programs</h3>
            <p>Help deserving children continue their education through scholarship assistance and long-term educational support.</p>
            <a className="btn btn-primary" href="https://pay.squadco.com/WGTYM8" target="_blank" rel="noreferrer">Support Scholarship Programs</a>
          </article>

          <article className="card donation-campaign">
            <span className="eyebrow">03 · SCHOOL ESSENTIALS</span>
            <h3>Backpacks &amp; School Uniforms</h3>
            <p>Help children receive essential school items such as backpacks and uniforms, helping them return to school prepared and confident.</p>
            <a className="btn btn-primary" href="https://pay.squadco.com/QM3LB9" target="_blank" rel="noreferrer">Provide School Essentials</a>
          </article>

          <article className="card donation-campaign">
            <span className="eyebrow">04 · COMMUNITY</span>
            <h3>Community Development</h3>
            <p>Support practical community initiatives designed to strengthen families, improve local opportunities and build sustainable solutions.</p>
            <a className="btn btn-primary" href="https://pay.squadco.com/3SW9NE" target="_blank" rel="noreferrer">Support Community Development</a>
          </article>

          <article className="card donation-campaign">
            <span className="eyebrow">05 · HEALTHCARE</span>
            <h3>Free Healthcare Programs</h3>
            <p>Help us extend access to community healthcare outreach and essential health support for people who need it most.</p>
            <a className="btn btn-primary" href="https://pay.squadco.com/JLZQ63" target="_blank" rel="noreferrer">Support Free Healthcare</a>
          </article>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container split">
        <div><span className="eyebrow">EDUCATIONAL EMPOWERMENT</span><h2>Keeping children equipped for learning.</h2></div>
        <div><p>FCF's education initiatives have included school bags, writing materials, uniforms and other learning support for children in underserved communities.</p><p>We also support longer-term education pathways through scholarship and community partnerships.</p></div>
      </div>
    </section>

    <section className="section message-panel-section">
      <div className="container message-panel education-message-panel">
        <img src="/backgrounds/education-message.jpg" alt="Building hope through education at Faith Clinic Foundation" loading="lazy" />
        <div className="message-panel-overlay">
          <span className="eyebrow light">BUILDING HOPE THROUGH EDUCATION</span>
          <h2>Education can open the door to a different future.</h2>
          <p>Support school materials, scholarships, teacher support, community educational outreach and skills initiatives that help children and young people pursue opportunity.</p>
        </div>
      </div>
    </section>
  </>;
}