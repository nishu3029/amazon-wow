import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./connect";
import { useStateValue } from "../Checkout/StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run once only when app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        // user just logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        // Successfully signed in
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.M-9GGLYdPwT-D6LdrmgmWAHaEK&pid=Api&P=0&h=180"
          alt=""
          className="login_logo"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
