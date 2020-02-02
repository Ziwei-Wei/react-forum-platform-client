import React, { useState, useRef, useEffect } from "react";

import axios from "axios"

import TagPoolEditor from "components/Modal/TagPoolEditor"

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
    const [categories, setCategories] = useState([])

    const formRef = useRef()
    useOutsideAlerter(formRef, onHide)

    const handleAddOneCategory = category => {
        if (categories.includes(category)) {
            setCategories(categories.push(category).sort())
        }
    }

    const handleDeleteOneCategory = id => {
        setCategories(categories.filter((_, index) => (id != index)).sort())
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(url, {
            name: name,
            description: description,
            category: categories
        }, { headers: { Authorization: `Bearer ${accessToken}` } })
        setName("")
        setDescription("")
        setCategories([])
        onSubmit()
    }

    return (
        <>
            {visibility ?
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label for="name">Name: </label>
                    <input id="name" type="text" value={name} onChange={handleNameChange} />
                    <label for="description">Description: </label>
                    <input id="description" type="text" value={description} onChange={handleDescriptionChange} />
                    <TagPoolEditor tags={categories} addOne={handleAddOneCategory} deleteOne={handleDeleteOneCategory} />
                    <button type="submit"> Create </button>
                </form>
                : null
            }
        </>
    )
}

export default CreateForumModal;