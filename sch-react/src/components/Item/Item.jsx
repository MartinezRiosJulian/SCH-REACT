import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <>
        <div className="tarjeta">
                <Link className="link" to={`/detail/${product.id}`}>
                    <div className="titulo">
                        {product.nombre}
                    </div>
                    <center>
                        <img className="cuerpo" src={product.foto} />
                    </center>
                    <div className="pie">
                        {product.precio}
                        {/* {product.categoria} */}
                    </div>
                </Link>
            </div>
    </>
  )
}

export default Item