import { CircularProgress } from "@mui/material";
import useGenres, { Genre } from "../../hooks/useGenres";
import styles from "./GenreList.module.scss";
import React from "react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null
}

export default function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  const { data: genres, isLoading } = useGenres();

  return (
    <React.Fragment>
      {isLoading ? (
        <div>
          <CircularProgress disableShrink />
        </div>
      ) : (
        genres?.results.map((g) => (
          <div className={g.id === selectedGenre?.id? styles.selectedGenre :styles.genre} onClick={() => onSelectedGenre(g)}>
            <img src={g.image_background} className={styles.genreImage} />
            <div>{g.name}</div>
          </div>
        ))
      )}
    </React.Fragment>
  );
}
