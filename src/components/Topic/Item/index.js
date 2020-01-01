import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const TopicItem = ({
    forum,
    user,
    title,
    category,
    tags,
    viewNum,
    replyNum,
    updatedAt
}) => {
    return (
        <>
            <div className={styles.item}>
                <div>
                    <Link to={`/${forum}/${title}`}>{title}</Link>
                </div>
                <div>{category}</div>
                <div>{tags}</div>
                <div>{viewNum}</div>
                <div>{replyNum}</div>
                <div>{updatedAt}</div>
            </div>
        </>
    );
};

TopicItem.propTypes = {
    forum: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    viewNum: PropTypes.number.isRequired,
    replyNum: PropTypes.number.isRequired,
    updatedAt: PropTypes.string.isRequired
};

export default TopicItem;
