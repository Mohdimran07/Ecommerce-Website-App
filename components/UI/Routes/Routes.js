import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import { Switch, Route } from "react-router-dom";

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
      </Switch>
    </div>
  );
};
// productItems={productItems}

export default Routes;
