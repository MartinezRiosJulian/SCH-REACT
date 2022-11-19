import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";
import "../Cards/card.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (obj) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams()

  useEffect(() => {
    if (categoriaId) {
      gFetch()
        .then((resp) => setProducts(resp.filter(prod => prod.categoria === categoriaId)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
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
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
