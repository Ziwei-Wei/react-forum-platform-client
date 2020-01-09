import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Content from "components/Content";

import styles from "components/Reply/Item.module.css";

const Item = ({ user, content, createdAt }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Link
                    className={styles.bold_link}
                    to={`/user/${user.username}`}
                >
                    <img
                        className={styles.circle_img}
                        src={user.avatarUrl}
                    ></img>
                    {user.username}
                </Link>
                <div className={styles.date}>{createdAt}</div>
            </div>
            <div className={styles.content}>
                <Content data={content} />
            </div>
        </div>
    );
};

Item.propTypes = {
    user: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired
};

export default Item;
