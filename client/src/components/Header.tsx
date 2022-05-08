import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth, getUser, signInWithGoogle } from "../auth/firebase";

export default function Header() {

    const [user, setUser] = useState<User | null>();
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    auth.onAuthStateChanged(user => {
        setUser(user);
        setLoading(false);
    })

    useEffect(() => {
        setUser(auth.currentUser);
    }, [])

    useEffect(() => {
        if (auth.currentUser) setIsAuth(true);
    }, [user]);


    const loginComp = (
        <Nav.Item>
            <button onClick={signInWithGoogle}>Sign In</button>
        </Nav.Item>
    );

    const userPageComp = (
        <Nav.Link as={Link} to="/MyAccountPage">
            {user?.displayName}
        </Nav.Link>
    );

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" text-align="center" >
            <div className="title">
                <Navbar.Brand as={Link} to="/" text-align="center">
                    WeSki
                </Navbar.Brand>
                <img src={require('../images/handwriting.png')} width="50" height="40" alt="WeSki logo" />
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" align-items={"center"} />
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/trips">
                    Trips
                </Nav.Link>
            </Nav>
            <Nav style={{ marginRight: "2%" }}>
                {loading ? (<Navbar.Text>Loading...</Navbar.Text>) : isAuth ? userPageComp : loginComp}
                {/* {isAuth ? userPageComp : loginComp} */}
                {/* {loading ? (
                    
                        <Navbar.Text>Loading...</Navbar.Text>
                    ) : (
                        // <UserNavDropdown user={user} />
                    )} */}
            </Nav>

        </Navbar>
    );
}