import { BiSolidPhoneCall } from "react-icons/bi";
import HeaderAll from "../Components/HeaderAll";
import Heading from "../Components/Heading";
import Question from "../Components/Question";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Faq = () => {
  return (
    <div>
      {/* Faq Header  */}
      <HeaderAll>
        <h2>FAQs</h2>
        <h3>Dog Training & Breeding Professionals</h3>
      </HeaderAll>

      {/* Faq Question  */}
      <Question
        img="images/dog-P228UWM.jpg"
        title="Question #1"
        text="Where can I go to adopt a pet?"
      />

      {/* Faq Question  */}
      <Question
        img="images/services-img.jpg"
        title="Question #2"
        order="order-1"
        text="Can I take my new pet home the same day?"
      />

      {/* More Question  */}

      <div className=" container py-8 px-5 px-sm-0">
        <div className=" row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
              <Heading>
                <h3 className="ps-5"> More Questions</h3>
                <h2>Do you have any other questions? </h2>
              </Heading>
              <p className=" my-4" data-aos="fade-up">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable.
              </p>

              <div className=" d-flex gap-4 my-3" data-aos="fade-up">
                <BiSolidPhoneCall className="contact-icon" />
                <div>
                  <span className=" fs-6">Call Anytime</span>
                  <h3 className=" fs-6">(800) 123-45789</h3>
                </div>
              </div>

              <div className=" d-flex gap-4 my-3" data-aos="fade-up">
                <HiOutlineMail className=" contact-icon" />
                <div>
                  <span className=" fs-6">Write Email</span>
                  <h3 className=" fs-6">help@yourcompany.com</h3>
                </div>
              </div>

              <div className=" d-flex gap-4 my-3" data-aos="fade-up">
                <FaMapMarkerAlt className=" contact-icon" />
                <div>
                  <span className=" fs-6">Visit Office</span>
                  <h3 className=" fs-6">
                    214 Golden Street Round Road New York, USA
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 align-self-center mt-5 mt-md-0"
            data-aos="fade-up"
          >
            <div className="accordion" id="accordionExample">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo. Cras rhoncus rutrum odio, et egestas massa
                      tincidunt et.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo. Cras rhoncus rutrum odio, et egestas massa
                      tincidunt et.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo. Cras rhoncus rutrum odio, et egestas massa
                      tincidunt et.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo. Cras rhoncus rutrum odio, et egestas massa
                      tincidunt et.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
