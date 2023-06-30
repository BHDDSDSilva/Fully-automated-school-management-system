import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Card,CardContent,Typography } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const SOLNewSubjectIntroPage = () => {
    
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
            New Subjects Introduction
      </Typography>
      </div>
      <div>
        <Card 
            sx={{   width: '170vh', 
                    position: 'fixed', 
                    left: '21%',  
                    top: "31%", 
                    height: '57vh', 
                    backgroundColor: '#f0f0f0',
                    overflow: 'auto'
                }}>
            <CardContent>
                <div>
                <Typography variant="h5" gutterBottom color={'black'} align='justify'> 
                    All Subject Introduction
                </Typography>
                </div>
                <div>
                    <Typography>
                    The Sri Lankan Ordinary Level (O-level) is a General Certificate of Education (GCE) qualification in Sri Lanka, conducted by the Department of Examinations of the Ministry of Education.
                    It is based on the Cambridge University Ordinary Level qualification. 
                    An O-level is a qualification of its own right, but more often taken in prerequisite for the more in-depth and academically rigorous Advanced Level exams. 
                    It is usually taken by students during the final two years of Senior secondary school (Grade 10 & 11 (usually ages 15–16)) or external (non-school) candidate. 
                    The exam is usually held in December. 
                    The exams are held in three mediums Sinhala, Tamil and English. 
                    The exam is the basic Certificate awarded in Sri Lanka as proof of completion of Secondary Education. 
                    The GCE O/L examination is an important milestone for students as it determines their eligibility to pursue further studies at the Advanced Level (A/L) or vocational training courses
                    </Typography>
                </div>
                <div>
                <Typography variant="h5" gutterBottom color={'black'} align='justify'> 
                    Structure and Subjects
                </Typography>
                </div>
                <div>
                    <Typography>
                    G.C.E. (General Certificate of Education) Ordinary Level (O/L) examination consists of 6 main subjects along with 
                    three optional subjects which can be selected according to the candidate’s wish (Known as basket subjects) and altogether 9 subjects
                    </Typography>
                </div>
                <div>
                <Typography variant="h5" gutterBottom color={'black'} align='justify'> 
                    Mandatory Subjects
                </Typography>
                </div>
                <div>
                <Typography>
                    Below are the 6 mandatory subjects,
                                Sinhala/Tamil
                                English
                                Mathematics
                                Science
                                Religion
                                Buddhism
                                Catholicism / Christianity
                                Hinduism
                                Islam
                                History
                </Typography>
                </div>
            </CardContent>
        </Card>
      </div>
      </>
    )
}