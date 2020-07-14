import { Link } from "react-router-dom";
import React, {Component, memo, useState , Fragment, Button} from 'react'
import styled from 'styled-components'
import {ProductConsumer} from './context'

import Peter from './assets/Peter.jpg'

export default class Product extends Component {
  render() {
      const {id, title, img, price, inCart} = this.props.product
    return(
        <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
            <div className='card'>
                <ProductConsumer>
                    {(value) => (
                <div className='img-container p-5' onClick={console.log('You clicked')}>
                    <Link to='/details'>
                        <img src={img} alt='product' className='card-img-top'/>                
                    </Link>
                    <button className='cart-btn' onClick={() => {
                        value.addToCart(id);
                    }}>
                        Cart
                    </button>
                </div> )}
                </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <p className='align-self-center mb-o'>{title}</p>
                    <h5 className='font-italic mb-o'>
                        <span className='mr-1'>$</span>
                        {price}
                    </h5>

                </div>
            </div>
        </ProductWrapper>
        
    )
  }
}
const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transitions: all 1s linear;
}
.card-footer{
    background: black;
    color: white;
    border-top: transparent;
    transitions: all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba()
    }
}
.img-container {
    position: relative;
    overflow: hidden;
}
.card-img-top {
    transition: all 1s linear;
}
.img-container:hover .card-img-top {
    transform: scale(1.2);
    transition: all 0.5s linear;
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
}
`