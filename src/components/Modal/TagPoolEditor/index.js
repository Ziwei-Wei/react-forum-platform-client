import React, { useState, useEffect } from "react";

import TagPool from "components/Modal/TagPool"

import styles from "./index.module.css"

/**
 * An editor that used to edit(add/remove) collection of element
 */
const TagPoolEditor = ({ value, deleteOne, addOne }) => {
    const [tag, setTag] = useState("")


    const handleCategoryChange = event => {
        setTag(event.target.value)
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            addOne(tag)
            setTag("")
        }
    }

    return (
        <div>
            <TagPool tags={value} deleteOne={deleteOne} />
            <input className={styles.input} value={tag} onChange={handleCategoryChange} onKeyDown={handleKeyDown} />
        </div>
    )
}

export default TagPoolEditor;