import React from 'react'
import Logo from "../../images/logo.png"
import { Nav, Navbar, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import User from '../../images/user.png'
import Heart from '../../images/heart.png'
import Cart from '../../images/shopping.png'

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect className="home_NavBar" expand="lg" bg="transparent" variant="light">
                <Container className="container">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Logo}
                            className="d-inline-block align-top nav_logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle className="toggle-button ml-auto mr-3" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="home__nav ml-auto">
                            <Nav.Link className="nav_link">What's New</Nav.Link>
                            <Nav.Link className="nav_link">About Us</Nav.Link>
                            <Nav.Link className="nav_link">Women</Nav.Link>
                            <Nav.Link className="nav_link"><span className="home__span"><div className="home_con"><i className="far fa-user"></i> <span>Guest</span></div></span></Nav.Link>
                            <Nav.Link className="nav_link"><span className="home__span"><i className="far fa-heart"></i> 1</span></Nav.Link>
                            <Nav.Link className="nav_link"><span className="home__span"><div className="home_con"><i className="fas fa-shopping-bag"></i> <span>1</span></div></span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
