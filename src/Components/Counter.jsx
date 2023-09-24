import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = ({ end, img, title }) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="d-flex gap-3 justify-content-center">
            <img src={img} alt="icon" />
            <div
              className=" align-self-center fs-3 fw-bold"
              style={{ color: "#fa524f" }}
            >
              {counterOn && (
                <CountUp start={0} end={end} duration={2} delay={0} />
              )}
            </div>
          </div>
          <div
            className=" text-center my-3 mx-3 px-5 py-2  rounded-pill fw-bold"
            style={{ backgroundColor: "#f1f1f1" }}
          >
            {title}
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
};

export default Counter;
