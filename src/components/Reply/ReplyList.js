import React from "react";
import Reply from "./Reply";
import PropTypes from "prop-types";

const ReplyList = ({ replies }) => (
    <>
        <ul>
            {replies.map(reply => (
                <Reply {...reply} />
            ))}
        </ul>
    </>
);

ReplyList.propTypes = {
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
export default ReplyList;
