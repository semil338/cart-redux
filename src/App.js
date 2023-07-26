import React from "react";
import { Product } from "./features/product/Product";
import "./App.css";
import { Cart } from "./features/cart/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <Product />
    </div>
  );
}

export default App;
