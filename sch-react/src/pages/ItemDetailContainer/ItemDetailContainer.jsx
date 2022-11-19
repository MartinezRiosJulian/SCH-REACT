import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { gFetch } from "../../utils/gFetch";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    gFetch(productId)
      .then(resp => setProduct(resp))
  }, [])

  console.log(product)

  return (
    <div className="item-site">
      <ItemDetail product={product}  />
    </div>
  );
};

export default ItemDetailContainer;
