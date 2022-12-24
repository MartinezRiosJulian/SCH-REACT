import { useCartContext } from "../../context/CartContext"
import Count from "../Count/Count"

const ItemDetail = ({ product }) => {

  const { cartList, addItem } = useCartContext()

  const onAdd = (quantity) => {
    addItem({ ...product, quantity })
  }

  return (
    <div className="detail-site">
      <div>
        <center>
          <img className="cuerpo-detail" src={product.url} />
        </center>
      </div>
      <div className="pie-detail">
        <p>{product.name}</p>
        <p>Categoria : {product.category}</p>
        <p>Precio : ${product.price}</p>
        <p>Stock : {product.stock}</p>
      </div>
      <div className="count">
        <Count stock={20} initial={1} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail