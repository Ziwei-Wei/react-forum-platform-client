import React, { useState, useEffect } from "react";
import Item from "./Item";
import PropTypes from "prop-types";

import { formatDate } from "utility/utility";

import styles from "components/Reply/List.module.css";

const List = ({ isLoading, items }) => {
    const [now, setNow] = useState();

    useEffect(() => {
        setNow(new Date());
    }, []);

    return (
        <>
            {isLoading === false && (
                <div className={styles.container}>
                    {items.map(item => {
                        return <Item {...item} now={now} />;
                    })}
                </div>
            )}
        </>
    );
};

List.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    replies: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.object.isRequired,
            content: PropTypes.object.isRequired,
            createdAt: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

List.defaultProps = {
    isLoading: false,
    replies: []
};

export default List;
