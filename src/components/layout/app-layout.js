import { useState,  } from "react"
import {
    AppBar,
    Toolbar,
    Typography,
    BottomNavigation,
    BottomNavigationAction,
    Button,
    
} from "@mui/material"
import {  Link as RouterLink,} from "react-router-dom"
import { Phone, Fax, Email, LocationOn, } from '@mui/icons-material';


export const AppLayout = () => {

    const [value, setValue] = useState(0);

    return (
    <>
        <div style={{marginBottom:"70px"}}> 
        <AppBar position="fixed" sx={{ backgroundColor: 'blue' }}>
            <Toolbar>
                <div>
                    <img src="./logo.png" alt="Logo" style={{ width: '50px', height: '50px' }}/>
                </div>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                        Bandaranayaka Balika National College
                    </Typography>
                <Button 
                    component={RouterLink}
                    to="/"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                >
                    Home
                </Button>
                <Button
                    component={RouterLink}
                    to="/news"
                    edge="start"
                    color="inherit"
                    aria-label="news"
                >
                    News
                </Button>
                <Button
                    component={RouterLink}
                    to="/events"
                    edge="start"
                    color="inherit"
                    aria-label="events"
                >
                    Events
                </Button>
                <Button
                    component={RouterLink}
                    to="/results"
                    edge="start"
                    color="inherit"
                    aria-label="results"
                >
                    Results
                </Button>
                <Button
                    component={RouterLink}
                    to="/aboutus"
                    edge="start"
                    color="inherit"
                    aria-label="aboutus"
                >
                    About Us
                </Button>
                <Button
                    component={RouterLink}
                    to="/login"
                    edge="start"
                    color="inherit"
                    aria-label="login"
                >
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    </div>
    <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'blue',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          @2023 BBNC
        </Typography>
        <BottomNavigationAction
          label="Contact: 0632250648"
          icon={<Phone />}
          style={{ color: 'white' }}
        />
        <BottomNavigationAction label="Fax: 0632250649" icon={<Fax />} style={{ color: 'white' }} />
        <BottomNavigationAction
          label="Email: BBNC@gmail.com"
          icon={<Email />}
          style={{ color: 'white' }}
        />
        <BottomNavigationAction
          label="Location: Ampara"
          icon={<LocationOn />}
          style={{ color: 'white' }}
        />
    </BottomNavigation>   
    </>
    )
}