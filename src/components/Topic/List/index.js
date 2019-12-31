import React from "react";
import PropTypes from "prop-types";
import Item from "components/Topic/Item";

const List = ({ items }) => (
    <ul>
        {items.map(item => (
            <Item {...item} />
        ))}
    </ul>
);

List.propTypes = {
    topics: PropTypes.arrayOf(
        PropTypes.shape({
            forum: PropTypes.string.isRequired,
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

export default List;
