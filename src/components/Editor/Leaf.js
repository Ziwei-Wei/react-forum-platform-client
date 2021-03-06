import React from "react";
import PropTypes from "prop-types";

const Leaf = ({ attributes, children, leaf }) => {
  return <span {...attributes}>{formatLeaf(leaf, children)}</span>;
};

const formatLeaf = (leaf, children) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.code) {
    children = <code>{children}</code>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return children
}

Leaf.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  leaf: PropTypes.shape({
    bold: PropTypes.bool,
    code: PropTypes.bool,
    italic: PropTypes.bool,
    underline: PropTypes.bool
  }).isRequired
};

export { Leaf, formatLeaf };
