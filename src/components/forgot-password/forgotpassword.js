import React from 'react';
import { Container, TextField,Card,Typography,Button } from '@mui/material';
import { Link as RouterLink } from "react-router-dom"
import classes from "./styles.module.css"

export const ForgotPasswordPage = () => {
    
    return(
        <>
        <div 
            style={{
            backgroundImage: `url('./forgotpassword.webp')`,
            backgroundSize: 'cover',
            backgroundrepeat: 'no-repeat',
            backgroundPosition: 'left',
            height: '500px',
            width: '645px',
            }}
        > 
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card className={`${classes.card1} ${classes.pageHeaderh1}`} 
            sx={{  
                   position: 'fixed', 
                   right:'20%', 
                   bottom: '30%',
                   height: '250px', 
                   backgroundColor: '#87ceeb',
                   border: '4px solid #0000cd'
                }}>
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
        </div>
       </>
    )
}