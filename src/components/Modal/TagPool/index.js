import React from "react";
import { getColor } from "utility/utility"

import ColoredDot from "components/Modal/ColoredDot"
import Tag from "components/Modal/Tag"

import styles from "./index.module.css"

/**
 * Tag is a colored small panel that shows some text or icon
 */
const TagPool = ({ tags, deleteOne }) => {
    return (
        <div className={styles.tag_pool}>
            {tags.map((tag, index) => {
                return <Tag id={index} onDelete={deleteOne}><ColoredDot color={getColor(tag)} />{tag}</Tag>
            })}
        </div>
    )
}

export default TagPool;