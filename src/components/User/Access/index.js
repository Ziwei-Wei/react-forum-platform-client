import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import styles from "./index.module.css";

import Login from "components/User/Login";
import SignUp from "components/User/SignUp";

const UserAccess = ({ username, setToken, accessToken }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isLogin, setIsLogin] = useState(true);
    const [isSignIn, setIsSignIn] = useState(false);

    useEffect(() => {
        if (accessToken) {
            handleClose();
        }
    }, [accessToken]);

    const switchState = () => {
        switch (isLogin) {
            case true:
                setIsLogin(false);
                setIsSignIn(true);
                break;
            case false:
                setIsLogin(true);
                setIsSignIn(false);
                break;
        }
    };

    const UserButton = () => (
        <>
            {accessToken === "" ? (
                <button className={styles.button} onClick={handleShow}>
                    <FaUser className={styles.icon} />
                </button>
            ) : (
                <Link to={`/user/${username}`}>
                    <FaUser className={styles.icon} />
                </Link>
            )}
        </>
    );

    const Auth = ({ isLogin, isSignIn }) => {
        return (
            <div>
                <div className={styles.button_panel}>
                    {isLogin ? (
                        <button
                            className={styles.toggle_button_on}
                            onClick={switchState}
                        >
                            SingIn
                        </button>
                    ) : (
                        <button
                            className={styles.toggle_button_off}
                            onClick={switchState}
                        >
                            SingIn
                        </button>
                    )}
                    {isSignIn ? (
                        <button
                            className={styles.toggle_button_on}
                            onClick={switchState}
                        >
                            SignUp
                        </button>
                    ) : (
                        <button
                            className={styles.toggle_button_off}
                            onClick={switchState}
                        >
                            SignUp
                        </button>
                    )}
                </div>
                {isLogin && (
                    <div className={styles.auth}>
                        <Login setToken={setToken} />
                    </div>
                )}
                {isSignIn && (
                    <div className={styles.auth}>
                        <SignUp setToken={setToken} />
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <UserButton />

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Body>
                    <Auth isLogin={isLogin} isSignIn={isSignIn} />
                </Modal.Body>
            </Modal>
        </>
    );
};
export default UserAccess;
