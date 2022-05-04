import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" text-align="center" >
            <div className="title">
                <Navbar.Brand as={Link} to="/" text-align="center">
                    WeSki
                    <img src={require('../images/handwriting.png')} width="50" height="40" alt="WeSki logo"/>
                </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" align-items={"center"}/>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    {/* <Nav.Link as={Link} to="/trips">
                        Trips
                    </Nav.Link> */}
                    <Nav.Link as={Link} to="/MyAccountPage">
                        My Account
                    </Nav.Link>
                </Nav>
                <Nav style={{ marginRight: "2%" }}>
                    {/* {loading ? (
                        <Navbar.Text>Loading...</Navbar.Text>
                    ) : (
                        // <UserNavDropdown user={user} />
                    )} */}
                </Nav>

        </Navbar>
    );
}