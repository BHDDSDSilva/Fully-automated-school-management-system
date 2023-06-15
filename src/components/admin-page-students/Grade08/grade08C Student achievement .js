import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box, Typography,Button, 
         Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, TablePagination, } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle,} from '@mui/icons-material';
import {  Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const Grade08CStudentAchievement = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    };
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
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',indexNumber:'5598', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        
    ];
  
    const columns = [
        { id: 'profilePicture', label: 'Profile Picture' },
        { id: 'name', label: 'Name' },
        { id: 'indexNumber', label: 'Index Number' },
        { id: 'emailAddress', label: 'Email Address' },
        { id: 'address', label: 'Address' },
        { id: 'telePhoneNumber', label: 'Tele Phone Number' },
        { id: 'status', label: 'Status' },
           
    ];
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
        <Typography variant="h3" 
            sx={{ 
                  position: 'fixed', 
                  left: '21%',  
                }}>
            Student Achievements
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
        <TablePagination
            rowsPerPageOptions={[10,25, 50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      </div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Button 
            variant="contained"
            size="big"
            component={RouterLink}
            to="/students-grade08-grade08-C-Student-add-achievement"
            edge="start"
            aria-label="students-grade08-grade08-C-Student-add-achievement"
            
        sx={{   width: '20%', 
                position: 'fixed', 
                right: '1%', 
                top: '11%', 
                height: '10vh', 
                backgroundColor: '#800000',
                border: '4px solid #ff0000',
                color: '#ffffff',
                fontweight: 'bold'
            }}
        >
                Add Students Achievements
        </Button>
      </div>
      </>
    )
}