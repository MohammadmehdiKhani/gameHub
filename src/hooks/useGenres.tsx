import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

export default function useGenres() {
  return useData<Genre>("/genres");
}
