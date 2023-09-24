import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const Paggination = ({ numbers, currentPage, nPage, setCurrentPage }) => {
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id);
  }

  return (
    <nav aria-label="Page navigation example" data-aos="fade-up">
      <ul className="pagination justify-content-center">
        {currentPage === 1 ? (
          ""
        ) : (
          <li className="page-item">
            <a href="#" className="page-link text-dark mx-1" onClick={prePage}>
              <HiChevronDoubleLeft /> Prev
            </a>
          </li>
        )}
        {numbers.map((num, i) => {
          return (
            <li className={`page-item `} key={i}>
              <a
                href="#"
                className={`page-link text-dark mx-1 px-3 ${
                  currentPage === num ? "PageActive" : ""
                }`}
                onClick={() => changeCurrentPage(num)}
              >
                {num}
              </a>
            </li>
          );
        })}
        {currentPage === nPage ? (
          ""
        ) : (
          <li className="page-item">
            <a className="page-link text-dark mx-1" href="#" onClick={nextPage}>
              Next <HiChevronDoubleRight />
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paggination;
