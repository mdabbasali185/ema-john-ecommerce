import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";

const Orders = () => {
  const [products, setProducts] = useProduct();
  const [cart,setCart]=useCart(products)
  return (
    <div>
      <h2>THis is orders:{products.length}</h2>
      <h3>Cart has : {cart.length}</h3>
    </div>
  );
};

export default Orders;
