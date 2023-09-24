import { Link } from "react-router-dom";
import Button from "../Components/Button";
import HeaderAll from "../Components/HeaderAll";
import Heading from "../Components/Heading";
import Process from "../Components/Process";
import SlickSlider from "../Components/SlickSlider";

const About = () => {
  return (
    <div className=" overflow-hidden">
      {/* About Header  */}
      <HeaderAll>
        <h2>About</h2>
        <h3>Dog Training & Breeding Professionals</h3>
      </HeaderAll>

      {/* About How we Work  */}

      <div className="py-5">
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

      {/* About Light Box Img Video */}
      <div className=" container py-8">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-8">
            <Link
              to="https://youtu.be/YXBh3riRMmI?si=kPDwGeGIz200C4nN"
              target="_blank"
            >
              <img src="images/video-lightbox.jpg" alt="" className="w-100" />
            </Link>
          </div>
        </div>
      </div>

      {/* About Slider  */}
      <div className="py-8" style={{ backgroundColor: "#f1f1f1" }}>
        <div className="text-center">
          <Heading>
            <h3 className="ps-4">Meet Our Pets</h3>
            <h2> Puppies For Adoption</h2>
          </Heading>
        </div>

        <div>
          <SlickSlider />
        </div>
      </div>

      {/* About BackGround  */}

      <div className="About-bgSec">
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
    </div>
  );
};

export default About;
