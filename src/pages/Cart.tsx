import { useAppSelector } from "../app/hooks";
import { Product } from "../models/product";

const Cart = () => {
  const { items, totalCount } = useAppSelector((store) => store.cart);

  return (
    <>
      {items.map((cartItem: Product) => {
        return (
          <div key={cartItem.id}>
            <div className="col-6 mt-2 card">
              <img
                className="card-img-top mx-auto"
                src={cartItem.image}
                alt="Card cap"
                style={{ height: 100, width: 100 }}
              />
              <div className="card-body">
                <h5 className="card-title">{cartItem.title.slice(0, 10)}</h5>
                <p className="card-text">{cartItem.price}</p>
                <p>Quantity - 0</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
