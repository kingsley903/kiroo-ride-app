import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section className="new-hero-section">
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
          <div className="hero-main-content">
            <div className="hero-brand-section">
              <h1 className="hero-brand-title">
                <span className="kiroo-brand-yellow">KIROO </span>
                <span className="kiroo-brand-white">RIDE</span>
              </h1>
              <div className="confidence-badge">
                <span className="confidence-text">RIDE WITH CONFIDENCE</span>
              </div>
            </div>

            <div className="ride-booking-section">
              <h2 className="ride-mood-title">Ride your mood</h2>

              <form className="booking-form">
                <div className="location-inputs-container">
                  <div className="location-input-group">
                    <div className="location-dot"></div>
                    <input
                      type="text"
                      placeholder="Pickup location"
                      className="location-input"
                    />
                    <div className="ride-type-selector">
                      <select className="ride-type-text">
                        <option>Personal Ride</option>
                        <option>Personal Ride</option>
                        <option>Personal Ride</option>
                        <option>Personal Ride</option>
                        <option>Personal Ride</option>
                        <option>Personal Ride</option>
                      </select>
                    </div>
                  </div>

                  <div className="connection-line"></div>

                  <div className="location-input-group">
                    <div className="location-dot-square"></div>
                    <input
                      type="text"
                      placeholder="Dropoff location"
                      className="location-input"
                    />
                  </div>
                </div>

                <button type="submit" className="find-rides-btn">
                  <span>Find Rides</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
