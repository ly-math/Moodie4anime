import React from "react";
import styles from "../styles/search-bar.module.css";

function SearchBar() {
  return (
    <div className={styles.wrapper} id="wrapper">
      <form action="" className={styles.search_bar}>
        <input type="text" name="search" placeholder="Search for anime..." />
        <button className={styles.search_btn} type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
