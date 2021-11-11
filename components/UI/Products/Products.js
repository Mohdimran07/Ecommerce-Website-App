import React from "react";
import "./Products.css";

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products">
      {productItems.map((items) => (
        <div className="card">
          <div>
            <img className="product-image" src={items.image} alt="pic" />
          </div>
          <div>
            <h3 className="product-name">{items.title}</h3>
          </div>
          <div className="product-price">${items.price}</div>
          <div>
            <button
              className="product-button"
              onClick={() => handleAddProduct(items)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
