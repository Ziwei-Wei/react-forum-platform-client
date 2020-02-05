import React, { useState, useRef } from "react";

import CreateForumModal from "components/Modal/CreateForumModal"
import { MdPlaylistAdd } from "react-icons/md"

import styles from "./index.module.css"

const ForumToolBar = ({ url, accessToken, onNewForum }) => {
    const [visibility, setVisibility] = useState(false)

    return (
        <div className={styles.container}>
            <button className={styles.modal} onClick={() => { setVisibility(true) }}> <MdPlaylistAdd /></button>
            <CreateForumModal
                url={url}
                accessToken={accessToken}
                visibility={visibility}
                onHide={() => { setVisibility(false) }}
                onSubmit={() => {
                    setVisibility(false)
                    onNewForum()
                }}
            />
        </div>
    )
}

export default ForumToolBar