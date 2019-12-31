import React from "react";
import Toggle from "../Toggle";
import PropTypes from "prop-types";

const TopicListController = ({
    sortingTargetToMethod,
    toggleSortingMethod
}) => {
    return (
        <div>
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
