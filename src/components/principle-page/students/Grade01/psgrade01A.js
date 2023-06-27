import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Button,Typography,Card,CardContent,CardActions } from '@mui/material';
import { Home,AccountCircle,Groups2,Assignment,PeopleAlt,SupervisorAccount } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const PSGrade01A = () => {
    
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
      <Typography variant="h4" gutterBottom
          sx={{ 
              position: 'fixed', 
              left: '21%',  
          }}>
            Grade 01 A
      </Typography>
      </div>
      <div>
        <Card 
            sx={{   maxWidth: '345',
                    width: '23%', 
                    position: 'fixed', 
                    left: "32%", 
                    top: "30%", 
                    height: '50vh', 
                    backgroundColor: '#98fb98',
                    border: '4px solid #006400', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Grade 01-A Students Information
        </Typography>
        <Typography variant="body1" color="#800000" align="center">
            Personal information records of all students in grade 01-A class
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/principle-grade-01-grade-01-A-students-information"
            edge="start"
            aria-label="principle-grade-01-grade-01-A-students-information"
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
                    height: '50vh', 
                    backgroundColor: '#ffe4b5',
                    border: '4px solid #8b4513', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Grade 01-A Students Progress
        </Typography>
        <Typography variant="body1" color="#000000" align="center">
            Progress of all students in grade 01-A class
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/principle-grade-01-grade-01-A-students-progress"
            edge="start"
            aria-label="principle-grade-01-grade-01-A-students-progress"
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