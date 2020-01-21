import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const Login = ({ address, setToken }) => {
    const location = useLocation();
    const history = useHistory();
    const [showAlert, setShowAlert] = useState(false);
    const form = useRef();
    const user = useRef();
    const password = useRef();

    const onSubmit = async event => {
        try {
            event.preventDefault();
            const res = await axios.post(`/api/session/local`, {
                username: user.current.value,
                password: password.current.value
            });

            if (res.status === 200) {
                setToken(
                    user.current.value,
                    password.current.value,
                    res.data.accessToken
                );
            } else {
                throw Error("authentication failed");
            }
        } catch (error) {
            setShowAlert(true);
        }
    };

    return (
        <Form onSubmit={onSubmit} ref={form}>
            <Form.Group controlId="formBasicEmailOrUsername">
                <Form.Label>Email or Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder=""
                    ref={user}
                    autoComplete="username"
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder=""
                    ref={password}
                    autoComplete="current-password"
                />
            </Form.Group>
            {showAlert && (
                <Alert
                    variant="danger"
                    onClose={() => {
                        setShowAlert(false);
                    }}
                    dismissible
                >
                    Failed to authenticate! Please try again!
                </Alert>
            )}

            <Button variant="light" type="submit" onClick>
                Submit
            </Button>
        </Form>
    );
};

Login.defaultProps = { address: "/", setToken: () => {} };

export default Login;
