import {
    Card, 
    CardContent,
    CardMedia,
    CardActions,
    Typography,
    Button,  
    Box, 
    List, 
    ListItem, 
    ListItemText,
    
} from "@mui/material"
import { Link,Link as RouterLink} from "react-router-dom"
import classes from "./styles.module.css"
export const ResultsPage = () => {

    const listData = [
        { primary: 'Grade 01', secondary: 'Application form for accepting children for class grade 01',page:'/grade01-form' },
        { primary: 'Grade 06', secondary: 'Application form for accepting children for class grade 06',page:'/grade06-form' },
        { primary: 'Grade 12', secondary: 'Application form for accepting children for class grade 12',page:'/grade12-form' },
      ];
    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card sx={{ maxWidth: 245 }}>
            <CardMedia
                    sx={{ height: 140 }}
                    image="./school.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Overview
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    School overview is included  here. Vision and Mission are included here.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                        component={RouterLink}
                        to="/school-overview"
                        edge="start"
                        aria-label="school-overview"
                >
                    More Details 
                </Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 245,}}>
            <CardMedia
                    sx={{ height: 160 }}
                    image="./history.jpeg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    History
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Our school history is included here.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                        component={RouterLink}
                        to="/school-history"
                        edge="start"
                        aria-label="school-history"
                >
                    More Details 
                </Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 245,}}>
            <CardMedia
                    sx={{ height: 140 }}
                    image="./SchoolManagement.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    School Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Our school's organizational chart is included here.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                        component={RouterLink}
                        to="/school-management"
                        edge="start"
                        aria-label="school-management"
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