import HeaderAll from "../Components/HeaderAll";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <>
      {/* Contact Header  */}
      <HeaderAll>
        <h2>Contact</h2>
        <h3>Need Assistance or Have a Question?</h3>
      </HeaderAll>

      {/* Contact Form  */}

      <div className=" container py-8 px-5 px-sm-0">
        <div className=" row">
          <div
            className="col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-right"
          >
            <div>
              <div style={{ borderBottom: "2px solid #F1f1f1" }}>
                <h2 className=" fs-4">Send us a Message</h2>
              </div>
              <p className=" my-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable.
              </p>

              <div className=" d-flex gap-4 my-3">
                <BiSolidPhoneCall className="contact-icon" />
                <div>
                  <span className=" fs-6">Call Anytime</span>
                  <h3 className=" fs-6">(800) 123-45789</h3>
                </div>
              </div>

              <div className=" d-flex gap-4 my-3">
                <HiOutlineMail className=" contact-icon" />
                <div>
                  <span className=" fs-6">Write Email</span>
                  <h3 className=" fs-6">help@yourcompany.com</h3>
                </div>
              </div>

              <div className=" d-flex gap-4 my-3">
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
            className="col-lg-6 col-md-12 col-sm-12 col-12 Contact-Form"
            data-aos="fade-left"
          >
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Contact Map  */}
      <div data-aos="zoom-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.9660963674355!2d72.96024787526333!3d21.27280958043831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0472cba24bf85%3A0x3087dd656da404cc!2sAari%20pet%20shop!5e0!3m2!1sen!2sin!4v1693479163658!5m2!1sen!2sin"
          height="450"
          style={{ border: "0", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Contact;
