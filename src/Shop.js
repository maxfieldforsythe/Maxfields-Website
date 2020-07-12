import React, {Component, memo, useState , Fragment, Button} from 'react'
import { PayPalButton } from "react-paypal-button-v2";


import './App.css'
import shirt from './assets/shirtski.jpeg'


class App extends Component {

  state = {
    totalItems: 0,
    totalCost: 0,
    itemNames: []
  };

  updateTable(num, name) {
    this.setState({totalItems: this.state.totalItems + 1, totalCost: this.state.totalCost + num, itemNames: [this.state.itemNames, name]})
  }

  paymentHandler = (details, data) => {
    /** Here you can call your backend API
      endpoint and update the database */
    console.log(details, data);
  }

  render() {
      return (
        <div className="main">
          
          <div>
            <h1>
              Cart: {this.state.totalItems}
            </h1>
            <h1>
              Total: ${this.state.totalCost}
            </h1>
            <h1>
              Items:
            </h1>
            <div>
              {this.state.itemNames.map(txt => <p>{txt}</p>)}
            </div>
          <img alt="Black Shirt" src={shirt} height= '300'/>
          <h2> Black Shirt</h2>
          <h3>
            <b>$20</b>
          </h3>
          <button onClick={() => this.updateTable(20, 'Cheap Black Tee')}> Pay </button>
          </div>
          <img alt="Black Shirt" src={shirt} height= '300'/>
          <h2> Black Shirt</h2>
          <h3>
            <b>$30</b>
          </h3>
          <button onClick={() => this.updateTable(30, 'Expensive Black Tee')}> Pay </button>
          <PayPalButton onSuccess= {this.paymentHandler}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: "USD",
                    value: this.state.totalCost
                  },
                  description: 'Wintermoon Studios',
                
                  
                 
                }],
                // application_context: {
                //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                // }
              });
            }}
            onApprove={(data, actions) => {
              console.log(data);
              // Capture the funds from the transaction
              return actions.order.capture().then(function(details) {
                // Show a success message to your buyer
                alert("Thank you for your purchase " + details.payer.name.given_name + "!");
    
                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID
                  })
                });
              });
            }}
            options={{
              clientId: "AQhWMWAQCIDZNBipZIxwl_pX3-YRmhXYp4Rk2uo1kpC1XyYO46tEBdDNzGKlxCy5w0CgA2t6ygjlJm0Q",

            }}
          />
          
        </div>
      );
    }
  }



export default App;