import React from "react";
import PropTypes from "prop-types";

const TopicTitle = ({ author, title, category, tags }) => (
    <>
        <div>
            <img>{author}</img>
            <h>{title}</h>
            <h>{category}</h>
            <h>{tags}</h>
        </div>
    </>
);

TopicTitle.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default TopicTitle;
