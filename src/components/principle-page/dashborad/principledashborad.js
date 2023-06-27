import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Card,CardContent,Typography } from '@mui/material';
import { Home,SupervisorAccount, Groups2,AccountCircle,Assignment,PeopleAlt } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import { LocalizationProvider,DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import classes from "./styles.module.css"

export const PrincipleDashboradPage = () => {
    
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
            Dashborad 
      </Typography>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}> 
      <Card className={`${classes.card} ${classes.pageHeaderh1}`} 
                sx={{  
                   position: 'fixed', 
                   right: '0.2%',
                   top: '31%', 
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
                   top: '31%', 
                   height: '55vh', 
                   backgroundColor: '#f0f0f0'}}>
            <CardContent>
                
            </CardContent>
        </Card>
        </Box>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Box>
        <Card sx={{width: '350px',
                   position: 'fixed', 
                   left: '49%', 
                   top: '31%', 
                   height: '55vh', 
                   backgroundColor: '#f0f0f0'}}>
            <CardContent>
                
            </CardContent>
        </Card>
        </Box>
      </div>
      </>
    )
}