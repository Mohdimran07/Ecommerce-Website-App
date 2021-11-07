import React from 'react';
import Products from './Products';
import './Items.css'
// import Button from './Button';

const Items = (props) => {
    
   return (
       <div className="items">
        <div className="card">
               <h1>Music</h1>
           </div>
       
            
      <Products
        title={props.items[0].title}
        price={props.items[0].price}
        image={props.items[0].imagesrc}
      ></Products>
      <Products
        title={props.items[1].title}
        price={props.items[1].price}
        image={props.items[1].imagesrc}>
      </Products>
      <Products
        title={props.items[2].title}
        price={props.items[2].price}
        image={props.items[2].imagesrc}
        ></Products>
      <Products
        title={props.items[3].title}
        price={props.items[3].price}
        image={props.items[3].imagesrc}
        ></Products>
       
    </div>

      
   )
};

export default Items;