import React, { useState } from 'react';
import { Button, 
         TextField, 
         Typography,
         Card,
         CardContent,
       } from '@mui/material';


export const Grade06FormPage = () => {
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateofBirthday: '',
    grade05ScholarshipMarks: "",
    address: '',
    contactNumber: '',
    fatherName: '',
    motherName: '',
    });

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
        Application form for accepting children for class grade 06
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
          <Typography>4.Grade05 Scholarship Marks</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.grade05ScholarshipMarks}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>5.Address</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.address}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>6.Contact Number (Home/Mobile)</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.contactNumber}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>7.Father Name</Typography>
          <TextField
            variant="standard"
            rows={1}
            value={formData.fatherName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <Typography>8.Mother Name</Typography>
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
