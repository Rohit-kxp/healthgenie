import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions or need support? Our team is here to help.</p>
        </div>
      </section>
      <section className="contact-details">
        <div className="container">
          <h2>Our Contact Information</h2>
          <p>Email: support@healthgenie.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 1234 Health St, Wellness City, Country</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
