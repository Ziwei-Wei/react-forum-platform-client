import React, { useState, useEffect } from "react";
import Item from "./Item";
import PropTypes from "prop-types";

import { formatDate } from "utility/utility";

import styles from "components/Reply/List.module.css";

const List = ({ items }) => {
    const [now, setNow] = useState();

    useEffect(() => {
        setNow(new Date());
    }, []);

    return (
        <div className={styles.container}>
            {items.map(item => {
                item.createdAt = formatDate(now, new Date(item.createdAt));
                return <Item {...item} />;
            })}
        </div>
    );
};

List.propTypes = {
    replies: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.object.isRequired,
            content: PropTypes.object.isRequired,
            createdAt: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};
export default List;
