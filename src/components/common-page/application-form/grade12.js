import React, { useState } from 'react';
import { Button, 
         TextField, 
         Typography,
         Card,
         CardContent,
         Table, 
         TableBody, 
         TableCell, 
         TableContainer, 
         TableHead, 
         TableRow, 
         Paper
       } from '@mui/material';
import {styled} from '@mui/system';

export const Grade12FormPage = () => {
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateofBirthday: '',
    olresults: "",
    subjectOfField: "",
    address: '',
    contactNumber: '',
    fatherName: '',
    motherName: '',
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
    <div style={{ padding: '20px', textAlign: 'left',margin: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Application form for accepting children for class grade 12
      </Typography>
      <Card sx={{ maxWidth: 1045, backgroundColor: '#f0f0f0' }}>
        <CardContent>
          <form>
          <Typography>1.Full Name</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>2.Intial with Name</Typography>
          <TextField 
            variant="standard"
            rows={1}
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>3.Date of Birthday</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.dateofBirthday}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>4.O/L Results</Typography>
          <StyledTableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Subject</TableCell>
                    <TableCell>Grade</TableCell>
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
                    </TableRow>
                </TableBody>
                </Table>
            </StyledTableContainer>
            <TextField
            variant="standard"
            fullWidth
            style={{ marginBottom: '05px' }}
            /> 
        <Typography>5.Subject Of Field</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.subjectOfField}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>6.Address</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.address}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>7.Contact Number (Home/Mobile)</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.contactNumber}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>8.Father Name</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.fatherName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>9.Mother Name</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.motherName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Button onClick={handleDownload}>
            Download Form
          </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
