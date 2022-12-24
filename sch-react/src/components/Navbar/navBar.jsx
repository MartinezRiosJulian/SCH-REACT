import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartLogo from "../../pages/Cart/CartLogo";

const Navbar = () => {
  const { qTotal } = useCartContext()
  return (
    <>
      <nav className="menu-container">
        <ul className="menu-list">
          <li className="menu-list-item">
            <Link to={"/category/Llantas"} className="hoverMenu">Llantas</Link>
          </li>
        </ul>
        <ul className="menu-list">
          <li className="menu-list-item">
            <Link to={"/category/Opticas"} className="hoverMenu">Opticas</Link>
          </li>
        </ul>
        <ul className="menu-list">
          <li className="menu-list-item">
            <Link to={"/category/Pastillas"} className="hoverMenu">Pastillas.F</Link>
          </li>
        </ul>
        <ul className="menu-list">
          <li className="menu-list-item">
            <Link to={"/category/Amortiguadores"} className="hoverMenu"> Amortiguadores</Link>
          </li>
        </ul>
      </nav>

      <div className="cart-site">
        <Link className="cart-number" to={"/Cart"}>
          {qTotal() !== 0 && qTotal() }
          <CartLogo />
        </Link>
      </div>
    </>

  );
};

export default Navbar;
