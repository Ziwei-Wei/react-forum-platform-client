import React from "react";
import PropTypes from "prop-types";
import Item from "components/Forum/Item";

const List = ({ forums }) => (
    <ul>
        {forums.map(forum => (
            <Item {...forum} />
        ))}
    </ul>
);

List.propTypes = {
    topics: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired
        }).isRequired
    ).isRequired
};

export default List;
