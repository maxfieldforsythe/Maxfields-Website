import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './NavBar.js';
import React, {Component, memo, useState , Fragment, Button} from 'react'

import About from './About.js'
import Home from './Home.js'
import ProductList from './ProductList.js'
import Cart from './Cart.js'


class App extends Component {
  render() {
    return(
      <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={ProductList} />
            <Route path="/about" component={About} />
            <Route path='/cart' component={Cart}/>
          </Switch>
      </React.Fragment>
    )
  }
}

export default App;