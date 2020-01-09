import React from "react";
import { Form } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";

import DropDown from "components/User/DropDown";

import styles from "./index.module.css";

const Header = ({ user, address }) => {
    if (!user) {
        user = "visitor";
    }

    return (
        <div className={styles.background}>
            <nav className={styles.container}>
                <div className={styles.at}>{user + " @ " + address}</div>
                <div className={styles.search_box}>
                    <FaSearch className={styles.search_icon} />
                    <input
                        className={styles.search_input}
                        type="text"
                        placeholder={"find @" + address}
                    />
                </div>
                <div className={styles.user}>
                    <DropDown />
                </div>
            </nav>
        </div>
    );
};

export default Header;
