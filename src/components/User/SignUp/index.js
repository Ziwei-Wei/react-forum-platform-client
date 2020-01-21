import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import validator from "validator";
import axios from "axios";

const SignUp = ({ setToken }) => {
    const email = useRef();
    const username = useRef();
    const password = useRef();

    const [error, setError] = useState("");

    const [showCorrectAlert, setShowCorrectAlert] = useState(false);
    const [showFailedAlert, setShowFailedAlert] = useState(false);
    const [emailValidity, setEmailValidity] = useState(false);
    const [usernameValidity, setUsernameValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);

    const checkCorrectness = () => {
        if (emailValidity && usernameValidity && passwordValidity) {
            setShowCorrectAlert(true);
        } else {
            setShowCorrectAlert(false);
        }
    };

    const isPasswordValid = () => {
        if (
            validator.matches(password.current.value, /^[\w\d!@#$%^&*]+$/) &&
            validator.isLength(password.current.value, { min: 6, max: 16 })
        ) {
            setPasswordValidity(true);
        } else {
            setPasswordValidity(false);
        }
        checkCorrectness();
    };

    const isUsernameValid = () => {
        if (
            validator.isAlphanumeric(username.current.value) &&
            validator.isLength(username.current.value, { min: 1, max: 16 })
        ) {
            setUsernameValidity(true);
        } else {
            setUsernameValidity(false);
        }
        checkCorrectness();
    };

    const isEmailValid = () => {
        if (validator.isEmail(email.current.value)) {
            setEmailValidity(true);
        } else {
            setEmailValidity(false);
        }
        checkCorrectness();
    };

    const onSubmit = async event => {
        try {
            event.preventDefault();
            const res = await axios.post(`/api/user`, {
                email: email.current.value,
                username: username.current.value,
                password: password.current.value
            });

            if (res.status === 200) {
                setToken(
                    username.current.value,
                    password.current.value,
                    res.data.accessToken
                );
            } else {
                throw Error("failed");
            }
        } catch (error) {
            setError(error.response.data);
            setShowFailedAlert(true);
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder=""
                    ref={email}
                    onChange={isEmailValid}
                    isValid={emailValidity}
                />
            </Form.Group>

            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="username"
                    placeholder=""
                    ref={username}
                    onChange={isUsernameValid}
                    isValid={usernameValidity}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder=""
                    ref={password}
                    onChange={isPasswordValid}
                    isValid={passwordValidity}
                />
            </Form.Group>
            {showCorrectAlert && (
                <Alert variant="success">
                    All field have correct format and length!
                </Alert>
            )}
            {showFailedAlert && (
                <Alert
                    variant="danger"
                    onClose={() => {
                        setShowFailedAlert(false);
                    }}
                    dismissible
                >
                    Failed to register! {error}
                </Alert>
            )}

            <Button variant="light" type="submit">
                Submit
            </Button>
        </Form>
    );
};

SignUp.defaultProps = { setToken: () => {} };

export default SignUp;
