import React from "react";
import "./Product.css";
import { useStateValue } from "./Checkout/StateProvider";

function Product(props) {
  const { id, title, rating, image, price } = props;

  const [{basket},dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
              // <p>:star</p>
            ))}
        </div>
      </div>
      <img src={image} alt="Error" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
