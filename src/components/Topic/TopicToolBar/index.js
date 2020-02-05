import React, { useState, useRef } from "react";

import CreateTopicModal from "components/Modal/CreateTopicModal"
import { MdPlaylistAdd } from "react-icons/md"
import axios from "axios";


import styles from "./index.module.css"

const TopicToolBar = ({ url, accessToken, onSubmit }) => {
    const [visibility, setVisibility] = useState(false)

    return (
        <div className={styles.container}>
            <button className={styles.modal} onClick={() => { setVisibility(true) }}> <MdPlaylistAdd /></button>
            <CreateTopicModal
                url={url}
                accessToken={accessToken}
                visibility={visibility}
                onHide={() => { setVisibility(false) }}
                onSubmit={async () => {
                    try {
                        await axios.get(url);
                        onSubmit()
                        setVisibility(false)
                    } catch (error) {
                        console.log(error)
                    }
                }}
            />
        </div>
    )
}

export default TopicToolBar