import { useAppDispatch, useAppSelector } from "../app/hooks";
import Product from "../components/Product";
import Error from "../components/Error";
import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
import { Product as ProductInterface } from "../models/product";

const Products = () => {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector((store) => store.products);
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
