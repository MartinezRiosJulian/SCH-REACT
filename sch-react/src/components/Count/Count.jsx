import { useState } from "react";

const Count = ({ initial = 1, stock = 20, onAdd }) => {

  const [cantidad, setCantidad] = useState(initial)

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  const restar = () => {
    if (cantidad > 1) {
    setCantidad(cantidad - 1)
    }
  }

  const add = () => {
    onAdd(cantidad)
  }

  return (
    <div>
      <button className="btn" onClick={restar} >-</button>
      <label className="cantidad">{cantidad}</label>
      <button className="btn" onClick={sumar}>+</button><br />
      <button className="btn" onClick={add}>Agregar</button>
    </div>
  );
};

export default Count;
