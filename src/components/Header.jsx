import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

function Header() {
  const [isClicked, setIsClicked] = useState(false);
  const headerRef = useRef(null);

  const handleDocumentClick = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  // console.log(isClicked);

  return (
    <div className={styles.wrapper} id="wrapper" ref={headerRef}>
      <div className={styles.emoji_logo}>🍿</div>
      <Link className={styles.logo} to="/Moodie4anime">
        Mo0die
      </Link>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faSearch} onClick={() => setIsClicked(true)} />
      </div>
      {isClicked && <SearchBar />}
    </div>
  );
}

export default Header;
