import React from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";

import DropDown from "components/User/DropDown";

import styles from "./index.module.css";

const Header = ({ user, address, type }) => {
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
                {(type === "topic" || type === "forum") && (
                    <div className={styles.add}>
                        <MdPlaylistAdd className={styles.icon} />
                    </div>
                )}
                <div className={styles.user}>
                    <DropDown />
                </div>
            </nav>
        </div>
    );
};

export default Header;
