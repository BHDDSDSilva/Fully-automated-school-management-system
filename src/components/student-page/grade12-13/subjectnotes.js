import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Button,Typography } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const SGrade12SubjectNotePage = () => {
    
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
            Grade 12 Subject
      </Typography>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}> 
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/student-grade-12-subject-sinhala"
                edge="start"
                aria-label="student-grade-12-subject-sinhala"
                
            sx={{   maxWidth: '345',
                    width: '18%', 
                    position: 'fixed', 
                    left: "21%", 
                    top: "28%", 
                    height: '25vh', 
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
                to="/student-grade-12-subject-budda-darmaya"
                edge="start"
                aria-label="student-grade-12-subject-budda-darmaya"
                
            sx={{   maxWidth: '345',
                    width: '18%', 
                    position: 'fixed', 
                    left: "41%", 
                    top: "28%", 
                    height: '25vh', 
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
                to="/student-grade-12-subject-science"
                edge="start"
                aria-label="student-grade-12-subject-science"
                
            sx={{   maxWidth: '345',
                    width: '18%', 
                    position: 'fixed', 
                    left: "61%", 
                    top: "28%", 
                    height: '25vh', 
                    backgroundColor: '#fffacd',
                    border: '4px solid #ffa500',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Science
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/student-grade-12-subject-maths"
                edge="start"
                aria-label="student-grade-12-subject-maths"
                
            sx={{   maxWidth: '345',
                    width: '18%', 
                    position: 'fixed', 
                    right: "1%", 
                    top: "28%", 
                    height: '25vh', 
                    backgroundColor: '#ffb6c1',
                    border: '4px solid #ff1493',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Maths
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/student-grade-12-subject-english"
                edge="start"
                aria-label="student-grade-12-subject-english"
                
            sx={{   maxWidth: '345',
                    width: '18%', 
                    position: 'fixed', 
                    left: "21%", 
                    top: "59%", 
                    height: '25vh', 
                    backgroundColor: '#ffb6c1',
                    border: '4px solid #ff1493',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                English
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/student-grade-12-subject-history"
                edge="start"
                aria-label="student-grade-12-subject-history"
                
            sx={{   maxWidth: '345',
                    width: '18%', 
                    position: 'fixed', 
                    left: "41%", 
                    top: "59%", 
                    height: '25vh', 
                    backgroundColor: '#fffacd',
                    border: '4px solid #ffa500',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                History
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/student-grade-12-subject-geography"
                edge="start"
                aria-label="student-grade-12-subject-geography"
                
            sx={{   maxWidth: '345',
                    width: '18%', 
                    position: 'fixed', 
                    left: "61%", 
                    top: "59%", 
                    height: '25vh', 
                    backgroundColor: '#dda0dd',
                    border: '4px solid #800080',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Geography
        </Button>
        <Button 
                variant="contained"
                size="big"
                component={RouterLink}
                to="/student-grade-12-subject-citizens"
                edge="start"
                aria-label="student-grade-12-subject-citizens"
                
            sx={{   maxWidth: '345',
                    width: '18%', 
                    position: 'fixed', 
                    right: "1%", 
                    top: "59%", 
                    height: '25vh', 
                    backgroundColor: '#90ee90',
                    border: '4px solid #006400',
                    color: '#000000',
                    fontweight: 'bold'
                }}
        >
                Citizens
        </Button>
      </div>
      </>
    )
}