import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Game } from '../../hooks/useGames';
import PlatformList from '../PlatformList/PlatformList';
import styles from './GameCard.module.scss'
import getCroppedImageUrl from '../../services/image-url';

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    return (
        <Card sx={{ width: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={getCroppedImageUrl(game.background_image)}
                    alt="card title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {game.name}
                    </Typography>
                    <hr></hr>
                    <div className={styles.gameDetail}>
                        <PlatformList platforms={game.parent_platforms.map(p => p.platform)} ></PlatformList>
                        <div className={styles.metacritic}>{game.metacritic}</div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}