import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { gFetch } from "../../utils/gFetch";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = doc(dbFirestore, "products", productId);
    getDoc(queryCollection)
      .then((doc) => setProduct({ id: doc.id, ...doc.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <center className="loading">
      <div className="spinner"></div>
    </center>
  ) : (
    <div className="item-site">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
