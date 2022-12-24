import { useState } from "react";

const Count = ({ initial = 1, stock = 20, onAdd }) => {

  const [quantity, setQuantity] = useState(initial)

  const addStock = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const subStock = () => {
    if (quantity > 1) {
    setQuantity(quantity - 1)
    }
  }

  const add = () => {
    onAdd(quantity)
  }

  return (
    <div>
      <button className="btn" onClick={subStock} >-</button>
      <label className="quantity">{quantity}</label>
      <button className="btn" onClick={addStock}>+</button><br />
      <button className="btn" onClick={add}>Agregar</button>
    </div>
  );
};

export default Count;
