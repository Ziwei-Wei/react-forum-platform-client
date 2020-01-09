import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getColor } from "utility/utility";
import styles from "./index.module.css";

const Title = ({ forumId, title, category, tags, updatedAt }) => {
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
                <div className={styles.title}>{title}</div>
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
        </div>
    );
};

Title.propTypes = {
    forumId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
    updatedAt: PropTypes.string.isRequired
};
export default Title;
