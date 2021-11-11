import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import { Switch, Route } from "react-router-dom";
import About from "../About/About";

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/items" exact>
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        </Route>
        <Route path="/about" exact>
           <About />
        </Route>
      </Switch>
    </div>
  );
};
// productItems={productItems}

export default Routes;
