import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket,user }, dispatch] = useStateValue();

  console.log(`basket ${basket}`);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://res-1.cloudinary.com/linkisin/image/upload/v1623932818/linkisin/production/campaign_image/Amazon-Fashion-Clothing_Mobile_campaign_pppdec.jpg"
          alt="checkout_img"
        />
        <div>
        <h3>Hello, {user ? user.email : "GuestUser"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* Checkout Product */}
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

      {/* checkout subTotal  */}
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
