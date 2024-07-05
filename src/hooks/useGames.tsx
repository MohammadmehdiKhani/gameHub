import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} []
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}


export default function useGames() {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<FetchGameResponse>('/games')
            .then(res => {
                setGames(res.data.results); console.log(res.data.results);
            })
            .catch(err => setError(err.message))
    }, [])
    return { games, error }
}
