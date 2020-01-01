import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const Item = ({ name, description, category, tags }) => (
    <div className={styles.container}>
        <div className={styles.item}>
            <div>
                <Link className={styles.link} to={`/${name}`}>
                    {name}
                </Link>
            </div>
            <div>{category}</div>
            <div>{tags}</div>
        </div>
        <div>Introduction:{description}</div>
    </div>
);

Item.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Item;
