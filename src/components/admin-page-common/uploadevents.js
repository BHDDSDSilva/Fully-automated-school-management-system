import React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Typography, TextField, Button, Container, Card, CardContent } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom";
import classes from "./styles.module.css"

export const AddEventsPage = () => {

    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [images, setImages] = useState('');
    
    const handleTopicChange = (e) => {
      setTopic(e.target.value);
    };

    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };

    const handleDateChange = (e) => {
      setDate(e.target.value);
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setImages(file);
    };

  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('New Student:', { topic,description,date,images});

    setTopic('');
    setDescription('');
    setDate('');
    setImages('');
    
  };

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
      <Typography variant="h4" gutterBottom
          sx={{ 
              position: 'fixed', 
              left: '21%',  
          }}>
            Add New Events 
      </Typography>
      </div>
      <div>
      <Container maxWidth="sm">
        <Card 
          sx={{ maxWidth: 1045, backgroundColor: '#f0f0f0', position: 'fixed', left: '21%', }}
        >
          <CardContent>
            <Box
              sx={{ maxHeight: '360px', overflow: 'auto' }}
            >
              <form onSubmit={handleSubmit}>
                
                <TextField
                  label="Topic"
                  value={topic}
                  onChange={handleTopicChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Description"
                  value={description}
                  onChange={handleDescriptionChange}
                  fullWidth
                  multiline
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Date"
                  value={date}
                  onChange={handleDateChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                    type="file"
                    accept="image/*"
                    fullWidth
                    onChange={handleFileChange}
                />
                {images && (
                  <img
                    src={URL.createObjectURL(images)}
                    alt="Profile "
                    width="200"
                    height="200"
                  />
                )}
                <Button type="submit"
                    variant="contained" 
                    position="flex" 
                    component={RouterLink}
                    to="/common-page"
                    edge="start"
                    aria-label="common-paget"
                    
                  sx={{ backgroundColor: 'blue', 
                      alignItems:'center'
                     }}>
                  Add Events
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Container>
      </div>
      </>
    )
}