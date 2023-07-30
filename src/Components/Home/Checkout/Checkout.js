import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket,user}] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.w2Sv51mvykUrv9vUPUDLxAHaB2&pid=Api&P=0&h=180"
          alt=""
          className="checkout_ad"
        />
        {basket?.length === 0 ? (
          <div>
            
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, Click
              'Add to basket next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello! {user?.email}</h3>
            <h2 className="checkout_title">Your shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
