import React from "react";
import { FaLightbulb, FaHeartbeat, FaUserFriends } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Our Mission / Overview */}
      <section className="about-mission">
        <div className="container">
          <h1>About Health Gennie</h1>
          <p>
            At Health Gennie, we are dedicated to transforming healthcare by
            leveraging predictive analytics and real-time monitoring—enabling
            early diagnosis and personalized care.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="about-problem">
        <div className="container">
          <h2>The Problem</h2>
          <p>
            Traditional healthcare systems often detect diseases at advanced
            stages, leaving patients with limited options and increased risks.
          </p>
        </div>
      </section>

      {/* Our Solution */}
      <section className="about-solution">
        <div className="container">
          <h2>Our Solution</h2>
          <p>
            Health Gennie continuously analyzes diverse patient data to detect
            anomalies, forecast trends, and predict potential risks
            early—empowering proactive, personalized care.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="about-services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <FaHeartbeat className="service-icon" />
              <h3>Predictive Health Monitoring</h3>
              <p>
                Continuous tracking of patient data to forecast potential health
                risks.
              </p>
            </div>
            <div className="service-item">
              <FaLightbulb className="service-icon" />
              <h3>Personalized Care Plans</h3>
              <p>
                Tailored treatment recommendations based on your unique health
                profile.
              </p>
            </div>
            <div className="service-item">
              <FaUserFriends className="service-icon" />
              <h3>Community Health Insights</h3>
              <p>
                Aggregated data analysis to provide insights into community
                health trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="about-approach">
        <div className="container">
          <h2>Our Approach</h2>
          <p>
            By harnessing cutting-edge machine learning algorithms and real-time
            analytics, we shift healthcare from reactive to proactive—ensuring
            early intervention and better outcomes.
          </p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="about-cta">
        <div className="container">
          <h2>Join the Healthcare Revolution</h2>
          <button className="cta-button">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
