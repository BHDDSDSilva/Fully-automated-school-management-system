import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Card,CardContent,Typography } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const SALNewSubjectIntroPage = () => {
    
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
                    The Sri Lankan Advanced Level (A-level), is a General Certificate of Education (GCE) qualification exam in Sri Lanka, similar to the British Advanced Level, 
                    conducted annually by the Department of Examinations of the Ministry of Education. 
                    It is usually taken by students during the final two years of collegiate level (grade 12 and 13 (usual age 18–19) or external (non-school) candidates, 
                    after they have completed GCE Ordinary Level exams. 
                    The majority of candidates enter the exams via their respective schools, while candidates who have finished school education can also apply as private applicants. 
                    The qualification also serves as an entrance requirement for Sri Lankan state universities. 
                    The exams are held in three mediums: Sinhala, Tamil and English.
                    </Typography>
                </div>
                <div>
                <Typography variant="h5" gutterBottom color={'black'} align='justify'> 
                    Fields Of Study
                </Typography>
                </div>
                <div>
                <Typography>
                    The candidates are expected to study for 2 years at collegiate level before taking the examination. 
                    The examination diversifies over 4 major fields of study,
                   1. Science stream
                      Physical Science stream (Combined Mathematics, Physics and Chemistry or Information Technology)
                      Biological Science stream (Biology, Chemistry and Physics or Agricultural Science)
                    2. Commerce stream
                    3. Arts stream
                    4. Technology stream (The subjects include Engineering Technology, Bio-system Technology, Science for Technology and a category subject)
                      In each stream, candidates are expected to face 3 subjects related to the specific stream. 
                      Additionally, there would be a General English test and a Common General test. 
                      Although the result of the General English test is not taken into account for the University Entrance selection criteria, 
                      candidates are expected to obtain a pass mark for the Common General test.``
                </Typography>
                </div>
            </CardContent>
        </Card>
      </div>
      </>
    )
}