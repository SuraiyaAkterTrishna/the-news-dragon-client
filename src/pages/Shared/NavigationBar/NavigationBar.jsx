import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="text-decoration-none text-dark me-2" to="/">Home</Link>
              <Link className="text-decoration-none text-dark me-2" to="/about">About</Link>
              <Link className="text-decoration-none text-dark me-2" to="/career">Career</Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#profile">
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                </Nav.Link>
              )}
              {user ? (
                <Button variant="dark" className="rounded-0">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark" className="rounded-0">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
