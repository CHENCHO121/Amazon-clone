import React,{useState,useEffect} from "react";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { Link,useNavigate } from "react-router-dom";
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
// import axios from 'axios';
import axios from "./axios";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe=useStripe();
  const elements=useElements();
  const navigate=useNavigate();

  const [succeeded,setSucceeded]=useState(false);
  const [processing,setProcessing]=useState("");
  const [error,setError]=useState(null);
  const [disabled,setDisabled]=useState(true);
  const [clientSecret,setClicentSecrent]=useState(true);



  useEffect(()=>{
    //client secret stripe generate which allow us to charge client

    const getClientSecret=async()=>{

      const response = await axios({
        method:"post",
        url:`/payments/create?total=${getBasketTotal(basket)*100}`
      });

      setClicentSecrent(response.data.clientSecret)

    }

    getClientSecret()

  },[basket])

  console.log('Secret is >>>',clientSecret)

  const submitHandle=async(e)=>{
    //fancy stripe go here
    e.preventDefault();
    setProcessing(true)

    const payload=await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      //paymentIntent=payment confirmation
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type:'EMPTY_BASKET'
      })

      navigate('/orders');
    })

  }

  const handleChange=(e)=>{
    setDisabled(e.empty)
    setDisabled(e.error ? e.error.message:"")

  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items </Link>)
        </h1>
        {/* deliver address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Old EBD Building</p>
            <p>Olakha, Thimphu</p>
          </div>
        </div>
        {/* item reviews */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Reviews items & delivery</h3>
          </div>
          <div className="payment__items">
            {/* all the products in the basket */}
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
        </div>
        {/* payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* stripe magic will go here */}
            <form onSubmit={submitHandle}>
              <CardElement onChange={handleChange}/>
              <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value)=>(
                      <>
                        <h3>Order Total: {value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Nu "}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>
                      {processing ? <p>Processing</p>: "Buy Now"}
                    </span>
                  </button>
              </div>
              {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
