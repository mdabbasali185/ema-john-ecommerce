import React from 'react';
import './Product.css'

const Product = (props) => {
        const {name,img,seller,price,ratings}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <button className='add-to-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;