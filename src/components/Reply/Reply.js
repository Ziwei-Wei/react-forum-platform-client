import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Reply = ({ author, content, createdAt }) => (
    <li>
        <Link to={`/user/${author}`}>
            <div>
                <img>{author}</img>
                <div>{createdAt}</div>
            </div>
        </Link>
        <div>{content}</div>
    </li>
);

Reply.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
};

export default Reply;
