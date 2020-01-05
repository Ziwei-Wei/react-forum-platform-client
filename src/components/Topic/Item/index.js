import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const TopicItem = ({
    forumName,
    forumId,
    _id,
    user,
    name,
    viewNum,
    replyNum,
    updatedAt
}) => {
    const fitNameToUrl = name => {
        return name.replace(/([\s.,'"!?()]+)/, "-");
    };

    return (
        <div className={styles.container}>
            <div className={styles.small_item}>
                <img src={user.avatarUrl}>{user.name}</img>
            </div>
            <div className={styles.big_item}>
                <Link
                    to={{
                        pathname: `/${forumName}/${fitNameToUrl(name)}`,
                        search: "",
                        hash: "",
                        state: { forumId: forumId, topicId: _id }
                    }}
                >
                    {name}
                </Link>
            </div>
            <div className={styles.small_item}>{replyNum}</div>
            <div className={styles.small_item}>{viewNum}</div>
            <div className={styles.small_item}>{updatedAt}</div>
        </div>
    );
};

TopicItem.propTypes = {
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
};

export default TopicItem;
