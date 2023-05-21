import {
    Card, 
    CardContent,
    CardMedia,  
    Typography,
    
} from "@mui/material"
import classes from "./styles.module.css"
export const SchoolInfoPage = () => {
    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Typography variant="h5">
            Introduction to the Bandaranayaka Balika National College
        </Typography>
        </div>
        <div >
        <Typography>
        Bandaranaike Girls National College has classes from primary to thirteenth standard.
        It is in the Ampara district of the Eastern Province. 
        Its education zone is Ampara, under the Ampara Educational Division.
        </Typography>
        </div>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card sx={{ maxWidth: 445, backgroundColor: '#f0f0f0',height: '50vh'}}>
            <CardMedia
                    sx={{ height: 250 }}
                    image="./logo.png"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    School Logo
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345,backgroundColor: '#f0f0f0', height: '50vh' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Summary of School Details
                </Typography>
                <Typography variant="h6">
                    District: Ampara
                </Typography>
                <Typography variant="h6">
                    Province: Eastern
                </Typography>
                <Typography variant="h6">
                    Education Zone: Ampara
                </Typography>
                <Typography variant="h6">
                    Education Divison: Ampara
                </Typography>
                <Typography variant="h6">
                    Total student: 1795
                </Typography>
                <Typography variant="h6">
                    Total student From G1-5: 576
                </Typography>
                <Typography variant="h6">
                    Total student From G6-11: 847
                </Typography>
                <Typography variant="h6">
                Total student in A/L: 372
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 645, backgroundColor: '#f0f0f0',height: '70vh'}}>
            <CardMedia
                    sx={{ height: 350, width: 750}}
                    image="./school map.png"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    School Location
                </Typography>
            </CardContent>
        </Card>
        </div>
       </>
    )
}