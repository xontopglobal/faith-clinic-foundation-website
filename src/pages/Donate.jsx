import React from "react";
import PageHero from "../components/PageHero";
import { Heart, School, Users, Stethoscope } from "lucide-react";

export default function Donate() {
  return <>
    <PageHero eyebrow="SUPPORT THE MISSION" title="Your giving can put opportunity within reach." text="Support education, healthcare, empowerment and community development through Faith Clinic Foundation." />
    <section className="section">
      <div className="container donate-layout">
        <div>
          <span className="eyebrow">WHY GIVE?</span>
          <h2>Turn generosity into practical support.</h2>
          <p className="lead">Donations can help provide school materials, scholarships, health and wellbeing support, skills development and community initiatives.</p>
          <div className="mini-list">
            <p><School/> Education and school materials</p>
            <p><Stethoscope/> Healthcare and wellbeing initiatives</p>
            <p><Users/> Women and youth empowerment</p>
            <p><Heart/> Community support</p>
          </div>
        </div>
        <div className="donate-box">
          <span className="eyebrow">MAKE A DONATION</span>
          <h2>Support Faith Clinic Foundation</h2>
          <p>Every contribution helps us advance education, scholarships, school support, community development and free healthcare programmes.</p>

          <div className="donation-links">
            <a className="btn btn-primary full" href="https://business.quickteller.com/link/pay/FaithClyHpM1" target="_blank" rel="noreferrer">Donate Securely via Quickteller</a>
          </div>

          <div className="bank-details">
            <h3>Naira Account — Nigeria</h3>
            <p><strong>Account Name:</strong> Faith Clinic Foundation</p>
            <p><strong>Bank:</strong> GTBank</p>
            <p><strong>Account Number:</strong> 0657806140</p>

            <h3>Dollar Account — International Donations</h3>
            <p><strong>Account Name:</strong> Faith Clinic Foundation</p>
            <p><strong>Bank:</strong> GTBank</p>
            <p><strong>Account Number:</strong> 0657656833</p>
            <p><strong>SWIFT Code:</strong> GTBINGLA</p>
          </div>

          <div className="donation-contact">
            <h3>Donation &amp; Office Contact</h3>
            <p><strong>Address:</strong> No. 200 Aba Owerri Road, Abia State, Nigeria</p>
            <p><strong>ZIP Code:</strong> 450272</p>
            <p><strong>Phone:</strong> <a href="tel:+2348115459455">+234 811 545 9455</a></p>
            <p><strong>Email:</strong> <a href="mailto:faithcfoundation@gmail.com">faithcfoundation@gmail.com</a></p>
          </div>

          <small>Thank you for partnering with Faith Clinic Foundation International to create practical opportunities and lasting impact in communities.</small>
        </div>
      </div>
    </section>
  </>;
}