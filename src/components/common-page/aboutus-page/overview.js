import {
    Card, 
    CardContent,  
    Typography,
    CardMedia,   
} from "@mui/material"
import classes from "./styles.module.css"

export const OverviewPage = () => {
    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                    sx={{ height: 420, width: 300 }}
                    image="./dakma.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Our vision
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Full of wisdom
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Diri Deri Asiri
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    From the Bandaranaike girl
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    To Mother Luck
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345,}}>
            <CardMedia
                    sx={{ height: 420, width: 300}}
                    image="./mehewara.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Our Mission
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Wise and virtuous
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    The girls
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Enthusiastically wonderful
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    To a world
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Gift giving
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Let us be
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345,}}>
            <CardMedia
                    sx={{ height: 460, width: 300 }}
                    image="./pasalgithaya.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    School Song
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    
                </Typography>
            </CardContent>
        </Card>
        </div>
       </>
    )
}