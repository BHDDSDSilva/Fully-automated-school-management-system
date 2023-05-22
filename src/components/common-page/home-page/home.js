import {
    Card, 
    CardContent,  
    Typography,
    CardMedia,
    CardActions,
    Button,
    Box, 
    List, 
    ListItem, 
    ListItemText,
    
} from "@mui/material"
import {  Link as RouterLink,Link} from "react-router-dom"
import classes from "./styles.module.css"
export const HomePage = () => {

    const listData = [
        { primary: 'Grade 01', secondary: 'Application form for accepting children for class grade 01',page:'/grade01-form' },
        { primary: 'Grade 06', secondary: 'Application form for accepting children for class grade 06',page:'/grade06-form' },
        { primary: 'Grade 12', secondary: 'Application form for accepting children for class grade 12',page:'/grade12-form' },
      ];
    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                    sx={{ height: 140 }}
                    image="./teachers infomation.webp"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Teachers Info
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Our school has more than 100 teachers who teach students. 
                This contains the details of the staff of the teachers at the school, from the principal to the 1st grade.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                        component={RouterLink}
                        to="/teachers-info"
                        edge="start"
                        aria-label="teachers-info"
                >
                    More Details 
                </Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345,}}>
            <CardMedia
                    sx={{ height: 140 }}
                    image="./school.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    School Info
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Our school has more than 2500 students. 
                It has classes from primary to grade thirteen. 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                        component={RouterLink}
                        to="/school-info"
                        edge="start"
                        aria-label="school-info"
                >
                    More Details 
                </Button>
            </CardActions>
        </Card>
        <Box sx={{ width: '20%', 
                   position: 'static', 
                   right: 0, 
                   top: 0, 
                   height: '60vh', 
                   backgroundColor: '#f0f0f0' 
                }}>
            <List>
                {listData.map((item, index) => (
                <ListItem button component={Link} to={item.page} key={index}>
                    <ListItemText primary={item.primary} secondary={item.secondary} />
                </ListItem>
                ))}
            </List>
        </Box>
        </div>
       </>
    )
}