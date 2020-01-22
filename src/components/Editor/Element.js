import React from "react";
import PropTypes from "prop-types";

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const formatElement = (children, element) => {
  switch (element.type) {
    case "bulleted-list":
      return <ul>{children}</ul>;
    case "numbered-list":
      return <ol>{children}</ol>;
    default:
      return <p>{children}</p>;
  }
}

Element.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  element: PropTypes.shape({
    type: PropTypes.string
  }).isRequired
};

export { Element, formatElement };
