import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import "../Cards/card.css";

const ItemListContainer = (obj) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, "products")
    let queryFilter = categoryId ?
      query(queryCollection, where("category", "==", categoryId))
      :
      queryCollection

    getDocs(queryFilter)
      .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))

  }, [categoryId])

  return loading ? (
    <center className="loading">
      <div className="spinner"></div>
    </center>
  ) : (
    <div className="card-site">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
