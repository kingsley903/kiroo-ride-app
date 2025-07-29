import React, { useEffect, useRef, useState } from "react";

const images = [
  `${import.meta.env.BASE_URL}assets/ride-bg1.png`,
  `${import.meta.env.BASE_URL}assets/ride-bg2.png`,
  `${import.meta.env.BASE_URL}assets/ride-bg3.png`,
  `${import.meta.env.BASE_URL}assets/ride-bg3.png`,
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
            key={idx}
            src={img}
            alt={`slide ${idx + 1}`}
            className={`hero-img${idx === current ? " active" : ""}`}
          />
        ))}
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-caption">
              <span className="kiroo-yellow">KIROO</span>{" "}
              <span className="ride-white">RIDE</span>
              <br />
            </h1>
            <h2>
              <span className="hero-sub">RIDE WITH CONFIDENCE</span>
            </h2>
            <h2 className="hero-mood">Ride your mood</h2>
            <form className="hero-form">
              <div className="pickup-warpper-content">
              <div className="pickup-wrapper">
                <div className="black-dot"></div>
                <input
                  type="text"
                  placeholder="Pickup location"
                  className="pickup-input"
                />
                <select className="ride-select">
                  <option>Personal Ride</option>
                  <option>Delivery</option>
                  <option>For Someone</option>
                  <option>Schedule</option>
                </select>
              </div>
                <div className="black-line"></div>
              <div className="pickup-wrapper">
                <div className="black-dot"></div>
                <input
                  type="text"
                  placeholder="Dropoff location"
                  className="dropoff-input"
                />
              </div>
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
