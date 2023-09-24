import { ProcessData } from "../Data/Data";

const Process = () => {
  return (
    <div className="row justify-content-center" data-aos="fade-up">
      {ProcessData.map((data) => {
        return (
          <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={data.num}>
            <div className=" position-relative">
              <span className="Process-Span">{data.num}</span>
              <div className="img-Process">
                <img src={data.img} alt={data.title} className="img-fluid" />
              </div>
              <div className="px-lg-5">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Process;
