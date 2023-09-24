import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-1">
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="fs-6">The page you’re looking for doesn’t exist.</p>
        <Link
          to="/"
          className="btn btn-primary border-0"
          style={{ backgroundColor: "#fa524f" }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
