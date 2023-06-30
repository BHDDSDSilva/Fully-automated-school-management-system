import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Button,Typography, CardContent,Card,CardActions} from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const StudentGrade01Page = () => {
    
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
            Grade 01 
      </Typography>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}> 
      <Card 
        sx={{   maxWidth: '200',
                width: '20%', 
                position: 'fixed', 
                left: "21%", 
                top: "28%", 
                height: '25vh', 
                backgroundColor: '#90ee90',
                border: '4px solid #006400',
                color: '#000000',
                fontweight: 'bold'
            }}>
            <CardContent>
                <Typography variant="h4" gutterBottom align='center'>
                    Notes 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/view-notes"
                        edge="start"
                        aria-label="view-notes"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    View Notes
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '200',
                width: '20%', 
                position: 'fixed', 
                left: "51%", 
                top: "28%", 
                height: '25vh', 
                backgroundColor: '#eee8aa',
                border: '4px solid #800000',
                color: '#000000',
                fontweight: 'bold' 
            }}>
            <CardContent>
                <Typography variant="h4" gutterBottom align='center'>
                    Term Test 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/view-term-test"
                        edge="start"
                        aria-label="view-term-test"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    View Term Test 
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '200',
                width: '20%', 
                position: 'fixed', 
                right: "1%", 
                top: "28%", 
                height: '25vh', 
                backgroundColor: '#dda0dd',
                border: '4px solid #800080',
                color: '#000000',
                fontweight: 'bold'
            }}>
            <CardContent>
                <Typography variant="h4" gutterBottom align='center'>
                    Monthly Test 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/view-monthly-test"
                        edge="start"
                        aria-label="view-momthly-test"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    View Monthly Test 
                </Button>
            </CardActions>
        </Card>  
        <Card 
        sx={{   maxWidth: '200',
                width: '23%', 
                position: 'fixed', 
                left: "37%", 
                top: "59%", 
                height: '29vh', 
                backgroundColor: '#fffacd',
                border: '4px solid #ffa500',
                color: '#000000',
                fontweight: 'bold'
            }}>
            <CardContent>
                <Typography variant="h4" gutterBottom align='center'>
                    Co-Curricular Activities 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/view-co-curricular-activities"
                        edge="start"
                        aria-label="view-co-curricular-activities"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    View Co-Curricular Activities
                </Button>
            </CardActions>
        </Card>   
        <Card 
        sx={{   maxWidth: '200',
                width: '23%', 
                position: 'fixed', 
                left: "64%", 
                top: "59%", 
                height: '29vh', 
                backgroundColor: '#ffb6c1',
                border: '4px solid #ff1493',
                color: '#000000',
                fontweight: 'bold'
            }}>
            <CardContent>
                <Typography variant="h4" gutterBottom align='center'>
                    Extra-Curricular Activities 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/view-extra-curricular-activities"
                        edge="start"
                        aria-label="view-extra-curricular-activities"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    View Extra-Curricular Activities
                </Button>
            </CardActions>
        </Card>   
      </div>
      </>
    )
}