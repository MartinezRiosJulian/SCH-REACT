import Count from "../Count/Count"

const ItemDetail = ({ product }) => {

  const onAdd = (cantidad) => {
    console.log(cantidad)
  }

  return (
    <div className="detail-site">
      <div>
        <center>
          <img className="cuerpo-detail" src={product.foto} />
        </center>
      </div>
      <div className="pie-detail">
        <p>Categoria :{product.categoria}</p>
        <p>Precio :{product.precio}</p>
        <p>Stock :{product.stock}</p>
      </div>
      <div className="count">
        <Count stock={20} initial={1} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail