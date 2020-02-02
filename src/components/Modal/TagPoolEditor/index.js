import React, { useState } from "react";

import TagPool from "components/Modal/TagPool"

/**
 * An editor that used to edit(add/remove) collection of element
 */
const TagPoolEditor = ({ tags, deleteOne, addOne }) => {
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
            <input value={tag} onChange={handleCategoryChange} onKeyDown={handleKeyDown} />
            <TagPool tags={tags} deleteOne={deleteOne} />
        </div>
    )
}

export default TagPoolEditor;