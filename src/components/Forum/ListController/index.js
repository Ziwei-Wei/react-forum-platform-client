import React, { useState, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const ListController = ({ forumSortMethods, toggleSortMethod }) => {
    const [forumSort, setForumSort] = useState("");


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
        toggleSortMethod(forumSort);
    };

    return (
        <div className={styles.container}>
            <div className={styles.small_item}>
                <button
                    className={styles.text_button}
                    onClick={switchForumSort}
                >
                    Forum
                </button>
            </div>
            <div className={styles.big_item}>Description</div>
        </div>
    );
};
ListController.propTypes = {
    sortingTargetToMethod: PropTypes.object.isRequired,
    toggleSortingMethod: PropTypes.func.isRequired
};

export default ListController;
