import "./Products.css";

const Products = (props) => {
  return (
     <div className="container">
      <div className="content">
      <div className="prod-details">{props.title}
      
      </div>
        <div className="item-list">
          <img src={props.image} alt="album" className="card-img" />
        </div>

        
        <div>
          <div className="price-details">${props.price}
          <button className="btn" type='button'>Add To Cart</button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Products;
