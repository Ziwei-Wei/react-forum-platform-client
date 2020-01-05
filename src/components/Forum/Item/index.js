import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const Item = ({ _id, name, description, category }) => (
    <div className={styles.container}>
        <div className={styles.small_item}>
            <Link
                className={styles.link}
                to={{
                    pathname: `/${name}`,
                    search: "",
                    hash: "",
                    state: { forumId: _id }
                }}
            >
                {name}
            </Link>
        </div>
        <div className={styles.small_item}>{category.name}</div>
        <div className={styles.big_item}>{description}</div>
    </div>
);

Item.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};

export default Item;
