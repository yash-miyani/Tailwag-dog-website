import { Link } from "react-router-dom";
import Button from "../Components/Button";
import HeaderAll from "../Components/HeaderAll";
import Heading from "../Components/Heading";
import { ServicesData } from "../Data/Data";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Services = () => {
  return (
    <>
      {/* Services Header  */}
      <HeaderAll>
        <h2>Services</h2>
        <h3>Dog Training & Breeding Professionals</h3>
      </HeaderAll>

      {/* Services Box  */}
      <div className=" container py-8 px-3">
        <div className="row">
          {ServicesData.map((data) => {
            return (
              <div
                className=" col-lg-4 col-md-6 col-sm-12 col-12 p-4 mb-4"
                data-aos="flip-right"
                key={data.id}
              >
                <Link to={`/singalPage`}>
                  <div className="service-div position-relative text-center">
                    <div className="position-absolute services-img">
                      <img src={data.img} alt={data.title} width={60} />
                    </div>

                    <div className="p-5">
                      <h2 className="fs-5 text-dark">{data.title}</h2>
                      <p>{data.text}</p>
                    </div>

                    <AiOutlinePlusCircle className="fs-1 text-danger position-absolute service-icon" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" py-8">
        <div className="text-center position-relative">
          <Heading>
            <h3 className="ps-5"> Let's get in touch</h3>
            <h2>Adopt a Puppy Today </h2>
          </Heading>

          <div className="container pt-5 text-center" data-aos="fade-up">
            <div className=" overflow-hidden">
              <img
                src="images/services-img.jpg"
                alt="services-img"
                width={500}
              />
            </div>
          </div>

          <div
            className=" position-absolute top-50"
            style={{ left: "55%" }}
            data-aos="fade-up"
          >
            <Button>View Puppies</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
