import React from "react";

import Content from "components/Content";
import styles from "./index.module.css";

const Bulletin = () => {
    let defaultData = {
        children: [
            {
                type: "paragraph",
                children: [
                    { text: "An opening paragraph with a " },
                    {
                        type: "link",
                        url: "https://example.com",
                        children: [{ text: "link" }]
                    },
                    { text: " in it." }
                ]
            },
            {
                type: "quote",
                children: [{ text: "A wise quote." }]
            },
            {
                type: "paragraph",
                children: [{ text: "A closing paragraph!" }]
            }
        ]
    };

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Content node={defaultData} />
            </div>
        </div>
    );
};

export default Bulletin;


