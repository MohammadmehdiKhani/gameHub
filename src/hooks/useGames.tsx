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
    parent_platforms: { platform: Platform }[]
    metacritic: number;
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}


export default function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        apiClient.get<FetchGameResponse>('/games')
            .then(res => {
                setGames(res.data.results);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])
    return { games, error, loading }
}
