import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GameGrid from "./components/Gamegrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.genresList}>
          <GenreList />
        </div>

        <div className={styles.gameGrid}>
          <GameGrid />
        </div>
      </div>
    </>
  );
}

export default App;
