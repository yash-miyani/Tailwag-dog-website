import { useState } from "react";
import Button from "../Components/Button";
import { ProtfolioData } from "../Data/Data";
import HeaderAll from "../Components/HeaderAll";
const Puppies = () => {
  const [items, setItems] = useState(ProtfolioData);
  const [activeTab, setActiveTab] = useState("all");

  const filterItem = (categroyItem) => {
    const updatedItems = ProtfolioData.filter((elm) => {
      return elm.categroy === categroyItem;
    });

    setItems(updatedItems);
  };

  const allHandler = () => {
    setItems(ProtfolioData), setActiveTab("all");
  };

  const dogHandler = () => {
    filterItem("Dogs"), setActiveTab("dogs");
  };

  const catHandler = () => {
    filterItem("Cats"), setActiveTab("cats");
  };

  const otherHandler = () => {
    setActiveTab("other"), filterItem("Other");
  };

  return (
    <>
      {/* Puppies Header  */}
      <HeaderAll>
        <h2>Puppies</h2>
        <h3>Dog Training & Breeding Professionals</h3>
      </HeaderAll>

      {/* Puppies Protfolio  */}
      <div className=" py-8">
        <div className="Protfolio-Menu container">
          <div className="d-flex justify-content-center mt-3">
            <button
              className={`btn mx-3 rounded-pill ${
                activeTab === "all" ? "active" : ""
              }`}
              onClick={allHandler}
            >
              All
            </button>
            <button
              className={`btn mx-3 rounded-pill ${
                activeTab === "dogs" ? "active" : ""
              }`}
              onClick={dogHandler}
            >
              Dogs
            </button>
            <button
              className={`btn mx-3 rounded-pill ${
                activeTab === "cats" ? "active" : ""
              }`}
              onClick={catHandler}
            >
              Cats
            </button>
            <button
              className={`btn mx-3 rounded-pill ${
                activeTab === "other" ? "active" : ""
              }`}
              onClick={otherHandler}
            >
              Other
            </button>
          </div>
        </div>

        <div className=" container mt-5">
          <div className="row">
            {items.map((data, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 my-4 px-5 px-sm-4"
                  key={index}
                  data-aos="flip-right"
                >
                  <div
                    className="overflow-hidden position-relative"
                    style={{
                      boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.08)",
                      borderRadius: "8px 8px 0 0",
                    }}
                  >
                    <span className="Protfolio-span">{data.year}</span>
                    <div className="overflow-hidden">
                      <img
                        src={data.img}
                        alt={data.title}
                        className=" img-fluid Protfolio-img "
                      />
                    </div>
                    <div className="p-4">
                      <h3 className=" fs-4 fw-bold">{data.title}</h3>
                      <p>{data.text}</p>
                      <div className="mt-3">
                        <Button>Learn More</Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Puppies;
