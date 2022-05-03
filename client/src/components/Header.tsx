import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { handleLoginClick, handleLogoutClick } from "../utils/auth";

// import { UserType } from "../types";

export default function Header() {
    // const { user, loading } = props;

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" sticky="top" text-align="center">
            <div className="title">
            <Navbar.Brand as={Link} to="/" text-align="center">
                WeSki
            </Navbar.Brand>
            <img src="./images/logo.jpg" width={"30px"} height={"30px"}/>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" align-items={"center"}/>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/calendar">
                        Trips
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