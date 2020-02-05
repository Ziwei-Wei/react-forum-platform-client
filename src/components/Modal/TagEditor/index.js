import React, { useState } from "react";

import ColoredDot from "components/Modal/ColoredDot"

import { getColor } from "utility/utility"

import styles from "./index.module.css"

/**
 * An editor that used to edit(add/remove) collection of element
 */
const TagEditor = ({ value, onChange }) => {
    return (
        <div className={styles.container}>
            <ColoredDot className={styles.dot} color={getColor(value)} />
            <input className={styles.input} value={value} onChange={onChange} />
        </div>
    )
}

export default TagEditor;