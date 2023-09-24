import { Link } from "react-router-dom";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1d1d1d",
          borderBottom: "1px solid #2a2a2a",
        }}
      >
        <div className="text-center py-3">
          <Link to="/" data-aos="fade-up">
            <img src="images/logo-light.png" alt="logo" width="120px" />
          </Link>
        </div>
      </div>

      <div style={{ backgroundColor: "#1D1D1D" }}>
        <div className="container p-5 text-white">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4 mt-lg-0"
              data-aos="fade-up"
            >
              <div className=" d-flex gap-3">
                <img src="images/footer-icon-1.png" alt="map" width="60px" />
                <div className="align-self-center">
                  <h5 className=" fs-6 my-0">516 Columbia Blvd</h5>
                  <h5 className=" fs-6 my-0">Sonoma, CA 21202</h5>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4 mt-lg-0"
              data-aos="fade-up"
            >
              <div className=" d-flex gap-3">
                <img src="images/footer-icon-2.png" alt="map" width="60px" />
                <div className="align-self-center">
                  <h5 className=" fs-6 my-0">Office: 772-619-6309</h5>
                  <h5 className=" fs-6 my-0">Inquiries: 772-619-6432</h5>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4 mt-lg-0"
              data-aos="fade-up"
            >
              <div className=" d-flex gap-3">
                <img src="images/footer-icon-3.png" alt="map" width="60px" />
                <div className=" align-self-center">
                  <h5 className=" fs-6 my-0">Mon - Fri: 9am - 8pm</h5>
                  <h5 className=" fs-6 my-0">Sat - Sun: Closed</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#232323" }} className="p-1 footer-list">
        <ul className="list-unstyled">
          <li className=" d-flex  flex-column flex-sm-row  gap-5 pt-4 justify-content-center align-items-center">
            <Link className=" text-white fw-light" to="/">
              Home
            </Link>
            <Link className=" text-white fw-light" to="/about">
              About
            </Link>
            <Link className=" text-white fw-light" to="/puppies">
              Puppies
            </Link>
            <Link className=" text-white fw-light" to="/news">
              News
            </Link>
            <Link className=" text-white fw-light" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div
        className=" py-3 px-5"
        style={{
          backgroundColor: "#1d1d1d",
          borderBottom: "1px solid #2a2a2a",
        }}
      >
        <div className="d-md-flex px-sm-5 sub-footer justify-content-between text-center mt-4 mt-md-2">
          <h5 className="fs-6" style={{ color: "#6e6e6e" }}>
            © Copyrights are Reserved by
            <span style={{ color: "#BDBDBD" }}> YourCompany.com</span>
          </h5>

          <div className="d-flex gap-3 fs-5 text-white justify-content-center mt-3 mt-md-0">
            <span>
              <BiLogoFacebookCircle />
            </span>
            <span>
              <AiOutlineTwitter />
            </span>
            <span>
              <IoMdMail />
            </span>
            <span>
              <AiOutlineInstagram />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
