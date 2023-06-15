import React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Typography, TextField, Button, Container, 
         Card, CardContent, FormControl, Select, MenuItem } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom";
import classes from "./styles.module.css"

export const Grade13AStudentStatus = () => {

    const [indexnumber, setIndexNumber] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [activities, setActivities] = React.useState('');

    
    const handleIndexNumberChange = (e) => {
      setIndexNumber(e.target.value);
    };
    
    const handletNameChange = (e) => {
      setName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };

    const options = [
        { value: 'option1', label: 'Active' },
        { value: 'option2', label: 'Inactive' },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('New Achievements:', { indexnumber,name,activities,description,date});


    setIndexNumber('');
    setName('');
    setDescription('');
    setDate('');
    setActivities('');
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
            Edit Students Status 
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
                    label="Index Number"
                    value={indexnumber}
                    onChange={handleIndexNumberChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                  label="Name"
                  value={name}
                  onChange={handletNameChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <FormControl>
                <Select
                value={activities}
                onChange={(e) => setActivities(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Select an option' }}
                >
                <MenuItem value="" disabled>
                    Select an option
                </MenuItem>
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <TextField
                  label="Reason"
                  value={description}
                  onChange={handleDescriptionChange}
                  multiline
                  fullWidth
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
                <Button 
                    type="submit"
                    variant="contained" 
                    position="flex" 
                    component={RouterLink}
                    to="/students-grade13-grade13-A-Student-records"
                    edge="start"
                    aria-label="students-grade13-grade13-A-Student-records"
                  sx={{ backgroundColor: 'blue', 
                      alignItems:'center'
                     }}>
                  Save Status
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