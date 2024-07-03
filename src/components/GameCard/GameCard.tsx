import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Game } from '../../hooks/useGames';

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    return (
        <Card sx={{ width: 200, height: 250 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={game.background_image}
                    alt="card title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {game.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}