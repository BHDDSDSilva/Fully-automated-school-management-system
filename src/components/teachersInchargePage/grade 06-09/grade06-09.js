import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Button,Typography } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const Grade0609Page = () => {
    
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
            Grade 06 - 09 
      </Typography>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}> 
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/teachers-incharge-grade-06"
                edge="start"
                aria-label="teachers-incharge-grade-06"
                
            sx={{   maxWidth: '345',
                    width: '20%', 
                    position: 'fixed', 
                    left: "24%", 
                    top: "28%", 
                    height: '30vh', 
                    backgroundColor: '#90ee90',
                    border: '4px solid #006400',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Grade 06
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/teachers-incharge-grade-07"
                edge="start"
                aria-label="teachers-incharge-grade-07"
                
            sx={{   maxWidth: '345',
                    width: '20%', 
                    position: 'fixed', 
                    left: "46%", 
                    top: "28%", 
                    height: '30vh', 
                    backgroundColor: '#eee8aa',
                    border: '4px solid #800000',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Grade 07
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/teachers-incharge-grade-08"
                edge="start"
                aria-label="teachers-incharge-grade-08"
                
            sx={{   maxWidth: '345',
                    width: '20%', 
                    position: 'fixed', 
                    left: "57%", 
                    top: "59%", 
                    height: '30vh', 
                    backgroundColor: '#fffacd',
                    border: '4px solid #ffa500',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Grade 08
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/teachers-incharge-grade-09"
                edge="start"
                aria-label="teachers-incharge-grade-09"
                
            sx={{   maxWidth: '345',
                    width: '20%', 
                    position: 'fixed', 
                    right: "1%", 
                    top: "59%", 
                    height: '30vh', 
                    backgroundColor: '#dda0dd',
                    border: '4px solid #800080',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Grade 09
        </Button>
      </div>
      </>
    )
}