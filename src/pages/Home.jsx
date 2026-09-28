import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, HeartPulse, UsersRound, HandHeart } from "lucide-react";
import { programs, gallery } from "../data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="eyebrow light">FAITH CLINIC FOUNDATION INTERNATIONAL</span>
          <h1>Restoring hope.<br/><span>Building futures.</span></h1>
          <p>We work with underserved communities to expand access to education, healthcare, skills, empowerment, inclusion and sustainable community development.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/donate">Support Our Mission <ArrowRight size={18}/></Link>
            <Link className="btn btn-light" to="/programs">Explore Our Work</Link>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="container split">
          <div>
            <span className="eyebrow">WHO WE ARE</span>
            <h2>Putting people at the centre of community transformation.</h2>
          </div>
          <div>
            <p className="lead">Faith Clinic Foundation is a nonprofit organization serving children, women, youth and communities in Nigeria and across Africa.</p>
            <p>Our work is rooted in practical support: keeping children in school, providing learning materials, supporting health and wellbeing, building skills, and partnering with communities to create sustainable change.</p>
            <Link className="text-link" to="/about">Learn more about FCF <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">OUR FOCUS</span><h2>Programs that create opportunity</h2></div>
            <Link className="text-link" to="/what-we-do">View all programs <ArrowRight size={16}/></Link>
          </div>
          <div className="cards four">
            {programs.map((p,i) => (
              <article className="card program-card" key={p.title}>
                <div className="icon">{[<BookOpen/>,<HeartPulse/>,<UsersRound/>,<HandHeart/>][i]}</div>
                <h3>{p.title}</h3><p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container impact">
          <div className="impact-copy">
            <span className="eyebrow">EDUCATION IN ACTION</span>
            <h2>Every child deserves the tools to learn.</h2>
            <p>From school bags and writing materials to educational empowerment and scholarship support, FCF partners with communities to remove practical barriers to learning.</p>
            <Link className="btn btn-dark" to="/our-work">See our impact <ArrowRight size={18}/></Link>
          </div>
          <div className="impact-photo">
            <img src={gallery[1].src} alt="Children holding school bags provided through an FCF education initiative" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">ISSUES THAT MATTER</span><h2>Education, equality and inclusion.</h2></div>
            <Link className="text-link" to="/what-we-do">Learn about our focus <ArrowRight size={16}/></Link>
          </div>
          <div className="cards three">
            <article className="card update-card">
              <img src="/work/inclusion/education-support-pupil.jpg" alt="Child holding a Faith Clinic Foundation school backpack" loading="lazy" />
              <div className="card-body"><span className="eyebrow">EDUCATION</span><h3>Equipping children to learn</h3><p>We support children and schools with practical educational resources that can help reduce barriers to learning.</p></div>
            </article>
            <article className="card update-card">
              <img src="/work/inclusion/education-learning-support.jpg" alt="Educational learning support for a child" loading="lazy" />
              <div className="card-body"><span className="eyebrow">GENDER EQUALITY</span><h3>Opportunity for women and girls</h3><p>We promote skills, participation and opportunity for women and girls as part of inclusive community development.</p></div>
            </article>
            <article className="card update-card">
              <img src="/work/inclusion/disability-inclusion-outreach.jpg" alt="Community disability inclusion and support outreach" loading="lazy" />
              <div className="card-body"><span className="eyebrow">DISABILITY INCLUSION</span><h3>People with disabilities matter</h3><p>We recognise the issues faced by people with disabilities and support dignity, inclusion, awareness and practical assistance.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">LATEST UPDATE</span><h2>Education and school empowerment in our communities</h2></div>
            <Link className="text-link" to="/our-work">View our work <ArrowRight size={16}/></Link>
          </div>
          <div className="cards three">
            <article className="card update-card">
              <img src="/work/amandugba/amandugba-event-banner.jpg" alt="Amandugba Community Primary School educational empowerment programme" loading="lazy" />
              <div className="card-body"><span className="eyebrow">15 MARCH 2024 · IMO STATE</span><h3>Amandugba Community Primary School</h3><p>FCF visited Amandugba Community Primary School in Isu Local Government Area of Imo State, engaging community leaders, the headmistress, teachers and students as part of an educational empowerment outreach.</p><Link className="text-link" to="/our-work">Read the field story <ArrowRight size={16}/></Link></div>
            </article>
            <article className="card update-card">
              <img src="/work/ofeme/ofeme-9.jpg" alt="Faith Clinic Foundation members with pupils and community members at Ofeme Community Primary School" loading="lazy" />
              <div className="card-body"><span className="eyebrow">23 FEBRUARY 2024 · ABIA STATE</span><h3>Ofeme Community Primary School, Umuezeama, Ude-Alaike</h3><p>FCF members met with community elders, school leadership, teachers and students in Umuahia North Local Government Area of Abia State for an educational and school empowerment engagement.</p><Link className="text-link" to="/our-work">See the outreach <ArrowRight size={16}/></Link></div>
            </article>
            <article className="card update-card">
              <img src="/work/umuchichi/umuchichi-2.png" alt="Educational empowerment at United Evangelical Nursery and Primary School, Umuchichi" loading="lazy" />
              <div className="card-body"><span className="eyebrow">21 JULY 2023 · ABIA STATE</span><h3>United Evangelical Nursery and Primary School, Umuchichi</h3><p>FCF engaged the headmistress, teachers and pupils in Umuchichi, Aba, Obingwa Local Government Area, providing educational materials and school bags as practical learning support.</p><Link className="text-link" to="/our-work">Read the field story <ArrowRight size={16}/></Link></div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div><span className="eyebrow light">JOIN THE MISSION</span><h2>Help us reach more children and families.</h2></div>
          <div className="hero-actions"><Link className="btn btn-primary" to="/donate">Donate Now</Link><Link className="btn btn-outline-light" to="/get-involved">Volunteer</Link></div>
        </div>
      </section>
    </>
  );
}