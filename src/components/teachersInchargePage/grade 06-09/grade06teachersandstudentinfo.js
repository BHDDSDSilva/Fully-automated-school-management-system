import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Button,Typography,Card,CardContent,CardActions } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const Grade06TeachersInchageStudentsAndTeachersInformationPage = () => {
    
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
            Grade 06 Teachers and Students Information
      </Typography>
      </div>
      <div>
        <Card 
            sx={{   maxWidth: '345',
                    width: '23%', 
                    position: 'fixed', 
                    left: "32%", 
                    top: "30%", 
                    height: '40vh', 
                    backgroundColor: '#98fb98',
                    border: '4px solid #006400', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Grade 06 Teachers Information
        </Typography>
        <Typography variant="body1" color="#800000" align="center">
            Personal information records of all teachers in grade 06 classes
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/teachers-incharge-grade-06-teachers-information"
            edge="start"
            aria-label="teachers-incharge-grade-06-teachers-information"
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
                    left: "59%", 
                    top: "30%", 
                    height: '40vh', 
                    backgroundColor: '#ffe4b5',
                    border: '4px solid #8b4513', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Grade 06 Students Information
        </Typography>
        <Typography variant="body1" color="#000000" align="center">
            Progress of all students in grade 06 classes
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/teachers-incharge-grade-06-students-information"
            edge="start"
            aria-label="teachers-incharge-grade-06-students-information"
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