import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Item from "components/Profile/Item";

import { formatDate } from "utility/utility";

import styles from "./List.module.css";

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
                        console.log(item);
                        item.createdAt = formatDate(
                            now,
                            new Date(item.createdAt)
                        );
                        return (
                            <Item
                                forumName={item.forum.name}
                                forumId={item.forum._id}
                                topicName={item.topic.name}
                                topicId={item.topic._id}
                                createdAt={item.createdAt}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

List.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            forumName: PropTypes.string.isRequired,
            forumId: PropTypes.string.isRequired,
            topicName: PropTypes.string.isRequired,
            topicId: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default List;
