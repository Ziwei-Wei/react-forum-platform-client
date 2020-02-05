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

const Bulletin = ({ value, isEditable, onSubmit, onChange }) => {
    const [isEditing, setIsEditing] = useState(false)

    const handleContentChange = value => {
        onChange(value)
    }

    const startEditing = () => {
        setIsEditing(true)
    }

    const endEditing = () => {
        setIsEditing(false)
        onSubmit()
    }

    useEffect(() => {
        if (value == null || value == undefined) {
            onChange(DEFAULT)
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                {isEditing ? null : <Content node={value} />}
                {isEditable ?
                    isEditing ?
                        <div>
                            <RichTextEditPanel value={value} onChange={handleContentChange} />
                            <button className={styles.button} onClick={endEditing}>confirm</button>
                        </div>
                        : <button className={styles.button} onClick={startEditing}>edit</button>
                    : <></>}
            </div>
        </div>
    );
};

export default Bulletin;


