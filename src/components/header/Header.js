
  import PropTypes from "prop-types"
  import React from "react"
  import {Navbar, Nav } from 'react-bootstrap';
  import './header.scss';
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#account">Account</Nav.Link>            
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
