import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Typography,Button, Card, CardActions, CardContent } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import {  Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const SchoolAttendancePage = () => {
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
            School Attendance
        </Typography>
      </div>
      <div>
        <Card 
            sx={{   maxWidth: '345',
                    width: '28%', 
                    position: 'fixed', 
                    left: "30%", 
                    top: "36%", 
                    height: '40vh', 
                    backgroundColor: '#98fb98',
                    border: '4px solid #006400', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Student Attendance Records
        </Typography>
        <Typography variant="body1" color="#800000" align="center">
            Daily attendance reporting for all students in the school
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/school-attendance-students"
            edge="start"
            aria-label="school-attendance-students"
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
                    width: '28%', 
                    position: 'fixed', 
                    left: "60%", 
                    top: "36%", 
                    height: '40vh', 
                    backgroundColor: '#98fb98',
                    border: '4px solid #006400', 
                }}>
        <CardContent>
        </CardContent> 
        <Typography gutterBottom variant="h4" component="div" color="#000080" align='center'fontweight="bold">
            Teachers Attendance Records
        </Typography>
        <Typography variant="body1" color="#800000" align="center">
            Daily attendance reporting for all teachers in the school
        </Typography>          
        <CardActions>
        <Button size="big"
            component={RouterLink}
            to="/school-attendance-teachers"
            edge="start"
            aria-label="school-attendance-teachers"
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