import React from "react";
import PageHero from "../components/PageHero";

export default function DataDeletion() {
  return <>
    <PageHero
      eyebrow="DATA DELETION"
      title="Request deletion of your FaithLearn AI data."
      text="You can request deletion of personal information associated with your FaithLearn AI account."
      background="/backgrounds/work-community-bg.jpg"
    />

    <section className="section">
      <div className="container narrow">
        <h2>How to request deletion</h2>
        <p>If you have used Facebook to sign in to FaithLearn AI and want your FaithLearn AI account and associated personal information deleted, email <a href="mailto:faithcfoundation@gmail.com?subject=FaithLearn%20AI%20Data%20Deletion%20Request">faithcfoundation@gmail.com</a> with the subject <strong>FaithLearn AI Data Deletion Request</strong>.</p>

        <h2>What to include</h2>
        <p>Please provide the email address associated with your FaithLearn AI account and enough information for us to identify the account. Do not send your Facebook password or other sensitive credentials.</p>

        <h2>What happens next</h2>
        <p>We will review the request and, where appropriate, delete or anonymize personal information associated with the account, subject to information we are legally required or otherwise legitimately required to retain.</p>

        <h2>Remove FaithLearn AI from Facebook</h2>
        <p>You can also remove FaithLearn AI from your Facebook account by opening Facebook Settings &amp; Privacy → Settings → Apps and Websites, selecting FaithLearn AI and choosing Remove.</p>

        <h2>Need help?</h2>
        <p>Faith Clinic Foundation International<br />
        200 Aba Owerri Road, Aba, Abia State, Nigeria<br />
        Email: <a href="mailto:faithcfoundation@gmail.com">faithcfoundation@gmail.com</a></p>
      </div>
    </section>
  </>;
}
