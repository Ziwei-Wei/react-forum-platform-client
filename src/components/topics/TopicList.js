import React from "react";
import PropTypes from "prop-types";
import TopicItem from "./TopicItem";

const TopicList = ({ topics }) => (
    <ul>
        {topics.map(topic => (
            <TopicItem {...topic} />
        ))}
    </ul>
);

TopicList.propTypes = {
    topics: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
            views: PropTypes.number.isRequired,
            replies: PropTypes.number.isRequired,
            activity: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default TopicList;
