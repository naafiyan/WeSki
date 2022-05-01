import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { handleLoginClick, handleLogoutClick } from "../utils/auth";

// import { UserType } from "../types";

export default function Header() {
    // const { user, loading } = props;

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand as={Link} to="/">
                <img
                    alt="logo"
                    src="" // TODO: add logo here
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{" "}
                WeSki
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
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
            </Navbar.Collapse>
        </Navbar>
    );
}