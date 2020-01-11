import React, { useRef, useState, useEffect } from "react";
import { Editor } from "slate";

import styles from "./Buttons.module.css";
import axios from "axios";

import PropTypes from "prop-types";

const SendButton = ({ children, forumId, topicId, token }) => {
    return (
        <button
            className={styles.button}
            onClick={event => {
                event.preventDefault();
                const data = localStorage.getItem("content");
                axios.post(
                    `/api/forum/${forumId}/topic/${topicId}/reply`,
                    data,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            }}
        >
            {children}
        </button>
    );
};

const ClearMarkButton = ({ editor, children }) => {
    return (
        <button
            className={styles.icon_button}
            onMouseDown={event => {
                event.preventDefault();
                const marks = Editor.marks(editor);
                Object.keys(marks).map(mark => {
                    Editor.removeMark(editor, mark);
                });
            }}
        >
            {children}
        </button>
    );
};

ClearMarkButton.propTypes = {
    editor: PropTypes.object.isRequired,
    children: PropTypes.func.isRequired
};

const DropDownButton = ({ children, content }) => {
    const [state, setState] = useState(false);
    const buttonRef = useRef(null);
    const Content = content;

    const handleOnClick = () => {
        switch (state) {
            case true:
                setState(false);
                break;
            case false:
                setState(true);
                break;
            default:
                setState(false);
        }
        console.log(state);
    };

    const handleClickOutside = event => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setState(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <>
            <button
                className={styles.icon_button}
                active={state}
                onClick={handleOnClick}
                ref={buttonRef}
            >
                {children}
            </button>
            <div className={styles.dropdown}>{state ? <Content /> : ""}</div>
        </>
    );
};

DropDownButton.propTypes = {
    children: PropTypes.func.isRequired,
    content: PropTypes.func.isRequired
};

export { ClearMarkButton, DropDownButton, SendButton };
