import React from "react";
import "../index.css";

const Aboutus: React.FC = () => (
  <div className="aboutus-page">
    {/* Hero Section */}
    <section className="aboutus-hero">
      <img src="/assets/about-bg-pic.png" alt="About Kiroo Ride" className="aboutus-hero-img" />
      <div className="aboutus-hero-overlay">
        <h1>ABOUT US</h1>
      </div>
    </section>

    {/* About Text */}
    <section className="aboutus-intro">
      <h2>
        KIROO IS <span className="aboutus-highlight">MORE</span> THAN AN APP
      </h2>
      <div className="aboutus-intro-content">
        <ul>
          <li>
            <b>Smart Mobility:</b> Kiroo connects you to safe, reliable rides and deliveries, anytime, anywhere.
          </li>
          <li>
            <b>Empowering Communities:</b> We create opportunities for drivers, riders, and local businesses.
          </li>
          <li>
            <b>Driven by Innovation:</b> Our technology makes every journey seamless and rewarding.
          </li>
        </ul>
        <p>
          Kiroo is built for Africa, by Africans. We believe in moving people and possibilities—one ride at a time.
        </p>
      </div>
    </section>

    {/* Vision Section */}
    <section className="aboutus-vision aboutus-yellow-bg">
      <div className="aboutus-vision-content">
        <div className="aboutus-vision-text">
          <h3>OUR VISION</h3>
        </div>
        <img src="/assets/kiroo-vision.jpg" alt="Kiroo Vision" className="aboutus-vision-img" />
      </div>
    </section>

    {/* Mission Section */}
    <section className="aboutus-mission">
      <div className="aboutus-mission-content">
        <img src="/assets/kiroo-mission.jpg" alt="Kiroo Mission" className="aboutus-mission-img" />
        <div className="aboutus-mission-text">
          <h3>OUR MISSION</h3>
          <p>
            To make everyday journeys safer, easier, and more rewarding for everyone. We’re committed to innovation, inclusion, and impact—driving Africa forward.
          </p>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="aboutus-services aboutus-yellow-bg">
      <h3>ONE APP, MANY SERVICES</h3>
      <div className="aboutus-services-cards">
        <div className="aboutus-service-card">
          <img src="/assets/service-ride.jpg" alt="Ride Service" />
          <h4>Ride</h4>
          <p>Book a ride in seconds—fast, safe, and affordable.</p>
        </div>
        <div className="aboutus-service-card">
          <img src="/assets/service-delivery.jpg" alt="Delivery Service" />
          <h4>Delivery</h4>
          <p>Send and receive packages with ease, anywhere in your city.</p>
        </div>
        <div className="aboutus-service-card">
          <img src="/assets/service-market.jpg" alt="Market Service" />
          <h4>Market</h4>
          <p>Shop from local stores and get your orders delivered to your door.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Aboutus;