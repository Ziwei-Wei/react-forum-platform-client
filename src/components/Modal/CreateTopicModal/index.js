import React, { useState, useRef, useEffect } from "react";

import axios from "axios"

import { HOTKEYS, INIT } from "components/Editor/constants";

import TagEditor from "components/Modal/TagEditor"
import TagPoolEditor from "components/Modal/TagPoolEditor"
import RichTextEditPanel from "components/Editor/RichTextEditPanel"

import styles from "./index.module.css"

/**
 * handler that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, action) {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            action();
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

/**
 * CreateForumModal is a modal that used to create a forum
 */
const CreateForumModal = ({ url, accessToken, visibility, onHide, onSubmit }) => {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [tags, setTags] = useState([])
    const [content, setContent] = useState(INIT);

    const formRef = useRef()
    useOutsideAlerter(formRef, onHide)

    const handleAddOneTag = tag => {
        if (!tags.includes(tag)) {
            setTags([...tags, tag].sort())
        }
    }
    const handleDeleteOneTag = id => {
        setTags(tags.filter((_, index) => (index != id)))
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handleCategoryChange = event => {
        setCategory(event.target.value)
    }

    const handleContentChange = value => {
        setContent(value)
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            console.log({
                topicName: name,
                category: category,
                tags: tags,
                content: content
            })
            await axios.post(url, {
                topicName: name,
                category: category,
                tags: tags,
                content: { children: content },
            }, { headers: { Authorization: `Bearer ${accessToken}` } })
            setName("")
            setCategory("")
            setTags([])
            setContent(INIT)
            onSubmit()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {visibility ?
                <div className={styles.container}>
                    <div className={styles.modal} ref={formRef} >
                        <label className={styles.item} >Name: </label>
                        <input className={styles.input} type="text" value={name} onChange={handleNameChange} />
                        <label className={styles.item} >Category: </label>
                        <TagEditor value={category} onChange={handleCategoryChange} />
                        <label className={styles.item} >Tags: </label>
                        <TagPoolEditor value={tags} addOne={handleAddOneTag} deleteOne={handleDeleteOneTag} />
                        <label className={styles.item} >Content: </label>
                        <RichTextEditPanel value={content} onChange={handleContentChange} />
                        <button className={styles.button} onClick={handleSubmit} type="button"> Create </button>
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default CreateForumModal;