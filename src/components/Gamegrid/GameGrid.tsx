import GameCard from '../GameCard/GameCard';
import styles from './GameGrid.module.scss'
import useGames from '../../hooks/useGames';


export default function GameGrid() {
    const { games, error } = useGames()

    console.log(error);
    
    return (
        <div className={styles.gameGrid}>
            {games.map(game => <GameCard game={game}></GameCard>)}
        </div>
    )
}