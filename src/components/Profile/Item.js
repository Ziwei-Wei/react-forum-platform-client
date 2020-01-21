import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { fitNameToUrl, formatDate } from "utility/utility";
import styles from "./Item.module.css";

const Item = ({ forumName, forumId, topicName, topicId, createdAt }) => {
    return (
        <div className={styles.container}>
            <div className={styles.small_item}>
                <Link
                    className={styles.link}
                    to={{
                        pathname: `/forum/${forumName})}`,
                        search: "",
                        hash: "",
                        state: {
                            forumId: forumId
                        }
                    }}
                >
                    {forumName}
                </Link>
            </div>
            <div className={styles.small_item}>
                <Link
                    className={styles.link}
                    to={{
                        pathname: `/forum/${forumName}/topic/${fitNameToUrl(
                            topicName
                        )}`,
                        search: "",
                        hash: "",
                        state: {
                            forumId: forumId,
                            topicId: topicId
                        }
                    }}
                >
                    {topicName}
                </Link>
            </div>

            <div className={styles.small_item_date}>{createdAt}</div>
        </div>
    );
};

Item.propTypes = {
    forumName: PropTypes.string.isRequired,
    forumId: PropTypes.string.isRequired,
    topicName: PropTypes.string.isRequired,
    topicId: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
};

export default Item;
