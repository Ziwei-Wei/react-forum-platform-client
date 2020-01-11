import React from "react";
import PropTypes from "prop-types";

import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const Emoji = ({ addEmoji }) => {
  return (
    <Picker
      title=""
      emoji="yum"
      native={true}
      onClick={addEmoji}
      style={{ width: "365px" }}
    />
  );
};

Emoji.propTypes = {
  addEmoji: PropTypes.func.isRequired
};

export default Emoji;
