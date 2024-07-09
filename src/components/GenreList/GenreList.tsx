import useGenres from "../../hooks/useGenres";
import styles from "./GenreList.module.scss";
import React from "react";

export default function GenreList() {
  const { data: genres } = useGenres();

  return (
    <React.Fragment>
      {genres.map((g) => (
        <div className={styles.genre}>
            <img src={g.image_background} className={styles.genreImage} />
            <div>{g.name}</div>
        </div>
      ))}
    </React.Fragment>
  );
}