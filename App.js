// import Products from "./components/Header/Products";
import "./App.css";
import Header from "./components/UI/Header/Header";
import axios from 'axios';


import data from "./components/Data/Itemlist";
import Footer from "./components/Footer/Footer";
import Routes from "./components/UI/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import homedata from "./components/Data/HomeItems";
import { AuthContextProvider } from "./Store/auth-context";

function App() {
  const { productItems } = data;
  const {prodItems} = homedata;
  const [cartItems, setCartItems] = useState([]);
  

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    let String = localStorage.getItem("userId");
    console.log(String);
    let email = String.replace(/[&,+()$~%@.'":*?<>{}]/g, '');
   axios.post(`https://crudcrud.com/api/77b4626e29884cd2968273ffdd50ef49/Cart${email}`, {
     title: product.title,
     price: product.price,
     image : product.image,
   } )


    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log(product);
    
   
  };
 
    

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  

  return (
    <div>
      <div>
        <AuthContextProvider>
        <Router>
          <Header cartItems={cartItems}/>
          <Routes
            productItems={productItems}
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            prodItems={prodItems}
            
          />
        </Router>
        </AuthContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
