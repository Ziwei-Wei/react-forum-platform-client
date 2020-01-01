import React from "react";
import PropTypes from "prop-types";
import Item from "components/Topic/Item";

import styles from "./index.module.css";

const List = ({ items, forum }) => (
    <>
        <div className={styles.container}>
            {items.map(item => (
                <Item forum={forum} {...item} />
            ))}
        </div>
    </>
);

List.propTypes = {
    topics: PropTypes.arrayOf(
        PropTypes.shape({
            forum: PropTypes.string.isRequired,
            user: PropTypes.object.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
            viewNum: PropTypes.number.isRequired,
            replyNum: PropTypes.number.isRequired,
            updatedAt: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default List;
