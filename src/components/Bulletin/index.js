import React, { useState, useEffect } from "react";

import RichTextEditPanel from "components/Editor/RichTextEditPanel"

import Content from "components/Content";
import styles from "./index.module.css";

const DEFAULT = [
    {
        type: "paragraph",
        children: [{ text: "Waiting to be edited!" }]
    }
];

const Bulletin = ({ value, isEditable }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [content, setContent] = useState(value || DEFAULT);

    const handleContentChange = value => {
        setContent(value)
    }

    const startEditing = () => {
        setIsEditing(true)
    }

    const endEditing = () => {
        setIsEditing(false)
    }

    useEffect(() => {
        console.log(content)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                {isEditing ? null : <Content node={content} />}
                {isEditable ?
                    isEditing ?
                        <div>
                            <RichTextEditPanel value={content} onChange={handleContentChange} />
                            <button className={styles.button} onClick={endEditing}>confirm</button>
                        </div>
                        : <button className={styles.button} onClick={startEditing}>edit</button>
                    : <></>}
            </div>

        </div>
    );
};

export default Bulletin;


