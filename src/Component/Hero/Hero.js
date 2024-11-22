import React from "react";
import { FaMoneyCheckAlt, FaSignOutAlt } from "react-icons/fa";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section py-12 overflow-hidden" id="banner">
      <div className="hero-background d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center pt-5 pt-lg-8 pb-4">
            <div className="text-center">
              <h1 className="hero-title font-weight-bold text-white">
                Premium Guest Posting
                <span className="highlight"> Services</span>
              </h1>
              <h3 className="hero-subtitle mb-2 text-white font-weight-bold">
                Get <span className="highlight">Backlinks</span> From
                High-Quality Websites
              </h3>
              <p className="hero-text mb-3 text-white">
                Only Pay If You Are Satisfied With The Results
              </p>

              <div className="row justify-content-center mt-4">
                <div className="col-auto">
                  <button className="btn btn-light hero-btn d-flex align-items-center fs-6 rounded-3 py-2 px-4">
                    <FaSignOutAlt size={20} className="me-2" />
                    Sign Up Now
                  </button>
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary hero-btn d-flex align-items-center fs-6 rounded-3 py-2 px-4">
                    <FaMoneyCheckAlt size={20} className="me-2" />
                    View Pricing
                  </button>
                </div>
              </div>
              <h6 className=" mt-3 text-white">
                <span className="highlight">*</span> Starting From
                <span className="highlight font-weight-bold"> $4.99</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
