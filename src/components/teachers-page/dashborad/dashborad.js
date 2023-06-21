import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Card,Button,CardContent,Typography } from '@mui/material';
import { Home,SupervisorAccount, PendingActions,AccountCircle,Margin,Business,ContentPaste,Assignment,CheckBox } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import { LocalizationProvider,DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import classes from "./styles.module.css"

export const TeachersDashboradPage = () => {
    
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
      <Button 
            variant="contained"
            size="big"
            component={RouterLink}
            to="/teachers-incharge"
            edge="start"
            aria-label="teachers-incharge"
            
        sx={{   width: '24%', 
                position: 'fixed', 
                right: '0.2%', 
                top: '15%', 
                height: '10vh', 
                backgroundColor: '#800000',
                border: '4px solid #ff0000',
                color: '#ffffff',
                fontweight: 'bold'
            }}
        >
                Teachers in charge of grades  
        </Button>
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