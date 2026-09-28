import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const boardPhotos = [
  { src: "/team/team-board-member-1.jpg", caption: "Faith Clinic Foundation Board & Leadership" },
  { src: "/team/team-board-member-2.jpg", caption: "Faith Clinic Foundation Board & Leadership" },
  { src: "/team/team-board-member-3.jpg", caption: "Faith Clinic Foundation Board & Leadership" },
  { src: "/team/team-board-member-4.jpg", caption: "Faith Clinic Foundation Board & Leadership" },
];

const teamPhotos = [
  { src: "/team/team-team-member-1.jpg", caption: "FCF Team Member — Community Outreach" },
  { src: "/team/team-outreach-1.jpg", caption: "FCF Team — Educational Empowerment" },
  { src: "/team/team-outreach-2.jpg", caption: "FCF Team — Community Support" },
];

export default function Team() {
  return <>
    <PageHero
      eyebrow="OUR BOARD & TEAM"
      title="People serving with compassion and purpose."
      text="Meet members of the Faith Clinic Foundation family who contribute to our education, empowerment, healthcare and community development work."
    />

    <section className="section">
      <div className="container narrow center">
        <span className="eyebrow">LEADERSHIP & SERVICE</span>
        <h2>Working together to create practical impact.</h2>
        <p>
          Faith Clinic Foundation is strengthened by its Board members, staff, volunteers
          and community teams. Together, they support programmes and outreach activities
          that respond to practical needs and expand opportunities for underserved
          communities.
        </p>
      </div>
    </section>

    <section className="section soft">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">BOARD & LEADERSHIP</span>
            <h2>Faith Clinic Foundation Board Members</h2>
          </div>
        </div>
        <p className="section-intro">
          Our Board and leadership provide guidance, oversight and support for the
          Foundation's mission and programmes.
        </p>
        <div className="team-photo-grid">
          {boardPhotos.map((person) => (
            <figure className="team-card" key={person.src}>
              <img src={person.src} alt={person.caption} loading="lazy" />
              <figcaption>
                <strong>Board & Leadership</strong>
                <span>{person.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">TEAM & VOLUNTEERS</span>
            <h2>Our Team in Action</h2>
          </div>
        </div>
        <p className="section-intro">
          From preparing school materials to supporting community activities, our team
          and volunteers help turn the Foundation's mission into action.
        </p>
        <div className="team-photo-grid team-action-grid">
          {teamPhotos.map((photo) => (
            <figure className="team-card" key={photo.src}>
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <figcaption>
                <strong>FCF Team</strong>
                <span>{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container cards three">
        <article className="card">
          <span className="eyebrow">BOARD</span>
          <h3>Governance & oversight</h3>
          <p>Providing leadership, accountability and direction for the Foundation's work.</p>
        </article>
        <article className="card">
          <span className="eyebrow">TEAM</span>
          <h3>Programme delivery</h3>
          <p>Coordinating educational, healthcare, empowerment and community initiatives.</p>
        </article>
        <article className="card">
          <span className="eyebrow">VOLUNTEERS</span>
          <h3>Community service</h3>
          <p>Giving time, skills and practical support to extend the reach of our programmes.</p>
        </article>
      </div>
    </section>

    <section className="section">
      <div className="container narrow center">
        <span className="eyebrow">JOIN THE MISSION</span>
        <h2>There is a place for you to serve.</h2>
        <p>Interested in volunteering, partnering or supporting Faith Clinic Foundation?</p>
        <Link className="btn btn-primary" to="/get-involved">Get Involved</Link>
      </div>
    </section>
  </>;
}
