import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Card,CardContent,Typography,CardActions,CardMedia,Button } from '@mui/material';
import { Home,SupervisorAccount, Groups2,AccountCircle,Assignment,PeopleAlt } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const PrincipleResultsPage = () => {
    
    return (
      <>
      <div>
        <Box sx={{ width: '20%', 
                   position: 'fixed', 
                   left: 0, 
                   top: 0, 
                   height: '91vh', 
                   backgroundColor: '#87cefa',
                }} >
        <List >
          <ListItem button component={RouterLink} to="/principle" style={{marginTop:"60px"}} >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Dashborad" />
          </ListItem>
          <ListItem button component={RouterLink} to="/principle-students" style={{marginTop:"30px"}}>
            <ListItemIcon>
              < PeopleAlt />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem button component={RouterLink} to="/principle-teachers" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <SupervisorAccount />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
          </ListItem>
          <ListItem button component={RouterLink} to="/principle-office-staff" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <Groups2 />
            </ListItemIcon>
            <ListItemText primary="Office Staff" />
          </ListItem>
          <ListItem button component={RouterLink} to="/principle-results" style={{marginTop:"30px"}}>
            <ListItemIcon>
              < Assignment />
            </ListItemIcon>
            <ListItemText primary="Results" />
          </ListItem>
          <ListItem button component={RouterLink} to="/principle-my-account" style={{marginTop:"75px"}}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="My Account" />
          </ListItem>
        </List>
        </Box>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card sx={{ maxWidth: 245,
                    position: 'fixed', 
                    left: "21%", 
                    top: "17%", 
                    border: '4px solid #000000', 
                  }}>
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
                        to="/principle-result-grade5scholarship"
                        edge="start"
                        aria-label="grade5scholarship"
                >
                    More Details 
                </Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 245,
                    position: 'fixed', 
                    left: "51%", 
                    top: "17%",
                    border: '4px solid #000000',
                  }}>
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
                        to="/principle-result-olresults"
                        edge="start"
                        aria-label="olresults"
                >
                    More Details 
                </Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 245,
                    position: 'fixed', 
                    right: "1%", 
                    top: "17%",
                    border: '4px solid #000000',
                  }}>
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
                        to="/principle-result-alresults"
                        edge="start"
                        aria-label="alresults"
                >
                    More Details 
                </Button>
            </CardActions>
        </Card>
      </div>
      </>
    )
}