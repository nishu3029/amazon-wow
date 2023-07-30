import React from "react";
// import { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";

// const backgroundImages = [
//   "https://tse4.mm.bing.net/th?id=OIP.A_XATmeSpVGroV0lf61JzwHaE7&pid=Api&P=0&h=180",
//   "https://tse4.mm.bing.net/th?id=OIP.6mCfO8g9cqqVuaU5vzBbAwHaEK&pid=Api&P=0&h=180",
//   "https://tse3.mm.bing.net/th?id=OIP.4Y-29rfteEznNMPqG7BurgHaEK&pid=Api&P=0&h=180",
//   "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
//   "https://tse4.mm.bing.net/th?id=OIP.p4fgEZ4PimJ8CarnBS0mYQHaDt&pid=Api&P=0&h=180",
// ];

function Home() {
  // const [currentBackground, setCurrentBackground] = useState(0);

  // useEffect(() => {
  //   // Function to change the background image every 5 seconds
  //   const interval = setInterval(() => {
  //     setCurrentBackground(
  //       (prevBackground) => (prevBackground + 1) % backgroundImages.length
  //     );
  //   }, 5000);

  //   return () => clearInterval(interval); // Clear interval on component unmount
  // }, []);

  return (
    <div className="Home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="Error"
        />
        {/* <div
          className="background_container"
          style={{
            backgroundImage: `url(${backgroundImages[currentBackground]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50rem", 
          }}
        ></div> */}
        <div className="home_row">
          <Product
            title="Fitbit FB507RGPK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep & Swim Tracking, Petal/Copper Rose, One Size (S & L Bands Included) (Petal/Copper Rose)"
            price={2000}
            id={453872}
            image="https://m.media-amazon.com/images/I/610pghkO81L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />

          <Product
            title="All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Blue"
            price={15}
            id={762973}
            image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            title="Havells Aqua Plus 1.2 litre Double Wall Kettle / 304 Stainless Steel/ Cool touch outer body / Wider mouth/ 2 Year warranty (Black, 1500 Watt)"
            price={19.9}
            id={981764}
            image="https://m.media-amazon.com/images/I/61SBF33TizS._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />

          <Product
            title="Amazon Basics 1000 W Mixer Grinder with 3 Speed Settings and 3 Jars - 1500 ml, 1000 ml, 400 ml, Black"
            price={59}
            id={706538}
            image="https://m.media-amazon.com/images/I/61lkTLm+O+L._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />

          <Product
            title="Boult Audio Z20 TWS Earbuds with 40H Playtime, Zen™ ENC Clear Calling Mic, Drivers, Type-C Fast Charge, IPX5, Touch Controls, Voice Assistant, BT 5.3 Ear Buds (Green)"
            price={59}
            id={673927}
            image="https://m.media-amazon.com/images/I/71GFeaOKepL._AC_UL600_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            title="Samsung 24-inch (60.46cm) FHD Flat Monitor, IPS, 75 Hz, Bezel Less Design, AMD FreeSync, Flicker Free, HDMI, D-sub, (LS24C310EAWXXL, Black)"
            price={59}
            id={570283}
            image="https://m.media-amazon.com/images/I/71Sqk+ry2oL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
