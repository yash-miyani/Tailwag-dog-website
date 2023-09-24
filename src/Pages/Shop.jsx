import HeaderAll from "../Components/HeaderAll";
import { Shopdata } from "../Data/Data";

function Shop() {
  return (
    <div>
      {/* Shop Header  */}
      <HeaderAll>
        <h2>Shop</h2>
        <h3>Products to Take Care of Your Pets</h3>
      </HeaderAll>

      {/* Shop Main  */}
      <div className="container py-8 px-3 px-md-0">
        <div className="row">
          {Shopdata.map((data, index) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-12 py-5 px-4"
                key={index}
              >
                <div>
                  <img
                    src={data.img}
                    alt={data.title}
                    className=" w-100"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </div>
                <div className=" Shop-div p-5">
                  <h2>{data.title}</h2>
                  <p>{data.price}</p>
                  <button>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
