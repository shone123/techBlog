import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './index.scss'
import "../styles/layout-overide.scss";


export default () => {
  return (
    <>
    <div>

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">techblog</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#posts">Posts</Nav.Link>
        <Nav.Link href="#Acoount">Account</Nav.Link>
      </Nav>    
  </Navbar.Collapse>
  </Navbar>
</div>

      Hello world!
      <p><Link to="/blog">View Blog</Link></p>
    </>)
}
