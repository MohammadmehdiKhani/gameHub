import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Skeleton } from '@mui/material';
import styles from './GameCardSkeleton.module.scss'


export default function GameCardSkeleton() {
    return (
        <Card sx={{ width: 300 }}>
            <CardActionArea>
                <CardMedia>
                    <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
                </CardMedia>
                <CardContent>
                    <Skeleton sx={{ fontSize: "1.5rem", width: "100%" }} variant="rounded" />
                    <hr></hr>
                    <div className={styles.gameDetail}>
                        <Skeleton sx={{ height: "22px", width: "50%" }} variant="rectangular" />
                        <Skeleton sx={{ height: "22px", width: "22px" }} variant="rectangular" />
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}