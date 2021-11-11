import React from "react";
import './Cart.css';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>
      {cartItems.length === 0 && (
        <div className="empty-cart">No items are Added.</div>
      )}

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="item-list">
            <img className="item-image" src={item.image} alt={item.title} />
            <div className="item-name">{item.title}</div>
            <div className="item-function">
              <button className="item-add" 
              onClick={() => handleAddProduct(item)}>
                +
              </button>
              <button className="item-remove" onClick={() => handleRemoveProduct(item)}>-</button>
            </div>
            <div className="item-price">{item.quantity} * ${item.price}</div>
          </div>
        ))}
      </div>
      <div className="total-price-name ">Total Price
      <div className="total-price">${totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
