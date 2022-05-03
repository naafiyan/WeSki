import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { handleLoginClick, handleLogoutClick } from "../utils/auth";

// import { UserType } from "../types";

export default function Header() {
    // const { user, loading } = props;

    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" sticky="top">
            <Container fluid>
                    <Col >

                    </Col>
                    <Col >
                        <Navbar.Brand as={Link} to="/" >
                        WeSki
                        </Navbar.Brand>
                    </Col>
                    <Col >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" align-items={"center"}/>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/calendar">
                                Trips
                            </Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav style={{ marginRight: "2%" }}>
                            {/* {loading ? (
                        <Navbar.Text>Loading...</Navbar.Text>
                    ) : (
                        // <UserNavDropdown user={user} />
                    )} */}
                        </Nav>
                    </Col>

                </Container>
        </Navbar>
    );
}