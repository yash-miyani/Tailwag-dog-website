import { NewsData, RecentPostData } from "../Data/Data";
import Button from "../Components/Button";
import HeaderAll from "../Components/HeaderAll";
import { BsPersonCircle } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaComments } from "react-icons/fa";
import Paggination from "../Components/Paggination";
import { useState } from "react";

const LatestNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = NewsData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(NewsData.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  return (
    <>
      {/* News Header  */}
      <HeaderAll>
        <h2>Latest News</h2>
        <h3>Dog Training & Breeding Professionals</h3>
      </HeaderAll>

      {/* News Main  */}
      <div className="container py-8 px-3 px-md-0">
        <div className="row">
          <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12">
            {records.map((data) => {
              return (
                <div className=" mb-5" data-aos="fade-up" key={data.id}>
                  <div>
                    <img src={data.img} alt={data.title} className=" w-100" />
                  </div>
                  <div className="px-5 py-5 News-cart">
                    <h2>{data.title}</h2>
                    <p className=" py-3">{data.text}</p>
                    <Button>Continue Reading</Button>

                    <hr className=" mt-5" />

                    <div className=" d-flex gap-3">
                      <span>
                        <BsPersonCircle
                          className=" me-2"
                          style={{ color: "#FBAF03" }}
                        />
                        Jane Doe
                      </span>
                      <span>
                        <SlCalender
                          className=" me-2"
                          style={{ color: "#FBAF03" }}
                        />
                        April 14, 2022
                      </span>
                      <span>
                        <FaComments
                          className=" me-2"
                          style={{ color: "#FBAF03" }}
                        />
                        1 Comment
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <Paggination
              numbers={numbers}
              currentPage={currentPage}
              nPage={nPage
              
              }
              setCurrentPage={setCurrentPage}
            />
          </div>

          <div className=" col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12 px-5">
            <div
              className=" p-5 rounded-3"
              style={{ backgroundColor: "#f1f1f1" }}
            >
              <input
                type="text"
                placeholder="Search entire website..."
                className=" form-control"
                data-aos="fade-up"
              />
            </div>

            <div
              className=" p-5 rounded-3 my-5"
              style={{ backgroundColor: "#f1f1f1" }}
            >
              <h2 className=" fs-5" data-aos="fade-up">
                Recent Posts
              </h2>

              <div>
                {RecentPostData.map((data, index) => {
                  return (
                    <div key={index}>
                      <div className="d-flex" data-aos="fade-up">
                        <div>
                          <img
                            src={data.img}
                            alt={data.title}
                            width="55"
                            className=" me-2"
                          />
                        </div>
                        <div>
                          <h3
                            className="p-0 mb-1"
                            style={{ fontWeight: "600", fontSize: "15px" }}
                          >
                            {data.title}
                          </h3>
                          <p>{data.date}</p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className=" p-5 rounded-3 my-5"
              style={{ backgroundColor: "#f1f1f1" }}
            >
              <h2 className=" fs-5 mb-3" data-aos="fade-up">
                Recent Comments
              </h2>
              <h3
                style={{ fontSize: "15px" }}
                className=" d-flex"
                data-aos="fade-up"
              >
                <FaComments className="fs-4 me-2 text-black-50" />
                Jane Doe on Choosing the Healthiest Pet Food
              </h3>

              <hr />

              <h3
                style={{ fontSize: "15px" }}
                className=" d-flex my-3"
                data-aos="fade-up"
              >
                <FaComments className="fs-4 me-2 text-black-50" />
                Jane Doe on Choosing the Healthiest Pet Food
              </h3>

              <hr />

              <h3
                style={{ fontSize: "15px" }}
                className=" d-flex my-3"
                data-aos="fade-up"
              >
                <FaComments className="fs-4 me-2 text-black-50" />
                Jane Doe on Choosing the Healthiest Pet Food
              </h3>

              <hr />
            </div>

            <div
              className=" p-5 rounded-3 my-5"
              style={{ backgroundColor: "#f1f1f1" }}
            >
              <h2 className=" fs-5 mb-3">Tags</h2>

              <div
                className=" d-flex flex-wrap gap-2 Tags-Div"
                data-aos="fade-up"
              >
                <button>adoption</button>
                <button>dogs</button>
                <button>grooming</button>
                <button>Learning</button>
                <button>Pet Care</button>
                <button>Pet Food</button>
                <button>Teaching</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
