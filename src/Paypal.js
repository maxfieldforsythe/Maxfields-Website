import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import CartTotal from './CartTotal';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
                    console.log("The payment was succeeded!", payment);
                    alert("Transaction completed succesfully!");

                    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
                    this.props.clearCart()
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            alert("Transaction error, please try again.");

            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
         // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        let cart = []
        this.props.cart.forEach(item => {

            for (var i = 0; i < item.count; i++) {
                cart = [...cart, {name: item.title, quantity: 1, price: (item.total + item.total * 0.08)/item.count, currency: "USD"}]
            } 
            

        })

        const client = {
            sandbox:    'AQhWMWAQCIDZNBipZIxwl_pX3-YRmhXYp4Rk2uo1kpC1XyYO46tEBdDNzGKlxCy5w0CgA2t6ygjlJm0Q',
            production: 'YOUR-PRODUCTION-APP-ID',
        }


        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!

            console.log(this.props.total)
            console.log(cart)
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} cart={cart} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}