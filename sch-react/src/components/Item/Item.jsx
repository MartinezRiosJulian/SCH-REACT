import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <>
        <div className="tarjeta">
                <Link className="link" to={`/detail/${product.id}`}>
                    <div className="titulo">
                        {product.name}
                    </div>
                    <center>
                        <img className="cuerpo" src={product.url} />
                    </center>
                    <div className="pie">
                        <p>Ver detalle</p>
                    </div>
                </Link>
            </div>
    </>
  )
}

export default Item