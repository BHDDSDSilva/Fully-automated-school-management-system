import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Button, Card, CardActions, CardMedia, } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import {  Link as RouterLink } from "react-router-dom";
import classes from "./styles.module.css"

export const Grade05AttendancePage = () => {
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
      <Card 
        sx={{   maxWidth: '345',
                width: '20%', 
                position: 'fixed', 
                left: "22%", 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#ee82ee',
                border: '4px solid #800080', 
            }}>
            <CardMedia
                    sx={{ height: 250 }}
                    image="./primary.jpg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/students-attendance-grade05-grade05-A"
                        edge="start"
                        aria-label="students-attendance-grade05-grade05-A"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Grade 05 - A  
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '345',
                width: '20%', 
                position: 'fixed', 
                left: "50%", 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#adff2f',
                border: '4px solid #006400', 
            }}>
            <CardMedia
                    sx={{ height: 250 }}
                    image="./primary.jpg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/students-attendance-grade05-grade05-B"
                        edge="start"
                        aria-label="students-attendance-grade05-grade05-B"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Grade 05 - B  
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '345',
                width: '20%', 
                position: 'fixed', 
                right: '1%', 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#ffb6c1',
                border: '4px solid #ff1493', 
            }}>
            <CardMedia
                    sx={{ height: 250 }}
                    image="./primary.jpg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/students-attendance-grade05-grade05-C"
                        edge="start"
                        aria-label="students-attendance-grade05-grade05-C"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Grade 05 - C 
                </Button>
            </CardActions>
        </Card>
      </div>
      </>
    )
}