import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { product, handleAddToCart } = props;
  const { name, img, seller, price, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">
          <span>Name: </span> {name}
        </p>
        <p>
          <span> Manufacturer: </span>
          {seller}
        </p>
        <p>
          <span> Price: $</span>
          {price}
        </p>
        <p>
          <span>Ratings: </span> {ratings} star
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="add-to-cart">
        Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
