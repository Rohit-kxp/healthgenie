import React from "react";
import {
  FaShieldAlt,
  FaMobileAlt,
  FaBrain,
  FaUsers,
  FaVideo,
  FaChartLine,
  FaMapMarkedAlt,
} from "react-icons/fa";

const ServicePage = () => {
  return (
    <div className="service-page">
      {/* Overview Section */}
      <section className="overview">
        <div className="container">
          <h1>Welcome to Health Gennie Services</h1>
          <p>
            Explore our comprehensive suite of health monitoring and predictive
            analytics services.
          </p>
          <button className="cta-button">Schedule a Demo</button>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <FaBrain className="feature-icon" />
              <h3>Predictive Analytics</h3>
              <p>
                Early identification of health risks using advanced ML
                algorithms.
              </p>
            </div>
            <div className="feature-item">
              <FaMobileAlt className="feature-icon" />
              <h3>Real-Time Monitoring</h3>
              <p>Continuous data collection from wearables and lab reports.</p>
            </div>
            <div className="feature-item">
              <FaShieldAlt className="feature-icon" />
              <h3>Data Security</h3>
              <p>Robust security measures ensuring your health data is safe.</p>
            </div>
            <div className="feature-item">
              <FaUsers className="feature-icon" />
              <h3>Community Insights</h3>
              <p>Gain insights from aggregated community health data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities Section */}
      <section className="advanced-capabilities">
        <div className="container">
          <h2>Advanced Capabilities</h2>
          <div className="features-grid">
            <div className="feature-item">
              <FaVideo className="feature-icon" />
              <h3>Virtual Consultations</h3>
              <p>
                Connect with healthcare professionals via live video sessions.
              </p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Predictive Health Score</h3>
              <p>
                Receive an AI-driven score reflecting your current health
                status.
              </p>
            </div>
            <div className="feature-item">
              <FaMapMarkedAlt className="feature-icon" />
              <h3>Interactive Health Map</h3>
              <p>
                Visualize health trends and similar cases in your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How does Health Gennie work?</h3>
            <p>
              Health Gennie uses advanced machine learning to monitor health
              data in real-time, predict risks, and provide personalized
              insights.
            </p>
          </div>
          <div className="faq-item">
            <h3>Is my data secure?</h3>
            <p>
              Yes, your data is encrypted and stored securely in compliance with
              healthcare regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Transform Your Healthcare Experience Today</h2>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
