// const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NYuxVSAyMzyZDcJ4RN8bP01zSokmOGgO7L2tkFFQ8QWcqXeWf0l4etGaxvzD4L7qqg02GExEeKj1HLaJJqUDB0P00RtnuWQv7"
);

// API

// - App config
const app = express();

// Middlewares
app.use(cors({ orgin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://127.0.0.1:5001/wow-a1285/us-central1/api
