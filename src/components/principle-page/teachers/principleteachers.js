import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Typography } from '@mui/material';
import { Home,SupervisorAccount, Groups2,AccountCircle,Assignment,PeopleAlt } from '@mui/icons-material';
import { Link as RouterLink,Link } from "react-router-dom"
import classes from "./styles.module.css"

export const PrincipleTeachersPage = () => {

  const listData = [
    { primary: 'Grade 01', page:'/principle-grade-01' },
    { primary: 'Grade 02', page:'/principle-grade-02' },
    { primary: 'Grade 03', page:'/principle-grade-03' },
    { primary: 'Grade 04', page:'/principle-grade-04' },
    { primary: 'Grade 05', page:'/principle-grade-05' },
  ];
  const listData1 = [
    { primary: 'Grade 06', page:'/principle-grade-06' },
    { primary: 'Grade 07', page:'/principle-grade-07' },
    { primary: 'Grade 08', page:'/principle-grade-08' },
    { primary: 'Grade 09', page:'/principle-grade-09' },
    { primary: 'Grade 10', page:'/principle-grade-10' },
    { primary: 'Grade 11', page:'/principle-grade-11' },
  ];
  const listData2 = [
    { primary: 'Grade 12', page:'/principle-grade-12' },
    { primary: 'Grade 13', page:'/principle-grade-13' },
  ];
    
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
            Teachers Name List
      </Typography>
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