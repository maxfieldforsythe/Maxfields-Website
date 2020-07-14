import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

export default class NavBar extends Component {
  render() {
    return(
      <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
        <Link to='/'>
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
              Wintermoon Studios
          </li>
        </ul>
        <Link to='/about' className='ml-auto'>
          <button className='btn btn-outline-dark text-capitalize'>
            About
          </button>
        </Link>
        <Link to='/shop' className='ml-auto'>
          <button>
            Store
          </button>
        </Link>
        <Link to='/cart' className='ml-auto'>
          <button>
            Cart
          </button>
        </Link>
      </nav>
    )
  }
}