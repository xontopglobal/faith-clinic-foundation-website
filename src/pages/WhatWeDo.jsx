import React from "react";
import { ArrowRight, BookOpen, HeartPulse, UsersRound, HandHeart, School, BriefcaseBusiness, Scale, Accessibility } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const areas = [
  {
    icon: <School size={25} />,
    title: "Education Empowerment",
    text: "We support children and schools with learning materials, educational outreach, school supplies and practical interventions that help children stay engaged in learning."
  },
  {
    icon: <BookOpen size={25} />,
    title: "Scholarship Programs",
    text: "We support scholarship opportunities for children from underserved families, helping reduce financial barriers to continued education."
  },
  {
    icon: <HandHeart size={25} />,
    title: "Backpacks & School Uniforms",
    text: "We provide essential school items such as backpacks, writing materials, uniforms and other learning resources to children who need support."
  },
  {
    icon: <UsersRound size={25} />,
    title: "Community Development",
    text: "We work with community leaders, schools, volunteers and local stakeholders to identify needs and support practical community-based solutions."
  },
  {
    icon: <HeartPulse size={25} />,
    title: "Free Healthcare Programs",
    text: "We support community health outreach and free healthcare initiatives designed to improve access to basic health information, services and support."
  },
  {
    icon: <BriefcaseBusiness size={25} />,
    title: "Women & Youth Empowerment",
    text: "We promote skills development, entrepreneurship and livelihood opportunities that can help women and young people build sustainable futures."
  },
  {
    icon: <Scale size={25} />,
    title: "Gender Equality & Inclusion",
    text: "Gender inequality can limit access to education, economic opportunity and participation. We promote dignity, opportunity and inclusion for women and girls through community-focused empowerment."
  },
  {
    icon: <Accessibility size={25} />,
    title: "Disability Inclusion & Support",
    text: "People with disabilities and their families matter to us. We support inclusion, dignity, awareness and practical community assistance so people are not left behind."
  }
];

export default function WhatWeDo() {
  return <>
    <PageHero
      eyebrow="WHAT WE DO"
      title="Practical support that creates opportunity."
      text="Faith Clinic Foundation works with underserved children, families and communities through education, healthcare, empowerment and community development initiatives."
    />

    <section className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">OUR APPROACH</span>
          <h2>We listen, partner and serve.</h2>
        </div>
        <div>
          <p className="lead">Our work begins with understanding practical needs in the communities we serve.</p>
          <p>We collaborate with community leaders, schools, teachers, volunteers, families and partners to deliver programmes that respond to real challenges. Our goal is to help people access opportunities, essential support and resources that can strengthen their communities.</p>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container">
        <div className="section-head">
          <div><span className="eyebrow">OUR FOCUS AREAS</span><h2>What we do</h2></div>
        </div>
        <div className="cards three">
          {areas.map((item) => <article className="card program-card" key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><span className="eyebrow">ISSUES THAT MATTER</span><h2>Education, equality and inclusion.</h2></div>
        </div>
        <div className="cards three">
          <article className="card program-card">
            <div className="icon"><School size={25}/></div>
            <h3>Education for Every Child</h3>
            <p>We work to reduce practical barriers to learning by supporting children and schools with educational materials, empowerment activities and opportunities.</p>
          </article>
          <article className="card program-card">
            <div className="icon"><Scale size={25}/></div>
            <h3>Gender Equality</h3>
            <p>We believe women and girls should have meaningful opportunities to learn, develop skills, participate and build sustainable livelihoods.</p>
          </article>
          <article className="card program-card">
            <div className="icon"><Accessibility size={25}/></div>
            <h3>Disability Inclusion</h3>
            <p>We recognise the concerns of people with disabilities and support community approaches that promote dignity, participation and access to practical assistance.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container split">
        <div>
          <span className="eyebrow">INCLUSION IN ACTION</span>
          <h2>Every person and every community matters.</h2>
        </div>
        <div>
          <p>Our mission goes beyond one programme. Education, gender equality, disability inclusion, healthcare and community development are connected to the dignity and opportunity of people and families.</p>
          <p>We listen to communities and work with local leaders, schools, volunteers and partners to respond to practical needs.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container impact">
        <div className="impact-copy">
          <span className="eyebrow">FROM PLAN TO ACTION</span>
          <h2>See how our programmes reach communities.</h2>
          <p>Explore a featured account of our educational empowerment visit to Amandugba Community Primary School, including engagement with community leaders, the headmistress, teachers and students.</p>
          <Link className="btn btn-dark" to="/our-work">Explore Our Work <ArrowRight size={18}/></Link>
        </div>
        <div className="impact-photo">
          <img src="/work/amandugba/amandugba-4.jpg" alt="Faith Clinic Foundation team with children during the Amandugba Community Primary School outreach" />
        </div>
      </div>
    </section>
  </>;
}
