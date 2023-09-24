import { HiArrowNarrowRight } from "react-icons/hi";

function Button({ children }) {
  return (
    <button className="btn px-4 py-2 text-white rounded-pill btn-all">
      {children}
      <HiArrowNarrowRight className="ms-3" />
    </button>
  );
}

export default Button;
