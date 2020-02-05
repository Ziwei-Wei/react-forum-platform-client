import React from "react";

import { MdClear } from "react-icons/md"

import styles from "./index.module.css"

/**
 * Tag is a colored small panel that shows some text or icon
 */
const Tag = ({ children, id, onDelete }) => {

    const handleDelete = event => {
        console.log("button")
        event.preventDefault()
        onDelete(id)
    }

    return (
        <div className={styles.container}>
            {children}
            <button className={styles.button} type="button" onClick={handleDelete}><MdClear /></button>
        </div>
    )
}

export default Tag;