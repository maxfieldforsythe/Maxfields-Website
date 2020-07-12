import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavBar.js';
import React, {Component, memo, useState , Fragment, Button} from 'react'

import Peter from './assets/Peter.jpg'

class Cart extends Component {
  render() {
    return(
        <div style={{backgroundColor: 'black'}}>
        <img src={Peter} height='400' class='center'/>
        <p class='centerText' style={{color: 'white'}}>We’ve all been asked this same question: What do you want to be when you grow up? For Peter Forsythe, the answer came to him at his first Grateful Dead show in 1981. The music, the culture, and community fascinated him, and more importantly, as a fledgling artist, he saw other artists making a living by selling their artwork on t-shirts at the shows. It planted the seed in his brain that he could make his own. With no formal training in silk screening or graphic design, Forsythe started cranking out t-shirts in his basement and sold them to high school classmates. By the time he was in college studying printmaking at SUNY New Paltz, his printing process was dialed and he was churning out all kinds of custom Grateful Dead apparel.</p>
        </div>
    )
  }
}

export default Cart;