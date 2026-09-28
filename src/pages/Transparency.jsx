import React from "react";
import { ShieldCheck, FileText, Landmark, SearchCheck, HeartHandshake, Leaf } from "lucide-react";
import PageHero from "../components/PageHero";

const QUICKTELLER = "https://business.quickteller.com/link/pay/FaithClyHpM1";

const commitments = [
  [FileText, "Open Reporting", "Annual impact and activity reports, financial statements and expenditure summaries, programme evaluations, donor updates, project progress reports, and organisational development plans."],
  [Landmark, "Strong Governance", "Board of Trustees oversight, leadership accountability, internal policies, financial procedures, programme monitoring and staff and volunteer accountability."],
  [SearchCheck, "Monitoring & Learning", "Regular monitoring and evaluation help us measure effectiveness, assess community impact, identify gaps and improve future programme planning."],
  [ShieldCheck, "Safeguarding", "Child protection, respect for human dignity, safe volunteer engagement, ethical community interactions and prevention of abuse and exploitation remain priorities."],
  [HeartHandshake, "Inclusion & Equity", "We promote equal access, inclusive community engagement, fair treatment and participation for vulnerable populations regardless of background, gender, disability or economic status."],
  [Leaf, "Social & Environmental Responsibility", "We seek to support sustainable community development, environmental awareness, responsible use of resources, and long-term community wellbeing."]
];

export default function Transparency() {
  return <>
    <PageHero
      eyebrow="TRANSPARENCY & GOVERNANCE"
      title="Building trust through accountability and responsible stewardship."
      text="Transparency and accountability guide how Faith Clinic Foundation manages resources, delivers programmes, protects people and works with donors, volunteers, partners and communities."
      background="/backgrounds/work-community-bg.jpg"
    />

    <section className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">OUR COMMITMENT</span>
          <h2>Trust is one of our greatest responsibilities.</h2>
        </div>
        <div>
          <p className="lead">At Faith Clinic Foundation, transparency and accountability are at the heart of our humanitarian and community-focused work.</p>
          <p>We understand that the trust placed in us by donors, volunteers, partners, supporters and beneficiaries is a responsibility that must be treated with care.</p>
          <p>We are committed to strengthening organisational governance, ethical leadership and responsible stewardship so that programmes, donations and community interventions are managed with integrity and directed toward meaningful impact.</p>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container">
        <div className="section-head"><div><span className="eyebrow">ACCOUNTABILITY IN PRACTICE</span><h2>What transparency means in our work.</h2></div></div>
        <div className="split">
          <div>
            <p className="lead">We believe accountability is essential for sustainable development and effective humanitarian service.</p>
            <p>That means being open about our operations, responsible in our financial management, and honest about both our achievements and the challenges we encounter.</p>
          </div>
          <div className="card">
            <h3>Reports and updates</h3>
            <ul className="story-list">
              <li>Annual impact and activity reports</li>
              <li>Financial statements and expenditure summaries</li>
              <li>Programme evaluations and outreach assessments</li>
              <li>Donor and partnership updates</li>
              <li>Community project progress reports</li>
              <li>Organisational strategies and future development plans</li>
            </ul>
          </div>
        </div>
        <div className="section-head governance-head"><div><span className="eyebrow">STRONG GOVERNANCE STRUCTURE</span><h2>Clear oversight and accountable leadership.</h2></div></div>
        <div className="cards three">
          {commitments.map(([Icon,title,text]) => <article className="card" key={title}><div className="icon"><Icon/></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="governance-framework">
          <div className="card">
            <h3>Our governance framework includes:</h3>
            <ul className="story-list">
              <li>Board of Trustees oversight</li>
              <li>Leadership accountability systems</li>
              <li>Internal operational policies</li>
              <li>Financial management procedures</li>
              <li>Programme monitoring and evaluation systems</li>
              <li>Safeguarding and child protection measures</li>
              <li>Volunteer and staff accountability processes</li>
            </ul>
            <p>The Board of Trustees provides strategic direction and oversight to help ensure activities remain aligned with the Foundation's mission, values and long-term objectives.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">FINANCIAL TRANSPARENCY</span>
          <h2>Responsible stewardship of every contribution.</h2>
        </div>
        <div>
          <p>Every donation represents trust, sacrifice and compassion from individuals and organisations that believe in the Foundation's mission. We therefore commit to responsible financial management and ethical fundraising.</p>
          <ul className="story-list">
            <li>Accurate financial reporting</li>
            <li>Transparent programme budgeting</li>
            <li>Proper allocation and responsible use of resources</li>
            <li>Monitoring and review of project spending</li>
            <li>Continuous improvement of financial systems and controls</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container split">
        <div>
          <span className="eyebrow">MONITORING, EVALUATION & LEARNING</span>
          <h2>We learn from every programme.</h2>
        </div>
        <div>
          <p>Meaningful impact requires continuous learning and improvement. Our monitoring and evaluation approach is intended to help us understand what is working, identify challenges and strengthen future interventions.</p>
          <ul className="story-list">
            <li>Measure programme effectiveness</li>
            <li>Assess community impact</li>
            <li>Identify challenges and service gaps</li>
            <li>Improve operational efficiency</li>
            <li>Strengthen programme planning</li>
            <li>Remain accountable to beneficiaries, donors and partners</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container story-highlight">
        <div className="story-highlight-inner">
          <div>
            <span className="eyebrow light">BUILDING TRUST</span>
            <h2>Transparency is a commitment, not just a policy.</h2>
            <p>As the Foundation grows, we remain committed to strengthening governance, ethical operational standards and open reporting practices while working to protect vulnerable children, families, persons with disabilities and underserved communities.</p>
          </div>
          <div className="story-quote">
            <span>OUR GOVERNANCE PRINCIPLE</span>
            <strong>Integrity, compassion, accountability and responsible service.</strong>
            <small>Faith Clinic Foundation International</small>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container narrow center">
        <span className="eyebrow">SUPPORT WITH CONFIDENCE</span>
        <h2>Help strengthen programmes that serve communities.</h2>
        <p>We welcome responsible partnerships, volunteers and supporters who share our commitment to practical humanitarian service and community development.</p>
        <div className="hero-actions" style={{justifyContent:"center"}}>
          <a className="btn btn-primary" href={QUICKTELLER} target="_blank" rel="noreferrer">Donate Now</a>
          <a className="btn btn-outline-dark" href="mailto:admin@faithcfoundation.com?subject=Governance%20and%20Partnership%20Enquiry">Contact the Foundation</a>
        </div>
      </div>
    </section>
  </>;
}
