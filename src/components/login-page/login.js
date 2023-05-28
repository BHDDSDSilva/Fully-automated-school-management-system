import React from 'react';
import { Container, TextField, InputAdornment, IconButton,Card,Typography,Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link,} from "react-router-dom"
import classes from "./styles.module.css"

export const LoginPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card className={`${classes.card} ${classes.pageHeaderh1}`}>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
            Welcome !!!
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                Login your Account
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
            required
            />
            <TextField
            label="Password"
            margin="normal"
            fullWidth
            required
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                    onClick={handlePasswordVisibility}
                    edge="end"
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                ),
            }}
            />
        </form>
        <div>
            <Button variant="contained" position="flex" sx={{ backgroundColor: 'blue', alignItems:'center' }}>
                Login
            </Button>
        </div>
        <div>
            <Typography className={`${classes.pageHeader} ${classes.mb2}`} >Forgot your password:
            <Link to="/forgot-password">Forgot password?</Link>
            </Typography>
        </div>    
        </Container>
        </Card>
        </div>
       </>
    )
}