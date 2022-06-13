const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51L4neaSGKlOUw9KJa83A0hUxVnNnjaFULw0rg22VdI2uWPy1VoyYhnc3I0lbkZJ3GGptFKkcCqXvtglnQCr2KEfr00ywNGA7hM"
);

//API


//App Config

const app=express();

//Middleware

app.use(cors({origin:true}));
app.use(express.json());

//API route
app.get('/',(request,response)=>response.status(200).send('hello world'))

app.post('/payments/create',async(request,response)=>{
    const total = request.query.total
    console.log('payment request received >>> ',total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        payment_method_types: ["card"],
        currency:'btn',
    });
    //response ok--created
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})


//Listen Command

exports.api=functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/clone-13a9b/us-central1/api