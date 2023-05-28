import React from 'react';
import { Container, TextField,Card,Typography,Button } from '@mui/material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const ForgotPasswordPage = () => {
    
    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card className={`${classes.card1} ${classes.pageHeaderh1}`}>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
            Forgot Password
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                Enter your user name
        </Typography>
        <Container
        maxWidth="xs"
        style={{
            display: 'static',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}
        >
        <form>
            <TextField
            label="Username"
            margin="normal"
            fullWidth
            />
        </form>
        <div>
            <Button variant="contained" 
                    position="flex" 
                    component={RouterLink}
                    to="/set-newpassword"
                    edge="start"
                    aria-label="set-newpassword"
                sx={{ backgroundColor: 'blue', 
                      alignItems:'center'
                     }}>
                Continue
            </Button>
        </div>   
        </Container>
        </Card>
        </div>
       </>
    )
}