
import "./Cart.css";

const Cart = () => {
  const cartElements = (
    <ul className="cart-items">
      {[
        {
          title: "Colors",

          price: 100,

          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

          quantity: 2,
        },

        {
          title: "Black and white Colors",

          price: 50,

          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

          quantity: 3,
        },

        {
          title: "Yellow and Black Colors",

          price: 70,

          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

          quantity: 1,
        },
      ].map((item) => (
        <li>
          {item.title},{item.price}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartElements}
      <div className="total">
        <span>Total Amount</span>
      </div>
     
    </div>
  );
};

export default Cart;
