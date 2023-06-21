import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Typography,
         Table,TableBody,TableCell,TableContainer,TableHead, TableRow,Paper } from '@mui/material';
import { Home,SupervisorAccount, PendingActions,AccountCircle,Margin,Business,ContentPaste,Assignment,CheckBox } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const FullTimetablePage = () => {

    const [page] = React.useState(0);
    const [rowsPerPage] = React.useState(10);

    const styles = {
        tableHead: {
          backgroundColor: '#a9a9a9',
        },
        tableRow: {
          '&:nth-of-type(even)': {
            backgroundColor: '#dcdcdc',
          },
          '&:nth-of-type(odd)': {
            backgroundColor: '#ffffff',
          },
        },
    };
    const rows = [
        { id: 1,monday:'06-B', tuesday: '10-B',wednesday:'07-A', thursday: '08-B', friday:'06-A' },
        { id: 1,monday:'06-B', tuesday: '10-B',wednesday:'07-A', thursday: '08-B', friday:'06-A' },
        { id: 1,monday:'06-B', tuesday: '10-B',wednesday:'07-A', thursday: '08-B', friday:'06-A' },
        { id: 1,monday:'06-B', tuesday: '10-B',wednesday:'07-A', thursday: '08-B', friday:'06-A' },
        { id: 1,monday:'06-B', tuesday: '10-B',wednesday:'07-A', thursday: '08-B', friday:'06-A' },
        { id: 1,monday:'06-B', tuesday: '10-B',wednesday:'07-A', thursday: '08-B', friday:'06-A' },
        { id: 1,monday:'06-B', tuesday: '10-B',wednesday:'07-A', thursday: '08-B', friday:'06-A' },
        { id: 1,monday:'06-B', tuesday: '10-B',wednesday:'07-A', thursday: '08-B', friday:'06-A' },
        
    ];
  
    const columns = [
        { id: 'monday', label: 'Monday' },
        { id: 'tuesday', label: 'Tuesday' },
        { id: 'wednesday', label: 'Wednesday' },
        { id: 'thursday', label: 'Thursday' },
        { id: 'friday', label: 'Friday' },
    ]

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
            <ListItem button component={RouterLink} to="/teachers" style={{marginTop:"60px"}} >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Dashborad" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-timetable" style={{marginTop:"04px"}}>
              <ListItemIcon>
                < Margin />
              </ListItemIcon>
              <ListItemText primary="Time Table" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-classes" style={{marginTop:"04px"}}>
              <ListItemIcon>
                <Business />
              </ListItemIcon>
              <ListItemText primary="My Classes" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-students" style={{marginTop:"04px"}}>
              <ListItemIcon>
                <SupervisorAccount />
              </ListItemIcon>
              <ListItemText primary="My Students" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teacher-attendance" style={{marginTop:"04px"}}>
              <ListItemIcon>
                < PendingActions />
              </ListItemIcon>
              <ListItemText primary="Attendance" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-home-work" style={{marginTop:"04px"}}>
              <ListItemIcon>
                <ContentPaste />
              </ListItemIcon>
              <ListItemText primary="Home work" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-Assigment-monthly-test" style={{marginTop:"04px"}}>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Assigment & Monthly Test" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-Term-Test-Marking" style={{marginTop:"04px"}}>
              <ListItemIcon>
                <CheckBox />
              </ListItemIcon>
              <ListItemText primary="Term test marking" />
            </ListItem>
            <ListItem button component={RouterLink} to="/teachers-my-account" style={{marginTop:"04px"}}>
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
                Full Timetable 
        </Typography>
        </div>
        <div>
        <Box sx={{  maxWidth: '945',  
                    position: 'fixed',
                    width: '77%', 
                    left: "22%", 
                    top: "25%", 
                    height: '30vh',  
                }} >
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
            <TableRow sx={styles.tableHead}>
                {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
                ))}
            </TableRow>
            </TableHead>
        </Table>
        </TableContainer>
        <TableContainer component={Paper} sx={{ maxHeight: '300px', overflow: 'auto' }}>
        <Table>
            <TableBody>
            {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                <TableRow key={row.id} sx={styles.tableRow}>
                    {columns.map((column) => (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                    ))}
                </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
            </Box>
        </div>
        </>
    )
}