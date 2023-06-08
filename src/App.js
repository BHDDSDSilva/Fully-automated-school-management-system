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
import { Grade12FormPage } from "./components/common-page/application-form/grade12";
import { OverviewPage } from "./components/common-page/aboutus-page/overview";
import { HistoryPage } from "./components/common-page/aboutus-page/history";
import { ManagementPage } from "./components/common-page/aboutus-page/management";
import { Grade05scholarshipPage } from "./components/common-page/results-page/grade5scholarship";
import { OLresultsPage } from "./components/common-page/results-page/olresults";
import { ALresultsPage } from "./components/common-page/results-page/alresults";
import { ForgotPasswordPage } from "./components/forgot-password/forgotpassword";
import { SetNewPasswordPage } from "./components/forgot-password/setnewpassword";
import { AdminHomePage } from "./components/admin-page/adminhome";
import { StudentsPage } from "./components/admin-page/students";
import { TeachersPage } from "./components/admin-page/teachers";
import { SchoolAttendancePage } from "./components/admin-page/schoolattendance";
import { CommonPage } from "./components/admin-page/common";
import { MyAccountPage } from "./components/admin-page/myaccount";
import { Grade01Page } from "./components/admin-page-students/grade01";
import { Grade02Page } from "./components/admin-page-students/grade02";
import { Grade03Page } from "./components/admin-page-students/grade03";
import { Grade04Page } from "./components/admin-page-students/grade04";
import { Grade05Page } from "./components/admin-page-students/grade05";
import { Grade06Page } from "./components/admin-page-students/grade06";
import { Grade07Page } from "./components/admin-page-students/grade07";
import { Grade08Page } from "./components/admin-page-students/grade08";
import { Grade09Page } from "./components/admin-page-students/grade09";
import { Grade10Page } from "./components/admin-page-students/grade10";
import { Grade11Page } from "./components/admin-page-students/grade11";
import { Grade12Page } from "./components/admin-page-students/grade12";
import { Grade13Page } from "./components/admin-page-students/grade13";
import { AddStudentPage } from "./components/admin-page-students/addstudents";
import { Grade01A } from "./components/admin-page-students/Grade01/grade01A";
import { Grade01B } from "./components/admin-page-students/Grade01/grade01B";
import { Grade01C } from "./components/admin-page-students/Grade01/grade01C";
import { Grade02A } from "./components/admin-page-students/Grade02/grade02A";
import { Grade02B } from "./components/admin-page-students/Grade02/grade02B";
import { Grade02C } from "./components/admin-page-students/Grade02/grade02C";
import { Grade03A } from "./components/admin-page-students/Grade03/grade03A";
import { Grade03B } from "./components/admin-page-students/Grade03/grade03B";
import { Grade03C } from "./components/admin-page-students/Grade03/grade03C";
import { Grade04A } from "./components/admin-page-students/Grade04/grade04A";
import { Grade04B } from "./components/admin-page-students/Grade04/grade04B";
import { Grade04C } from "./components/admin-page-students/Grade04/grade04C";
import { Grade05A } from "./components/admin-page-students/Grade05/grade05A";
import { Grade05B } from "./components/admin-page-students/Grade05/grade05B";
import { Grade05C } from "./components/admin-page-students/Grade05/grade05C";
import { Grade06A } from "./components/admin-page-students/Grade06/grade06A";
import { Grade06B } from "./components/admin-page-students/Grade06/grade06B";
import { Grade06C } from "./components/admin-page-students/Grade06/grade06C";
import { Grade07A } from "./components/admin-page-students/Grade07/grade07A";
import { Grade07B } from "./components/admin-page-students/Grade07/grade07B";
import { Grade07C } from "./components/admin-page-students/Grade07/grade07C";
import { Grade08A } from "./components/admin-page-students/Grade08/grade08A";
import { Grade08B } from "./components/admin-page-students/Grade08/grade08B";
import { Grade08C } from "./components/admin-page-students/Grade08/grade08C";
import { Grade09A } from "./components/admin-page-students/Grade09/grade09A";
import { Grade09B } from "./components/admin-page-students/Grade09/grade09B";
import { Grade09C } from "./components/admin-page-students/Grade09/grade09C";
import { Grade10A } from "./components/admin-page-students/Grade10/grade10A";
import { Grade10B } from "./components/admin-page-students/Grade10/grade10B";
import { Grade10C } from "./components/admin-page-students/Grade10/grade10C";
import { Grade11A } from "./components/admin-page-students/Grade11/grade11A";
import { Grade11B } from "./components/admin-page-students/Grade11/grade11B";
import { Grade11C } from "./components/admin-page-students/Grade11/grade11C";
import { Grade12A } from "./components/admin-page-students/Grade12/grade12A";
import { Grade12B } from "./components/admin-page-students/Grade12/grade12B";
import { Grade12C } from "./components/admin-page-students/Grade12/grade12C";
import { Grade12D } from "./components/admin-page-students/Grade12/grade12D";
import { Grade13A } from "./components/admin-page-students/Grade13/grade13A";
import { Grade13B } from "./components/admin-page-students/Grade13/grade13B";
import { Grade13C } from "./components/admin-page-students/Grade13/grade13C";
import { Grade13D } from "./components/admin-page-students/Grade13/grade13D";


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
        <Route path="/grade5scholarship" exact element={<Grade05scholarshipPage/>}/>
        <Route path="/olresults" exact element={<OLresultsPage/>}/>
        <Route path="/alresults" exact element={<ALresultsPage/>}/>
        <Route path="/aboutus" exact element={<AboutUsPage/>}/>
        <Route path="/school-overview" exact element={<OverviewPage/>}/>
        <Route path="/school-history" exact element={<HistoryPage/>}/>
        <Route path="/school-management" exact element={<ManagementPage/>}/>
        <Route path="/login" exact element={<LoginPage/>} />
        <Route path="/forgot-password" exact element={<ForgotPasswordPage/>}/>
        <Route path="/set-newpassword" exact element={<SetNewPasswordPage/>}/>
        <Route path="/teachers-info" exact element={<TeachersInfoPage />}/>
        <Route path="/school-info" exact element={<SchoolInfoPage />}/>
        <Route path="/grade01-form" exact element={<Grade01FormPage />}/>
        <Route path="/grade06-form" exact element={<Grade06FormPage />}/>
        <Route path="/grade12-form" exact element={<Grade12FormPage/>}/>
        <Route path="/admin" exact element={<AdminHomePage/>}/>
        <Route path="/admin-students" exact element={<StudentsPage/>}/>
        <Route path="/students-grade01" exaxt element={<Grade01Page/>}/>
        <Route path="/students-grade01-grade01-A" exact element={<Grade01A/>}/>
        <Route path="/students-grade01-grade01-B" exact element={<Grade01B/>}/>
        <Route path="/students-grade01-grade01-C" exact element={<Grade01C/>}/>
        <Route path="/students-grade02" exact element={<Grade02Page/>}/>
        <Route path="/students-grade02-grade02-A" exact element={<Grade02A/>}/>
        <Route path="/students-grade02-grade02-B" exact element={<Grade02B/>}/>
        <Route path="/students-grade02-grade02-C" exact element={<Grade02C/>}/>
        <Route path="/students-grade03" exact element={<Grade03Page/>}/>
        <Route path="/students-grade03-grade03-A" exact element={<Grade03A/>}/>
        <Route path="/students-grade03-grade03-B" exact element={<Grade03B/>}/>
        <Route path="/students-grade03-grade03-C" exact element={<Grade03C/>}/>
        <Route path="/students-grade04" exact element={<Grade04Page/>}/>
        <Route path="/students-grade04-grade04-A" exact element={<Grade04A/>}/>
        <Route path="/students-grade04-grade04-B" exact element={<Grade04B/>}/>
        <Route path="/students-grade04-grade04-C" exact element={<Grade04C/>}/>
        <Route path="/students-grade05" exact element={<Grade05Page/>}/>
        <Route path="/students-grade05-grade05-A" exact element={<Grade05A/>}/>
        <Route path="/students-grade05-grade05-B" exact element={<Grade05B/>}/>
        <Route path="/students-grade05-grade05-C" exact element={<Grade05C/>}/>
        <Route path="/students-grade06" exact element={<Grade06Page/>}/>
        <Route path="/students-grade06-grade06-A" exact element={<Grade06A/>}/>
        <Route path="/students-grade06-grade06-B" exact element={<Grade06B/>}/>
        <Route path="/students-grade06-grade06-C" exact element={<Grade06C/>}/>
        <Route path="/students-grade07" exact element={<Grade07Page/>}/>
        <Route path="/students-grade07-grade07-A" exact element={<Grade07A/>}/>
        <Route path="/students-grade07-grade07-B" exact element={<Grade07B/>}/>
        <Route path="/students-grade07-grade07-C" exact element={<Grade07C/>}/>
        <Route path="/students-grade08" exact element={<Grade08Page/>}/>
        <Route path="/students-grade08-grade08-A" exact element={<Grade08A/>}/>
        <Route path="/students-grade08-grade08-B" exact element={<Grade08B/>}/>
        <Route path="/students-grade08-grade08-C" exact element={<Grade08C/>}/>
        <Route path="/students-grade09" exact element={<Grade09Page/>}/>
        <Route path="/students-grade09-grade09-A" exact element={<Grade09A/>}/>
        <Route path="/students-grade09-grade09-B" exact element={<Grade09B/>}/>
        <Route path="/students-grade09-grade09-C" exact element={<Grade09C/>}/>
        <Route path="/students-grade10" exact element={<Grade10Page/>}/>
        <Route path="/students-grade10-grade10-A" exact element={<Grade10A/>}/>
        <Route path="/students-grade10-grade10-B" exact element={<Grade10B/>}/>
        <Route path="/students-grade10-grade10-C" exact element={<Grade10C/>}/>
        <Route path="/students-grade11" exact element={<Grade11Page/>}/>
        <Route path="/students-grade11-grade11-A" exact element={<Grade11A/>}/>
        <Route path="/students-grade11-grade11-B" exact element={<Grade11B/>}/>
        <Route path="/students-grade11-grade11-C" exact element={<Grade11C/>}/>
        <Route path="/students-grade12" exact element={<Grade12Page/>}/>
        <Route path="/students-grade12-grade12-A" exact element={<Grade12A/>}/>
        <Route path="/students-grade12-grade12-B" exact element={<Grade12B/>}/>
        <Route path="/students-grade12-grade12-C" exact element={<Grade12C/>}/>
        <Route path="/students-grade12-grade12-D" exact element={<Grade12D/>}/>
        <Route path="/students-grade13" exact element={<Grade13Page/>}/>
        <Route path="/students-grade13-grade13-A" exact element={<Grade13A/>}/>
        <Route path="/students-grade13-grade13-B" exact element={<Grade13B/>}/>
        <Route path="/students-grade13-grade13-C" exact element={<Grade13C/>}/>
        <Route path="/students-grade13-grade13-D" exact element={<Grade13D/>}/>
        <Route path="/add-students" exact element={<AddStudentPage/>}/>
        <Route path="/admin-teachers" exact element={<TeachersPage/>}/>
        <Route path="/school-attendance" exact element={<SchoolAttendancePage/>}/>
        <Route path="/common-page" exact element={<CommonPage/>}/>
        <Route path="/my-account" exact element={<MyAccountPage/>}/>
      </Routes>
      </Container>
  </Suspense>
   </BrowserRouter>
)