import React from "react";
import PropTypes from "prop-types";

import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const Emoji = ({ onPicked }) => {
  return (
    <Picker
      title=""
      emoji="yum"
      native={true}
      onSelect={onPicked}
      style={{ width: "365px" }}
    />
  );
};

Emoji.propTypes = {
  addEmoji: PropTypes.func.isRequired
};

export default Emoji;
