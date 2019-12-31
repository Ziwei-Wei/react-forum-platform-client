import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Header = () => (
    <>
        <nav className={styles.frame}>
            <div className={styles.button}>
                <Link to="/">Home</Link>
            </div>
            <div className={styles.options}>
                <div className={styles.button}>
                    <Link to="/search">Search</Link>
                </div>
                <div className={styles.button}>
                    <Link to="/user">Login</Link>
                </div>
            </div>
        </nav>
    </>
);

export default Header;
