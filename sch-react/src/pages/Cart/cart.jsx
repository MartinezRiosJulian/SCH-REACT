import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart-site">
      <Link to={"/Cart"}>
        <div className="carrito-img-container">
          <img
            src="public/assets/cart2.webp"
            className="carrito"
            width="65"
            height="65"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Cart;
