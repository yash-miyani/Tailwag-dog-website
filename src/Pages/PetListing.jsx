import { FaPaw } from "react-icons/fa";
import Button from "../Components/Button";
import Heading from "../Components/Heading";
import SlickSlider from "../Components/SlickSlider";
import Svg from "../Components/Svg";
import { FiPaperclip } from "react-icons/fi";

const PetListing = () => {
  return (
    <div className=" pt-5 px-5 px-md-0 overflow-hidden">
      {/* PetListing Img  */}
      <div
        className="row mt-5 position-relative"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className=" position-absolute w-100  overflow-hidden start-0 svg-border">
          <Svg />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div
            id="carouselExampleControls"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img
                  src="images/PetListing-1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="images/PetListing-2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="images/PetListing-3.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-12 align-self-center p-5">
          <h2 className="my-4 fs-1">
            Meet
            <span className=" position-relative ms-2">
              Charlie
              <img
                src="images/underline.png"
                width="150"
                className=" position-absolute bottom-0 start-0"
              />
            </span>
          </h2>
          <div className=" d-flex PetListing-main justify-content-between flex-wrap">
            <div>
              <div>
                <h3>Gender:</h3>
                <span>Male</span>
              </div>
              <div>
                <h3>Neutered:</h3>
                <span>Yes</span>
              </div>
              <div>
                <h3>Age:</h3>
                <span>1 year</span>
              </div>
            </div>

            <div>
              <div>
                <h3>Breed:</h3>
                <span>Labrador</span>
              </div>
              <div>
                <h3>Vaccinated:</h3>
                <span>Yes</span>
              </div>
              <div>
                <h3>Size:</h3>
                <span>Large</span>
              </div>
            </div>
          </div>

          <p className=" my-3">
            Loves to go out for walks and walks very good on a lead. He is very
            inquisitive and is always on the out look for rabbits. This boy
            adores human cuddles and loves to snuggle into you.{" "}
          </p>

          <Button>Apply toady</Button>
        </div>
      </div>

      {/* PetListing About  */}
      <div className="container py-8 px-5">
        <h2 className=" my-5" style={{ fontWeight: "600" }} data-aos="fade-up">
          About Charlie
        </h2>
        <div className="d-flex flex-wrap" data-aos="fade-up">
          <h3 className=" fs-6 me-5">
            <FaPaw style={{ color: "#fbaf03" }} className=" me-3" /> Friendly to
            other dogs
          </h3>
          <h3 className=" fs-6 me-5">
            <FaPaw style={{ color: "#fbaf03" }} className=" me-3" />
            Good for Apartments
          </h3>
          <h3 className=" fs-6 me-5">
            <FaPaw style={{ color: "#fbaf03" }} className=" me-3" /> Friendly to
            other dogs
          </h3>
        </div>

        <p className=" my-4" data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
          consequat purus, facilisis iaculis nulla. Mauris vel leo bibendum,
          imperdiet justo a, pharetra metus. Pellentesque eget convallis orci.
          Donec in enim eu ex lacinia commodo. Maecenas et mi ante. Donec at
          condimentum lorem. Morbi egestas magna porta, gravida nibh mollis,
          suscipit mauris. Integer mollis vestibulum ante eu gravida. Mauris
          fringilla lectus arcu, mattis porta ex fringilla pretium.{" "}
        </p>

        <p data-aos="fade-up">
          Praesent vestibulum magna vel fermentum dictum. Donec eget semper
          orci, sit amet volutpat nisi. Phasellus in erat quis leo hendrerit
          faucibus sed non justo. Fusce laoreet laoreet rhoncus.
        </p>

        <div
          className=" my-5 p-5 rounded-3"
          style={{ backgroundColor: "#FEF4DF" }}
          data-aos="fade-up"
        >
          <h5 className=" fs-5 fw-bold my-3">
            <FiPaperclip className=" me-2" />
            Adoption Rules
          </h5>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            consequat purus, facilisis iaculis nulla. Mauris vel leo bibendum,
            imperdiet justo a, pharetra metus. Pellentesque eget convallis orci.
            Donec in enim eu ex lacinia commodo. Maecenas et mi ante. Donec at
            condimentum lorem.
          </p>
        </div>
      </div>

      {/* PetListing Slider  */}
      <div className="py-8" style={{ backgroundColor: "#f1f1f1" }}>
        <div className=" container">
          <div className=" ms-5">
            <Heading>
              <h3 className="ps-4">Available Pets</h3>
              <h2> More Pets For Adoption</h2>
            </Heading>
          </div>
        </div>
        <div>
          <SlickSlider />
        </div>
      </div>
    </div>
  );
};

export default PetListing;
