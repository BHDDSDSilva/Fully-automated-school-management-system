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
    <div style={{ padding: '20px', textAlign: 'center',margin: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Application form for accepting children for class grade 06
      </Typography>
      <Card sx={{ maxWidth: 1045, backgroundColor: '#f0f0f0' }}>
        <CardContent>
          <form>
          <TextField
            label=" 1.Full Name"
            variant="standard"
            rows={1}
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <TextField
            label="2.Intial with Name"
            variant="standard"
            rows={1}
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <TextField
            label="3.Date of Birthday"
            variant="standard"
            rows={1}
            value={formData.dateofBirthday}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <TextField
            label="4.Address"
            variant="standard"
            rows={1}
            value={formData.address}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <TextField
            label="5.Contact Number (Home/Mobile)"
            variant="standard"
            rows={1}
            value={formData.contactNumber}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <TextField
            label="6.Father Name"
            variant="standard"
            rows={1}
            value={formData.fatherName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          <TextField
            label="7.Mother Name"
            variant="standard"
            rows={1}
            value={formData.motherName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '05px' }}
          />
          </form>
          <Button variant="contained" onClick={handleDownload}
            sx={{ 
                  backgroundColor: 'black' 
                }}>
            Download Form
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
