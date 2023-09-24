import { NavLink } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import { BsQuestionLg } from "react-icons/bs";
import { FaDog, FaNewspaper, FaShoppingBag } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light px-5 px-lg-0 px-xl-5 py-2 navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="images/logo.png" alt="logo" width="60%" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/puppies">
                  Puppies
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/faqs"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/faqs">
                      <BsQuestionLg className="me-2" /> FAQs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/pet">
                      <FaDog className="me-2" /> Pet Listing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/singalPage">
                      <MdOutlineCleaningServices className="me-2" />
                      Services Singale
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/news">
                      <FaNewspaper className="me-2" />
                      Latest News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/shop">
                      <FaShoppingBag className="me-2" />
                      Shop
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="d-flex gap-3 align-items-center ">
              <BiPhoneCall
                className="fs-2 p-1 bg-white"
                style={{
                  color: "#FBAF03",
                  boxShadow: "0px 4px 6px rgba(41, 48, 55, 0.06)",
                }}
              />
              <div>
                <h5 className="my-0 fs-6">123-456-7890</h5>
                <p className=" my-0">Call us today</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
