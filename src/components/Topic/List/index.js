import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Item from "components/Topic/Item";

import { formatDate } from "utility/utility";

import styles from "./index.module.css";

const List = ({ isLoading, items, forumName, forumId }) => {
    const [now, setNow] = useState();

    useEffect(() => {
        setNow(new Date());
    }, []);

    return (
        <>
            {isLoading === false && (
                <div className={styles.container}>
                    {items.map(item => {
                        item.updatedAt = formatDate(
                            now,
                            new Date(item.updatedAt)
                        );
                        return (
                            <Item
                                forumName={forumName}
                                forumId={forumId}
                                {...item}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

List.propTypes = {
    topics: PropTypes.arrayOf(
        PropTypes.shape({
            forumName: PropTypes.string.isRequired,
            forumId: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired,
            user: PropTypes.shape({
                avatarUrl: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            }),
            name: PropTypes.string.isRequired,
            replyNum: PropTypes.number.isRequired,
            viewNum: PropTypes.number.isRequired,
            updatedAt: PropTypes.string.isRequired,
            transformTopicName: PropTypes.func.isRequired
        }).isRequired
    ).isRequired
};

export default List;
