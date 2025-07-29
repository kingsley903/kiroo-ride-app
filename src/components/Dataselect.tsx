import React from "react";
import Delivary from "./Delivary";
import Domore from "./Domore";

const Dataselect: React.FC = () => (
  <div className="dataselect-page">

    {/* Offline Ride Section */}
    <section className="offline-ride-section">
      <div className="offline-ride-content">
        <img src="/kiroo-ride-app/assets/offline-ussd.png" alt="Offline USSD" className="offline-ussd-img" />
        <div className="offline-ride-text">
          <h2>
            <span className="offline-yellow">Offline</span> ride?
          </h2>
          <p className="offline-sub">Book with our <b>USSD CODE!</b></p>
          <div className="ussd-code">
            <span>Dial</span><br />
            <span className="ussd-highlight">*801#</span>
          </div>
          <p className="offline-desc">No data? No wahala! Book Offline.</p>
        </div>
      </div>
    </section>

    {/* Ride Mode Section */}
    <section className="ride-mode-section">
      <div className="ride-mode-content">
        <div className="ride-mode-top">
          <div className="ride-mode-left">
            <h2>
              <span className="ride-yellow">Choose A</span> <br />
              Ride <span className="ride-white">Mode!</span>
            </h2>
            <p className="ride-mode-sub">
              Switch it up! One trip, many moods. Choose how you move.
            </p>
            <div className="ride-mode-buttons">
              <button className="mode-btn">Event Mode</button>
              <button className="mode-btn">Quiet Mode</button>
              <button className="mode-btn">Offline mode</button>
              <button className="mode-btn">Custom Mode</button>
            </div>
          </div>
          <div className="ride-mode-right">
            {/*<img src="/kiroo-ride-app/assets/ride-mode-illustration.png" alt="Ride Mode Illustration" className="ride-mode-img" />*/}
          </div>
        </div>
        <div className="ride-mode-features">
          <div className="ride-feature">
            <h4>Ride to the vibe.</h4>
            <p>
              Bring the music, connect, or experience Event Mode (plus you and your friends can split fares). Kiroo lets you choose the fun—every trip, your way.
            </p>
          </div>
          <div className="ride-feature">
            <h4>No small talk, just soft comfort.</h4>
            <p>
              Silence and ambiance your mood says? Choose Quiet Mode and enjoy a trip without interruptions. Your driver will understand: perfect for meetings, recharging, or just zoning out.
            </p>
          </div>
          <div className="ride-feature">
            <h4>No data? No wahala</h4>
            <p>
              Book rides even when the data is down. USSD, WhatsApp, or SMS—Kiroo keeps you connected, online or offline. Other friends online? Share the ride and save.
            </p>
          </div>
          <div className="ride-feature">
            <h4>Your ride, your rules</h4>
            <p>
              Customize every ride with Kiroo. Special instructions? Baby seat? Window down? Just say so. Get the ride you want, every single time—because comfort means control.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Do More With Kiroo Section */}
    <Domore />

    {/* Make Deliveries Section */}
    <Delivary />
  
  </div>
);

export default Dataselect;