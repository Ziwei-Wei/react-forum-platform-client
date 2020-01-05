import React from "react";
import PropTypes from "prop-types";
import Item from "components/Topic/Item";

import styles from "./index.module.css";

const List = ({ items, forumName, forumId }) => (
    <>
        <div className={styles.container}>
            {items.map(item => (
                <Item forumName={forumName} forumId={forumId} {...item} />
            ))}
        </div>
    </>
);

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
