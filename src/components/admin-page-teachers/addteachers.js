import React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Typography, TextField, Button, Container, Card, CardContent, InputAdornment, IconButton, Switch, FormControlLabel, FormGroup } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom";
import classes from "./styles.module.css"

export const AddTeachersPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [grade, setGrade] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [telephonenumber, setTelephoneNumber] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [status, setStatus] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handlePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };

    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };

    const handleGradeChange = (e) => {
      setGrade(e.target.value);
    };
  
    const handleAgeChange = (e) => {
      setAge(e.target.value);
    };

    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };

    const handleTelephoneNumberChange = (e) => {
      setTelephoneNumber(e.target.value);
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setProfilePicture(file);
    };

    const handleStatusChange = (e) => {
      setStatus(e.target.checked);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('New Student:', { email,password,confirmpassword,firstname,lastname,grade,age,address,profilePicture, status});

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFirstName('');
    setLastName('');
    setGrade('');
    setAge('');
    setAddress('');
    setTelephoneNumber('');
    setProfilePicture('');
    setStatus('');
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
            Add New Teacher 
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
                  label="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                      endAdornment: (
                      <InputAdornment position="end">
                          <IconButton
                          onClick={handlePasswordVisibility}
                          edge="end"
                          >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                      </InputAdornment>
                      ),
                  }}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Confirm Password"
                  value={confirmpassword}
                  onChange={handleConfirmPasswordChange}
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                      endAdornment: (
                      <InputAdornment position="end">
                          <IconButton
                          onClick={handlePasswordVisibility}
                          edge="end"
                          >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                      </InputAdornment>
                      ),
                  }}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="First Name"
                  value={firstname}
                  onChange={handleFirstNameChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Last Name"
                  value={lastname}
                  onChange={handleLastNameChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Grade"
                  value={grade}
                  onChange={handleGradeChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Age"
                  value={age}
                  onChange={handleAgeChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Address"
                  value={address}
                  onChange={handleAddressChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  label="Tele Phone Number"
                  value={telephonenumber}
                  onChange={handleTelephoneNumberChange}
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
                {profilePicture && (
                  <img
                    src={URL.createObjectURL(profilePicture)}
                    alt="Profile "
                    width="200"
                    height="200"
                  />
                )}
                <FormGroup>
                  <FormControlLabel
                    control={<Switch checked={status} onChange={handleStatusChange} />}
                    label="Status"
                  />
                </FormGroup>
                <Button type="submit" 
                        variant="contained" 
                        color="primary"
                        component={RouterLink}
                        to="/admin-teachers"
                    edge="start"
                    aria-label="admin-teachers">
                  Add Teacher
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