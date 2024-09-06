import GameCard from "../GameCard/GameCard";
import styles from "./GameGrid.module.scss";
import useGames from "../../hooks/useGames";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import React from "react";
import { gameQuery } from "../../App";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: gameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const { data, isLoading, fetchNextPage, hasNextPage } =
  useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchedGamesSoFar =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

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
        <InfiniteScroll
          dataLength={fetchedGamesSoFar}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<h4>Loading...</h4>}
        >
          <div className={styles.gameGrid}>
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCard game={game}></GameCard>
                ))}
              </React.Fragment>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </React.Fragment>
  );
}
