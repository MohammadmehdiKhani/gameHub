import "./App.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GameGrid from "./components/Gamegrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";

function App() {
  return (
    <>
      <div>
        <GenreList></GenreList>
        <GameGrid></GameGrid>
      </div>
    </>
  );
}

export default App;
