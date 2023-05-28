import React from 'react';
import { Container, TextField, InputAdornment, IconButton,Card,Typography,Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink} from "react-router-dom"
import classes from "./styles.module.css"

export const SetNewPasswordPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card className={`${classes.card} ${classes.pageHeaderh1}`}>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
            New password
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                Set new password
                </Typography>
        <Container
        maxWidth="xs"
        style={{
            display: 'static',
            alignItems: 'center',
            justifyContent: 'center',
            height: '350vh',
        }}
        >
        <form>
            <Typography variant="body2" color="text.secondary">
                Create new password
            </Typography>
            <TextField
            label="New Password"
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
            <Typography variant="body2" color="text.secondary">
                Create new password
            </Typography>
            <TextField
            label="Confirm Password"
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
        <Button variant="contained" 
                    position="flex" 
                    component={RouterLink}
                    to="/login"
                    edge="start"
                    aria-label="login"
                sx={{ backgroundColor: 'blue', 
                      alignItems:'center'
                     }}>
                Save New Password
            </Button>
        </div>   
        </Container>
        </Card>
        </div>
       </>
    )
}