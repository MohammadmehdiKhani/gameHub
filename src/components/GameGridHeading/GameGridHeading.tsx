import { gameQuery } from "../../App";

interface Props {
  gameQuery: gameQuery;
}

export default function GameGridHeading({ gameQuery }: Props) {
  return (
    <h1>
      {gameQuery?.platform?.name || ""} {gameQuery?.genre?.name || ""} Games
    </h1>
  );
}
