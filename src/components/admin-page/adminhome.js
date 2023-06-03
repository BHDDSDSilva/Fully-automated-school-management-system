import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Card, CardContent, Typography, } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import {  Link as RouterLink } from "react-router-dom"
import { LocalizationProvider,DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import classes from "./styles.module.css"

export const AdminHomePage = () => {
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
      <Card className={`${classes.card} ${classes.pageHeaderh1}`} 
                sx={{  
                   position: 'fixed', 
                   right: '0.2%',
                   top: '11%', 
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
       <Card className={`${classes.card1} ${classes.pageHeaderh1}`} 
                 sx={{  
                    position: 'fixed', 
                    left: '21%',
                    top: '11%', 
                    height: '290px',
                    width: '300px', 
                    backgroundColor: '#228b22',
                    border: '4px solid #7fff00',
                 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="white" align='center'>
                  Teachers 
            </Typography>
            <Typography variant="body2" color="yellow" align='center'>
                  Number of teachers who attend to school today 
            </Typography>
          </CardContent>
        </Card>
        <Card className={`${classes.card} ${classes.pageHeaderh1}`} 
                  sx={{  
                     position: 'fixed', 
                     left: '47%',
                     top: '11%', 
                     height: '290px',
                     width: '300px', 
                     backgroundColor: '#b22222',
                     border: '4px solid #ff7f50'
                  }}>
           <CardContent>
             <Typography gutterBottom variant="h4" component="div" color="white" align='center'>
                  Students 
             </Typography>
             <Typography variant="body2" color="yellow" align='center'>
                  Number of students who attend to school today 
             </Typography>
           </CardContent>
         </Card>
         <Card className={`${classes.card} ${classes.pageHeaderh1}`} 
                  sx={{  
                     position: 'fixed', 
                     left: '21%',
                     bottom: '10%', 
                     height: '100px',
                     width: '475px', 
                     backgroundColor: '#4b0082',
                     border: '4px solid #ff00ff'
                  }}>
           <CardContent>
             <Typography gutterBottom variant="h4" component="div" color="white" align='left'>
                  All Teachers 
             </Typography>
             <Typography variant="body2" color="yellow" align='left'>
                  Number of teachers working in the school
             </Typography>
           </CardContent>
         </Card>
         <Card className={`${classes.card} ${classes.pageHeaderh1}`} 
                  sx={{  
                     position: 'fixed', 
                     right: '0.2%',
                     bottom: '10%', 
                     height: '100px',
                     width: '475px', 
                     backgroundColor: '#8b4513',
                     border: '4px solid #ffff00'
                  }}>
           <CardContent>
             <Typography gutterBottom variant="h4" component="div" color="white" align='left'>
                    Students Info
             </Typography>
             <Typography variant="body2" color="yellow" align='left'>
                    Number of students working in the school 
             </Typography>
           </CardContent>
         </Card>  
         
           </div>
      </>
    )
}