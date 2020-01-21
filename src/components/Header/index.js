import React from "react";
import { FaSearch } from "react-icons/fa";

import UserAccess from "components/User/Access";

import styles from "./index.module.css";

const Header = ({ username, address, setToken, accessToken }) => {
    return (
        <div className={styles.background}>
            <nav className={styles.container}>
                <div className={styles.at}>{username + " @ " + address}</div>
                <div className={styles.search_box}>
                    <FaSearch className={styles.search_icon} />
                    <input
                        className={styles.search_input}
                        type="text"
                        placeholder={"find @" + address}
                    />
                </div>
                <div className={styles.user}>
                    <UserAccess
                        username={username}
                        setToken={setToken}
                        accessToken={accessToken}
                    />
                </div>
            </nav>
        </div>
    );
};

Header.defaultProps = {
    username: "visitor",
    address: "./",
    accessToken: ""
};

export default Header;
