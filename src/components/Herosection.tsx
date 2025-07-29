import React, { useEffect, useRef, useState } from "react";

const images = [
  "/kiroo-ride-app/assets/ride-bg1.png",
  "/kiroo-ride-app/assets/ride-bg2.png",
  "/kiroo-ride-app/assets/ride-bg3.png",
  "/kiroo-ride-app/assets/ride-bg3.png",
];

const Herosection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section className="hero-section">
      <div className="hero-bg">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="slide"
            className={`hero-img${idx === current ? " active" : ""}`}
          />
        ))}
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              <span className="kiroo-yellow">KIROO</span>
              <br />
              <span className="hero-sub">RIDE WITH CONFIDENCE</span>
            </h1>
            <h2 className="hero-mood">Ride your mood</h2>
<form className="hero-form">
  <div className="pickup-wrapper">
  <div className="black-dot"></div>
    <input type="text" placeholder="Pickup location" className="pickup-input" />
    <select className="ride-select">
      <option>Personal Ride</option>
      <option>Delivery</option>
      <option>For Someone</option>
      <option>Schedule</option>
    </select>
  </div>

  <div className="pickup-wrapper">
  <div className="black-dot"></div>
  <input type="text" placeholder="Dropoff location" className="dropoff-input" />
  </div>

              <button className="find-btn">Find Rides</button>

</form>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
