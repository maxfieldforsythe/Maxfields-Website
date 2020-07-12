import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavBar.js';
import React, {Component, memo, useState , Fragment, Button} from 'react'

import About from './About.js'
import Shop from './Shop.js'
import Home from './Home.js'
import ProductList from './ProductList.js'


class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={ProductList} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;