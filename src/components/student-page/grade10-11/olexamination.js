import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Button,Typography, CardContent,Card,CardActions} from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const SOLeaxaminfoPage = () => {
    
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
            O/L Examination Related Information 
      </Typography>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}> 
      <Card 
        sx={{   maxWidth: '200',
                width: '20%', 
                position: 'fixed', 
                left: "21%", 
                top: "39%", 
                height: '40vh', 
                backgroundColor: '#90ee90',
                border: '4px solid #006400',
                color: '#000000',
                fontweight: 'bold'
            }}>
            <CardContent>
                <Typography variant="h4" gutterBottom align='center'>
                    New subject information 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/ol-new-suject-information"
                        edge="start"
                        aria-label="ol-new-suject-information"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    View New ubject information
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '200',
                width: '20%', 
                position: 'fixed', 
                left: "51%", 
                top: "39%", 
                height: '40vh', 
                backgroundColor: '#eee8aa',
                border: '4px solid #800000',
                color: '#000000',
                fontweight: 'bold' 
            }}>
            <CardContent>
                <Typography variant="h4" gutterBottom align='center'>
                    New subject apply application 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/ol-new-suject-apply-application"
                        edge="start"
                        aria-label="ol-new-suject-apply-application"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    View New subject apply application 
                </Button>
            </CardActions>
        </Card>
        <Card 
        sx={{   maxWidth: '200',
                width: '20%', 
                position: 'fixed', 
                right: "1%", 
                top: "39%", 
                height: '40vh', 
                backgroundColor: '#dda0dd',
                border: '4px solid #800080',
                color: '#000000',
                fontweight: 'bold'
            }}>
            <CardContent>
                <Typography variant="h4" gutterBottom align='center'>
                    O/L exam admission application
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="big"
                        component={RouterLink}
                        to="/ol-exam-admission-application"
                        edge="start"
                        aria-label="ol-exam-admission-application"
                sx={{   
                        color: '#000000',
                        fontweight: 'bold'
                    }}
                >
                    View O/L exam admission application
                </Button>
            </CardActions>
        </Card>  
      </div>
      </>
    )
}