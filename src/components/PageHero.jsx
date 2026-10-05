import React from "react";

export default function PageHero({ eyebrow, title, text, background, tone = "light" }) {
  const style = background ? { backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.78), rgba(0,0,0,.34)), url("${background}")` } : undefined;
  return (
    <section className={`page-hero ${background ? "page-hero-image" : ""} ${tone === "dark" ? "page-hero-dark" : ""}`} style={style}>
      <div className="container">
        <span className={`eyebrow ${background ? "light" : ""}`}>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
