import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav.tsx";
import Products from "./pages/Products.tsx";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
