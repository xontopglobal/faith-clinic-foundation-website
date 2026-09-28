import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, HeartHandshake, UsersRound, HandHeart } from "lucide-react";
import PageHero from "../components/PageHero";

const QUICKTELLER = "https://business.quickteller.com/link/pay/FaithClyHpM1";

export default function Story() {
  return <>
    <PageHero
      eyebrow="THE STORY BEHIND FCF"
      title="From a difficult beginning to a mission of hope."
      text="The story of Faith Clinic Foundation is rooted in lived experience, perseverance, compassion and a commitment to helping vulnerable people access opportunity."
      background="/backgrounds/home-child-bg-clean.jpg"
    />

    <section className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">THE INSPIRATION</span>
          <h2>A personal journey became a purpose to serve.</h2>
        </div>
        <div>
          <p className="lead">Faith Clinic Foundation was founded by Sunday Israel Agu from a place of pain, struggle, determination, faith and compassion.</p>
          <p>Before the Foundation became a source of hope for vulnerable communities, the founder experienced many of the same challenges that affect children and families in underserved communities: limited financial resources, educational hardship and the daily pressure of survival.</p>
          <p>His experience shaped a lasting conviction that a child's future should not be determined solely by the circumstances of their birth.</p>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container story-grid">
        <article className="story-copy">
          <span className="eyebrow">A DIFFICULT BEGINNING</span>
          <h2>Learning to keep moving forward.</h2>
          <p>Sunday Israel was born into a poor family background where survival was difficult and educational opportunities were limited. Financial support for school fees, learning materials and other basic needs was not always available.</p>
          <p>At different stages of his childhood and youth, continuing his education became a struggle. The pressure to work and support himself affected his educational journey, and there were periods when he attended evening school while working to meet his needs.</p>
          <p>These experiences were emotionally and physically demanding. Seeing other children access opportunities that were beyond his reach gave him a personal understanding of what it means to dream of education while facing poverty and uncertainty.</p>
        </article>
        <figure className="story-photo">
          <img src="/backgrounds/outreach-1.jpg" alt="Faith Clinic Foundation community education outreach" />
          <figcaption>Community engagement and educational support remain central to the Foundation's work.</figcaption>
        </figure>
      </div>
    </section>

    <section className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">PERSEVERANCE & PURPOSE</span>
          <h2>The circumstances did not end the dream.</h2>
        </div>
        <div>
          <p>Despite the difficulties, Sunday Israel continued pursuing education through perseverance, faith, determination and personal sacrifice.</p>
          <p>As he grew older, he began to recognise that many children and families across Nigeria and Africa were facing challenges similar to those he had experienced: children leaving school because of poverty, rural pupils learning without adequate materials, families struggling with food insecurity, and communities with limited access to opportunities and support.</p>
          <p>These realities strengthened his desire to turn personal experience into practical service.</p>
        </div>
      </div>
    </section>

    <section className="section story-highlight">
      <div className="container story-highlight-inner">
        <div>
          <span className="eyebrow light">A VISION FOR HOPE</span>
          <h2>When the COVID-19 period deepened hardship, the call to serve became even clearer.</h2>
          <p>During the COVID-19 period, vulnerable families experienced increased hunger, unemployment, fear, illness, educational disruption and economic pressure. Children who were already at risk faced additional barriers to learning and wellbeing.</p>
          <p>For Sunday Israel, this was a moment to respond. He believed that the painful experiences of his own upbringing could become a source of compassion and action for others.</p>
        </div>
        <div className="story-quote">
          <span>THE FOUNDING SPIRIT</span>
          <strong>“A difficult beginning can become the starting point for helping someone else find hope.”</strong>
          <small>— Faith Clinic Foundation</small>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><span className="eyebrow">A MISSION BECAME A MOVEMENT</span><h2>What Faith Clinic Foundation was created to do.</h2></div>
        </div>
        <div className="cards four">
          <article className="card"><div className="icon"><BookOpen/></div><h3>Educational Empowerment</h3><p>Supporting children with school materials, scholarships, learning opportunities and educational outreach.</p></article>
          <article className="card"><div className="icon"><HandHeart/></div><h3>Humanitarian Support</h3><p>Responding to practical needs through feeding support, community assistance and compassionate outreach.</p></article>
          <article className="card"><div className="icon"><HeartHandshake/></div><h3>Healthcare & Outreach</h3><p>Supporting community wellbeing through awareness, humanitarian activities and connections to practical assistance.</p></article>
          <article className="card"><div className="icon"><UsersRound/></div><h3>Empowerment & Development</h3><p>Promoting skills acquisition, youth participation, women and family empowerment, and stronger rural communities.</p></article>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container split">
        <div>
          <span className="eyebrow">A MISSION ROOTED IN COMPASSION</span>
          <h2>Restoring hope, dignity, opportunity and purpose.</h2>
        </div>
        <div>
          <p className="lead">Faith Clinic Foundation seeks to go beyond short-term charity by supporting people and communities in ways that can strengthen opportunity and participation.</p>
          <ul className="story-list">
            <li>Every child deserves access to education.</li>
            <li>Hunger should not be a barrier to learning and development.</li>
            <li>Vulnerable families deserve support, encouragement and dignity.</li>
            <li>Women and young people need meaningful pathways to participation and economic opportunity.</li>
            <li>People with disabilities deserve inclusion, respect and practical support.</li>
            <li>Sustainable change grows when communities, volunteers, partners and donors work together.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">THE JOURNEY CONTINUES</span>
          <h2>From one story to many stories of hope.</h2>
        </div>
        <div>
          <p>Today, Faith Clinic Foundation continues its work through school outreach, educational empowerment, feeding initiatives, healthcare-related programmes, volunteer service and community development.</p>
          <p>For the founder, every child supported represents a reminder of why the mission exists: no child should be denied the chance to learn simply because their family is poor, and no community should be left without hope because support is difficult to find.</p>
          <p>The Foundation's journey is not only about where it started. It is about the people, communities and partners who continue to shape where the mission can go next.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={QUICKTELLER} target="_blank" rel="noreferrer">Donate Now</a>
            <Link className="btn btn-outline-dark" to="/our-work">See Our Work <ArrowRight size={17}/></Link>
          </div>
        </div>
      </div>
    </section>
  </>;
}
