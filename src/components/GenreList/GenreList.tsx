import { CircularProgress } from "@mui/material";
import useGenres from "../../hooks/useGenres";
import styles from "./GenreList.module.scss";
import React, { useEffect } from "react";

export default function GenreList() {
  const { data: genres, isLoading } = useGenres();

  return (
    <React.Fragment>
      {isLoading ? (
        <div>
          <CircularProgress disableShrink  />
        </div>
      ) : (
        genres.map((g) => (
          <div className={styles.genre}>
            <img src={g.image_background} className={styles.genreImage} />
            <div>{g.name}</div>
          </div>
        ))
      )}
    </React.Fragment>
  );
}
