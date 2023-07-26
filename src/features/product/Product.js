import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "./productSlice";
import "./Product.css";
import { useEffect } from "react";
import { addAsync } from "../cart/cartSlice";

export function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div className="row">
      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.thumbnail}
              alt="Avatar"
              style={{ width: "100%", objectFit: "cover" }}
            />
            <div className="container">
              <h4>
                <b>{product.title}</b>
              </h4>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <button
                className="button"
                onClick={() =>
                  dispatch(
                    addAsync({
                      userId: 1,
                      products: [
                        {
                          id: product.id,
                          quantity: 1,
                        },
                      ],
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
