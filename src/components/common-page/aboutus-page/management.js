import { 
    Card,  
    Typography,
    CardMedia,      
} from "@mui/material"
import classes from "./styles.module.css"

export const ManagementPage = () => {
    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Typography variant="h5">
            Organizational structure of Bandaranayake Balika National College
        </Typography>
        </div>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card sx={{ maxWidth: 945, maxHeight: 945 }}>
            <CardMedia
                    sx={{ height: 400, width: 700 }}
                    image="./chart.png"
            />
        </Card>
        </div>
       </>
    )
}