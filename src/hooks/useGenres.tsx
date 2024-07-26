import genres from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default function useGenres() {
  return { data: genres, isLoading: false };
}
