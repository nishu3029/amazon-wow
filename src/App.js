import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Home/Checkout/Checkout";
import Login from "./Components/Home/Login/Login";
import Payment from "./Components/Home/Payment/Payment";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from "./Components/Home/Payment/Orders";

const promise= loadStripe("pk_test_51NYuxVSAyMzyZDcJVrgTqUU2VpIvoh8Hu55EqmBC78ZBvK7mKozrU0f2bcA4H6iKTjk5sMdzbn4rw9qoMytwjMV300kiQ3SiFT")

function App() {
  return (
    <Router>
      <div className="App">
       
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/orders">
          <Header />
           <Orders/>
          </Route>
          <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
