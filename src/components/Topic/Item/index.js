import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { fitNameToUrl, getColor } from "utility/utility";
import styles from "./index.module.css";

const TopicItem = ({
    forumName,
    forumId,
    category,
    tags,
    _id,
    user,
    name,
    viewNum,
    replyNum,
    updatedAt
}) => {
    const indexIconStyle = {
        display: "inline-block",
        borderRadius: "50%",
        width: "8px",
        height: "8px",
        backgroundColor: getColor(category.name)
    };

    return (
        <div className={styles.container}>
            <div className={styles.big_item}>
                <Link
                    className={styles.link}
                    to={{
                        pathname: `/forum/${forumName}/topic/${fitNameToUrl(
                            name
                        )}`,
                        search: "",
                        hash: "",
                        state: {
                            forumId: forumId,
                            topicId: _id,
                            title: name,
                            category: category,
                            tags: tags,
                            updatedAt: updatedAt
                        }
                    }}
                >
                    {name}
                </Link>
                <div>
                    <Link className={styles.link}>
                        <span style={indexIconStyle}></span>
                        <span className={styles.category_text}>
                            {category.name}
                        </span>
                    </Link>
                    {tags.map(tag => {
                        return (
                            <Link
                                className={styles.link}
                                to={{
                                    pathname: `/tag/${tag.name}`,
                                    search: "",
                                    hash: "",
                                    state: { forumId: forumId }
                                }}
                            >
                                <span className={styles.tag_text}>
                                    {tag.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className={styles.small_item}>
                <Link
                    className={styles.link}
                    to={{
                        pathname: `/user/${user.username}`,
                        search: "",
                        hash: "",
                        state: {}
                    }}
                >
                    <img className={styles.circle_img} src={user.avatarUrl}>
                        {user.name}
                    </img>
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
