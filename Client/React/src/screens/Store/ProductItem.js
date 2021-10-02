import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";

const ProductItem = ({ product }, props) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item._id === product._id);
  };

  return (
    <div className="card card-body" style={{ position: "relative" }}>
      <div style={{ marginBottom: "35px" }}>
        <img
          style={{
            display: "block",
            margin: "0 auto 10px",
            maxHeight: "200px",
          }}
          className="img-fluid"
          src={product.image}
          alt=""
        />
        <p style={{ fontSize: "25px" }}>{product.title}</p>
        <p>
          isbn:{" "}
          <span style={{ fontSize: "15px", fontWeight: "999" }}>
            {product.isbn}
          </span>
        </p>
        <p>
          Author:{" "}
          <span style={{ fontSize: "15px", fontWeight: "999" }}>
            {product.author}
          </span>
        </p>
        <p>
          Category:{" "}
          <span style={{ fontSize: "15px", fontWeight: "999" }}>
            {product.category}
          </span>
        </p>
      </div>

      <div style={{ position: "absolute", bottom: "10px" }}>
        <h3 className="text-left">{formatNumber(product.price)}</h3>
      </div>
      <div style={{ position: "absolute", bottom: "15px", right: "10px" }}>
        <div className="text-right">
          {/* <Link to="/store" className="btn btn-link btn-sm mr-2">
          Details
        </Link> */}

          {isInCart(product) && (
            <button
              onClick={() => increase(product)}
              className="btn btn-outline-primary btn-sm"
            >
              Add more
            </button>
          )}

          {!isInCart(product) && (
            <button
              onClick={() => addProduct(product)}
              className="btn btn-primary btn-sm"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
