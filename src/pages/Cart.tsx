import { useSelector } from "react-redux";

const Cart = () => {
  const { items, totalCount } = useSelector((store) => store.cart);

  return (
    <>
      {items.map((cartItem) => {
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
                <p>Quantity - {cartItem.count}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
