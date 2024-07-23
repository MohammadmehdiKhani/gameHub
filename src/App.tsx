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
import SearchInput from "./components/searchInput/SearchInput";
import GameGridHeading from "./components/GameGridHeading/GameGridHeading";

export interface gameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
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
          <GameGridHeading gameQuery={gameQuery} />
          <div className={styles.selectorsRow}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform: Platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            ></PlatformSelector>
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
            <SearchInput
              setSearchedText={(text: string) =>
                setGameQuery({ ...gameQuery, searchText: text })
              }
            ></SearchInput>
          </div>
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </>
  );
}

export default App;
