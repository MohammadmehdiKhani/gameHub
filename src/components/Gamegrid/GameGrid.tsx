import React, { useEffect, useState } from 'react'
import apiClient from '../../services/api-client'
import GameCard from '../GameCard/GameCard';
import styles from './GameGrid.module.css'

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}

export default function GameGrid() {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<FetchGameResponse>('/games')
            .then(res => {
                setGames(res.data.results); console.log(res.data.results);
            })
            .catch(err => setError(err.message))
    }, [])

    return (
        <div className={styles.gameGrid}>
            {games.map(game => <GameCard game={game}></GameCard>)}
        </div>
    )
}

// <ul>
// {games.map(game => <MoveCard game={game}></MoveCard>)}
// </ul>