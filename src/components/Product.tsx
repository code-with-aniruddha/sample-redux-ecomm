import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Product } from "../models/product";

const Product = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const onCartClick = (product: Product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="col-4 mt-2">
      <div className="card">
        <img
          className="card-img-top mx-auto"
          src={product.image}
          alt="Card cap"
          style={{ height: 100, width: 100 }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title.slice(0, 10)}</h5>
          <p className="card-text">{product.price}</p>
          <span
            onClick={() => onCartClick(product)}
            className="btn btn-primary"
          >
            Add to Cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
