import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Button, Card, CardActions, CardMedia, } from '@mui/material';
import { Home,SupervisorAccount,PeopleAlt,AccountCircle,Groups2,Assignment } from '@mui/icons-material';
import {  Link as RouterLink } from "react-router-dom";
import classes from "./styles.module.css"

export const PSGrade01Page = () => {
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
                        to="/principle-students-grade01-grade01-A"
                        edge="start"
                        aria-label="principle-students-grade01-grade01-A"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Grade 01 - A  
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
                        to="/principle-students-grade01-grade01-B"
                        edge="start"
                        aria-label="principle-students-grade01-grade01-B"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Grade 01 - B  
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
                        to="/principle-students-grade01-grade01-C"
                        edge="start"
                        aria-label="principle-students-grade01-grade01-C"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Grade 01 - C 
                </Button>
            </CardActions>
        </Card>
      </div>
      </>
    )
}