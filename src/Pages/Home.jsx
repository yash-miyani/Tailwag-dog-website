import Button from "../Components/Button";
import { homeService } from "../Data/Data";
import { FaBone } from "react-icons/fa";
import Heading from "../Components/Heading";
import Process from "../Components/Process";
import Counter from "../Components/Counter";
import SlickSlider from "../Components/SlickSlider";
import Question from "../Components/Question";
import Svg from "../Components/Svg";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Home Header  */}
      <div className=" position-relative">
        <div className=" position-absolute w-100  overflow-hidden start-0 svg-border">
          <Svg />
        </div>

        <div className="Home-header py-8">
          <div className="container Home-content" data-aos="fade-up">
            <h1>
              Ready to <span>Adopt!</span>
            </h1>
            <p className=" my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Button> View Puppes</Button>
          </div>
        </div>
      </div>

      {/* Home Services  */}

      <div className="container py-5 ">
        <div className="row justify-content-center" data-aos="fade-up">
          {homeService.map((data, index) => {
            return (
              <div
                className=" col-lg-4 col-md-6 col-sm-12 col-12  mt-4 mt-lg-0"
                key={index}
              >
                <div
                  className="d-flex bg-white p-4"
                  style={{ boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.08)" }}
                >
                  <div className=" pe-4">
                    <img src={data.img} alt={data.title} width="80px" />
                  </div>
                  <div>
                    <h2 className=" fs-5">{data.title}</h2>
                    <p>{data.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Home About  */}

      <Question
        img="images/dog-P228UWM.jpg"
        title="About us"
        text="The Best for Your Pet!"
      />

      {/* Home BackGround  */}

      <div className="Home-bgSec">
        <div className="container Home-content text-white" data-aos="fade-up">
          <h2 className="fs-1">Want a pet for your loved ones?</h2>
          <p className=" text-white py-3">
            Elit sanctus mea no. Ne duo vocent vocibus consetetur. Singulis etam
            pericula an vis, pri graeco partiendo te, alii admodum copiosae id
            sea. Per no malis liber fierent.
          </p>
          <Button>Apply Toady</Button>
        </div>
      </div>

      {/* Home How we Work  */}

      <div className=" py-8">
        <div className="text-center">
          <Heading>
            <h3 className="ps-4"> How We Work</h3>
            <h2> Pet Adoption Process </h2>
          </Heading>

          <div className="container pt-5">
            <Process />
          </div>
        </div>
      </div>

      {/* Home counter Number  */}

      <div
        className="mx-auto py-5 mt-3 mb-5 container"
        style={{
          boxShadow: "0px  2px 2px 6px rgba(41, 48, 55, 0.06)",
        }}
      >
        <div className="row justify-content-center mt-md-3">
          <Counter end={1765} img="images/icon-1.png" title="Happy Dogs" />
          <Counter
            end={387}
            img="images/icon-2.png"
            title="Emergency Services"
          />
          <Counter end={567} img="images/icon-3.png" title="Caretakers" />
          <Counter end={1670} img="images/icon-4.png" title="Dog Rescues" />
        </div>
      </div>

      {/* Home Services  */}

      <div className="text-center">
        <div
          style={{
            background: "url('images/bone-bg.png')",
          }}
          className="py-8"
        >
          <Heading>
            <h3 className="ps-4"> Our Services</h3>
            <h2> Taking Care of Pets </h2>
          </Heading>

          <img
            src="images/diagram.png"
            alt="dilagram"
            className="w-75"
            data-aos="fade-up"
          />
        </div>
      </div>

      {/* Home Featured  */}
      <div className="py-8">
        <div className="text-center">
          <Heading>
            <h3 className="ps-4">Available Pets</h3>
            <h2> Featured Pets</h2>
          </Heading>
        </div>

        <div>
          <SlickSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
