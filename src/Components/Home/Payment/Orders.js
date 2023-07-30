import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "../Checkout/StateProvider";
import { db } from "../Login/connect";
import Order from "./Order";


function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("Orders component rendered with user:", user);
  

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(
          (snapshot) => {
            setOrders(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          },
          (error) => {
            console.log("Error fetching orders:", error);
          }
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log("Orders:", orders);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders?.map(order=>(
  
        <Order order={order}/>
        ))}
      </div>
    </div>
  );
}

export default Orders;
