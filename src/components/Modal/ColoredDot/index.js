import React from "react";

/**
 * Tag is a colored small panel that shows some text or icon
 */
const ColoredDot = ({ color, className }) => {
    const indexIconStyle = {
        display: "inline-block",
        borderRadius: "50%",
        width: "8px",
        height: "8px",
        backgroundColor: color
    };

    return (
        <span className={className} style={indexIconStyle} />
    )
}

export default ColoredDot;