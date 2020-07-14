import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavBar.js';
import React, {Component, memo, useState , Fragment, Button} from 'react'
import Title from './Title'
import CartColumns from './CartColumns.js'
import Empty from './Empty.js'
import {ProductConsumer} from './context'
import CartList from './CartList'
import CartTotal from './CartTotal'


export default class Cart extends Component {
  render() {
    return(
        <section>
            <ProductConsumer>
                {(value) => {
                    const {cart} = value
                    console.log(cart.length)
                    if(cart.length>0) {
                        return (
                            <React.Fragment>
                                <Title name="Your" title="Cart"/>
                                <CartColumns />
                                <CartList value={value}/>
                                <CartTotal value={value}/>
                            </React.Fragment>
                        )
                    } else {
                        return (<Empty/>)
                    }
                }}
            </ProductConsumer>
        </section>
    )
  }
}
