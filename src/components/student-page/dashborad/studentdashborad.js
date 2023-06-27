import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Card,CardContent,Typography } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import { LocalizationProvider,DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import classes from "./styles.module.css"

export const StudentDashboradPage = () => {
    
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
          <ListItem button component={RouterLink} to="/student" style={{marginTop:"70px"}} >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Dashborad" />
          </ListItem>
          <ListItem button component={RouterLink} to="/student-grade-01-05" style={{marginTop:"30px"}}>
            <ListItemIcon>
              < Business />
            </ListItemIcon>
            <ListItemText primary="Grade 01 - 05" />
          </ListItem>
          <ListItem button component={RouterLink} to="/student-grade-06-09" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Grade 06 - 09" />
          </ListItem>
          <ListItem button component={RouterLink} to="/student-grade-10-11" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Grade 10 - 11" />
          </ListItem>
          <ListItem button component={RouterLink} to="/student-grade-12-13" style={{marginTop:"30px"}}>
            <ListItemIcon>
              < Business />
            </ListItemIcon>
            <ListItemText primary="Grade 12 - 13" />
          </ListItem>
          <ListItem button component={RouterLink} to="/student-my-account" style={{marginTop:"75px"}}>
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
            Dashborad 
      </Typography>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}> 
      <Card className={`${classes.card} ${classes.pageHeaderh1}`} 
                sx={{  
                   position: 'fixed', 
                   right: '0.2%',
                   top: '28%', 
                   height: '290px', 
                   backgroundColor: '#e6e6fa',
                   border: '4px solid #000000'
                }}> 
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
      </Card>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Box>
        <Card sx={{width: '350px',
                   position: 'fixed', 
                   left: '21%', 
                   top: '28%', 
                   height: '30vh', 
                   backgroundColor: '#f0f0f0'}}>
            <CardContent>
            <Typography gutterBottom variant="h6" component="div" color="black" align='center'>
                  This Year Term Test Results
            </Typography>
                
            </CardContent>
        </Card>
        </Box>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Box>
        <Card sx={{width: '350px',
                   position: 'fixed', 
                   left: '49%', 
                   top: '28%', 
                   height: '30vh', 
                   backgroundColor: '#f0f0f0'}}>
            <CardContent>
            <Typography gutterBottom variant="h6" component="div" color="black" align='center'>
                  This Year Attendance Chart
            </Typography>
                
            </CardContent>
        </Card>
        </Box>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Box>
        <Card sx={{width: '350px',
                   position: 'fixed', 
                   left: '21%', 
                   top: '60%', 
                   height: '30vh', 
                   backgroundColor: '#f0f0f0'}}>
            <CardContent>
            <Typography gutterBottom variant="h6" component="div" color="black" align='center'>
                  Upcoming Work Notification
            </Typography>
                
            </CardContent>
        </Card>
        </Box>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Box>
        <Card sx={{width: '350px',
                   position: 'fixed', 
                   left: '49%', 
                   top: '60%', 
                   height: '30vh', 
                   backgroundColor: '#f0f0f0'}}>
            <CardContent>
            <Typography gutterBottom variant="h6" component="div" color="black" align='center'>
                All Grade Term Test Results
            </Typography>
                
            </CardContent>
        </Card>
        </Box>
      </div>
      </>
    )
}