import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Button, Card, CardActions, CardMedia, } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import {  Link as RouterLink } from "react-router-dom";
import classes from "./styles.module.css"

export const CommonPage = () => {
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
        sx={{   maxWidth: '450',
                width: '23%', 
                position: 'fixed', 
                left: "21%", 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#ee82ee',
                border: '4px solid #800080', 
            }}>
            <CardMedia
                    sx={{ height: 266 }}
                    image="./News.jpg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/uplaod-news"
                        edge="start"
                        aria-label="uplaod-news"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Upload News 
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '450',
                width: '23%', 
                position: 'fixed', 
                left: "46%", 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#adff2f',
                border: '4px solid #006400', 
            }}>
            <CardMedia
                    sx={{ height: 266 }}
                    image="./events.jpeg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/upload-events"
                        edge="start"
                        aria-label="upload-events"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Upload Events  
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '450',
                width: '28%', 
                position: 'fixed', 
                right: '1%', 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#ffb6c1',
                border: '4px solid #ff1493', 
            }}>
            <CardMedia
                    sx={{ height: 266 }}
                    image="./results.jpg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/upload-results"
                        edge="start"
                        aria-label="upload-results"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Upload Results 
                </Button>
            </CardActions>
        </Card>
      </div>
      </>
    )
}