import React from "react";
import ChatBox from "./ChatBox";
import StatsPanel from "./StatsPanel";
import Disease from "./Disease.jsx";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Early Detection Saves Lives</h1>
          <p>
            Health Gennie leverages cutting-edge machine learning for proactive,
            predictive healthcare. Experience early diagnosis and personalized
            care with real-time monitoring.
          </p>
          <button className="cta-button">Schedule a Demo</button>
        </div>
      </section>

      {/* How It Works Overview */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-item">
              <h3>Data Collection</h3>
              <p>
                We gather diverse health data from lab reports, wearables, and
                historical records.
              </p>
            </div>
            <div className="step-item">
              <h3>Real-Time Analysis</h3>
              <p>
                Our platform continuously monitors and analyzes the data using
                advanced ML algorithms.
              </p>
            </div>
            <div className="step-item">
              <h3>Proactive Alerts</h3>
              <p>
                Early warnings and personalized care recommendations help
                prevent critical conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Snapshot */}
      <section className="benefits-section">
        <div className="container">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Early Diagnosis</h3>
              <p>Catch diseases early for improved treatment outcomes.</p>
            </div>
            <div className="benefit-card">
              <h3>Personalized Care</h3>
              <p>
                Receive treatment plans tailored to your unique health profile.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Community Insights</h3>
              <p>Understand health trends within your community.</p>
            </div>
            <div className="benefit-card">
              <h3>Real-Time Alerts</h3>
              <p>
                Stay updated with instant notifications on potential health
                risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-item">
              <p>
                "Health Gennie helped me detect a critical condition early.
                Their predictive analytics truly saved my life!"
              </p>
              <span>- Patient A</span>
            </div>
            <div className="testimonial-item">
              <p>
                "Integrating Health Gennie into our clinic has revolutionized
                our approach to patient care."
              </p>
              <span>- Dr. B</span>
            </div>
          </div>
        </div>
      </section>

      {/* Existing ChatBox and StatsPanel Section */}
      <section className="interactive-section">
        <div className="container">
          <ChatBox />
          <Disease />
          <StatsPanel />
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Transform Your Healthcare?</h2>
          <button className="cta-button">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
