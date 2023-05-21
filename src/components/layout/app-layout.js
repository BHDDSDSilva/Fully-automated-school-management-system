import { useState,  } from "react"
import {
    AppBar,
    Toolbar,
    Typography,
    BottomNavigation,
    BottomNavigationAction,
    Button,
    
} from "@mui/material"
import { Route, Routes, Navigate, Link as RouterLink,} from "react-router-dom"
import { Phone, Fax, Email, LocationOn, } from '@mui/icons-material';
import { HomePage } from "../common-page/home-page/home"
import { TeachersInfoPage } from "../common-page/home-page/teachersinfo"
import { SchoolInfoPage } from "../common-page/home-page/schoolinfo"
import { NewsPage } from "../common-page/news-page/news"
import { EventsPage } from "../common-page/events-page/events"
import { ResultsPage } from "../common-page/results-page/results"
import { AboutUsPage } from "../common-page/aboutus-page/aboutus"
import { LoginPage } from "../login-page/login"

export const AppLayout = () => {

    const [value, setValue] = useState(0);

    return (
        <>
       <AppBar position="relative" sx={{ backgroundColor: 'blue' }}>
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
                to="/"
                edge="start"
                color="inherit"
                aria-label="news"
            >
                News
            </Button>
            <Button
                component={RouterLink}
                to="/"
                edge="start"
                color="inherit"
                aria-label="home"
            >
                Events
            </Button>
            <Button
                component={RouterLink}
                to="/"
                edge="start"
                color="inherit"
                aria-label="home"
            >
                Results
            </Button>
            <Button
                component={RouterLink}
                to="/"
                edge="start"
                color="inherit"
                aria-label="home"
            >
                About Us
            </Button>
            <Button
                component={RouterLink}
                to="/"
                edge="start"
                color="inherit"
                aria-label="home"
            >
                Login
            </Button>
      </Toolbar>
    </AppBar>
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            sx={{
                position: 'fixed',
                bottom: 0,
                right: 0,
                width: '100%',
                backgroundColor: 'blue',
              }}
        >
            <Typography
            sx={{
                color: 'white',
                display: "flex",
                justifyContent: 'left',
                alignItems: 'center',
            }}
            > 
                @2023 BBNC
            </Typography> 
            <BottomNavigationAction label="Contact: 0632250648" icon={<Phone />} style={{ color: 'white' }} />
            <BottomNavigationAction label="Fax: 0632250649" icon={<Fax />} style={{ color: 'white' }}/>
            <BottomNavigationAction label="Email: BBNC@gmail.com" icon={<Email />} style={{ color: 'white' }}/>
            <BottomNavigationAction label="Location: Ampara" icon={<LocationOn />} style={{ color: 'white' }}/>
        </BottomNavigation>
        <Routes>
            <Route path="/home" exact element={<HomePage />}/>
            <Route path="*" element={<Navigate to="/home" replace />} /> 
            <Route path="/news" exact element={<NewsPage />}/>
            <Route path="/events" exact element={<EventsPage />}/>
            <Route path="/results" exact element={<ResultsPage/>}/>
            <Route path="/aboutus" exact element={<AboutUsPage/>}/>
            <Route path="/login" exact element={<LoginPage/>} />
            <Route path="/teachers-info" exact element={<TeachersInfoPage />}/>
            <Route path="/school-info" exact element={<SchoolInfoPage />}/>
        </Routes>
        
        </>
    )
}