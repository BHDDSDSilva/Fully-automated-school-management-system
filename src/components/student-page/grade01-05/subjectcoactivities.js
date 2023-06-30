import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Button,Typography } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const SGrade01SubjectCoCurricularActivitiesPage = () => {
    
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
            Grade 01 Subject
      </Typography>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}> 
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/student-grade-01-subject-co-curricular-activities-sinhala"
                edge="start"
                aria-label="student-grade-01-subject-co-curricular-activities-sinhala"
                
            sx={{   maxWidth: '345',
                    width: '25%', 
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
                Sinhala
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/student-grade-01-subject-co-curricular-activities-budda-darmaya"
                edge="start"
                aria-label="student-grade-01-subject-co-curricular-activities-budda-darmaya"
                
            sx={{   maxWidth: '345',
                    width: '25%', 
                    position: 'fixed', 
                    left: "52%", 
                    top: "28%", 
                    height: '30vh', 
                    backgroundColor: '#dda0dd',
                    border: '4px solid #800080',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Budda - Darmaya
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/student-grade-01-subject-co-curricular-activities-parisaraya"
                edge="start"
                aria-label="student-grade-01-subject-co-curricular-activities-parisaraya"
                
            sx={{   maxWidth: '345',
                    width: '25%', 
                    position: 'fixed', 
                    left: "47%", 
                    top: "59%", 
                    height: '30vh', 
                    backgroundColor: '#fffacd',
                    border: '4px solid #ffa500',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Parisaraya
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/student-grade-01-subject-co-curricular-activities-maths"
                edge="start"
                aria-label="student-grade-01-subject-co-curricular-activities-maths"
                
            sx={{   maxWidth: '345',
                    width: '25%', 
                    position: 'fixed', 
                    right: "1%", 
                    top: "59%", 
                    height: '30vh', 
                    backgroundColor: '#ffb6c1',
                    border: '4px solid #ff1493',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Maths
        </Button>
      </div>
      </>
    )
}