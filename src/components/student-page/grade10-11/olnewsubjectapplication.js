import React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Box,Card,CardContent,
         Typography,TextField,Button,Table,TableBody,TableRow,TableCell,TableContainer,Paper } from '@mui/material';
import { Home,AccountCircle,Business } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"
import {styled} from '@mui/system';
import classes from "./styles.module.css"

export const SOLnewsubjectapplicationPage = () => {

  const [formData, setFormData] = useState({
    indexnuber:'',
    firstName: '',
    olresults: "",
    contactNumber: '',
    });
    const StyledTableContainer = styled(TableContainer)`
        margin-top: 16px;
        textAlign: 'center'
`;

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([formData], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'myForm.pdf';
    document.body.appendChild(element);
    element.click();
  };
    
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
            O/L New Subject Application
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
            <form>
            <Typography>1. Index Number</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.indexnuber}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>2.Full Name</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>3.Subject</Typography>
          <StyledTableContainer component={Paper}>
                <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell>  
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell>  
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </StyledTableContainer>
            <TextField
            variant="standard"
            fullWidth
            style={{ marginBottom: '05px' }}
            /> 
          <Typography>4.Contact Number (Home/Mobile)</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.contactNumber}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Button onClick={handleDownload}>
            Submit
          </Button>
          </form>
                    
            </CardContent>
        </Card>
      </div>
      </>
    )
}