import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import "./Header.css";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img className="mt-4" src={logo} alt="" />
        <p className="text-secondary my-2">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="date">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex latest p-2">
        <Button variant="danger" className="ms-2 rounded-0">
          Latest
        </Button>
        <Marquee className="ms-3 me-2 latest-news" speed={100}>
          I can be a React component, multiple React components, or just some
          text... I can be a React component, multiple React components, or just
          some text... I can be a React component, multiple React components, or
          just some text...
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="dark" className="rounded-0 login">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="my-0 text-secondary" />
    </Container>
  );
};

export default Header;
