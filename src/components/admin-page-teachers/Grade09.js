import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box, Typography, Button, Card, CardActions, CardContent, } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle,} from '@mui/icons-material';
import {  Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const Grade09TeachersInformationPage = () => {
    return (
      <>
      <div>
        <Box sx={{ width: '20%', 
                   position: 'fixed', 
                   left: 0, 
                   top: 0, 
                   height: '91vh', 
                   backgroundColor: '#87cefa' 
                }} >
        <List >
          <ListItem button component={RouterLink} to="/admin" style={{marginTop:"70px"}} >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Dashborad" />
          </ListItem>
          <ListItem button component={RouterLink} to="/admin-students" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem button component={RouterLink} to="/admin-teachers" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <SupervisorAccount />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
          </ListItem>
          <ListItem button component={RouterLink} to="/school-attendance" style={{marginTop:"30px"}}>
            <ListItemIcon>
              < PendingActions />
            </ListItemIcon>
            <ListItemText primary="School's Attendance" />
          </ListItem>
          <ListItem button component={RouterLink} to="/common-page" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <Web />
            </ListItemIcon>
            <ListItemText primary="Common Page" />
          </ListItem>
          <ListItem button component={RouterLink} to="/my-account" style={{marginTop:"75px"}}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="My Account" />
          </ListItem>
        </List>
        </Box>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Typography variant="h3" 
            sx={{ 
                  position: 'fixed', 
                  left: '21%',  
                }}>
            Grade 09 Teachers Information
        </Typography>
      </div>
      <div>
        <Card 
            sx={{   maxWidth: '345',
                    width: '23%', 
                    position: 'fixed', 
                    left: "22%", 
                    top: "39%", 
                    height: '33vh', 
                    backgroundColor: '#98fb98',
                    border: '4px solid #006400', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Teachers Records
        </Typography>
        <Typography variant="body1" color="#800000" align="center">
            Personal information records of all teachers in grade 09 classes
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/Grade-09-teachers-records"
            edge="start"
            aria-label="Grade-09-teachers-records"
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
                    width: '36%', 
                    position: 'fixed', 
                    left: "47%", 
                    top: "39%", 
                    height: '33vh', 
                    backgroundColor: '#ffe4b5',
                    border: '4px solid #8b4513', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Teachers Time table
        </Typography>
        <Typography variant="body1" color="#000000" align="center">
            Teachers time table uploaded of all teachers in grade 09 classes
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/Grade-09-teachers-timetable"
            edge="start"
            aria-label="Grade-09-teachers-timetable"
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
                    width: '13%', 
                    position: 'fixed', 
                    right: '1%', 
                    top: '39%', 
                    height: '36vh', 
                    backgroundColor: '#87cefa',
                    border: '4px solid #000080', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Teachers Status
        </Typography>
        <Typography variant="body1" color="#800000" align="center">
            Changing the status of teachers
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/students-grade09-Teacher-status"
            edge="start"
            aria-label="students-grade09-Teacher-status"
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