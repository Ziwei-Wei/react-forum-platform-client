import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TopicItem = ({
    forum,
    author,
    title,
    category,
    tags,
    views,
    replies,
    activity
}) => {
    return (
        <Link to={`/${forum}/${title}`}>
            <li>
                <div>{author}</div>
                <div>{title}</div>
                <div>{category}</div>
                <div>{tags}</div>
                <div>{views}</div>
                <div>{replies}</div>
                <div>{activity}</div>
            </li>
        </Link>
    );
};

TopicItem.propTypes = {
    forum: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    views: PropTypes.number.isRequired,
    replies: PropTypes.number.isRequired,
    activity: PropTypes.string.isRequired
};

export default TopicItem;
