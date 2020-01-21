import React from "react";
import PropTypes from "prop-types";

import List from "components/Profile/List";

import styles from "./index.module.css";

const UserProfile = ({
    name,
    email,
    avatarUrl,
    topics,
    replies,
    isLoading
}) => (
    <div className={styles.container}>
        <div className={styles.item}>
            <img className={styles.profile_img} src={avatarUrl}></img>
            <div className={styles.text}>username: {name}</div>
            <div className={styles.text}>email: {email}</div>
        </div>
        <div className={styles.item}>Topics history:</div>
        <List isLoading={isLoading} items={topics} />
        <div className={styles.item}>Replies history:</div>
        <List isLoading={isLoading} items={replies} />
    </div>
);

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
};

UserProfile.defaultProps = {
    name: "None",
    email: "None",
    avatarUrl: ""
};

export default UserProfile;
