import { Link } from "react-router-dom";
import "../css/nav.css";
import { useAppSelector } from "../app/hooks";

const Nav = () => {
  const { totalCount } = useAppSelector((store) => store.cart);
  return (
    <div className="nav-wrap d-flex justify-content-between">
      <h2>
        <Link to="/">Products</Link>
      </h2>
      <span>
        <Link to="/cart">cart({totalCount})</Link>
      </span>
    </div>
  );
};

export default Nav;
