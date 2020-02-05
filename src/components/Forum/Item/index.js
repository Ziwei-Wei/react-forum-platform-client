import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getColor } from "utility/utility";

import styles from "./index.module.css";

const Item = ({ _id, name, description, category, admin }) => {
    const indexIconStyle = {
        display: "inline-block",
        borderRadius: "50%",
        width: "8px",
        height: "8px",
        backgroundColor: getColor(category.name)
    };

    return (
        <div className={styles.container}>
            <div className={styles.forum_name}>
                <Link
                    className={styles.link}
                    to={{
                        pathname: `/forum/${name}`,
                        search: "",
                        hash: "",
                        state: { forumId: _id, forumAdmin: admin.username }
                    }}
                >
                    {name}
                </Link>
                <Link className={styles.link}>
                    <span style={indexIconStyle}></span>
                    <span className={styles.index_text}>{category.name}</span>
                </Link>
            </div>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
        </div>
    );
};
Item.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.shape({
        name: PropTypes.string.isRequired
    }),
    admin: PropTypes.string.isRequired
};

export default Item;
