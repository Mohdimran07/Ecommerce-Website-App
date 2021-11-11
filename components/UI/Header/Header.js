import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({cartItems}) => {
  return (
    <header className="header">
      <div className="header-links">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/items">Store</Link>
          </li>
        </ul>
        <ul >
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul className="cart-ul">
          <li>
            <Link to="/cart" className="cart">
              <i class="fas fa-shopping-cart" />
              cart
              <span className="cart-length">
                {cartItems.length === 0 ? "" : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
