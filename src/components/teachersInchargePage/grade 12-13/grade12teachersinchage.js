import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Button,Typography,Card,CardContent,CardActions } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const Grade12TeachersInchagePage = () => {
    
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
          <ListItem button component={RouterLink} to="/teachers-incharge" style={{marginTop:"60px"}} >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Dashborad" />
          </ListItem>
          <ListItem button component={RouterLink} to="/teachers-incharge-grade-01-05" style={{marginTop:"30px"}}>
            <ListItemIcon>
              < Business />
            </ListItemIcon>
            <ListItemText primary="Grade 01 - 05" />
          </ListItem>
          <ListItem button component={RouterLink} to="/teachers-incharge-grade-06-09" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Grade 06 - 09" />
          </ListItem>
          <ListItem button component={RouterLink} to="/teachers-incharge-grade-10-11" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Grade 10 - 11" />
          </ListItem>
          <ListItem button component={RouterLink} to="/teachers-incharge-grade-12-13" style={{marginTop:"30px"}}>
            <ListItemIcon>
              < Business />
            </ListItemIcon>
            <ListItemText primary="Grade 12 - 13" />
          </ListItem>
          <ListItem button component={RouterLink} to="/teachers-incharge-my-account" style={{marginTop:"75px"}}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="My Account" />
          </ListItem>
        </List>
        </Box>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
      <Typography variant="h4" gutterBottom
          sx={{ 
              position: 'fixed', 
              left: '21%',  
          }}>
            Grade 12  
      </Typography>
      </div>
      <div>
        <Card 
            sx={{   maxWidth: '345',
                    width: '23%', 
                    position: 'fixed', 
                    left: "22%", 
                    top: "30%", 
                    height: '50vh', 
                    backgroundColor: '#98fb98',
                    border: '4px solid #006400', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Grade 12 students and teachers information
        </Typography>
        <Typography variant="body1" color="#800000" align="center">
            Personal information records of all teachers and students in grade 12 classes
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/teachers-incharge-grade-12-students-and-teachers-information"
            edge="start"
            aria-label="teachers-incharge-grade-12-students-and-teachers-information"
            sx={{   
                    color: '#191970',
                    fontweight: 'bold',
                    bottom: '10%'
                }}>
                    More Details  
        </Button>
        </CardActions>
        </Card>
        <Card 
            sx={{   maxWidth: '345',
                    width: '23%', 
                    position: 'fixed', 
                    left: "49%", 
                    top: "30%", 
                    height: '50vh', 
                    backgroundColor: '#ffe4b5',
                    border: '4px solid #8b4513', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Progress of students
        </Typography>
        <Typography variant="body1" color="#000000" align="center">
            Progress of all students in grade 12 classes
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/teachers-incharge-grade-12-students-progress"
            edge="start"
            aria-label="teachers-incharge-grade-12-students-progress"
            sx={{   
                    color: '#191970',
                    fontweight: 'bold',
                    bottom: '10%'
                }}>
                    More Details  
        </Button>
        </CardActions>
        </Card>
        <Card 
            sx={{   maxWidth: '345',
                    width: '23%', 
                    position: 'fixed', 
                    right: "1%", 
                    top: "30%", 
                    height: '50vh',
                    backgroundColor: '#87cefa',
                    border: '4px solid #000080', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Progress of teachers
        </Typography>
        <Typography variant="body1" color="#800000" align="center">
            Progress of all teachers in grade 12 classes
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/teachers-incharge-grade-12-teachers-progress"
            edge="start"
            aria-label="teachers-incharge-grade-12-teachers-progress"
            sx={{   
                    color: '#191970',
                    fontweight: 'bold',
                    bottom: '10%'
                }}>
                    More Details  
        </Button>
        </CardActions>
        </Card>
      </div>
      </>
    )
}