import React from "react";
import Reply from "./Reply";
import PropTypes from "prop-types";

const Discussion = ({ author, title, category, tags, replies }) => (
    <>
        <div>
            <img>{author}</img>
            <h>{title}</h>
            <h>{category}</h>
            <h>{tags}</h>
        </div>
        <div>
            <ul>
                {replies.map((reply, index) => (
                    <Reply {...reply} />
                ))}
            </ul>
        </div>
    </>
);

Discussion.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    replies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            createdAt: PropTypes.string.isRequired,
            onLikeClick: PropTypes.func.isRequired
        }).isRequired
    ).isRequired
};
export default Discussion;
