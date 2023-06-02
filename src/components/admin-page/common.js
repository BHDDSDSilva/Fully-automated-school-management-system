import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import {  Link as RouterLink } from "react-router-dom"

export const CommonPage = () => {
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
      </>
    )
}