import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./RightNav.css";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-2 title">Login With</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary w-100">
        <FaGithub /> Login with GitHub
      </Button>
      <div>
        <h4 className="title">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative p-0">
        <img className="w-100" src={bg} alt="" />
        <div className="text-center text-white position-absolute top-50 start-50 translate-middle">
          <h3 className="pb-3">Create an Amazing Newspaper</h3>
          <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <Button variant="danger" className="rounded-0 title">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
