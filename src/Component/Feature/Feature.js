import React from "react";
import FeatureData from "./index";
import "./feature.css";

const Feature = () => {
  return (
    <section className="bg-light py-4">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {FeatureData.map((feature, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-auto my-2 px-4 text-center"
            >
              <img src={feature.src} alt={feature.alt} className="feature-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
