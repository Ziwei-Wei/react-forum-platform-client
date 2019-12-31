import React from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";

const Topic = ({ onClick, author, title, category, tags }) => <li>{text}</li>;

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Topic;
