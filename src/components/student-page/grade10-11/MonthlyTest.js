import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Button,Typography,Card,CardActions,CardMedia } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const SGrade10MonthlyTestPage = () => {
    
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
            Grade 10 Monthly Test
      </Typography>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}> 
      <Card 
        sx={{   maxWidth: '450',
                width: '23%', 
                position: 'fixed', 
                left: "30%", 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#ee82ee',
                border: '4px solid #800080', 
            }}>
            <CardMedia
                    sx={{ height: 266 }}
                    image="./termtest.png"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/student-grade-10-monthly-test-paper"
                        edge="start"
                        aria-label="student-grade-10-monthly-test-paper"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Monthly Test paper
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '450',
                width: '23%', 
                position: 'fixed', 
                left: "60%", 
                top: "29%", 
                height: '50vh', 
                backgroundColor: '#adff2f',
                border: '4px solid #006400', 
            }}>
            <CardMedia
                    sx={{ height: 266 }}
                    image="./termtestmarking.jpeg"
            />
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/student-grade-10-monthly-test-marking"
                        edge="start"
                        aria-label="student-grade-10-monthly-test-marking"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    Monthly Test Marking 
                </Button>
            </CardActions>
        </Card>
      </div>
      </>
    )
}