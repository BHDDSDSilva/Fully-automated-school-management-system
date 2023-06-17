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
import { Grade01AStudentRecords } from "./components/admin-page-students/Grade01/grade01A Student records";
import { Grade01AStudentAchievement } from "./components/admin-page-students/Grade01/grade01A Student achievement";
import { Grade01AStudentStatus } from "./components/admin-page-students/Grade01/grade01A Student status";
import { Grade01BStudentRecords } from "./components/admin-page-students/Grade01/grade01B Student records ";
import { Grade01BStudentAchievement } from "./components/admin-page-students/Grade01/grade01B Student achievement ";
import { Grade01BStudentStatus } from "./components/admin-page-students/Grade01/grade01B Student status ";
import { Grade01CStudentRecords } from "./components/admin-page-students/Grade01/grade01C Student records ";
import { Grade01CStudentAchievement } from "./components/admin-page-students/Grade01/grade01C Student achievement ";
import { Grade01CStudentStatus } from "./components/admin-page-students/Grade01/grade01C Student status ";
import { Grade02AStudentRecords } from "./components/admin-page-students/Grade02/grade02A Student records";
import { Grade02AStudentAchievement } from "./components/admin-page-students/Grade02/grade02A Student achievement";
import { Grade02AStudentStatus } from "./components/admin-page-students/Grade02/grade02A Student status";
import { Grade02BStudentRecords } from "./components/admin-page-students/Grade02/grade02B Student records ";
import { Grade02BStudentAchievement } from "./components/admin-page-students/Grade02/grade02B Student achievement ";
import { Grade02BStudentStatus } from "./components/admin-page-students/Grade02/grade02B Student status ";
import { Grade02CStudentRecords } from "./components/admin-page-students/Grade02/grade02C Student records ";
import { Grade02CStudentAchievement } from "./components/admin-page-students/Grade02/grade02C Student achievement ";
import { Grade02CStudentStatus } from "./components/admin-page-students/Grade02/grade02C Student status ";
import { Grade03AStudentRecords } from "./components/admin-page-students/Grade03/grade03A Student records";
import { Grade03AStudentAchievement } from "./components/admin-page-students/Grade03/grade03A Student achievement";
import { Grade03AStudentStatus } from "./components/admin-page-students/Grade03/grade03A Student status";
import { Grade03BStudentRecords } from "./components/admin-page-students/Grade03/grade03B Student records ";
import { Grade03BStudentAchievement } from "./components/admin-page-students/Grade03/grade03B Student achievement ";
import { Grade03BStudentStatus } from "./components/admin-page-students/Grade03/grade03B Student status ";
import { Grade03CStudentRecords } from "./components/admin-page-students/Grade03/grade03C Student records ";
import { Grade03CStudentAchievement } from "./components/admin-page-students/Grade03/grade03C Student achievement ";
import { Grade03CStudentStatus } from "./components/admin-page-students/Grade03/grade03C Student status ";
import { Grade04AStudentRecords } from "./components/admin-page-students/Grade04/grade04A Student records";
import { Grade04AStudentAchievement } from "./components/admin-page-students/Grade04/grade04A Student achievement";
import { Grade04AStudentStatus } from "./components/admin-page-students/Grade04/grade04A Student status";
import { Grade04BStudentRecords } from "./components/admin-page-students/Grade04/grade04B Student records ";
import { Grade04BStudentAchievement } from "./components/admin-page-students/Grade04/grade04B Student achievement ";
import { Grade04BStudentStatus } from "./components/admin-page-students/Grade04/grade04B Student status ";
import { Grade04CStudentRecords } from "./components/admin-page-students/Grade04/grade04C Student records ";
import { Grade04CStudentAchievement } from "./components/admin-page-students/Grade04/grade04C Student achievement ";
import { Grade04CStudentStatus } from "./components/admin-page-students/Grade04/grade04C Student status ";
import { Grade05AStudentRecords } from "./components/admin-page-students/Grade05/grade05A Student records";
import { Grade05AStudentAchievement } from "./components/admin-page-students/Grade05/grade05A Student achievement";
import { Grade05AStudentStatus } from "./components/admin-page-students/Grade05/grade05A Student status";
import { Grade05BStudentRecords } from "./components/admin-page-students/Grade05/grade05B Student records ";
import { Grade05BStudentAchievement } from "./components/admin-page-students/Grade05/grade05B Student achievement ";
import { Grade05BStudentStatus } from "./components/admin-page-students/Grade05/grade05B Student status ";
import { Grade05CStudentRecords } from "./components/admin-page-students/Grade05/grade05C Student records ";
import { Grade05CStudentAchievement } from "./components/admin-page-students/Grade05/grade05C Student achievement ";
import { Grade05CStudentStatus } from "./components/admin-page-students/Grade05/grade05C Student status ";
import { Grade06AStudentRecords } from "./components/admin-page-students/Grade06/grade06A Student records";
import { Grade06AStudentAchievement } from "./components/admin-page-students/Grade06/grade06A Student achievement";
import { Grade06AStudentStatus } from "./components/admin-page-students/Grade06/grade06A Student status";
import { Grade06BStudentRecords } from "./components/admin-page-students/Grade06/grade06B Student records ";
import { Grade06BStudentAchievement } from "./components/admin-page-students/Grade06/grade06B Student achievement ";
import { Grade06BStudentStatus } from "./components/admin-page-students/Grade06/grade06B Student status ";
import { Grade06CStudentRecords } from "./components/admin-page-students/Grade06/grade06C Student records ";
import { Grade06CStudentAchievement } from "./components/admin-page-students/Grade06/grade06C Student achievement ";
import { Grade06CStudentStatus } from "./components/admin-page-students/Grade06/grade06C Student status ";
import { Grade07AStudentRecords } from "./components/admin-page-students/Grade07/grade07A Student records";
import { Grade07AStudentAchievement } from "./components/admin-page-students/Grade07/grade07A Student achievement";
import { Grade07AStudentStatus } from "./components/admin-page-students/Grade07/grade07A Student status";
import { Grade07BStudentRecords } from "./components/admin-page-students/Grade07/grade07B Student records ";
import { Grade07BStudentAchievement } from "./components/admin-page-students/Grade07/grade07B Student achievement ";
import { Grade07BStudentStatus } from "./components/admin-page-students/Grade07/grade07B Student status ";
import { Grade07CStudentRecords } from "./components/admin-page-students/Grade07/grade07C Student records ";
import { Grade07CStudentAchievement } from "./components/admin-page-students/Grade07/grade07C Student achievement ";
import { Grade07CStudentStatus } from "./components/admin-page-students/Grade07/grade07C Student status ";
import { Grade08AStudentRecords } from "./components/admin-page-students/Grade08/grade08A Student records";
import { Grade08AStudentAchievement } from "./components/admin-page-students/Grade08/grade08A Student achievement";
import { Grade08AStudentStatus } from "./components/admin-page-students/Grade08/grade08A Student status";
import { Grade08BStudentRecords } from "./components/admin-page-students/Grade08/grade08B Student records ";
import { Grade08BStudentAchievement } from "./components/admin-page-students/Grade08/grade08B Student achievement ";
import { Grade08BStudentStatus } from "./components/admin-page-students/Grade08/grade08B Student status ";
import { Grade08CStudentRecords } from "./components/admin-page-students/Grade08/grade08C Student records ";
import { Grade08CStudentAchievement } from "./components/admin-page-students/Grade08/grade08C Student achievement ";
import { Grade08CStudentStatus } from "./components/admin-page-students/Grade08/grade08C Student status ";
import { Grade09AStudentRecords } from "./components/admin-page-students/Grade09/grade09A Student records";
import { Grade09AStudentAchievement } from "./components/admin-page-students/Grade09/grade09A Student achievement";
import { Grade09AStudentStatus } from "./components/admin-page-students/Grade09/grade09A Student status";
import { Grade09BStudentRecords } from "./components/admin-page-students/Grade09/grade09B Student records ";
import { Grade09BStudentAchievement } from "./components/admin-page-students/Grade09/grade09B Student achievement ";
import { Grade09BStudentStatus } from "./components/admin-page-students/Grade09/grade09B Student status ";
import { Grade09CStudentRecords } from "./components/admin-page-students/Grade09/grade09C Student records ";
import { Grade09CStudentAchievement } from "./components/admin-page-students/Grade09/grade09C Student achievement ";
import { Grade09CStudentStatus } from "./components/admin-page-students/Grade09/grade09C Student status ";
import { Grade10AStudentRecords } from "./components/admin-page-students/Grade10/grade10A Student records";
import { Grade10AStudentAchievement } from "./components/admin-page-students/Grade10/grade10A Student achievement";
import { Grade10AStudentStatus } from "./components/admin-page-students/Grade10/grade10A Student status";
import { Grade10BStudentRecords } from "./components/admin-page-students/Grade10/grade10B Student records ";
import { Grade10BStudentAchievement } from "./components/admin-page-students/Grade10/grade10B Student achievement ";
import { Grade10BStudentStatus } from "./components/admin-page-students/Grade10/grade10B Student status ";
import { Grade10CStudentRecords } from "./components/admin-page-students/Grade10/grade10C Student records ";
import { Grade10CStudentAchievement } from "./components/admin-page-students/Grade10/grade10C Student achievement ";
import { Grade10CStudentStatus } from "./components/admin-page-students/Grade10/grade10C Student status ";
import { Grade11AStudentRecords } from "./components/admin-page-students/Grade11/grade11A Student records";
import { Grade11AStudentAchievement } from "./components/admin-page-students/Grade11/grade11A Student achievement";
import { Grade11AStudentStatus } from "./components/admin-page-students/Grade11/grade11A Student status";
import { Grade11BStudentRecords } from "./components/admin-page-students/Grade11/grade11B Student records ";
import { Grade11BStudentAchievement } from "./components/admin-page-students/Grade11/grade11B Student achievement ";
import { Grade11BStudentStatus } from "./components/admin-page-students/Grade11/grade11B Student status ";
import { Grade11CStudentRecords } from "./components/admin-page-students/Grade11/grade11C Student records ";
import { Grade11CStudentAchievement } from "./components/admin-page-students/Grade11/grade11C Student achievement ";
import { Grade11CStudentStatus } from "./components/admin-page-students/Grade11/grade11C Student status ";
import { Grade12AStudentRecords } from "./components/admin-page-students/Grade12/grade12A Student records";
import { Grade12AStudentAchievement } from "./components/admin-page-students/Grade12/grade12A Student achievement";
import { Grade12AStudentStatus } from "./components/admin-page-students/Grade12/grade12A Student status";
import { Grade12BStudentRecords } from "./components/admin-page-students/Grade12/grade12B Student records ";
import { Grade12BStudentAchievement } from "./components/admin-page-students/Grade12/grade12B Student achievement ";
import { Grade12BStudentStatus } from "./components/admin-page-students/Grade12/grade12B Student status ";
import { Grade12CStudentRecords } from "./components/admin-page-students/Grade12/grade12C Student records ";
import { Grade12CStudentAchievement } from "./components/admin-page-students/Grade12/grade12C Student achievement ";
import { Grade12CStudentStatus } from "./components/admin-page-students/Grade12/grade12C Student status ";
import { Grade12DStudentRecords } from "./components/admin-page-students/Grade12/grade12D Student records ";
import { Grade12DStudentAchievement } from "./components/admin-page-students/Grade12/grade12D Student achievement ";
import { Grade12DStudentStatus } from "./components/admin-page-students/Grade12/grade12D Student status ";
import { Grade13AStudentRecords } from "./components/admin-page-students/Grade13/grade13A Student records";
import { Grade13AStudentAchievement } from "./components/admin-page-students/Grade13/grade13A Student achievement";
import { Grade13AStudentStatus } from "./components/admin-page-students/Grade13/grade13A Student status";
import { Grade13BStudentRecords } from "./components/admin-page-students/Grade13/grade13B Student records ";
import { Grade13BStudentAchievement } from "./components/admin-page-students/Grade13/grade13B Student achievement ";
import { Grade13BStudentStatus } from "./components/admin-page-students/Grade13/grade13B Student status ";
import { Grade13CStudentRecords } from "./components/admin-page-students/Grade13/grade13C Student records ";
import { Grade13CStudentAchievement } from "./components/admin-page-students/Grade13/grade13C Student achievement ";
import { Grade13CStudentStatus } from "./components/admin-page-students/Grade13/grade13C Student status ";
import { Grade13DStudentRecords } from "./components/admin-page-students/Grade13/grade13D Student records";
import { Grade13DStudentAchievement } from "./components/admin-page-students/Grade13/grade13D Student achievement";
import { Grade13DStudentStatus } from "./components/admin-page-students/Grade13/grade13D Student status";
import { AddAchievements01A } from "./components/admin-page-students/Grade01/addachievement01A";
import { AddAchievements01B } from "./components/admin-page-students/Grade01/addachievement01B";
import { AddAchievements01C } from "./components/admin-page-students/Grade01/addachievement01C";
import { AddAchievements02A } from "./components/admin-page-students/Grade02/addachievement02A";
import { AddAchievements02B } from "./components/admin-page-students/Grade02/addachievement02B";
import { AddAchievements02C } from "./components/admin-page-students/Grade02/addachievement02C";
import { AddAchievements03A } from "./components/admin-page-students/Grade03/addachievement03A";
import { AddAchievements03B } from "./components/admin-page-students/Grade03/addachievement03B";
import { AddAchievements03C } from "./components/admin-page-students/Grade03/addachievement03C";
import { AddAchievements04A } from "./components/admin-page-students/Grade04/addachievement04A";
import { AddAchievements04B } from "./components/admin-page-students/Grade04/addachievement04B";
import { AddAchievements04C } from "./components/admin-page-students/Grade04/addachievement04C";
import { AddAchievements05A } from "./components/admin-page-students/Grade05/addachievement05A";
import { AddAchievements05B } from "./components/admin-page-students/Grade05/addachievement05B";
import { AddAchievements05C } from "./components/admin-page-students/Grade05/addachievement05C";
import { AddAchievements06A } from "./components/admin-page-students/Grade06/addachievement06A";
import { AddAchievements06B } from "./components/admin-page-students/Grade06/addachievement06B";
import { AddAchievements06C } from "./components/admin-page-students/Grade06/addachievement06C";
import { AddAchievements07A } from "./components/admin-page-students/Grade07/addachievement07A";
import { AddAchievements07B } from "./components/admin-page-students/Grade07/addachievement07B";
import { AddAchievements07C } from "./components/admin-page-students/Grade07/addachievement07C";
import { AddAchievements08A } from "./components/admin-page-students/Grade08/addachievement08A";
import { AddAchievements08B } from "./components/admin-page-students/Grade08/addachievement08B";
import { AddAchievements08C } from "./components/admin-page-students/Grade08/addachievement08C";
import { AddAchievements09A } from "./components/admin-page-students/Grade09/addachievement09A";
import { AddAchievements09B } from "./components/admin-page-students/Grade09/addachievement09B";
import { AddAchievements09C } from "./components/admin-page-students/Grade09/addachievement09C";
import { AddAchievements10A } from "./components/admin-page-students/Grade10/addachievement10A";
import { AddAchievements10B } from "./components/admin-page-students/Grade10/addachievement10B";
import { AddAchievements10C } from "./components/admin-page-students/Grade10/addachievement10C";
import { AddAchievements11A } from "./components/admin-page-students/Grade11/addachievement11A";
import { AddAchievements11B } from "./components/admin-page-students/Grade11/addachievement11B";
import { AddAchievements11C } from "./components/admin-page-students/Grade11/addachievement11C";
import { AddAchievements12A } from "./components/admin-page-students/Grade12/addachievement12A";
import { AddAchievements12B } from "./components/admin-page-students/Grade12/addachievement12B";
import { AddAchievements12C } from "./components/admin-page-students/Grade12/addachievement12C";
import { AddAchievements12D } from "./components/admin-page-students/Grade12/addachievement12D";
import { AddAchievements13A } from "./components/admin-page-students/Grade13/addachievement13A";
import { AddAchievements13B } from "./components/admin-page-students/Grade13/addachievement13B";
import { AddAchievements13C } from "./components/admin-page-students/Grade13/addachievement13C";
import { AddAchievements13D } from "./components/admin-page-students/Grade13/addachievement13D";
import { AddTeachersPage } from "./components/admin-page-teachers/addteachers";
import { Grade01TeachersInformationPage } from "./components/admin-page-teachers/Grade01";
import { Grade01TeachersRecord } from "./components/admin-page-teachers/grade01 Teachers records";
import { Grade01TeachersTimetable } from "./components/admin-page-teachers/grade01 teachers timetable";
import { Grade01TeachersStatus } from "./components/admin-page-teachers/grade01 Teachers status";
import { Grade02TeachersInformationPage } from "./components/admin-page-teachers/Grade02";
import { Grade02TeachersRecord } from "./components/admin-page-teachers/grade02 Teachers records";
import { Grade02TeachersTimetable } from "./components/admin-page-teachers/grade02 teachers timetable";
import { Grade02TeachersStatus } from "./components/admin-page-teachers/grade02 Teachers status";
import { Grade03TeachersInformationPage } from "./components/admin-page-teachers/Grade03";
import { Grade03TeachersRecord } from "./components/admin-page-teachers/grade03 Teachers records";
import { Grade03TeachersTimetable } from "./components/admin-page-teachers/grade03 teachers timetable";
import { Grade03TeachersStatus } from "./components/admin-page-teachers/grade03 Teachers status";
import { Grade04TeachersInformationPage } from "./components/admin-page-teachers/Grade04";
import { Grade04TeachersRecord } from "./components/admin-page-teachers/grade04 Teachers records";
import { Grade04TeachersTimetable } from "./components/admin-page-teachers/grade04 teachers timetable";
import { Grade04TeachersStatus } from "./components/admin-page-teachers/grade04 Teachers status";
import { Grade05TeachersInformationPage } from "./components/admin-page-teachers/Grade05";
import { Grade05TeachersRecord } from "./components/admin-page-teachers/grade05 Teachers records";
import { Grade05TeachersTimetable } from "./components/admin-page-teachers/grade05 teachers timetable";
import { Grade05TeachersStatus } from "./components/admin-page-teachers/grade05 Teachers status";
import { Grade06TeachersInformationPage } from "./components/admin-page-teachers/Grade06";
import { Grade06TeachersRecord } from "./components/admin-page-teachers/grade06 Teachers records";
import { Grade06TeachersTimetable } from "./components/admin-page-teachers/grade06 teachers timetable";
import { Grade06TeachersStatus } from "./components/admin-page-teachers/grade06 Teachers status ";
import { Grade07TeachersInformationPage } from "./components/admin-page-teachers/Grade07";
import { Grade07TeachersRecord } from "./components/admin-page-teachers/grade07 Teachers records";
import { Grade07TeachersTimetable } from "./components/admin-page-teachers/grade07 teachers timetable";
import { Grade07TeachersStatus } from "./components/admin-page-teachers/grade07 Teachers status";
import { Grade08TeachersInformationPage } from "./components/admin-page-teachers/Grade08";
import { Grade08TeachersRecord } from "./components/admin-page-teachers/grade08 Teachers records";
import { Grade08TeachersTimetable } from "./components/admin-page-teachers/grade08 teachers timetable";
import { Grade08TeachersStatus } from "./components/admin-page-teachers/grade08 Teachers status";
import { Grade09TeachersInformationPage } from "./components/admin-page-teachers/Grade09";
import { Grade09TeachersRecord } from "./components/admin-page-teachers/grade09 Teachers records ";
import { Grade09TeachersTimetable } from "./components/admin-page-teachers/grade09 teachers timetable";
import { Grade09TeachersStatus } from "./components/admin-page-teachers/grade09 Teachers status";
import { Grade10TeachersInformationPage } from "./components/admin-page-teachers/Grade10";
import { Grade10TeachersRecord } from "./components/admin-page-teachers/grade10 Teachers records ";
import { Grade10TeachersTimetable } from "./components/admin-page-teachers/grade10 teachers timetable ";
import { Grade10TeachersStatus } from "./components/admin-page-teachers/grade10 Teachers status ";
import { Grade11TeachersInformationPage } from "./components/admin-page-teachers/Grade11";
import { Grade11TeachersRecord } from "./components/admin-page-teachers/grade11 Teachers records";
import { Grade11TeachersTimetable } from "./components/admin-page-teachers/grade11 teachers timetable";
import { Grade11TeachersStatus } from "./components/admin-page-teachers/grade11 Teachers status";
import { Grade12TeachersInformationPage } from "./components/admin-page-teachers/Grade12";
import { Grade12TeachersRecord } from "./components/admin-page-teachers/grade12 Teachers records";
import { Grade12TeachersTimetable } from "./components/admin-page-teachers/grade12 teachers timetable";
import { Grade12TeachersStatus } from "./components/admin-page-teachers/grade12 Teachers status";
import { Grade13TeachersInformationPage } from "./components/admin-page-teachers/Grade13";
import { Grade13TeachersRecord } from "./components/admin-page-teachers/grade13 Teachers records";
import { Grade13TeachersTimetable } from "./components/admin-page-teachers/grade13 teachers timetable";
import { Grade13TeachersStatus } from "./components/admin-page-teachers/grade13 Teachers status";
import { StudentAttendancePage } from "./components/admin-page-school- attendance/studentattendance";
import { TeacherAttendancePage } from "./components/admin-page-school- attendance/teachersattendance";
import { Grade01AttendancePage } from "./components/admin-page-school- attendance/Grade01/grade01";
import { Grade01AAttendancePage } from "./components/admin-page-school- attendance/Grade01/01A";
import { Grade01BAttendancePage } from "./components/admin-page-school- attendance/Grade01/01B";
import { Grade01CAttendancePage } from "./components/admin-page-school- attendance/Grade01/01C";
import { Grade02AttendancePage } from "./components/admin-page-school- attendance/Grade02/grade02";
import { Grade02AAttendancePage } from "./components/admin-page-school- attendance/Grade02/02A";
import { Grade02BAttendancePage } from "./components/admin-page-school- attendance/Grade02/02B";
import { Grade02CAttendancePage } from "./components/admin-page-school- attendance/Grade02/02C";
import { Grade03AttendancePage } from "./components/admin-page-school- attendance/Grade03/grade03";
import { Grade03AAttendancePage } from "./components/admin-page-school- attendance/Grade03/03A";
import { Grade03BAttendancePage } from "./components/admin-page-school- attendance/Grade03/03B";
import { Grade03CAttendancePage } from "./components/admin-page-school- attendance/Grade03/03C";
import { Grade04AttendancePage } from "./components/admin-page-school- attendance/Grade04/grade04";
import { Grade04AAttendancePage } from "./components/admin-page-school- attendance/Grade04/04A";
import { Grade04BAttendancePage } from "./components/admin-page-school- attendance/Grade04/04B";
import { Grade04CAttendancePage } from "./components/admin-page-school- attendance/Grade04/04C";
import { Grade05AttendancePage } from "./components/admin-page-school- attendance/Grade05/grade05";
import { Grade05AAttendancePage } from "./components/admin-page-school- attendance/Grade05/05A";
import { Grade05BAttendancePage } from "./components/admin-page-school- attendance/Grade05/05B";
import { Grade05CAttendancePage } from "./components/admin-page-school- attendance/Grade05/05C";
import { Grade06AttendancePage } from "./components/admin-page-school- attendance/Grade06/grade06";
import { Grade06AAttendancePage } from "./components/admin-page-school- attendance/Grade06/06A";
import { Grade06BAttendancePage } from "./components/admin-page-school- attendance/Grade06/06B";
import { Grade06CAttendancePage } from "./components/admin-page-school- attendance/Grade06/06C";
import { Grade07AttendancePage } from "./components/admin-page-school- attendance/Grade07/grade07";
import { Grade07AAttendancePage } from "./components/admin-page-school- attendance/Grade07/07A";
import { Grade07BAttendancePage } from "./components/admin-page-school- attendance/Grade07/07B";
import { Grade07CAttendancePage } from "./components/admin-page-school- attendance/Grade07/07C";
import { Grade08AttendancePage } from "./components/admin-page-school- attendance/Grade08/grade08";
import { Grade08AAttendancePage } from "./components/admin-page-school- attendance/Grade08/08A";
import { Grade08BAttendancePage } from "./components/admin-page-school- attendance/Grade08/08B";
import { Grade08CAttendancePage } from "./components/admin-page-school- attendance/Grade08/08C";
import { Grade09AttendancePage } from "./components/admin-page-school- attendance/Grade09/grade09";
import { Grade09AAttendancePage } from "./components/admin-page-school- attendance/Grade09/09A";
import { Grade09BAttendancePage } from "./components/admin-page-school- attendance/Grade09/09B";
import { Grade09CAttendancePage } from "./components/admin-page-school- attendance/Grade09/09C";
import { Grade10AttendancePage } from "./components/admin-page-school- attendance/Grade10/grade10";
import { Grade10AAttendancePage } from "./components/admin-page-school- attendance/Grade10/10A";
import { Grade10BAttendancePage } from "./components/admin-page-school- attendance/Grade10/10B";
import { Grade10CAttendancePage } from "./components/admin-page-school- attendance/Grade10/10C";
import { Grade11AttendancePage } from "./components/admin-page-school- attendance/Grade11/grade11";
import { Grade11AAttendancePage } from "./components/admin-page-school- attendance/Grade11/11A";
import { Grade11BAttendancePage } from "./components/admin-page-school- attendance/Grade11/11B";
import { Grade11CAttendancePage } from "./components/admin-page-school- attendance/Grade11/11C";
import { Grade12DAttendancePage } from "./components/admin-page-school- attendance/Grade12/12D";
import { Grade12AAttendancePage } from "./components/admin-page-school- attendance/Grade12/12A";
import { Grade12BAttendancePage } from "./components/admin-page-school- attendance/Grade12/12B";
import { Grade12CAttendancePage } from "./components/admin-page-school- attendance/Grade12/12C";
import { Grade12AttendancePage } from "./components/admin-page-school- attendance/Grade12/grade12";
import { Grade13AttendancePage } from "./components/admin-page-school- attendance/Grade13/grade13";
import { Grade13AAttendancePage } from "./components/admin-page-school- attendance/Grade13/13A";
import { Grade13BAttendancePage } from "./components/admin-page-school- attendance/Grade13/13B";
import { Grade13CAttendancePage } from "./components/admin-page-school- attendance/Grade13/13C";
import { Grade13DAttendancePage } from "./components/admin-page-school- attendance/Grade13/13D";
import { AddNewsPage } from "./components/admin-page-common/uploadnews";
import { AddEventsPage } from "./components/admin-page-common/uploadevents";
import { AddResultsPage } from "./components/admin-page-common/uploadresults";



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
        <Route path="/students-grade01-grade01-A-Student-records" exact element={<Grade01AStudentRecords/>}/>
        <Route path="/students-grade01-grade01-A-Student-achievement" exact element={<Grade01AStudentAchievement/>}/>
        <Route path="/students-grade01-grade01-A-Student-add-achievement" exact element={<AddAchievements01A/>}/>
        <Route path="/students-grade01-grade01-A-Student-status" exact element={<Grade01AStudentStatus/>}/>
        <Route path="/students-grade01-grade01-B" exact element={<Grade01B/>}/>
        <Route path="/students-grade01-grade01-B-Student-records" exact element={<Grade01BStudentRecords/>}/>
        <Route path="/students-grade01-grade01-B-Student-achievement" exact element={<Grade01BStudentAchievement/>}/>
        <Route path="/students-grade01-grade01-B-Student-add-achievement" exact element={<AddAchievements01B/>}/>
        <Route path="/students-grade01-grade01-B-Student-status" exact element={<Grade01BStudentStatus/>}/>
        <Route path="/students-grade01-grade01-C" exact element={<Grade01C/>}/>
        <Route path="/students-grade01-grade01-C-Student-records" exact element={<Grade01CStudentRecords/>}/>
        <Route path="/students-grade01-grade01-C-Student-achievement" exact element={<Grade01CStudentAchievement/>}/>
        <Route path="/students-grade01-grade01-C-Student-add-achievement" exact element={<AddAchievements01C/>}/>
        <Route path="/students-grade01-grade01-C-Student-status" exact element={<Grade01CStudentStatus/>}/>
        <Route path="/students-grade02" exact element={<Grade02Page/>}/>
        <Route path="/students-grade02-grade02-A" exact element={<Grade02A/>}/>
        <Route path="/students-grade02-grade02-A-Student-records" exact element={<Grade02AStudentRecords/>}/>
        <Route path="/students-grade02-grade02-A-Student-achievement" exact element={<Grade02AStudentAchievement/>}/>
        <Route path="/students-grade02-grade02-A-Student-add-achievement" exact element={<AddAchievements02A/>}/>
        <Route path="/students-grade02-grade02-A-Student-status" exact element={<Grade02AStudentStatus/>}/>
        <Route path="/students-grade02-grade02-B" exact element={<Grade02B/>}/>
        <Route path="/students-grade02-grade02-B-Student-records" exact element={<Grade02BStudentRecords/>}/>
        <Route path="/students-grade02-grade02-B-Student-achievement" exact element={<Grade02BStudentAchievement/>}/>
        <Route path="/students-grade02-grade02-B-Student-add-achievement" exact element={<AddAchievements02B/>}/>
        <Route path="/students-grade02-grade02-B-Student-status" exact element={<Grade02BStudentStatus/>}/>
        <Route path="/students-grade02-grade02-C" exact element={<Grade02C/>}/>
        <Route path="/students-grade02-grade02-C-Student-records" exact element={<Grade02CStudentRecords/>}/>
        <Route path="/students-grade02-grade02-C-Student-achievement" exact element={<Grade02CStudentAchievement/>}/>
        <Route path="/students-grade02-grade02-C-Student-add-achievement" exact element={<AddAchievements02C/>}/>
        <Route path="/students-grade02-grade02-C-Student-status" exact element={<Grade02CStudentStatus/>}/>
        <Route path="/students-grade03" exact element={<Grade03Page/>}/>
        <Route path="/students-grade03-grade03-A" exact element={<Grade03A/>}/>
        <Route path="/students-grade03-grade03-A-Student-records" exact element={<Grade03AStudentRecords/>}/>
        <Route path="/students-grade03-grade03-A-Student-achievement" exact element={<Grade03AStudentAchievement/>}/>
        <Route path="/students-grade03-grade03-A-Student-add-achievement" exact element={<AddAchievements03A/>}/>
        <Route path="/students-grade03-grade03-A-Student-status" exact element={<Grade03AStudentStatus/>}/>
        <Route path="/students-grade03-grade03-B" exact element={<Grade03B/>}/>
        <Route path="/students-grade03-grade03-B-Student-records" exact element={<Grade03BStudentRecords/>}/>
        <Route path="/students-grade03-grade03-B-Student-achievement" exact element={<Grade03BStudentAchievement/>}/>
        <Route path="/students-grade03-grade03-B-Student-add-achievement" exact element={<AddAchievements03B/>}/>
        <Route path="/students-grade03-grade03-B-Student-status" exact element={<Grade03BStudentStatus/>}/>
        <Route path="/students-grade03-grade03-C" exact element={<Grade03C/>}/>
        <Route path="/students-grade03-grade03-C-Student-records" exact element={<Grade03CStudentRecords/>}/>
        <Route path="/students-grade03-grade03-C-Student-achievement" exact element={<Grade03CStudentAchievement/>}/>
        <Route path="/students-grade03-grade03-C-Student-add-achievement" exact element={<AddAchievements03C/>}/>
        <Route path="/students-grade03-grade03-C-Student-status" exact element={<Grade03CStudentStatus/>}/>
        <Route path="/students-grade04" exact element={<Grade04Page/>}/>
        <Route path="/students-grade04-grade04-A" exact element={<Grade04A/>}/>
        <Route path="/students-grade04-grade04-A-Student-records" exact element={<Grade04AStudentRecords/>}/>
        <Route path="/students-grade04-grade04-A-Student-achievement" exact element={<Grade04AStudentAchievement/>}/>
        <Route path="/students-grade04-grade04-A-Student-add-achievement" exact element={<AddAchievements04A/>}/>
        <Route path="/students-grade04-grade04-A-Student-status" exact element={<Grade04AStudentStatus/>}/>
        <Route path="/students-grade04-grade04-B" exact element={<Grade04B/>}/>
        <Route path="/students-grade04-grade04-B-Student-records" exact element={<Grade04BStudentRecords/>}/>
        <Route path="/students-grade04-grade04-B-Student-achievement" exact element={<Grade04BStudentAchievement/>}/>
        <Route path="/students-grade04-grade04-B-Student-add-achievement" exact element={<AddAchievements04B/>}/>
        <Route path="/students-grade04-grade04-B-Student-status" exact element={<Grade04BStudentStatus/>}/>
        <Route path="/students-grade04-grade04-C" exact element={<Grade04C/>}/>
        <Route path="/students-grade04-grade04-C-Student-records" exact element={<Grade04CStudentRecords/>}/>
        <Route path="/students-grade04-grade04-C-Student-achievement" exact element={<Grade04CStudentAchievement/>}/>
        <Route path="/students-grade04-grade04-C-Student-add-achievement" exact element={<AddAchievements04C/>}/>
        <Route path="/students-grade04-grade04-C-Student-status" exact element={<Grade04CStudentStatus/>}/>
        <Route path="/students-grade05" exact element={<Grade05Page/>}/>
        <Route path="/students-grade05-grade05-A" exact element={<Grade05A/>}/>
        <Route path="/students-grade05-grade05-A-Student-records" exact element={<Grade05AStudentRecords/>}/>
        <Route path="/students-grade05-grade05-A-Student-achievement" exact element={<Grade05AStudentAchievement/>}/>
        <Route path="/students-grade05-grade05-A-Student-add-achievement" exact element={<AddAchievements05A/>}/>
        <Route path="/students-grade05-grade05-A-Student-status" exact element={<Grade05AStudentStatus/>}/>
        <Route path="/students-grade05-grade05-B" exact element={<Grade05B/>}/>
        <Route path="/students-grade05-grade05-B-Student-records" exact element={<Grade05BStudentRecords/>}/>
        <Route path="/students-grade05-grade05-B-Student-achievement" exact element={<Grade05BStudentAchievement/>}/>
        <Route path="/students-grade05-grade05-B-Student-add-achievement" exact element={<AddAchievements05B/>}/>
        <Route path="/students-grade05-grade05-B-Student-status" exact element={<Grade05BStudentStatus/>}/>
        <Route path="/students-grade05-grade05-C" exact element={<Grade05C/>}/>
        <Route path="/students-grade05-grade05-C-Student-records" exact element={<Grade05CStudentRecords/>}/>
        <Route path="/students-grade05-grade05-C-Student-achievement" exact element={<Grade05CStudentAchievement/>}/>
        <Route path="/students-grade05-grade05-C-Student-add-achievement" exact element={<AddAchievements05C/>}/>
        <Route path="/students-grade05-grade05-C-Student-status" exact element={<Grade05CStudentStatus/>}/>
        <Route path="/students-grade06" exact element={<Grade06Page/>}/>
        <Route path="/students-grade06-grade06-A" exact element={<Grade06A/>}/>
        <Route path="/students-grade06-grade06-A-Student-records" exact element={<Grade06AStudentRecords/>}/>
        <Route path="/students-grade06-grade06-A-Student-achievement" exact element={<Grade06AStudentAchievement/>}/>
        <Route path="/students-grade06-grade06-A-Student-add-achievement" exact element={<AddAchievements06A/>}/>
        <Route path="/students-grade06-grade06-A-Student-status" exact element={<Grade06AStudentStatus/>}/>
        <Route path="/students-grade06-grade06-B" exact element={<Grade06B/>}/>
        <Route path="/students-grade06-grade06-B-Student-records" exact element={<Grade06BStudentRecords/>}/>
        <Route path="/students-grade06-grade06-B-Student-achievement" exact element={<Grade06BStudentAchievement/>}/>
        <Route path="/students-grade06-grade06-B-Student-add-achievement" exact element={<AddAchievements06B/>}/>
        <Route path="/students-grade06-grade06-B-Student-status" exact element={<Grade06BStudentStatus/>}/>
        <Route path="/students-grade06-grade06-C" exact element={<Grade06C/>}/>
        <Route path="/students-grade06-grade06-C-Student-records" exact element={<Grade06CStudentRecords/>}/>
        <Route path="/students-grade06-grade06-C-Student-achievement" exact element={<Grade06CStudentAchievement/>}/>
        <Route path="/students-grade06-grade06-C-Student-add-achievement" exact element={<AddAchievements06C/>}/>
        <Route path="/students-grade06-grade06-C-Student-status" exact element={<Grade06CStudentStatus/>}/>
        <Route path="/students-grade07" exact element={<Grade07Page/>}/>
        <Route path="/students-grade07-grade07-A" exact element={<Grade07A/>}/>
        <Route path="/students-grade07-grade07-A-Student-records" exact element={<Grade07AStudentRecords/>}/>
        <Route path="/students-grade07-grade07-A-Student-achievement" exact element={<Grade07AStudentAchievement/>}/>
        <Route path="/students-grade07-grade07-A-Student-add-achievement" exact element={<AddAchievements07A/>}/>
        <Route path="/students-grade07-grade07-A-Student-status" exact element={<Grade07AStudentStatus/>}/>
        <Route path="/students-grade07-grade07-B" exact element={<Grade07B/>}/>
        <Route path="/students-grade07-grade07-B-Student-records" exact element={<Grade07BStudentRecords/>}/>
        <Route path="/students-grade07-grade07-B-Student-achievement" exact element={<Grade07BStudentAchievement/>}/>
        <Route path="/students-grade07-grade07-B-Student-add-achievement" exact element={<AddAchievements07B/>}/>
        <Route path="/students-grade07-grade07-B-Student-status" exact element={<Grade07BStudentStatus/>}/>
        <Route path="/students-grade07-grade07-C" exact element={<Grade07C/>}/>
        <Route path="/students-grade07-grade07-C-Student-records" exact element={<Grade07CStudentRecords/>}/>
        <Route path="/students-grade07-grade07-C-Student-achievement" exact element={<Grade07CStudentAchievement/>}/>
        <Route path="/students-grade07-grade07-C-Student-add-achievement" exact element={<AddAchievements07C/>}/>
        <Route path="/students-grade07-grade07-C-Student-status" exact element={<Grade07CStudentStatus/>}/>
        <Route path="/students-grade08" exact element={<Grade08Page/>}/>
        <Route path="/students-grade08-grade08-A" exact element={<Grade08A/>}/>
        <Route path="/students-grade08-grade08-A-Student-records" exact element={<Grade08AStudentRecords/>}/>
        <Route path="/students-grade08-grade08-A-Student-achievement" exact element={<Grade08AStudentAchievement/>}/>
        <Route path="/students-grade08-grade08-A-Student-add-achievement" exact element={<AddAchievements08A/>}/>
        <Route path="/students-grade08-grade08-A-Student-status" exact element={<Grade08AStudentStatus/>}/>
        <Route path="/students-grade08-grade08-B" exact element={<Grade08B/>}/>
        <Route path="/students-grade08-grade08-B-Student-records" exact element={<Grade08BStudentRecords/>}/>
        <Route path="/students-grade08-grade08-B-Student-achievement" exact element={<Grade08BStudentAchievement/>}/>
        <Route path="/students-grade08-grade08-B-Student-add-achievement" exact element={<AddAchievements08B/>}/>
        <Route path="/students-grade08-grade08-B-Student-status" exact element={<Grade08BStudentStatus/>}/>
        <Route path="/students-grade08-grade08-C" exact element={<Grade08C/>}/>
        <Route path="/students-grade08-grade08-C-Student-records" exact element={<Grade08CStudentRecords/>}/>
        <Route path="/students-grade08-grade08-C-Student-achievement" exact element={<Grade08CStudentAchievement/>}/>
        <Route path="/students-grade08-grade08-C-Student-add-achievement" exact element={<AddAchievements08C/>}/>
        <Route path="/students-grade08-grade08-C-Student-status" exact element={<Grade08CStudentStatus/>}/>
        <Route path="/students-grade09" exact element={<Grade09Page/>}/>
        <Route path="/students-grade09-grade09-A" exact element={<Grade09A/>}/>
        <Route path="/students-grade09-grade09-A-Student-records" exact element={<Grade09AStudentRecords/>}/>
        <Route path="/students-grade09-grade09-A-Student-achievement" exact element={<Grade09AStudentAchievement/>}/>
        <Route path="/students-grade09-grade09-A-Student-add-achievement" exact element={<AddAchievements09A/>}/>
        <Route path="/students-grade09-grade09-A-Student-status" exact element={<Grade09AStudentStatus/>}/>
        <Route path="/students-grade09-grade09-B" exact element={<Grade09B/>}/>
        <Route path="/students-grade09-grade09-B-Student-records" exact element={<Grade09BStudentRecords/>}/>
        <Route path="/students-grade09-grade09-B-Student-achievement" exact element={<Grade09BStudentAchievement/>}/>
        <Route path="/students-grade09-grade09-B-Student-add-achievement" exact element={<AddAchievements09B/>}/>
        <Route path="/students-grade09-grade09-B-Student-status" exact element={<Grade09BStudentStatus/>}/>
        <Route path="/students-grade09-grade09-C" exact element={<Grade09C/>}/>
        <Route path="/students-grade09-grade09-C-Student-records" exact element={<Grade09CStudentRecords/>}/>
        <Route path="/students-grade09-grade09-C-Student-achievement" exact element={<Grade09CStudentAchievement/>}/>
        <Route path="/students-grade09-grade09-C-Student-add-achievement" exact element={<AddAchievements09C/>}/>
        <Route path="/students-grade09-grade09-C-Student-status" exact element={<Grade09CStudentStatus/>}/>
        <Route path="/students-grade10" exact element={<Grade10Page/>}/>
        <Route path="/students-grade10-grade10-A" exact element={<Grade10A/>}/>
        <Route path="/students-grade10-grade10-A-Student-records" exact element={<Grade10AStudentRecords/>}/>
        <Route path="/students-grade10-grade10-A-Student-achievement" exact element={<Grade10AStudentAchievement/>}/>
        <Route path="/students-grade10-grade10-A-Student-add-achievement" exact element={<AddAchievements10A/>}/>
        <Route path="/students-grade10-grade10-A-Student-status" exact element={<Grade10AStudentStatus/>}/>
        <Route path="/students-grade10-grade10-B" exact element={<Grade10B/>}/>
        <Route path="/students-grade10-grade10-B-Student-records" exact element={<Grade10BStudentRecords/>}/>
        <Route path="/students-grade10-grade10-B-Student-achievement" exact element={<Grade10BStudentAchievement/>}/>
        <Route path="/students-grade10-grade10-B-Student-add-achievement" exact element={<AddAchievements10B/>}/>
        <Route path="/students-grade10-grade10-B-Student-status" exact element={<Grade10BStudentStatus/>}/>
        <Route path="/students-grade10-grade10-C" exact element={<Grade10C/>}/>
        <Route path="/students-grade10-grade10-C-Student-records" exact element={<Grade10CStudentRecords/>}/>
        <Route path="/students-grade10-grade10-C-Student-achievement" exact element={<Grade10CStudentAchievement/>}/>
        <Route path="/students-grade10-grade10-C-Student-add-achievement" exact element={<AddAchievements10C/>}/>
        <Route path="/students-grade10-grade10-C-Student-status" exact element={<Grade10CStudentStatus/>}/>
        <Route path="/students-grade11" exact element={<Grade11Page/>}/>
        <Route path="/students-grade11-grade11-A" exact element={<Grade11A/>}/>
        <Route path="/students-grade11-grade11-A-Student-records" exact element={<Grade11AStudentRecords/>}/>
        <Route path="/students-grade11-grade11-A-Student-achievement" exact element={<Grade11AStudentAchievement/>}/>
        <Route path="/students-grade11-grade11-A-Student-add-achievement" exact element={<AddAchievements11A/>}/>
        <Route path="/students-grade11-grade11-A-Student-status" exact element={<Grade11AStudentStatus/>}/>
        <Route path="/students-grade11-grade11-B" exact element={<Grade11B/>}/>
        <Route path="/students-grade11-grade11-B-Student-records" exact element={<Grade11BStudentRecords/>}/>
        <Route path="/students-grade11-grade11-B-Student-achievement" exact element={<Grade11BStudentAchievement/>}/>
        <Route path="/students-grade11-grade11-B-Student-add-achievement" exact element={<AddAchievements11B/>}/>
        <Route path="/students-grade11-grade11-B-Student-status" exact element={<Grade11BStudentStatus/>}/>
        <Route path="/students-grade11-grade11-C" exact element={<Grade11C/>}/>
        <Route path="/students-grade11-grade11-C-Student-records" exact element={<Grade11CStudentRecords/>}/>
        <Route path="/students-grade11-grade11-C-Student-achievement" exact element={<Grade11CStudentAchievement/>}/>
        <Route path="/students-grade11-grade11-C-Student-add-achievement" exact element={<AddAchievements11C/>}/>
        <Route path="/students-grade11-grade11-C-Student-status" exact element={<Grade11CStudentStatus/>}/>
        <Route path="/students-grade12" exact element={<Grade12Page/>}/>
        <Route path="/students-grade12-grade12-A" exact element={<Grade12A/>}/>
        <Route path="/students-grade12-grade12-A-Student-records" exact element={<Grade12AStudentRecords/>}/>
        <Route path="/students-grade12-grade12-A-Student-achievement" exact element={<Grade12AStudentAchievement/>}/>
        <Route path="/students-grade12-grade12-A-Student-add-achievement" exact element={<AddAchievements12A/>}/>
        <Route path="/students-grade12-grade12-A-Student-status" exact element={<Grade12AStudentStatus/>}/>
        <Route path="/students-grade12-grade12-B" exact element={<Grade12B/>}/>
        <Route path="/students-grade12-grade12-B-Student-records" exact element={<Grade12BStudentRecords/>}/>
        <Route path="/students-grade12-grade12-B-Student-achievement" exact element={<Grade12BStudentAchievement/>}/>
        <Route path="/students-grade12-grade12-B-Student-add-achievement" exact element={<AddAchievements12B/>}/>
        <Route path="/students-grade12-grade12-B-Student-status" exact element={<Grade12BStudentStatus/>}/>
        <Route path="/students-grade12-grade12-C" exact element={<Grade12C/>}/>
        <Route path="/students-grade12-grade12-C-Student-records" exact element={<Grade12CStudentRecords/>}/>
        <Route path="/students-grade12-grade12-C-Student-achievement" exact element={<Grade12CStudentAchievement/>}/>
        <Route path="/students-grade12-grade12-C-Student-add-achievement" exact element={<AddAchievements12C/>}/>
        <Route path="/students-grade12-grade12-C-Student-status" exact element={<Grade12CStudentStatus/>}/>
        <Route path="/students-grade12-grade12-D" exact element={<Grade12D/>}/>
        <Route path="/students-grade12-grade12-D-Student-records" exact element={<Grade12DStudentRecords/>}/>
        <Route path="/students-grade12-grade12-D-Student-achievement" exact element={<Grade12DStudentAchievement/>}/>
        <Route path="/students-grade12-grade12-D-Student-add-achievement" exact element={<AddAchievements12D/>}/>
        <Route path="/students-grade12-grade12-D-Student-status" exact element={<Grade12DStudentStatus/>}/>
        <Route path="/students-grade13" exact element={<Grade13Page/>}/>
        <Route path="/students-grade13-grade13-A" exact element={<Grade13A/>}/>
        <Route path="/students-grade13-grade13-A-Student-records" exact element={<Grade13AStudentRecords/>}/>
        <Route path="/students-grade13-grade13-A-Student-achievement" exact element={<Grade13AStudentAchievement/>}/>
        <Route path="/students-grade13-grade13-A-Student-add-achievement" exact element={<AddAchievements13A/>}/>
        <Route path="/students-grade13-grade13-A-Student-status" exact element={<Grade13AStudentStatus/>}/>
        <Route path="/students-grade13-grade13-B" exact element={<Grade13B/>}/>
        <Route path="/students-grade13-grade13-B-Student-records" exact element={<Grade13BStudentRecords/>}/>
        <Route path="/students-grade13-grade13-B-Student-achievement" exact element={<Grade13BStudentAchievement/>}/>
        <Route path="/students-grade13-grade13-B-Student-add-achievement" exact element={<AddAchievements13B/>}/>
        <Route path="/students-grade13-grade13-B-Student-status" exact element={<Grade13BStudentStatus/>}/>
        <Route path="/students-grade13-grade13-C" exact element={<Grade13C/>}/>
        <Route path="/students-grade13-grade13-C-Student-records" exact element={<Grade13CStudentRecords/>}/>
        <Route path="/students-grade13-grade13-C-Student-achievement" exact element={<Grade13CStudentAchievement/>}/>
        <Route path="/students-grade13-grade13-C-Student-add-achievement" exact element={<AddAchievements13C/>}/>
        <Route path="/students-grade13-grade13-C-Student-status" exact element={<Grade13CStudentStatus/>}/>
        <Route path="/students-grade13-grade13-D" exact element={<Grade13D/>}/>
        <Route path="/students-grade13-grade13-D-Student-records" exact element={<Grade13DStudentRecords/>}/>
        <Route path="/students-grade13-grade13-D-Student-achievement" exact element={<Grade13DStudentAchievement/>}/>
        <Route path="/students-grade13-grade13-D-Student-add-achievement" exact element={<AddAchievements13D/>}/>
        <Route path="/students-grade13-grade13-D-Student-status" exact element={<Grade13DStudentStatus/>}/>
        <Route path="/add-students" exact element={<AddStudentPage/>}/>
        <Route path="/admin-teachers" exact element={<TeachersPage/>}/>
        <Route path="/add-teachers" exact element={<AddTeachersPage/>}/>
        <Route path="/Grade-01-teachers-information" exact element={<Grade01TeachersInformationPage/>}/>
        <Route path="/Grade-01-teachers-records" exact element={<Grade01TeachersRecord/>}/>
        <Route path="/Grade-01-teachers-timetable" exact element={<Grade01TeachersTimetable/>}/>
        <Route path="/students-grade01-Teacher-status" exact element={<Grade01TeachersStatus/>}/>
        <Route path="/Grade-02-teachers-information" exact element={<Grade02TeachersInformationPage/>}/>
        <Route path="/Grade-02-teachers-records" exact element={<Grade02TeachersRecord/>}/>
        <Route path="/Grade-02-teachers-timetable" exact element={<Grade02TeachersTimetable/>}/>
        <Route path="/students-grade02-Teacher-status" exact element={<Grade02TeachersStatus/>}/>
        <Route path="/Grade-03-teachers-information" exact element={<Grade03TeachersInformationPage/>}/>
        <Route path="/Grade-03-teachers-records" exact element={<Grade03TeachersRecord/>}/>
        <Route path="/Grade-03-teachers-timetable" exact element={<Grade03TeachersTimetable/>}/>
        <Route path="/students-grade03-Teacher-status" exact element={<Grade03TeachersStatus/>}/>
        <Route path="/Grade-04-teachers-information" exact element={<Grade04TeachersInformationPage/>}/>
        <Route path="/Grade-04-teachers-records" exact element={<Grade04TeachersRecord/>}/>
        <Route path="/Grade-04-teachers-timetable" exact element={<Grade04TeachersTimetable/>}/>
        <Route path="/students-grade04-Teacher-status" exact element={<Grade04TeachersStatus/>}/>
        <Route path="/Grade-05-teachers-information" exact element={<Grade05TeachersInformationPage/>}/>
        <Route path="/Grade-05-teachers-records" exact element={<Grade05TeachersRecord/>}/>
        <Route path="/Grade-05-teachers-timetable" exact element={<Grade05TeachersTimetable/>}/>
        <Route path="/students-grade05-Teacher-status" exact element={<Grade05TeachersStatus/>}/>
        <Route path="/Grade-06-teachers-information" exact element={<Grade06TeachersInformationPage/>}/>
        <Route path="/Grade-06-teachers-records" exact element={<Grade06TeachersRecord/>}/>
        <Route path="/Grade-06-teachers-timetable" exact element={<Grade06TeachersTimetable/>}/>
        <Route path="/students-grade06-Teacher-status" exact element={<Grade06TeachersStatus/>}/>
        <Route path="/Grade-07-teachers-information" exact element={<Grade07TeachersInformationPage/>}/>
        <Route path="/Grade-07-teachers-records" exact element={<Grade07TeachersRecord/>}/>
        <Route path="/Grade-07-teachers-timetable" exact element={<Grade07TeachersTimetable/>}/>
        <Route path="/students-grade07-Teacher-status" exact element={<Grade07TeachersStatus/>}/>
        <Route path="/Grade-08-teachers-information" exact element={<Grade08TeachersInformationPage/>}/>
        <Route path="/Grade-08-teachers-records" exact element={<Grade08TeachersRecord/>}/>
        <Route path="/Grade-08-teachers-timetable" exact element={<Grade08TeachersTimetable/>}/>
        <Route path="/students-grade08-Teacher-status" exact element={<Grade08TeachersStatus/>}/>
        <Route path="/Grade-09-teachers-information" exact element={<Grade09TeachersInformationPage/>}/>
        <Route path="/Grade-09-teachers-records" exact element={<Grade09TeachersRecord/>}/>
        <Route path="/Grade-09-teachers-timetable" exact element={<Grade09TeachersTimetable/>}/>
        <Route path="/students-grade09-Teacher-status" exact element={<Grade09TeachersStatus/>}/>
        <Route path="/Grade-10-teachers-information" exact element={<Grade10TeachersInformationPage/>}/>
        <Route path="/Grade-10-teachers-records" exact element={<Grade10TeachersRecord/>}/>
        <Route path="/Grade-10-teachers-timetable" exact element={<Grade10TeachersTimetable/>}/>
        <Route path="/students-grade10-Teacher-status" exact element={<Grade10TeachersStatus/>}/>
        <Route path="/Grade-11-teachers-information" exact element={<Grade11TeachersInformationPage/>}/>
        <Route path="/Grade-11-teachers-records" exact element={<Grade11TeachersRecord/>}/>
        <Route path="/Grade-11-teachers-timetable" exact element={<Grade11TeachersTimetable/>}/>
        <Route path="/students-grade11-Teacher-status" exact element={<Grade11TeachersStatus/>}/>
        <Route path="/Grade-12-teachers-information" exact element={<Grade12TeachersInformationPage/>}/>
        <Route path="/Grade-12-teachers-records" exact element={<Grade12TeachersRecord/>}/>
        <Route path="/Grade-12-teachers-timetable" exact element={<Grade12TeachersTimetable/>}/>
        <Route path="/students-grade12-Teacher-status" exact element={<Grade12TeachersStatus/>}/>
        <Route path="/Grade-13-teachers-information" exact element={<Grade13TeachersInformationPage/>}/>
        <Route path="/Grade-13-teachers-records" exact element={<Grade13TeachersRecord/>}/>
        <Route path="/Grade-13-teachers-timetable" exact element={<Grade13TeachersTimetable/>}/>
        <Route path="/students-grade13-Teacher-status" exact element={<Grade13TeachersStatus/>}/>
        <Route path="/school-attendance" exact element={<SchoolAttendancePage/>}/>
        <Route path="/school-attendance-students" exact element={<StudentAttendancePage/>}/>
        <Route path="/school-attendance-teachers" exact element={<TeacherAttendancePage/>}/>
        <Route path="/students-attendance-grade01" exact element={<Grade01AttendancePage/>}/>
        <Route path="/students-attendance-grade01-grade01-A" exact element={<Grade01AAttendancePage/>}/>
        <Route path="/students-attendance-grade01-grade01-B" exact element={<Grade01BAttendancePage/>}/>
        <Route path="/students-attendance-grade01-grade01-C" exact element={<Grade01CAttendancePage/>}/>
        <Route path="/students-attendance-grade02" exact element={<Grade02AttendancePage/>}/>
        <Route path="/students-attendance-grade02-grade02-A" exact element={<Grade02AAttendancePage/>}/>
        <Route path="/students-attendance-grade02-grade02-B" exact element={<Grade02BAttendancePage/>}/>
        <Route path="/students-attendance-grade02-grade02-C" exact element={<Grade02CAttendancePage/>}/>
        <Route path="/students-attendance-grade03" exact element={<Grade03AttendancePage/>}/>
        <Route path="/students-attendance-grade03-grade03-A" exact element={<Grade03AAttendancePage/>}/>
        <Route path="/students-attendance-grade03-grade03-B" exact element={<Grade03BAttendancePage/>}/>
        <Route path="/students-attendance-grade03-grade03-C" exact element={<Grade03CAttendancePage/>}/>
        <Route path="/students-attendance-grade04" exact element={<Grade04AttendancePage/>}/>
        <Route path="/students-attendance-grade04-grade04-A" exact element={<Grade04AAttendancePage/>}/>
        <Route path="/students-attendance-grade04-grade04-B" exact element={<Grade04BAttendancePage/>}/>
        <Route path="/students-attendance-grade04-grade04-C" exact element={<Grade04CAttendancePage/>}/>
        <Route path="/students-attendance-grade05" exact element={<Grade05AttendancePage/>}/>
        <Route path="/students-attendance-grade05-grade05-A" exact element={<Grade05AAttendancePage/>}/>
        <Route path="/students-attendance-grade05-grade05-B" exact element={<Grade05BAttendancePage/>}/>
        <Route path="/students-attendance-grade05-grade05-C" exact element={<Grade05CAttendancePage/>}/>
        <Route path="/students-attendance-grade06" exact element={<Grade06AttendancePage/>}/>
        <Route path="/students-attendance-grade06-grade06-A" exact element={<Grade06AAttendancePage/>}/>
        <Route path="/students-attendance-grade06-grade06-B" exact element={<Grade06BAttendancePage/>}/>
        <Route path="/students-attendance-grade06-grade06-C" exact element={<Grade06CAttendancePage/>}/>
        <Route path="/students-attendance-grade07" exact element={<Grade07AttendancePage/>}/>
        <Route path="/students-attendance-grade07-grade07-A" exact element={<Grade07AAttendancePage/>}/>
        <Route path="/students-attendance-grade07-grade07-B" exact element={<Grade07BAttendancePage/>}/>
        <Route path="/students-attendance-grade07-grade07-C" exact element={<Grade07CAttendancePage/>}/>
        <Route path="/students-attendance-grade08" exact element={<Grade08AttendancePage/>}/>
        <Route path="/students-attendance-grade08-grade08-A" exact element={<Grade08AAttendancePage/>}/>
        <Route path="/students-attendance-grade08-grade08-B" exact element={<Grade08BAttendancePage/>}/>
        <Route path="/students-attendance-grade08-grade08-C" exact element={<Grade08CAttendancePage/>}/>
        <Route path="/students-attendance-grade09" exact element={<Grade09AttendancePage/>}/>
        <Route path="/students-attendance-grade09-grade09-A" exact element={<Grade09AAttendancePage/>}/>
        <Route path="/students-attendance-grade09-grade09-B" exact element={<Grade09BAttendancePage/>}/>
        <Route path="/students-attendance-grade09-grade09-C" exact element={<Grade09CAttendancePage/>}/>
        <Route path="/students-attendance-grade10" exact element={<Grade10AttendancePage/>}/>
        <Route path="/students-attendance-grade10-grade10-A" exact element={<Grade10AAttendancePage/>}/>
        <Route path="/students-attendance-grade10-grade10-B" exact element={<Grade10BAttendancePage/>}/>
        <Route path="/students-attendance-grade10-grade10-C" exact element={<Grade10CAttendancePage/>}/>
        <Route path="/students-attendance-grade11" exact element={<Grade11AttendancePage/>}/>
        <Route path="/students-attendance-grade11-grade11-A" exact element={<Grade11AAttendancePage/>}/>
        <Route path="/students-attendance-grade11-grade11-B" exact element={<Grade11BAttendancePage/>}/>
        <Route path="/students-attendance-grade11-grade11-C" exact element={<Grade11CAttendancePage/>}/>
        <Route path="/students-attendance-grade12" exact element={<Grade12AttendancePage/>}/>
        <Route path="/students-attendance-grade12-grade12-A" exact element={<Grade12AAttendancePage/>}/>
        <Route path="/students-attendance-grade12-grade12-B" exact element={<Grade12BAttendancePage/>}/>
        <Route path="/students-attendance-grade12-grade12-C" exact element={<Grade12CAttendancePage/>}/>
        <Route path="/students-attendance-grade12-grade12-D" exact element={<Grade12DAttendancePage/>}/>
        <Route path="/students-attendance-grade13" exact element={<Grade13AttendancePage/>}/>
        <Route path="/students-attendance-grade13-grade13-A" exact element={<Grade13AAttendancePage/>}/>
        <Route path="/students-attendance-grade13-grade13-B" exact element={<Grade13BAttendancePage/>}/>
        <Route path="/students-attendance-grade13-grade13-C" exact element={<Grade13CAttendancePage/>}/>
        <Route path="/students-attendance-grade13-grade13-D" exact element={<Grade13DAttendancePage/>}/>
        <Route path="/common-page" exact element={<CommonPage/>}/>
        <Route path="/uplaod-news" exact element={<AddNewsPage/>}/>
        <Route path="/upload-events" exact element={<AddEventsPage/>}/>
        <Route path="/upload-results" exact element={<AddResultsPage/>}/>
        <Route path="/my-account" exact element={<MyAccountPage/>}/>
      </Routes>
      </Container>
  </Suspense>
   </BrowserRouter>
)