import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {/* Left: Text and Features */}

        <div className="features-left">
                <h2 className="features-title">
            Introducing Our <br />
            <span className="features-highlight">Ride Hailing App</span>
          </h2>
          <p className="features-desc">
            We provide <b>seamless</b> and convenient <b>transportation</b> at your fingertips. 
            Whether you need to <b>quick ride to work</b>, a hassle-free airport, or safe journey 
            home after a <b>night out</b>, we got you covered.
          </p>
          <div className="features-list">
            <div className="feature-card">
              <h4>Easy Booking & Real-Time Tracking</h4>
              <p>
                Book your ride in seconds. From pickup to drop-off, 
                track your driver’s location in real time — no surprises, just smooth movement.
              </p>
            </div>
            <div className="feature-card">
              <h4>Custom Ride Mode</h4>
              <p>
                Need silence, a specific route, or baby-seat support? Choose how you ride with options like Quiet Mode, Event Mode, or even your own Custom Mode — because comfort means control.
              </p>
            </div>
            <div className="feature-card">
              <h4>Multiple Ride Options:</h4>
              <p>
                From bikes to SUVs, Keke to executive sedans — Kiroo fits every budget, every road, every lifestyle. Whether you’re late for a meeting or heading to market, there’s a ride just for you.
              </p>
            </div>
            <div className="feature-card">
              <h4>Cashless, One-Tap Payments</h4>
              <p>
                No change? No problem. Pay instantly with card, wallet, or scan-to-pay. Fast, secure, and 100% cash-free: your wallet stays in your pocket!
              </p>
            </div>
          </div>
        </div>
        {/* Right: App Mockup */}
        <div className="features-right">
          {/*<img
            src="/assets/phone.png"
            alt="Kiroo App Mockup"
            className="features-app-mockup"
          />*/}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;