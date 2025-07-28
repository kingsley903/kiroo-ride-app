   import React from "react";
   
   const Delivary: React.FC = () => (
     <div className="dataselect-page">
   
   {/* Make Deliveries Section */}
    <section className="deliveries-section">
      <div className="deliveries-content">
        <div className="deliveries-left">
          <h2>
            <span className="deliveries-yellow">Make</span> Deliveries
          </h2>
          <p>
            Your business moves fast. So should your deliveries. From market stalls to Instagram stores—Kiroo handles the drop.
          </p>
          <a href="#" className="download-btn">Download App</a>
        </div>
        <div className="deliveries-right">
          <img src="/assets/deliveries-illustration.png" alt="Deliveries Illustration" className="deliveries-img" />
        </div>
      </div>
    </section>
  </div>
);

export default Delivary;