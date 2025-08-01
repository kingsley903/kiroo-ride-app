import React from "react";

const Dataselect: React.FC = () => (
  <div className="dataselect-page">
    {/* Enjoy Life with Kiroo Section */}
    <section className="enjoy-life-section section-padding">
      <div className="enjoy-life-left">
        <h1 className="enjoy-life-title">
          Enjoy Life with <br />
          <span>KIROO!</span>
        </h1>
        <h3 className="enjoy-life-sub">Every mother deserves a safe journey</h3>
        <p className="enjoy-life-desc">
          Being pregnant comes with enough worries; transportation shouldn’t be
          one of them.
          <br />
          That’s why Kiroo is proud to support mothers-to-be with one free ride
          every month to and from your antenatal clinic or checkup. No stress,
          no hidden charges. Just care, comfort, and convenience.
        </p>
        <div className="enjoy-life-list">
          <b>What You Get:</b>
          <ul>
            <li>
              Free roundtrip every month to your registered clinic or hospital
            </li>
            <li>
              Verified, respectful drivers trained to support maternity riders
            </li>
          </ul>
        </div>
        <div className="enjoy-life-list">
          <b>How It Works:</b>
          <ol>
            <li>
              Sign up or log into Kiroo and select the “Maternity Support”
              option.
            </li>
            <li>Enter your clinic address and due date</li>
            <li>
              Enjoy your free ride every month—we’ll even remind you when it’s
              due
            </li>
          </ol>
        </div>
        <p className="enjoy-life-bold">
          Let Kiroo take you there with love, ease, and dignity.
        </p>
        <a href="#" className="enjoy-life-btn">
          Download App
        </a>
      </div>
      <div className="enjoy-life-right">
        <img
          src="/kiroo-ride-app/assets/belle.png"
          alt="Enjoy Life with Kiroo"
          className="enjoy-life-img"
        />
      </div>
    </section>

    {/* Getting Started Section */}
    <section className="getting-started-section section-padding">
      <h1 className="getting-started-title">Getting Started with Kiroo App</h1>
      <p className="getting-started-desc">
        Born from the hustle and rhythm of African cities, to the seamlessness
        of western cities, Kiroo connects people, packages, and possibilities
        through safe, smart, and flexible mobility.
      </p>
      <div className="getting-started-left">
        <div className="getting-started-steps">
          <div className="step-card step-card-dark">
            <div className="step-number">1</div>
            <div>
              <h3>App Download</h3>
              <p>
                Start your Journey by Downloading the <b>Kiroo Ride App</b>,
                available for free on both android and ios platforms
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div>
              <h3>Account Setup</h3>
              <p>
                Quickly set up your account in a matter of minutes, requires
                only minimal details for an <b>easy Kiroo experience</b>.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div>
              <h3>Choose a Ride Options</h3>
              <p>
                From bikes to SUVs, Keke to executive sedans, quiet mode to
                Event mode, Kiroo fits every budget, every road, every
                lifestyle.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <div>
              <h3>Book a Ride!</h3>
              <p>
                Kiroo moves with you—no matter your hustle, your location, or
                your network. Ride smart. Ride safely. Ride Kiroo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="getting-started-right">
        <img
          src="/kiroo-ride-app/assets/map-phone.png"
          alt="Kiroo App Map"
          className="getting-started-img"
        />
      </div>
    </section>
    {/* Do More With Kiroo Section */}
    <section className="do-more-section section-padding">
      <div className="do-more-left">
        <h1 className="do-more-title">
          DO More With <br />
          <span>KIROO!</span>
        </h1>
        <p className="do-more-sub">Share a ride</p>
        <a
          href="#"
          className="enjoy-life-btn"
>
          Download App
        </a>
      </div>
      <div className="do-more-right">
        <div className="do-more-img"></div>
      </div>
    </section>

    {/* USSD Section */}
    <section className="ussd-section section-padding">
      <div className="ussd-left">
        <img
          src="/kiroo-ride-app/assets/ussd-code.png"
          alt="USSD Booking"
          className="ussd-img"
        />
      </div>
      <div className="ussd-right">
        <h2 className="ussd-title">
          <span className="ussd-yellow">No</span> Smart phone?
          <br />
          <span className="ussd-yellow">No</span> Internet?
          <br />
          <span className="ussd-yellow">No</span> Problem
        </h2>
        <p className="ussd-sub">
          Book with our <b>USSD CODE!</b>
        </p>
        <p className="ussd-desc">
          Get started with USSD or SMS—perfect for areas with low data or
          unreliable network.
        </p>
        <div>
          <h1 className="ussd-dial">
            Dial
            <br />
            <span className="ussd-dial-code">*801#</span>
          </h1>
        </div>
      </div>
    </section>

    {/* DO MORE WITH KIROO (DRIVER) SECTION */}
    <section
      className="do-more-driver-section section-padding"
      style={{
        backgroundImage: 'url("/kiroo-ride-app/assets/do-more-driver.png")',
      }}
    >
      <div className="do-more-driver-overlay">
        <h1>
          <span className="do-more-yellow">DO More With</span>
          <br />
          <span className="do-more-white">KIROO!</span>
        </h1>
        <p className="do-more-driver-desc">
          Make the most of your time on the road on the platform with the
          largest network of active riders.
        </p>
        <a href="#" className="do-more-btn">
          Download App
        </a>
      </div>
      {/* <img
        src="/kiroo-ride-app/assets/do-more-driver.png"
        alt="Do More With Kiroo Driver"
        className="do-more-driver-img"
      />*/}
    </section>

    {/* INSURANCE SECTION */}
    <section className="insurance-section section-padding">
      <div className="insurance-left">
        <h1>
          <span className="insurance-yellow">Insurance??</span>
          <br />
          Why not!
        </h1>
        <p className="insurance-desc">
          At Kiroo, we believe drivers deserve peace of mind every trip, every
          hustle. That’s why we’ve partnered with top insurers to bring you
          affordable, stress-free insurance, made just for you.
        </p>
        <div className="insurance-list">
          <b>Health Cover.</b>
          <br />
          hospital bills? We’ve got your back.
          <br />
          <br />
          <b>Vehicle Insurance.</b>
          <br />
          stay protected from accidents, theft, or damage.
          <br />
          <br />
          <b>Emergency Support.</b>
          <br />
          quick help when the unexpected happens.
        </div>
        <a href="#" className="do-more-btn">
          Download App
        </a>
        <h2 className="insurance-footer">
          Drive Safe. Stay Covered. Enjoy Kiroo.
        </h2>
      </div>
      <div className="insurance-right">
        <img
          src="/kiroo-ride-app/assets/insurance-car.jpg"
          alt="Insurance"
          className="insurance-img"
        />
      </div>
    </section>
    <hr />
    {/* MAKE DELIVERIES SECTION */}
    <section className="make-deliveries-section section-padding">
      <div className="make-deliveries-left">
        <img
          src="/kiroo-ride-app/assets/deliveries-illustration.png"
          alt="Make Deliveries"
          className="make-deliveries-img"
        />
      </div>
      <div className="make-deliveries-right">
        <h1>
          <span className="make-yellow">Make</span> Deliveries
        </h1>
        <p className="make-deliveries-desc">
          Your business moves fast. So should your deliveries. From market
          stalls to Instagram stores <b>Kiroo</b> handles the drop.
        </p>
        <a href="#" className="do-more-btn">
          Download App
        </a>
      </div>
    </section>
  </div>
);

export default Dataselect;
