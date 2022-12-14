import { useContext, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../auth/firebase";
import { UserContext } from "../providers/UserProvider";

export default function Header() {
    const user = useContext(UserContext);

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(false);
    }, [user])


    const loginComp = (
        <Nav.Item className="mr-auto" onClick={signInWithGoogle}>
            <Nav.Link>
                Sign In
            </Nav.Link>
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
                    <img src={require('../images/handwriting.png')} width="50" height="40" alt="WeSki logo" />
                </Navbar.Brand>
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
                {loading ? (<Navbar.Text>Loading...</Navbar.Text>) : user ? userPageComp : loginComp}
            </Nav>
        </Navbar>
    );
}