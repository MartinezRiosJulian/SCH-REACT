import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";
import "../Cards/card.css";

const ItemListContainer = (obj) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams()

  useEffect(() => {
    if (categoriaId) {
      gFetch
        .then((resp) => setProducts(resp.filter (prod => prod.categoria === categoriaId)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  console.log(categoriaId);
  return loading ? (
    <h2 className="loading"> Cargando ... </h2>
  ) : (
    <div className="card-site">
      {products.map((obj) => (
        <div className="tarjeta" key={obj.id}>
          <Link className="link" to={`/detail/${obj.id}`}>
            <div className="titulo"> {obj.nombre}</div>
            <center>
              <img className="cuerpo" src={obj.foto} />
            </center>
            <div className="pie">{obj.precio} </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
