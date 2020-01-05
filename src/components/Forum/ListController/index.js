import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const ListController = ({ forumSortMethods, toggleSortMethod }) => {
    const [forumSort, setForumSort] = useState("");

    const afterSwitch = () => {
        toggleSortMethod(forumSort);
    };

    const switchForumSort = () => {
        switch (forumSort) {
            case forumSortMethods.asc:
                setForumSort(forumSortMethods.des);
                break;
            case forumSortMethods.des:
                setForumSort(forumSortMethods.asc);
                break;
            default:
                setForumSort(forumSortMethods.des);
                break;
        }
    };

    useEffect(() => {
        afterSwitch();
    }, [forumSort]);

    return (
        <div className={styles.container}>
            <div className={styles.small_item}>
                <button
                    className={styles.text_button}
                    onClick={switchForumSort}
                >
                    forum
                </button>
            </div>
            <div className={styles.small_item}>category</div>
            <div className={styles.big_item}>description</div>
        </div>
    );
};
ListController.propTypes = {
    sortingTargetToMethod: PropTypes.object.isRequired,
    toggleSortingMethod: PropTypes.func.isRequired
};

export default ListController;
