import React from "react";

import { MdClear } from "react-icons/md"

/**
 * Tag is a colored small panel that shows some text or icon
 */
const Tag = ({ children, id, onDelete }) => {

    const handleDelete = () => {
        onDelete(id)
    }

    return (
        <div>
            {children}
            <button onClick={handleDelete}><MdClear /></button>
        </div>
    )
}

export default Tag;