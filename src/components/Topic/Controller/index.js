import React from "react";
import Toggle from "components/Topic/Toggle";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const TopicListController = ({
    sortingTargetToMethod,
    toggleSortingMethod
}) => {
    return (
        <div className={styles.container}>
            {Object.keys(sortingTargetToMethod).map(target => (
                <Toggle
                    sortingTarget={target}
                    sortingMethods={sortingTargetToMethod[target]}
                    toggleMethod={toggleSortingMethod}
                />
            ))}
        </div>
    );
};

TopicListController.propTypes = {
    sortingTargetToMethod: PropTypes.object.isRequired,
    toggleSortingMethod: PropTypes.func.isRequired
};

export default TopicListController;
