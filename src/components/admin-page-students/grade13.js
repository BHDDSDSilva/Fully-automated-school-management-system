import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Button, Card, CardActions, CardMedia, } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import {  Link as RouterLink } from "react-router-dom";
import classes from "./styles.module.css"

export const Grade13Page = () => {
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
        <Button 
            variant="contained"
            size="big"
            component={RouterLink}
            to="/add-students"
            edge="start"
            aria-label="add-students"
            
        sx={{   width: '20%', 
                position: 'fixed', 
                right: '1%', 
                top: '11%', 
                height: '10vh', 
                backgroundColor: '#800000',
                border: '4px solid #ff0000',
                color: '#ffffff',
                fontweight: 'bold'
            }}
        >
                Add Students 
        </Button>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
      <Card 
        sx={{   maxWidth: '345',
                width: '17%', 
                position: 'fixed', 
                left: "21%", 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#deb887',
                border: '4px solid #8b0000', 
            }}>
            <CardMedia
                    sx={{ height: 250 }}
                    image="./alclass.jpeg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/students-grade13-grade13-A"
                        edge="start"
                        aria-label="students-grade13-grade13-A"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Grade 13 - A (Bio) 
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '345',
                width: '17%', 
                position: 'fixed', 
                left: "41%", 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#ffb6c1',
                border: '4px solid #ff1493', 
            }}>
            <CardMedia
                    sx={{ height: 250 }}
                    image="./alclass.jpeg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/students-grade13-grade13-B"
                        edge="start"
                        aria-label="students-grade13-grade13-B"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Grade 13 - B (Maths) 
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '345',
                width: '17%', 
                position: 'fixed', 
                left: '61%', 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#adff2f',
                border: '4px solid #006400', 
            }}>
            <CardMedia
                    sx={{ height: 250 }}
                    image="./alclass.jpeg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/students-grade13-grade13-C"
                        edge="start"
                        aria-label="students-grade13-grade13-C"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Grade 13 - C (Commerce)
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '345',
                width: '17%', 
                position: 'fixed', 
                right: '1%', 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#ee82ee',
                border: '4px solid #800080', 
            }}>
            <CardMedia
                    sx={{ height: 250 }}
                    image="./alclass.jpeg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/students-grade13-grade13-E"
                        edge="start"
                        aria-label="students-grade13-grade13-E"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Grade 13 - D (Art)
                </Button>
            </CardActions>
        </Card>
      </div>
      </>
    )
}