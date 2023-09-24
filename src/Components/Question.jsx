import React from "react";
import Heading from "./Heading";
import { FaBone } from "react-icons/fa";

const Question = ({ img, title, text, order }) => {
  return (
    <div className=" container py-5">
      <div className="row gap-5 justify-content-center">
        <div
          className={`col-lg-5 col-md-5 col-sm-12 col-12 ${order}`}
          data-aos="fade-right"
        >
          <img src={img} alt="dog-homeAbout" className="w-100" />
        </div>
        <div
          className="col-lg-5 col-md-12 col-sm-12 col-12 align-self-center px-5 px-lg-0"
          data-aos="fade-left"
        >
          <Heading>
            <h3 className="ps-2">{title}</h3>
            <h2>{text}</h2>
          </Heading>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <p>
            Eam ad sale persius, id vis iudicabit cor rumpit. Usu ad modo illum
            assum.
          </p>

          <p>
            <FaBone className=" me-3" style={{ color: "#fa524f" }} />
            Lorem ipsum dolor sit amet, consectetur
          </p>

          <p>
            <FaBone className=" me-3" style={{ color: "#fa524f" }} />
            No delenit detracto eum, vix ne integre taci
          </p>

          <p>
            <FaBone className=" me-3" style={{ color: "#fa524f" }} />
            An pro facete dicuntei ut epicuri
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
