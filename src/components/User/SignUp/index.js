import React from "react";
import { Form, Button } from "react-bootstrap";

const SignUp = () => (
    <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Button variant="light" type="submit">
            Submit
        </Button>
    </Form>
);

export default SignUp;
