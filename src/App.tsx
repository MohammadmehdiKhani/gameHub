import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GameGrid from "./components/Gamegrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import styles from "./App.module.scss";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.genresList}>
          <GenreList
            onSelectedGenre={(genre: Genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </div>

        <div className={styles.gameGrid}>
          <GameGrid selectedGenre={selectedGenre} />
        </div>
      </div>
    </>
  );
}

export default App;
