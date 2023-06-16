import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Typography,Button, } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import {  Link as RouterLink,Link } from "react-router-dom"
import classes from "./styles.module.css"

export const TeachersPage = () => {
  const listData = [
    { primary: 'Grade 01', page:'/Grade-01-teachers-information' },
    { primary: 'Grade 02', page:'/Grade-02-teachers-information' },
    { primary: 'Grade 03', page:'/Grade-03-teachers-information' },
    { primary: 'Grade 04', page:'/students-grade04' },
    { primary: 'Grade 05', page:'/students-grade05' },
  ];
  const listData1 = [
    { primary: 'Grade 06', page:'/students-grade06' },
    { primary: 'Grade 07', page:'/students-grade07' },
    { primary: 'Grade 08', page:'/students-grade08' },
    { primary: 'Grade 09', page:'/students-grade09' },
    { primary: 'Grade 10', page:'/students-grade10' },
    { primary: 'Grade 11', page:'/students-grade11' },
  ];
  const listData2 = [
    { primary: 'Grade 12', page:'/students-grade12' },
    { primary: 'Grade 13', page:'/students-grade13' },
  ];
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
      <Typography variant="h3" 
          sx={{ 
                position: 'fixed', 
                left: '21%',  
              }}>
          Teachers Name List
      </Typography>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
      <Button 
          variant="contained"
          size="big"
          component={RouterLink}
          to="/add-teachers"
          edge="start"
          aria-label="add-teachers"
          
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
              Add Teachers
      </Button>
    </div>
    <div className={`${classes.pageHeader} ${classes.mb2}`}>
      <Box sx={{   width: '20%', 
                   position: 'fixed', 
                   left: '24%', 
                   top: '32%', 
                   height: '50vh', 
                   backgroundColor: '#98fb98',
                   border: '4px solid #008000'
                }}>
            <Typography variant="h6" align='center'> Primary Grades 01 - 05 </Typography>
            <List>
                {listData.map((item, index) => (
                <ListItem button component={Link} to={item.page} key={index}>
                    <ListItemText primary={item.primary} />
                </ListItem>
                ))}
            </List>
        </Box>
        <Box sx={{ width: '20%', 
                   position: 'fixed', 
                   left: '50%', 
                   top: '32%', 
                   height: '55vh', 
                   backgroundColor: '#afeeee',
                   border: '4px solid #00008b' 
                }}>
            <Typography variant="h6" align='center'> Secondary Grades 06 - 11 </Typography>
            <List>
                {listData1.map((item, index) => (
                <ListItem button component={Link} to={item.page} key={index}>
                    <ListItemText primary={item.primary} />
                </ListItem>
                ))}
            </List>
        </Box>
        <Box sx={{ width: '20%', 
                   position: 'fixed', 
                   left: '76%', 
                   top: '32%', 
                   height: '30vh', 
                   backgroundColor: '#eee8aa',
                   border: '4px solid #800000'
                }}>
            <Typography variant="h6" align='center'> Tertiary Grades 12 - 13 </Typography>
            <List>
                {listData2.map((item, index) => (
                <ListItem button component={Link} to={item.page} key={index}>
                    <ListItemText primary={item.primary} />
                </ListItem>
                ))}
            </List>
        </Box>
      </div>
      </>
    )
}