import React, { useState } from "react";

const Frame10: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit logic here
  };

  return (
    <section className="waitlist-section section-padding">
      <div className="waitlist-content">
        <h1 className="waitlist-title">
          JOIN THE <span className="waitlist-highlight">WAITLIST</span>
        </h1>
        <p className="waitlist-desc">
          listening is everything, and we have been listening.<br />
          Now its time to do better. Lets ride like you.<br />
          <span className="waitlist-coming">KIROO IS COMING!</span>
        </p>
        <form className="waitlist-form" onSubmit={handleSubmit}>
          <div className="waitlist-form-row">
            <div className="waitlist-form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="waitlist-form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="waitlist-form-row">
            <div className="waitlist-form-group">
              <label>Phone number</label>
              <input
                type="tel"
                name="phone"
                placeholder="234(0) 8123456789"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="waitlist-form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="waitlist-btn" type="submit">
            Get notified
          </button>
        </form>
      </div>
    </section>
  );
};

export default Frame10;