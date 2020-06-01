
  import PropTypes from "prop-types"
  import React from "react"
  import {Navbar, Nav } from 'react-bootstrap';
  import './header.scss';
  import { Link } from "gatsby";
  class Header extends React.Component {
    render() {
      return(
        <>
          {/*navbar*/}
        <Navbar bg="light" expand="lg" className="mediumnavigation">
        <Navbar.Brand href="#home">techBlog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/blog">Blog</Link>
            <Link to="/account">Account</Link>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
      )
    }
  }
  Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  Header.defaultProps = {
    siteTitle: ``,
  }
  export default Header
