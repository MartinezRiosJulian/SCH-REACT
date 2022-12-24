import { useCartContext } from "../../context/CartContext";
import CartForm from "./CartForm";
import CartList from "./CartList";

const Cart = () => {

  const { cartList, cleanCart, priceF } = useCartContext()

  return (
    <>
      {cartList.length !== 0 ? <>
        <CartList />
        <CartForm />
        <div className="btn-cart">
          <button className="btn-remove" onClick={cleanCart}>Limpiar carrito</button>
        </div>
        <div className="total">Total <br />
          {priceF() !== 0 && priceF()}
        </div>
      </>
        :
        <></>
      }
    </>
  );
};

export default Cart;
