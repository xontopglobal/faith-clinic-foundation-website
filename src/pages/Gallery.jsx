import React, { useState } from "react";
import PageHero from "../components/PageHero";
import { gallery } from "../data";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(gallery.map(x => x.category))];
  const items = filter === "All" ? gallery : gallery.filter(x => x.category === filter);
  return <>
    <PageHero eyebrow="OUR IMPACT" title="Stories from the field." text="A visual look at educational empowerment, community activities and the people behind the mission." />
    <section className="section">
      <div className="container">
        <div className="filters">{categories.map(c => <button key={c} className={filter===c?"filter active":"filter"} onClick={() => setFilter(c)}>{c}</button>)}</div>
        <div className="gallery-grid">
          {items.map((item) => <figure className="gallery-item" key={item.src}>
            <img src={item.src} alt={item.title} loading="lazy" />
            <figcaption><b>{item.title}</b><span>{item.category}</span></figcaption>
          </figure>)}
        </div>
      </div>
    </section>
  </>;
}