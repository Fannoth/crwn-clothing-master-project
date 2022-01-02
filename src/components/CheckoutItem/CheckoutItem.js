import React from "react";
import "./CheckoutItem.scss";


export const CheckoutItem = ({cartItem : {imageUrl, name, price, quantity}}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
          <img src={`${imageUrl}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" >&#10005;</div>
    </div>
  );
};

