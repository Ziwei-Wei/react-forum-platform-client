import React, { useState, useRef, useEffect } from "react";

import axios from "axios"

import TagEditor from "components/Modal/TagEditor"

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
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const formRef = useRef()
    useOutsideAlerter(formRef, onHide)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(url, {
                name: name,
                description: description,
                category: category
            }, { headers: { Authorization: `Bearer ${accessToken}` } })
            setName("")
            setDescription("")
            setCategory("")
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
                        <label className={styles.item} >Description: </label>
                        <input className={styles.input} type="text" value={description} onChange={handleDescriptionChange} />
                        <label className={styles.item} >Category: </label>
                        <TagEditor value={category} onChange={handleCategoryChange} />
                        <button className={styles.button} onClick={handleSubmit} type="button"> Create </button>
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default CreateForumModal;