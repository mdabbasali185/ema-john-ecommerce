import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
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
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
