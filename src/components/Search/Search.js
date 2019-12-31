import React from "react";
import styles from "./Search.module.css";

const Search = () => (
    <div className={styles.Search}>
        <i class="fas fa-search" />
        <input type="text" placeholder="Search ..." />
    </div>
);

export default Search;
