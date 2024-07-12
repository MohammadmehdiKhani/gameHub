import GameCard from "../GameCard/GameCard";
import styles from "./GameGrid.module.scss";
import useGames from "../../hooks/useGames";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import React from "react";
import { Genre } from "../../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

export default function GameGrid({selectedGenre} : Props) {
  const { data: games, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <React.Fragment>
      {isLoading && (
        <div className={styles.gameGrid}>
          {skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        </div>
      )}

      {!isLoading && (
        <div className={styles.gameGrid}>
          {games.map((game) => (
            <GameCard game={game}></GameCard>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
