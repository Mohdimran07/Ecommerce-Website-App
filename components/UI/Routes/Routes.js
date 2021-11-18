import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import { useContext } from "react";
import AuthContext from "../../../Store/auth-context";

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  prodItems,
  
}) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div>
      <Switch>
      
        <Route path="/items" exact>
        {isLoggedIn && (
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
          )}
          {!isLoggedIn && <Redirect to='/login' />}
        </Route>
       
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        </Route>
        {!isLoggedIn && (
        <Route path="/login" exact>
          <Login />
        </Route> )}
        
        <Route path="/about" exact>
           <About />
        </Route>
        <Route path="/contact">
          <Contact 
             
          />
        </Route>
        <Route path="/home" exact>
            <Home 
            prodItems={prodItems}
            />
        </Route>
        <Route path="*">
          <Redirect to='/login' />
        </Route>
      </Switch>
    </div>
  );
};
// productItems={productItems}

export default Routes;
