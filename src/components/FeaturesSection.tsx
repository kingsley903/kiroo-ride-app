import React from "react";

const FeaturesSection: React.FC = () => (
  <section className="features-section section-padding">
    <div className="features-header-row">
      <div>
        <h1 className="features-title">
          Ride Hailing like
          <br />
          never before.
        </h1>
      </div>
      <div className="features-header-desc">
        <p>
          Kiroo is more than a ride it’s movement redefined. Its Driven by
          innovation and powered by people. It’s built for the everyday reality
          of Nigerians and Africans.
          <br />
          <br />
          <b>Kiroo</b> connects people, packages, and possibilities through
          safe, smart, and flexible mobility.
        </p>
      </div>
    </div>
    <div className="features-grid">
      <div className="feature-card big-feature-card">
        <h3>Easy Booking & Real-Time Tracking</h3>
        <p>
          Book your ride in seconds. From pickup to drop-off, track your
          driver’s location in real time no surprises, just smooth movement.
        </p>
        <div
          style={{ backgroundImage: "url('/kiroo-ride-app/assets/f2-img.png')" }}
          className="feature-img big-feature-img"
        ></div>
      </div>
      <div className="feature-card big-feature-card">
        <h3>100% Safety</h3>
        <p>
          Smart safety tools like selfie checks, SOS buttons, and live trip
          sharing built in without invading your privacy. And ultimate emergency
          police alert services with kiroo smart security personnel if needed.
        </p>
        <div
          style={{ backgroundImage: "url('/kiroo-ride-app/assets/f2-img2.png')" }}
          className="feature-img big-feature-img"
        ></div>
      </div>
      <div className="feature-card small-feature-card">
        <h3>Multiple Ride Options:</h3>
        <p>
          From bikes to SUVs, Keke to sedans. Kiroo fits every budget, every
          road, every lifestyle. Whether you’re late for a meeting or heading to
          market, there’s a ride just for you.
        </p>
        <div
          style={{ backgroundImage: "url('/kiroo-ride-app/assets/small-first.png')" }}
          className="feature-img small-feature-img"
        >

<img src="/kiroo-ride-app/assets/small-first-in.png" alt="Small Feature" />

        </div>
      </div>
      <div className="feature-card small-feature-card">
        <h3>Cashless Payments</h3>
        <p>
          No change? No problem. Pay instantly with card, wallet, or
          scan-to-pay. Fast, secure, and 100% cash-free: your wallet stays in
          your pocket!
        </p>
       <div
          style={{ backgroundImage: "url('/kiroo-ride-app/assets/small-second.jpg')" }}
          className="feature-img small-feature-img"
        ></div>
      </div>
      <div className="feature-card feature-card-cta col-lg-4">
        <div>
          <h3>Explore Other Features of Our Products.</h3>
          <a href="#" className="enjoy-life-btn">
            <span style={{ color: "#fff" }}>Download</span> Now!
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
