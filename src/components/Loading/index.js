import React from "react";

import styles from "./index.module.css";

const Loading = isLoading => (
    <div className={styles.loading_icon}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Loading;
