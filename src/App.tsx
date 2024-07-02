import { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import GameCard from './components/GameCard/GameCard';
import GameGrid from './components/Gamegrid/GameGrid';

function App() {

  return (
    <>
      <div>
        <GameGrid></GameGrid>
      </div>
    </>
  )
}

export default App
