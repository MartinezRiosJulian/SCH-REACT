import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CartForm = () => {
    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const { cartList, cleanCart, priceF } = useCartContext()
    const handleSubmit = (evt) => {
        evt.preventDefault()
        let orden = {}
        orden.buyer = dataForm
        orden.total = priceF()
        orden.items = cartList.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price
        }))

        const db = getFirestore()
        const queryCollection = collection(db, "orders")
        addDoc(queryCollection, orden)
            .then(resp => console.log(resp))
            .finally(() => {
                setDataForm({
                    name: "",
                    email: "",
                    phone: ""
                })
            })
        cleanCart()
    }

    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }

    return (
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleOnChange} value={dataForm.name} placeholder="ingrese nombre " />
                <input type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="ingrese email" />
                <input type="text" name="phone" onChange={handleOnChange} value={dataForm.phone} placeholder="ingrese telefono" />
                <button className="btn" onClick={handleSubmit}>Generar orden</button>
            </form>
    )
}

export default CartForm