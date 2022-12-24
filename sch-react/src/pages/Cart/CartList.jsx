import { useCartContext } from "../../context/CartContext";
const CartList = () => {
    const { cartList, removeItem } = useCartContext()
    return (
        <>
            <div className="cart-product-site" >
                {cartList.map((product) =>
                    <div key={product.id}>
                        <center className="cuerpo-cart">
                            <img className="cuerpo-detail-cart" src={product.url} />
                        </center>
                        <div className="pie-detail-cart" >
                            <p>{product.name}</p>
                            <p>Cantidad : {product.quantity}</p>
                            <p>Precio : {product.price} </p>
                            <button className="btn-remove" onClick={() => removeItem(product.id)}> X </button>
                        </div>
                    </div>)}
            </div>
        </>
    )
}

export default CartList