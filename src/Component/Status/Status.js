import React from "react";
import CountUp from "react-countup";

const Status = () => {
  return (
    <div className="bg-dark">
      <div className="container py-3"> 
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-xl mb-1 text-center text-light">
            <span className="text-light h4">
              <CountUp start={0} end={45534} duration={1} separator="," />
            </span>
            <strong className="h4 text-white">+</strong>
            <br />
            <span>
              <strong>Registered Websites</strong>
            </span>
          </div>
          <div className="col-12 col-md-6 col-xl mb-1 text-center text-light">
            <span className="text-light h4">
              <CountUp start={0} end={28958} duration={1} separator="," />
            </span>
            <strong className="h4 text-white">+</strong>
            <br />
            <strong>Publishers &amp; Writers</strong>
          </div>
          <div className="col-12 col-md-6 col-xl mb-1 text-center text-light">
            <span className="text-light h4">
              <CountUp start={0} end={244619} duration={1} separator="," />
            </span>
            <strong className="h4 text-white">+</strong>
            <br />
            <span>
              <strong>Tasks Completed</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
