import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container
      className="w-25 mx-auto mt-5 p-5"
      style={{ backgroundColor: "#f3f2f2" }}
    >
      <h3>Register Your Account</h3>
      <hr />
      <Form>
        <Form.Group className="mb-3 fw-bold" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="rounded-0 border-0"
            style={{ backgroundColor: "rgb(227, 223, 223)" }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="formBasicPhotoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            className="rounded-0 border-0"
            style={{ backgroundColor: "rgb(227, 223, 223)" }}
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="rounded-0 border-0"
            style={{ backgroundColor: "rgb(227, 223, 223)" }}
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="rounded-0 border-0"
            style={{ backgroundColor: "rgb(227, 223, 223)" }}
            type="password"
            name="password"
            placeholder="Enter Your Password"
            required
          />
        </Form.Group>

        <Button variant="dark" className="rounded-0 w-100 mt-2">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already have an account? <Link to="/login">Please Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
