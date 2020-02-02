import React from "react";

/**
 * Tag is a colored small panel that shows some text or icon
 */
const ColoredDot = ({ color }) => {
    const indexIconStyle = {
        display: "inline-block",
        borderRadius: "50%",
        width: "8px",
        height: "8px",
        backgroundColor: color
    };

    return (
        <span style={indexIconStyle} />
    )
}

export default ColoredDot;