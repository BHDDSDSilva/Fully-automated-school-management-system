import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,
         Typography,Table,TableBody,TableCell,TableContainer,TableHead, TableRow,Paper } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const SGrade01MonthlyTestMarkingPage = () => {

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
        { id: 1,subjects:'Sinhala', iterm: '50',iiterm: '50', iiiterm: '50' },
        { id: 1,subjects:'Maths', iterm: '80',iiterm: '80', iiiterm: '80' },
        { id: 1,subjects:'Budda-Darmaya', iterm: '90',iiterm: '90', iiiterm: '90' },
        { id: 1,subjects:'Parisaraya', iterm: '50',iiterm: '50', iiiterm: '50' },
        { id: 1,subjects:'Total', iterm: '270',iiterm: '270', iiiterm: '270' },
        { id: 1,subjects:'Avarage', iterm: '67.5',iiterm: '67.5', iiiterm: '67.5' },
        { id: 1,subjects:'Place', iterm: '03',iiterm: '03', iiiterm: '03' },
    ];
  
    const columns = [
        { id: 'subjects', label: 'Subjects' },
        { id: 'iterm', label: 'I Term' },
        { id: 'iiterm', label: 'II Term' },
        { id: 'iiiterm', label: 'III Term' },
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
            Grade 01 Monthly Test Marking Sheet
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