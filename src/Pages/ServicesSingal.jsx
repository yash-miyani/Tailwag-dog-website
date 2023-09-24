import { BiSolidPhoneCall } from "react-icons/bi";
import HeaderAll from "../Components/HeaderAll";
import { FaBone } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesSingal = () => {
  return (
    <>
      <div>
        {/* Services Singal Header  */}
        <HeaderAll>
          <h2>Pet Training</h2>
          <h3>Dog Training & Breeding Professionals</h3>
        </HeaderAll>

        {/* Services Singal Main  */}
        <div className="container py-8 px-3 px-md-0">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 px-5">
              <div className="Serrvices-list" data-aos="fade-up">
                <Link>Pet Veterinary</Link>
                <Link>Pet Training</Link>
                <Link>Food & Nutrition</Link>
                <Link>Owner Training</Link>
                <Link>Emergency Services</Link>
                <Link>Pet Records</Link>
              </div>

              <div
                className=" text-center my-5 p-5 text-white service-listBg"
                data-aos="fade-up"
              >
                <BiSolidPhoneCall className="contact-icon" />
                <h3 className=" fs-6 mt-3">Have any questions?</h3>
                <h3 className=" fs-6">Give us a call</h3>
                <h6 className=" mt-4">(123) 456-7890</h6>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div>
                <img
                  src="images/Services-singal-1.jpg"
                  alt="image"
                  className="w-100 px-5 px-md-0"
                />

                <div className=" py-5">
                  <h3 className=" px-5 px-md-0">Pet Training</h3>

                  <p style={{ textAlign: "justify" }} className=" px-5 px-md-0">
                    There are many variations passages of lorem ipsum available
                    but the majority have suffered alteration. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. Start up
                    money or a decent amount of savings will get you started
                    cleaning business Suspen disse convallis nulla vel bibendum
                    porta. Lorem Ipsum has been the industry’s standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled.
                  </p>

                  <p
                    style={{ textAlign: "justify" }}
                    className="py-4 px-5 px-md-0"
                  >
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. Lorem
                    Ipsum has been the industry’s standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>

                  <div className=" px-5 px-md-0">
                    <h4 className=" py-2">Where can I go to adopt a pet?</h4>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus
                    </p>

                    <p>
                      <FaBone className=" me-3" style={{ color: "#fa524f" }} />
                      Donec scelerisque egestas purus eget fringilla
                    </p>

                    <p>
                      <FaBone className=" me-3" style={{ color: "#fa524f" }} />
                      Mauris imperdiet non ligula et lobortis
                    </p>

                    <p>
                      <FaBone className=" me-3" style={{ color: "#fa524f" }} />
                      Curabitur pretium metus non sem consequat
                    </p>

                    <p>
                      <FaBone className=" me-3" style={{ color: "#fa524f" }} />
                      Nulla in massa sit amet purus malesuada facilis
                    </p>
                  </div>

                  <div
                    className="accordion my-5 px-5 px-md-0"
                    id="accordionExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What steps are involved?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo. Cras rhoncus rutrum odio, et
                            egestas massa tincidunt et.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed  fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How long does the adoption take?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo. Cras rhoncus rutrum odio, et
                            egestas massa tincidunt et.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Pet adoption discount for veterans
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo. Cras rhoncus rutrum odio, et
                            egestas massa tincidunt et.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Pet adoption discount for seniors
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo. Cras rhoncus rutrum odio, et
                            egestas massa tincidunt et.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSingal;
