import { Link } from "react-router-dom";

const Inter = () => {
  return (
    <>
      <div>
        <Link to="/cart">
          <button className="btn">Finalizar la compra</button>
        </Link>
        <Link to="/">
          <button className="btn">Seguir comprando</button>
        </Link>
      </div>
    </>
  );
};

export default Inter;
