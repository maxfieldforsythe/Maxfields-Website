import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavBar.js';
import React, {Component, memo, useState , Fragment, Button} from 'react'
import ImageGallery from 'react-image-gallery';

import About from './About.js'
import Shop from './Shop.js'

import logo from './assets/PFDesigns/slide7new.jpg'
import pic1 from './assets/PFDesigns/slide1.jpg'
import pic2 from './assets/PFDesigns/slid2.jpg'
import pic3 from './assets/PFDesigns/slid3.jpg'
import pic4 from './assets/PFDesigns/slide4.jpg'
import pic5 from './assets/PFDesigns/slide5.jpg'
import pic6 from './assets/PFDesigns/slide6.jpg'
import pic8 from './assets/PFDesigns/slide8.jpg'

const images = [
    {
      original: logo,
      thumbnail: logo
    },
    {
      original: pic1,
      thumbnail: pic1
    },
    {
      original: pic2,
      thumbnail: pic2
    },
    {
      original: pic3,
      thumbnail: pic3
    },
    {
      original: pic4,
      thumbnail: pic4
    },
    {
      original: pic5,
      thumbnail: pic5
    },
    {
      original: pic6,
      thumbnail: pic6
    },
    {
      original: pic8,
      thumbnail: pic8
    },
  ];

class App extends Component {
  render() {
    return(
       <div style={{backgroundColor: 'black'}}>
           <ImageGallery items={images} autoPlay={true}/>
       </div>
    )
  }
}

export default App;