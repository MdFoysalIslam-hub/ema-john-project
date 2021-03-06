import React from 'react';


import './product.css';
const Product =(props) => {
 // console.log(props);
const {img, name, seller, price, stock} = (props.product);
    return (
        <div className="product">
            <div>
               <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className="main-button"
                onClick={() => props.handleAddProduct(props.product)}>Add to card<i class="fas fa-shopping-cart"></i></button>
            </div>
            
        </div>
    );
};

export default Product;