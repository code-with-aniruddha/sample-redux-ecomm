import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Product";
import Error from "../components/Error";
import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
import { Product as ProductInterface } from "../models/product";
import { store as RootReducer } from "../app/store";

const Products = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(
    (store: typeof RootReducer) => store.products
  );
  console.log(error);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderProducts = () => {
    return products.map((product: ProductInterface) => (
      <Product key={product.id} product={product}></Product>
    ));
  };

  return (
    <>
      {status === "loading" && <h3>loading...</h3>}
      {status === "failed" ? (
        <Error />
      ) : (
        <div className="row">{renderProducts()}</div>
      )}
    </>
  );
};

export default Products;
