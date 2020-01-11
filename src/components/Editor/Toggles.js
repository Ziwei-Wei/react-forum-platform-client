import React from "react";
import {
  toggleMark,
  isMarkActive,
  toggleBlock,
  isBlockActive
} from "./controller";

import styles from "./Toggles.module.css";

import PropTypes from "prop-types";

const MarkToggle = ({ editor, format, children }) => {
  return (
    <button
      className={styles.icon_toggle}
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {children}
    </button>
  );
};

MarkToggle.propTypes = {
  editor: PropTypes.object.isRequired,
  format: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired
};

const BlockToggle = ({ editor, format, children }) => {
  return (
    <button
      className={styles.icon_toggle}
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {children}
    </button>
  );
};

BlockToggle.propTypes = {
  editor: PropTypes.object.isRequired,
  format: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired
};

export { MarkToggle, BlockToggle };
