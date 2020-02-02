import React, { useState, useRef } from "react";
import axios from "axios"

/**
 * SubmitButton is a button that used to submit data to server
 * @param {Object} request
 */
const SubmitButton = ({ children, url, data, accessToken }) => {
    const onClick = async () => {
        await axios.post(
            url,
            data,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        )
    }
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default SubmitButton;