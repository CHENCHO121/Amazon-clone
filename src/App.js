import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./components/Checkout";
import Login from "./pages/Login";
import Payment from "./components/Payment";
import Order from "./components/Order";
import { auth } from "./pages/firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51L4neaSGKlOUw9KJEozOnCK1BHw2VLd4iKGD1tn1DBPKVDTvgMgRmHEBANn0Ud8Z6iGFgTmui5GQphziWsSqix670008tpQpBT"
);

const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(`User >>> ${authUser}`);

      if (authUser) {
        //user just logged in or user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
        <Route path="/orders" element={<Order/>} />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
               <Elements stripe={promise}>
                 <Payment />
               </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
