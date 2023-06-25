import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Typography,
         Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, TablePagination } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const Grade01TeachersInchageTeachersInformationPage = () => {

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
        { id: 1,profilePicture:'1121111111', name: 'John Doe',grade:'01-A', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-B', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-C', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-A', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-A', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-A', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-A', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-A', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-A', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-A', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-A', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        { id: 1,profilePicture:'112', name: 'John Doe',grade:'01-A', emailAddress: 'john.doe@example.com', address:'123,tgg', telePhoneNumber: '022548937',status: 'active' },
        
    ];
  
    const columns = [
        { id: 'profilePicture', label: 'Profile Picture' },
        { id: 'name', label: 'Name' },
        { id: 'grade', label: 'Grade' },
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
                   backgroundColor: '#87cefa',
                }} >
        <List >
          <ListItem button component={RouterLink} to="/teachers-incharge" style={{marginTop:"60px"}} >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Dashborad" />
          </ListItem>
          <ListItem button component={RouterLink} to="/teachers-incharge-grade-01-05" style={{marginTop:"30px"}}>
            <ListItemIcon>
              < Business />
            </ListItemIcon>
            <ListItemText primary="Grade 01 - 05" />
          </ListItem>
          <ListItem button component={RouterLink} to="/teachers-incharge-grade-06-09" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Grade 06 - 09" />
          </ListItem>
          <ListItem button component={RouterLink} to="/teachers-incharge-grade-10-11" style={{marginTop:"30px"}}>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Grade 10 - 11" />
          </ListItem>
          <ListItem button component={RouterLink} to="/teachers-incharge-grade-12-13" style={{marginTop:"30px"}}>
            <ListItemIcon>
              < Business />
            </ListItemIcon>
            <ListItemText primary="Grade 12 - 13" />
          </ListItem>
          <ListItem button component={RouterLink} to="/teachers-incharge-my-account" style={{marginTop:"75px"}}>
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
            Teachers Records
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
      </>
    )
}