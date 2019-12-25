import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const Reply = ({ id, author, content, likes, createdAt, onLikeClick }) => (
    <li>
        <div>
            <img>{author}</img>
            <div>{id}</div>
            <div>{createdAt}</div>
        </div>
        <div>
            <p>{content}</p>
        </div>
        <div>
            <Button onClick={onLikeClick}>like</Button>
            <div>{likes}</div>
        </div>
    </li>
);

Reply.propTypes = {
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    onLikeClick: PropTypes.func.isRequired
};

export default Reply;
