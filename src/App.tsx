import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GameGrid from "./components/Gamegrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import styles from "./App.module.scss";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelctor/SortSelector";

export interface gameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.genresList}>
          <GenreList
            onSelectedGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </div>

        <div className={styles.gameGrid}>
          <div className={styles.selectorsRow}>
            <PlatformSelector
              onSelectPlatform={(platform: Platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            ></PlatformSelector>
            <SortSelector></SortSelector>
          </div>
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </>
  );
}

export default App;
