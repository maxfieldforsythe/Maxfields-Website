import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavBar.js';
import React, {Component, memo, useState , Fragment, Button} from 'react'


class App extends Component {
  render() {
    return(
        <p> Peter Forsythe's bio and website info</p>
    )
  }
}

export default App;