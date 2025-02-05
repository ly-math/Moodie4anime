import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/mood.module.css";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function Mood() {
  const location = useLocation();
  const genreID = location.state.genreID;

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [animeData, setAnimeData] = useState([]);

  async function fetchGenreData() {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?genres=${genreID}&order_by=score&sort=desc&page=${currentPage}&limit=1`
      );
      const dataJson = await response.json();
      setAnimeData(dataJson.data);
      console.log(dataJson.data);
    } catch (error) {
      console.error("Error fetching anime:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchGenreData();
  }, [currentPage]);

  const onNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const onPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const onRandomPage = () => {
    let randomPage = Math.floor(Math.random() * 100 + 1);
    setCurrentPage(randomPage);
  };
  // console.log(currentPage);

  return (
    <div className={styles.container} id="wrapper">
      <Header />
      {isLoading ? (
        <h1 color="white">Loading...</h1>
      ) : (
        animeData.map((anime, i) => (
          <div key={i}>
            <img src={anime.images.jpg.large_image_url} alt="anime_image" />
            <div>
              <p>{anime.title ? anime.title : title_japanese}</p>
            </div>
            <button onClick={onPrevPage}>Back</button>
            <button onClick={onRandomPage}>Random</button>
            <button onClick={onNextPage}>Next</button>
          </div>
        ))
      )}
      <Footer />
    </div>
  );
}

export default Mood;
