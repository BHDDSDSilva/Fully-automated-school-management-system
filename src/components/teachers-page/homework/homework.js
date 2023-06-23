import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Button,Typography } from '@mui/material';
import { Home,SupervisorAccount, PendingActions,AccountCircle,Margin,Business,ContentPaste,Assignment,CheckBox } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const HomeworkPage = () => {

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
            <ListItem button component={RouterLink} to="/teachers" style={{marginTop:"60px"}} >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Dashborad" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-timetable" style={{marginTop:"04px"}}>
              <ListItemIcon>
                < Margin />
              </ListItemIcon>
              <ListItemText primary="Time Table" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-classes" style={{marginTop:"04px"}}>
              <ListItemIcon>
                <Business />
              </ListItemIcon>
              <ListItemText primary="My Classes" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-students" style={{marginTop:"04px"}}>
              <ListItemIcon>
                <SupervisorAccount />
              </ListItemIcon>
              <ListItemText primary="My Students" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teacher-attendance" style={{marginTop:"04px"}}>
              <ListItemIcon>
                < PendingActions />
              </ListItemIcon>
              <ListItemText primary="Attendance" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-home-work" style={{marginTop:"04px"}}>
              <ListItemIcon>
                <ContentPaste />
              </ListItemIcon>
              <ListItemText primary="Home work" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-Assigment-monthly-test" style={{marginTop:"04px"}}>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Assigment & Monthly Test" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-Term-Test-Marking" style={{marginTop:"04px"}}>
              <ListItemIcon>
                <CheckBox />
              </ListItemIcon>
              <ListItemText primary="Term test marking" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-my-account" style={{marginTop:"04px"}}>
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
                Classes
        </Typography>
        </div>
        <div className={`${classes.pageHeader} ${classes.mb2}`}> 
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/teachers-home-work-class01"
                edge="start"
                aria-label="teachers-home-work-class01"
                
            sx={{   width: '34%', 
                    position: 'fixed', 
                    left: '25%', 
                    top: '25%', 
                    height: '30vh', 
                    backgroundColor: '#ffb6c1',
                    border: '4px solid #ff1493',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Class 01 
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/teachers-home-work-class02"
                edge="start"
                aria-label="teachers-home-work-class02"
                
            sx={{   width: '34%', 
                    position: 'fixed', 
                    left: '60%', 
                    top: '25%', 
                    height: '30vh', 
                    backgroundColor: '#90ee90',
                    border: '4px solid #006400',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Class 02  
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/teachers-home-work-class03"
                edge="start"
                aria-label="teachers-home-work-class03"
                
            sx={{   width: '34%', 
                    position: 'fixed', 
                    left: '25%', 
                    top: '60%', 
                    height: '30vh', 
                    backgroundColor: '#fffacd',
                    border: '4px solid #ffa500',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Class 03  
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/teachers-home-work-class04"
                edge="start"
                aria-label="teachers-home-work-class04"
                
            sx={{   width: '34%', 
                    position: 'fixed', 
                    left: '60%', 
                    top: '60%', 
                    height: '30vh', 
                    backgroundColor: '#dda0dd',
                    border: '4px solid #800080',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Class 04  
        </Button>      
      </div>
        </>
    )
}