import React from "react";

const Dataselect: React.FC = () => (
  <div className="dataselect-page">

    {/* Getting Started Section */}
    <section className="getting-started-section">
      <div className="getting-started-left">
        <h1 className="getting-started-title">Getting Started with Kiroo App</h1>
        <p className="getting-started-desc">
          Born from the hustle and rhythm of African cities, to the seamlessness of western cities, Kiroo connects people, packages, and possibilities through safe, smart, and flexible mobility.
        </p>
        <div className="getting-started-steps">
          <div className="step-card step-card-dark">
            <div className="step-number">1</div>
            <div>
              <h3>App Download</h3>
              <p>
                Start your Journey by Downloading the <b>Kiroo Ride App</b>, available for free on both android and ios platforms
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div>
              <h3>Account Setup</h3>
              <p>
                Quickly set up your account in a matter of minutes, requires only minimal details for an <b>easy Kiroo experience</b>.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div>
              <h3>Choose a Ride Options</h3>
              <p>
                From bikes to SUVs, Keke to executive sedans, quiet mode to Event mode, Kiroo fits every budget, every road, every lifestyle.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <div>
              <h3>Book a Ride!</h3>
              <p>
                Kiroo moves with you—no matter your hustle, your location, or your network. Ride smart. Ride safely. Ride Kiroo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="getting-started-right">
        <img src="/assets/getting-started-phone.png" alt="Kiroo App Map" className="getting-started-img" />
      </div>
    </section>

    {/* Enjoy Life with Kiroo Section */}
    <section className="enjoy-life-section">
      <div className="enjoy-life-left">
        <h1 className="enjoy-life-title">Enjoy Life with <span>KIROO!</span></h1>
        <h3 className="enjoy-life-sub">Every mother deserves a safe journey</h3>
        <p className="enjoy-life-desc">
          Being pregnant comes with enough worries; transportation shouldn’t be one of them.<br />
          That’s why Kiroo is proud to support mothers-to-be with one free ride every month to and from your antenatal clinic or checkup. No stress, no hidden charges. Just care, comfort, and convenience.
        </p>
        <div className="enjoy-life-list">
          <b>What You Get:</b>
          <ul>
            <li>Free roundtrip every month to your registered clinic or hospital</li>
            <li>Verified, respectful drivers trained to support maternity riders</li>
          </ul>
        </div>
        <div className="enjoy-life-list">
          <b>How It Works:</b>
          <ol>
            <li>Sign up or log into Kiroo and select the “Maternity Support” option.</li>
            <li>Enter your clinic address and due date</li>
            <li>Enjoy your free ride every month—we’ll even remind you when it’s due</li>
          </ol>
        </div>
        <p className="enjoy-life-bold">
          Let Kiroo take you there with love, ease, and dignity.
        </p>
        <a href="#" className="enjoy-life-btn">Download App</a>
      </div>
      <div className="enjoy-life-right">
        <img src="/assets/enjoy-life-mom.png" alt="Enjoy Life with Kiroo" className="enjoy-life-img" />
      </div>
    </section>
  </div>
);

export default Dataselect;