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
                    sx={{ height: 250 }}
                    image="./grade05.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Grade 05 Scholarship
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    2022 grade 05 scholarship results list
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                        component={RouterLink}
                        to="/grade5scholarship"
                        edge="start"
                        aria-label="grade5scholarship"
                >
                    More Details 
                </Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 245,}}>
            <CardMedia
                    sx={{ height: 250 }}
                    image="./olresults.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    G.C.E (O/L) Examination
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    2022 G.C.E (O/L)  examination results list
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                        component={RouterLink}
                        to="/olresults"
                        edge="start"
                        aria-label="olresults"
                >
                    More Details 
                </Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 245,}}>
            <CardMedia
                    sx={{ height: 250 }}
                    image="./alresults.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    G.C.E (A/L) Examination
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    2022 G.C.E (A/L)  examination results list
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                        component={RouterLink}
                        to="/alresults"
                        edge="start"
                        aria-label="alresults"
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