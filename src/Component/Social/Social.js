import React from "react";
import { social_data } from "./index";
import "./social.css";

const Social = () => {
  return (
    <div className="container my-4">
      <h2 className="fw-bold text-center py-5 title fs-1">
        How Our Platform Works
      </h2>
      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4">
        {social_data.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100 border border-primary shadow">
              <img
                src={item.image}
                className="card-img-top card-image"
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold py-2 title-text">
                  {item.title}
                </h5>
                <p className="card-text fw-semibold">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
