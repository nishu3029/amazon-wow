import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "../Checkout/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Checkout/Reducer";
import axios from "./axios";
import { db } from "../Login/connect";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("basket", basket);
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setsucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setclientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setclientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("okkkkk", user); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  console.log("THE SECRET IS >>>", clientSecret);

  const handleSubmit = async (event) => {
    // do all stripe stuff here
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      // .then(async({paymentIntent})=>{
        //paymentIntent = payment confirmation
//db firebase operation to persist order
// console.log('basket is', basket);
//             const userRef = doc(db, 'users', user?.uid);
//             const ordersRef = collection(userRef, 'orders');
//             const orderDoc = doc(ordersRef, paymentIntent.id);
//             await setDoc(orderDoc, {
//                 basket: Array.from(basket),
//                 amount: paymentIntent.created,
//             });


      .then(({ paymentIntent }) => {
        // console.log("payyyyy", paymentIntent); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // paymentIntent=payment confirmation

        db.collection("users")
          .doc(user._delegate.uid)
          .collection("orders")
          .doc(paymentIntent?.id)
          .set({
            basket: basket,
            // amount: paymentIntent.amount,
            // created: paymentIntent.created,
          });

        setsucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    // Listen for changes in card element
    // and dispaly any error occurs as customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>5567 Sdar Market</p>
            <p>Geeta Angles, JK</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment details</h3>
          </div>
          <div className="payment_details">
            {/* stripe use */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
