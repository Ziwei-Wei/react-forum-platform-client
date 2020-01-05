import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const Toggle = ({ name, topicSortMethods, toggleSortMethod }) => {
    const [topicSort, setTopicSort] = useState("");

    const afterSwitch = () => {
        toggleSortMethod(topicSort);
    };

    const switchTopicSort = () => {
        switch (topicSort) {
            case topicSortMethods.asc:
                setTopicSort(topicSortMethods.des);
                break;
            case topicSortMethods.des:
                setTopicSort(topicSortMethods.asc);
                break;
            default:
                setTopicSort(topicSortMethods.des);
                break;
        }
    };

    useEffect(() => {
        afterSwitch();
    }, [topicSort]);

    return (
        <>
            <button onClick={switchTopicSort}>{name}</button>
        </>
    );
};

const ListController = ({ topicSortMethods, toggleSortMethod }) => {
    return (
        <div className={styles.container}>
            <div className={styles.big_item}>
                <Toggle
                    name="Topic"
                    topicSortMethods={topicSortMethods.name}
                    toggleSortMethod={toggleSortMethod}
                />
            </div>
            <div className={styles.small_item}>
                <Toggle
                    name="Replies"
                    topicSortMethods={topicSortMethods.name}
                    toggleSortMethod={toggleSortMethod}
                />
            </div>
            <div className={styles.small_item}>
                <Toggle
                    name="Views"
                    topicSortMethods={topicSortMethods.name}
                    toggleSortMethod={toggleSortMethod}
                />
            </div>
            <div className={styles.small_item}>
                <Toggle
                    name="Activity"
                    topicSortMethods={topicSortMethods.name}
                    toggleSortMethod={toggleSortMethod}
                />
            </div>
        </div>
    );
};
ListController.propTypes = {
    topicSortMethods: PropTypes.object.isRequired,
    toggleSortMethod: PropTypes.func.isRequired
};

export default ListController;
