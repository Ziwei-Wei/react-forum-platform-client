import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const Toggle = ({ sortingTarget, sortingMethods, toggleMethod }) => {
    const [method, setMethod] = useState("");
    const onClick = () => {
        switch (method) {
            case sortingMethods.asc:
                setMethod(sortingMethods.des);
                break;
            case sortingMethods.des:
                setMethod(sortingMethods.asc);
                break;
            default:
                setMethod(sortingMethods.des);
                break;
        }
        toggleMethod(method);
    };

    return (
        <div>
            <button className={styles.toggle} onClick={onClick}>
                {sortingTarget}
            </button>
        </div>
    );
};

Toggle.propTypes = {
    sortingTarget: PropTypes.string.isRequired,
    sortingTargetAsc: PropTypes.string.isRequired,
    sortingTargetDes: PropTypes.string.isRequired,
    toggleMethod: PropTypes.func.isRequired
};

export default Toggle;
