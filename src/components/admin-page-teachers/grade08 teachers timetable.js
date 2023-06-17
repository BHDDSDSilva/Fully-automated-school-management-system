import React, { useState } from 'react';
import { Button,TextField,Typography,Card,CardContent,Table,TableBody,TableCell,TableContainer,TableHead, 
         TableRow,Paper,List, ListItem, ListItemIcon, ListItemText,Box } from '@mui/material';
import { Home,Web,SupervisorAccount,PeopleAlt, PendingActions,AccountCircle } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom";
import {styled} from '@mui/system';
import classes from "./styles.module.css"

export const Grade08TeachersTimetable = () => {
    const [formData, setFormData] = useState({
    Name: '',
    TimeTable: "",
    Grade: "",
    });
    const StyledTableContainer = styled(TableContainer)`
        margin-top: 16px;
        textAlign: 'center'
`;

  const handleChange = (event) => {
    setFormData(event.target.value);
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
        Added Time table
      </Typography>
      </div>
      <div>
      <Card sx={{ maxWidth: 1045, backgroundColor: '#f0f0f0', position: 'fixed', left: '21%', }}>
        <CardContent>
        <Box
              sx={{ maxHeight: '360px', overflow: 'auto' }}
            >
          <form>
          <Typography>1.Full Name</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.Name}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>2.Grade</Typography>
          <TextField 
            variant="standard"
            rows={1}
            value={formData.Grade}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>3. Time Table</Typography>
          <StyledTableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell align='center'>Monday</TableCell>
                    <TableCell align='center'>Tuesday</TableCell>
                    <TableCell align='center'>Wednesday</TableCell>
                    <TableCell align='center'>Thursday</TableCell>
                    <TableCell align='center'>Friday</TableCell>
                    </TableRow>
                </TableHead>
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
                        <TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell><TableCell>
                            <TextField
                                variant="standard"
                                rows={1}
                                value={formData.olresults}
                                onChange={handleChange}
                                fullWidth
                                style={{ marginBottom: '05px' }}
                            />
                        </TableCell>
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
           <Button  type="submit" 
                    variant="contained" 
                    color="primary"
                    component={RouterLink}
                    to="/Grade-08-teachers-information"
                    edge="start"
                    aria-label="Grade-08-teachers-information"
                    sx={{ backgroundColor: 'blue', 
                      alignItems:'center'
                     }}>
                  Add TimeTable
                </Button>
          </form>
          </Box>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
