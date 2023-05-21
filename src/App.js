import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Container} from "@mui/material"
import { NotificationContainer } from "react-notifications"
import { AppLayout } from "./components/layout/app-layout"
import { NewsPage } from "./components/common-page/news-page/news";
import { EventsPage } from "./components/common-page/events-page/events";
import { ResultsPage } from "./components/common-page/results-page/results";
import { AboutUsPage } from "./components/common-page/aboutus-page/aboutus";
import { LoginPage } from "./components/login-page/login";
import { TeachersInfoPage } from "./components/common-page/home-page/teachersinfo";
import { SchoolInfoPage } from "./components/common-page/home-page/schoolinfo";
import { Grade01FormPage } from "./components/common-page/application-form/grade01";
import { Grade06FormPage } from "./components/common-page/application-form/grade06";
import { HomePage } from "./components/common-page/home-page/home";


export const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
    <Container className="page-container">
    <AppLayout/>
    <NotificationContainer/>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/news" exact element={<NewsPage />}/>
        <Route path="/events" exact element={<EventsPage />}/>
        <Route path="/results" exact element={<ResultsPage/>}/>
        <Route path="/aboutus" exact element={<AboutUsPage/>}/>
        <Route path="/login" exact element={<LoginPage/>} />
        <Route path="/teachers-info" exact element={<TeachersInfoPage />}/>
        <Route path="/school-info" exact element={<SchoolInfoPage />}/>
        <Route path="/grade01-form" exact element={<Grade01FormPage />}/>
        <Route path="/grade06-form" exact element={<Grade06FormPage />}/>
      </Routes>
      </Container>
  </Suspense>
   </BrowserRouter>
)