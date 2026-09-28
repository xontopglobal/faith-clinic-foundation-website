import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [
    ["/", "Home"], ["/about", "About"], ["/what-we-do", "What We Do"],
    ["/our-work", "Our Work"], ["/team", "Our Team"], ["/gallery", "Gallery"],
    ["/get-involved", "Get Involved"], ["/contact", "Contact"]
  ];
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <img className="brand-logo" src="/gallery/fcf-logo.jpg" alt="Faith Clinic Foundation logo" />
          <span><b>Faith Clinic</b><small>Foundation International</small></span>
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X/> : <Menu/>}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([to,label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={close}
              className={({isActive}) => isActive ? "active" : ""}>{label}</NavLink>
          ))}
          <a className="nav-donate" href="https://business.quickteller.com/link/pay/FaithClyHpM1" target="_blank" rel="noreferrer" onClick={close}>Donate</a>
        </nav>
      </div>
    </header>
  );
}