import React from "react";
import Toggle from "components/Forum/ListToggle";
import Filter from "components/Forum/ListFilter";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const ListController = ({ sortingTargetToMethod, toggleSortingMethod }) => (
    <div className={styles.controller}>
        {Object.keys(sortingTargetToMethod).map(target => (
            <Toggle
                sortingTarget={target}
                sortingMethods={sortingTargetToMethod[target]}
                toggleMethod={toggleSortingMethod}
            />
        ))}
    </div>
);

ListController.propTypes = {
    sortingTargetToMethod: PropTypes.object.isRequired,
    toggleSortingMethod: PropTypes.func.isRequired
};

export default ListController;
