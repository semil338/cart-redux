import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { useEffect } from "react";
import { fetchAsync } from "./cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div className="row wrap">
      {items[0]?.products?.map((product) => (
        <div className="card" key={product.id}>
          <div className="container">
            <h4>
              <b>{product.title}</b>
            </h4>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
