import React, {Component} from 'react'
import {storeProducts, detailProduct} from './Data.js'

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: storeProducts,
        detailProduct: detailProduct,
        cart: [],
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }

    handleDetail = id => {
        console.log("Hello form detail")
    }

    addToCart = id => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count += 1
        const price = product.price
        product.total = price;
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}