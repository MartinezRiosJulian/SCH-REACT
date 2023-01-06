import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CartForm = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    emailCheck: "",
    phone: "",
  });

  const { cartList, cleanCart, priceF } = useCartContext();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let orden = {};
    orden.buyer = dataForm;
    orden.total = priceF();
    orden.items = cartList.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
    }));

    if (completeArea) {
      const db = getFirestore();
      const queryCollection = collection(db, "orders");
      addDoc(queryCollection, orden)
        .then((resp) => {
          alert(`Este es su número de orden: ${resp.id}`);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setDataForm({
            name: "",
            email: "",
            emailCheck: "",
            phone: "",
          });
          cleanCart();
        });
    } else {
      error();
    }
  };

  const completeArea =
    dataForm.name !== "" && dataForm.email === dataForm.emailCheck;

  const error = () => {
    alert("Hubo un error, verifique los datos");
  };

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleOnChange}
        value={dataForm.name}
        placeholder="ingrese nombre "
      />
      <input
        type="text"
        name="email"
        onChange={handleOnChange}
        value={dataForm.email}
        placeholder="ingrese email"
      />
      <input
        type="text"
        name="emailCheck"
        onChange={handleOnChange}
        value={dataForm.emailCheck}
        placeholder="ingrese email"
      />
      <input
        type="number"
        name="phone"
        onChange={handleOnChange}
        value={dataForm.phone}
        placeholder="ingrese telefono"
      />
      <button className="btn" onClick={handleSubmit}>
        {" "}
        Generar orden
      </button>
    </form>
  );
};

export default CartForm;
