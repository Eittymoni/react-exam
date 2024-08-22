import React from 'react'
import "./menu.css"
import {Container, Navbar, Nav, Form, Button } from "react-bootstrap"
import logo from "../../assets/logo.png"
import { FaCloudDownloadAlt } from "react-icons/fa";
import {Link} from "react-router-dom"
const Menu = () => {
  return (
    <div>
      <Navbar expand="lg" className='menu-bg'>
      <Container >
        <Navbar.Brand href="#"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link>Service </Link>
            <Link>Contact </Link>
          
          </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-success" className='but'> <FaCloudDownloadAlt /> Download</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu
