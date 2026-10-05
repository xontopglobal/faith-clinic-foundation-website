import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, UsersRound, BookOpen, HeartHandshake } from "lucide-react";
import PageHero from "../components/PageHero";

const photos = [
  ["/work/amandugba/amandugba-1.jpg", "Community engagement at the school"],
  ["/work/amandugba/amandugba-2.jpg", "Community leaders, school representatives and FCF team"],
  ["/work/amandugba/amandugba-3.jpg", "FCF team during the educational empowerment visit"],
  ["/work/amandugba/amandugba-4.jpg", "Students and community members with school bags"],
  ["/work/amandugba/amandugba-5.jpg", "FCF representatives with community members"],
  ["/work/amandugba/amandugba-6.jpg", "Educational materials presented to students"],
  ["/work/amandugba/amandugba-7.jpg", "Supporting students with learning materials"],
  ["/work/amandugba/amandugba-8.jpg", "Student receiving educational support"],
  ["/work/amandugba/amandugba-9.jpg", "Student receiving a Faith Clinic Foundation backpack"],
  ["/work/amandugba/amandugba-10.jpg", "Student receiving school support materials"],
  ["/work/amandugba/amandugba-event-banner.jpg", "Amandugba Community Primary School educational empowerment programme"]
];

export default function OurWork() {
  return <>
    <PageHero
      eyebrow="OUR WORK"
      title="From community conversations to practical action."
      text="Our work is built around partnership, service and practical support. Here is a featured example from our educational empowerment outreach at Amandugba Community Primary School."
      background="/backgrounds/work-community-bg.jpg"
    />

    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">FEATURED COMMUNITY OUTREACH</span>
        <h2>Amandugba Community Primary School</h2>
        <p className="lead">On 15 March 2024, Faith Clinic Foundation carried out an educational empowerment outreach at Amandugba Community Primary School.</p>
        <p>The visit brought together members of the Foundation's team, community leaders, the headmistress, teachers and students. The engagement provided an opportunity to connect directly with the school community, understand needs and support pupils with educational materials.</p>
      </div>
    </section>

    <section className="section soft">
      <div className="container">
        <div className="cards four work-facts">
          <article className="card"><MapPin size={24}/><h3>Community</h3><p>Amandugba Community Primary School, Imo State.</p></article>
          <article className="card"><UsersRound size={24}/><h3>Partnership</h3><p>Engagement with community leaders, the headmistress and teachers.</p></article>
          <article className="card"><BookOpen size={24}/><h3>Education</h3><p>Focus on educational empowerment and learning support for pupils.</p></article>
          <article className="card"><HeartHandshake size={24}/><h3>Practical Support</h3><p>Distribution of school bags and learning materials to students.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">WHAT HAPPENED</span>
          <h2>Working alongside the school community.</h2>
        </div>
        <div>
          <p>During the outreach, the Foundation team interacted with the people who make the school community work every day. The visit included community leaders, the headmistress, teachers and students.</p>
          <p>Students received educational support materials, including Faith Clinic Foundation backpacks and learning resources. These moments reflect our commitment to making practical contributions that encourage children in their education.</p>
          <Link className="text-link" to="/gallery">View more impact stories <ArrowRight size={16}/></Link>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container">
        <div className="section-head">
          <div><span className="eyebrow">FIELD PHOTOS</span><h2>Amandugba outreach gallery</h2></div>
        </div>
        <div className="work-gallery">
          {photos.map(([src, caption]) => <figure className="work-photo" key={src}>
            <img src={src} alt={caption} loading="lazy" />
            <figcaption>{caption}</figcaption>
          </figure>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">COMMUNITY EDUCATIONAL EMPOWERMENT</span>
        <h2>Ofeme Community Primary School, Umuezeama, Ude-Alaike</h2>
        <p className="lead">On 23 February 2024, Faith Clinic Foundation members visited Ofeme Community Primary School in Umuezeama, Ude-Alaike, Ofeme, in Umuahia North Local Government Area of Abia State, Nigeria.</p>
        <p>The educational empowerment engagement brought together community elders, school leadership, the head and headmistress, teachers, students and members of Faith Clinic Foundation. The visit focused on listening to the school community and providing practical educational support to children.</p>
      </div>
    </section>

    <section className="section soft">
      <div className="container">
        <div className="cards four work-facts">
          <article className="card"><MapPin size={24}/><h3>Location</h3><p>Ofeme, Umuahia North L.G.A., Abia State, Nigeria.</p></article>
          <article className="card"><UsersRound size={24}/><h3>Community Engagement</h3><p>Community elders, school leaders, teachers, students and FCF members participated in the outreach.</p></article>
          <article className="card"><BookOpen size={24}/><h3>Education</h3><p>The programme centred on educational and school empowerment.</p></article>
          <article className="card"><HeartHandshake size={24}/><h3>Partnership</h3><p>FCF engaged directly with the school and wider community to understand needs and encourage learning.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><span className="eyebrow">OFEME FIELD PHOTOS</span><h2>Community, school and student engagement</h2></div>
        </div>
        <div className="work-gallery">
          {[
            ["/work/ofeme/ofeme-1.jpg", "Faith Clinic Foundation with community elders and school representatives"],
            ["/work/ofeme/ofeme-2.jpg", "Community elders, school representatives and FCF members"],
            ["/work/ofeme/ofeme-3.jpg", "Students receiving educational support"],
            ["/work/ofeme/ofeme-4.jpg", "Students receiving Faith Clinic Foundation school bags"],
            ["/work/ofeme/ofeme-5.jpg", "Students and FCF team during the school empowerment visit"],
            ["/work/ofeme/ofeme-6.jpg", "Pupils with educational support materials"],
            ["/work/ofeme/ofeme-7.jpg", "Educational materials prepared for pupils"],
            ["/work/ofeme/ofeme-8.jpg", "FCF members supporting pupils during the outreach"],
            ["/work/ofeme/ofeme-9.jpg", "Faith Clinic Foundation team with pupils and community members"]
          ].map(([src, caption]) => <figure className="work-photo" key={src}>
            <img src={src} alt={caption} loading="lazy" />
            <figcaption>{caption}</figcaption>
          </figure>)}
        </div>
      </div>
    </section>



    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">EDUCATION & SCHOOL EMPOWERMENT · 21 JULY 2023</span>
        <h2>United Evangelical Nursery and Primary School, Umuchichi, Aba</h2>
        <p className="lead">Faith Clinic Foundation carried out an educational empowerment outreach at United Evangelical Nursery and Primary School, Umuchichi, Aba, in Obingwa Local Government Area of Abia State, Nigeria.</p>
        <p>The outreach brought together the school's headmistress, teachers, pupils and members of Faith Clinic Foundation. The team engaged with the school community and provided educational materials and school bags to support children's learning and encourage them to remain focused on their education.</p>
      </div>
    </section>

    <section className="section soft">
      <div className="container">
        <div className="cards four work-facts">
          <article className="card"><MapPin size={24}/><h3>Location</h3><p>Umuchichi, Aba, Obingwa L.G.A., Abia State, Nigeria.</p></article>
          <article className="card"><UsersRound size={24}/><h3>School Community</h3><p>Headmistress, teachers, pupils and Faith Clinic Foundation members participated in the engagement.</p></article>
          <article className="card"><BookOpen size={24}/><h3>Learning Support</h3><p>Educational materials and school bags were presented to pupils as practical learning support.</p></article>
          <article className="card"><HeartHandshake size={24}/><h3>Community Partnership</h3><p>The visit strengthened direct engagement with the school community and its educational needs.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><span className="eyebrow">UMUCHICHI FIELD PHOTOS</span><h2>Education in action at Umuchichi</h2></div>
        </div>
        <div className="work-gallery">
          {[
            ["/work/umuchichi/umuchichi-1.jpg", "A pupil receives educational materials from the Faith Clinic Foundation team"],
            ["/work/umuchichi/umuchichi-2.png", "Educational empowerment in action at United Evangelical Nursery and Primary School"],
            ["/work/umuchichi/umuchichi-3.jpg", "FCF team members prepare school bags and learning materials for pupils"],
            ["/work/umuchichi/umuchichi-4.jpg", "A pupil receives learning materials during the school empowerment outreach"],
            ["/work/umuchichi/umuchichi-5.jpg", "FCF team engaging with pupils in the classroom"],
            ["/work/umuchichi/umuchichi-6.jpg", "Faith Clinic Foundation team supporting pupils with school bags and educational resources"],
            ["/work/umuchichi/umuchichi-7.jpg", "A pupil receives educational materials as part of the empowerment programme"],
            ["/work/umuchichi/umuchichi-8.jpg", "FCF representative speaking during the educational empowerment programme"],
            ["/work/umuchichi/umuchichi-9.jpg", "Distribution of learning materials to pupils"],
            ["/work/umuchichi/umuchichi-10.jpg", "School community and Faith Clinic Foundation members during the outreach"],
          ].map(([src, caption]) => <figure className="work-photo" key={src}>
            <img src={src} alt={caption} loading="lazy" />
            <figcaption>{caption}</figcaption>
          </figure>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container narrow center">
        <span className="eyebrow">SUPPORT THE WORK</span>
        <h2>Help us reach more schools and communities.</h2>
        <p>Your support can help us continue educational empowerment, scholarship support, healthcare outreach and community development.</p>
        <div className="hero-actions" style={{justifyContent:"center"}}>
          <Link className="btn btn-primary" to="/donate">Make a Donation</Link>
          <Link className="btn btn-outline-dark" to="/get-involved">Get Involved</Link>
        </div>
      </div>
    </section>
  </>;
}
