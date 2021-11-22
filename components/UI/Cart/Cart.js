import React, { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";

const Cart = ({  handleRemoveProduct }) => {
  const [cartItems, setCartItems] = useState([]);

  // const totalPrice = cartItems.reduce(
  //   (price, item) => price + item.quantity * item.price,
  //   0
  // );

  useEffect(() => {
    let String = localStorage.getItem("userId");

    console.log(String);
    let email = String.replace(/[&,+()$~%@.'":*?<>{}]/g, "");
    console.log(email);
   

    axios
      .get(
        `https://crudcrud.com/api/77b4626e29884cd2968273ffdd50ef49/Cart${email}`
      )
      .then((response) => {
        console.log(response);
        setCartItems(response.data)

      });
  }, []);

  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>
      { cartItems.length === 0 && (
        <div className="empty-cart">No items are Added.</div>
      )}

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="item-list">
            <img className="item-image" src={item.image} alt={item.title} />
            <div className="item-name">{item.title}</div>
            <div className="item-function">
              <button
                className="item-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                Remove
              </button>
            </div>
            <div className="item-price">
              {item.quantity} ${item.price}
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Cart;
