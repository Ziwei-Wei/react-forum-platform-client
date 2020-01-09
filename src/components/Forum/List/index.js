import React from "react";
import PropTypes from "prop-types";
import Item from "components/Forum/Item";

import styles from "./index.module.css";

const List = ({ isLoading, forums }) => (
    <>
        {isLoading === false && (
            <div className={styles.container}>
                {forums.map(forum => (
                    <Item {...forum} />
                ))}
            </div>
        )}
    </>
);

List.propTypes = {
    topics: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            category: PropTypes.shape({
                name: PropTypes.string.isRequired
            })
        }).isRequired
    ).isRequired
};

export default List;
