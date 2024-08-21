import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "77c5f5def0ee4ceca46c6a723b51da2f",
  },
});
