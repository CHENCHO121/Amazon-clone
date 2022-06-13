import React from "react";
import "./Home.css";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        {/* Banner image */}
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_prime_day_2021_991-usen_placement203_1500x4501623702258600"
          alt="banner"
        />
        {/* 2 products */}
        <div className="home__row">
          <Product
            id="1213254342"
            title="Fujitsu ScanSnap iX1600 Versatile Cloud Enabled Document Scanner for Mac or PC, Black"
            price={65.69}
            image="https://m.media-amazon.com/images/I/71u7Psu+y7L._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="121367567"
            title="EVGA GeForce RTX 3090 FTW3 Ultra Gaming, 24GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate, 24G-P5-3987-KR"
            price={250.99}
            image="https://m.media-amazon.com/images/I/81-GWj0nEkL._AC_SL1500_.jpg"
            rating={4}
          />
         
        </div>
        {/* 3 products */}
        <div className="home__row">
        <Product
            id="788757567"
            title="DJI OM 4 SE - 3-Axis Smartphone Gimbal Stabilizer with Tripod, Magnetic Design, Portable and Foldable, ActiveTrack 3.0, Story Mode, Vlogging Stabilizer, YouTube TikTok Video, for Android and iPhone"
            price={179.79}
            image="https://m.media-amazon.com/images/I/61bCnyGNooL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="86857567"
            title="iJoy Matte Finish Bluetooth Headphones, Wireless Over Ear Foldable Headset with Built-in Microphone, FM, Micro SD Card Slot (Stealth)"
            price={24.98}
            image="https://m.media-amazon.com/images/I/815PM0CRkHL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="8677686567"
            title="Samsung Electronics Galaxy Watch 4 Classic 46mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version, Black"
            price={199.99}
            image="https://m.media-amazon.com/images/I/61im3OsaksL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        {/* 1 products */}
        <div className="home__row">
        <Product
            id="585576567"
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
            price={19.99}
            image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
