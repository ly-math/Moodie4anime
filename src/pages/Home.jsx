import Header from "../components/Header";
import styles from "../styles/home.module.css";
import { useNavigate } from "react-router-dom";
import moods from "../utils/moods";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const handleMoodClick = (mood, genre) => {
    navigate(`/mood/${mood}`, {
      state: { genreID: genre },
    });
  };

  return (
    <div className={styles.home_container} id="wrapper">
      <Header />
      <div className={styles.text}>
        <h1>Discover Anime Based on Your Mood</h1>
        <p>How are you feeling today?</p>
      </div>
      <div className={styles.content}>
        {moods.map((mood, i) => (
          <button
            className={styles.links}
            key={i}
            onClick={() => handleMoodClick(mood.name, mood.genre)}
          >
            {mood.name}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
