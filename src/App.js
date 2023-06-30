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
import { TeachersDashboradPage } from "./components/teachers-page/dashborad/dashborad";
import { FullTimetablePage } from "./components/teachers-page/timetable/fulltimetable";
import { TeacherStudentPage } from "./components/teachers-page/mystudents/students";
import { TeacherClassesPage } from "./components/teachers-page/myclasses/classes";
import { AttendancePage } from "./components/teachers-page/attendance/attendance";
import { HomeworkPage } from "./components/teachers-page/homework/homework";
import { AssigmentAndMonthlyTestPage } from "./components/teachers-page/assigment&monthlytest/assigment&monthlytest";
import { TermTestMarkingPage } from "./components/teachers-page/TermTestMarking/termtestmarking";
import { TeachersMyAccountPage } from "./components/teachers-page/MyAccount/myaccount";
import { TeachersInchargePage } from "./components/teachersInchargePage/switchteachersinchage/teachersinchage";
import { Class01Page } from "./components/teachers-page/myclasses/Class01";
import { Class02Page } from "./components/teachers-page/myclasses/Class02";
import { Class03Page } from "./components/teachers-page/myclasses/Class03";
import { Class04Page } from "./components/teachers-page/myclasses/Class04";
import { ClassroomPage } from "./components/teachers-page/myclasses/Classroom";
import { Class01SinhalaPage } from "./components/teachers-page/myclasses/Class01sinhala";
import { Class01BuddadarmayaPage } from "./components/teachers-page/myclasses/Class01buddadarmaya";
import { UploadNoteSinhalaPage } from "./components/teachers-page/myclasses/uploadnotesinhala";
import { UploadNoteBuddadarmayaPage } from "./components/teachers-page/myclasses/uploadnotebuddadarmaya";
import { Class02SinhalaPage } from "./components/teachers-page/myclasses/Class02sinhala";
import { Class02UploadNoteSinhalaPage } from "./components/teachers-page/myclasses/class02uploadnotesinhala";
import { Class02BuddadarmayaPage } from "./components/teachers-page/myclasses/Class02buddadarmaya";
import { Class02UploadNoteBuddadarmayaPage } from "./components/teachers-page/myclasses/class02uploadnotebuddadarmaya";
import { Class03SinhalaPage } from "./components/teachers-page/myclasses/Class03sinhala";
import { Class03UploadNoteSinhalaPage } from "./components/teachers-page/myclasses/class03uploadnotesinhala";
import { Class03BuddadarmayaPage } from "./components/teachers-page/myclasses/Class03buddadarmaya";
import { Class03UploadNoteBuddadarmayaPage } from "./components/teachers-page/myclasses/class03uploadnotebuddadarmaya";
import { Class04SinhalaPage } from "./components/teachers-page/myclasses/Class04sinhala";
import { Class04UploadNoteSinhalaPage } from "./components/teachers-page/myclasses/class04uploadnotesinhala";
import { Class04BuddadarmayaPage } from "./components/teachers-page/myclasses/Class04buddadarmaya";
import { Class04UploadNoteBuddadarmayaPage } from "./components/teachers-page/myclasses/class04uploadnotebuddadarmaya";
import { MyStudentClass01Page } from "./components/teachers-page/mystudents/MyStudentClass01";
import { MyStudentClass01SinhalaPage } from "./components/teachers-page/mystudents/MyStudentClass01sinhala";
import { MyStudentClass01BuddadarmayaPage } from "./components/teachers-page/mystudents/MyStudentClass01buddadarmaya";
import { MyStudentClass02Page } from "./components/teachers-page/mystudents/MyStudentClass02";
import { MyStudentClass02SinhalaPage } from "./components/teachers-page/mystudents/MyStudentClass02sinhala";
import { MyStudentClass02BuddadarmayaPage } from "./components/teachers-page/mystudents/MyStudentClass02buddadarmaya";
import { MyStudentClass03Page } from "./components/teachers-page/mystudents/MyStudentClass03";
import { MyStudentClass03SinhalaPage } from "./components/teachers-page/mystudents/MyStudentClass03sinhala";
import { MyStudentClass03BuddadarmayaPage } from "./components/teachers-page/mystudents/MyStudentClass03buddadarmaya";
import { MyStudentClass04Page } from "./components/teachers-page/mystudents/MyStudentClass04";
import { MyStudentClass04SinhalaPage } from "./components/teachers-page/mystudents/MyStudentClass04sinhala";
import { MyStudentClass04BuddadarmayaPage } from "./components/teachers-page/mystudents/MyStudentClass04buddadarmaya";
import { Class01HomeworkPage } from "./components/teachers-page/homework/Class01";
import { Class01SinhalaHomeworkPage } from "./components/teachers-page/homework/Class01sinhala";
import { Class01BuddadarmayaHomeworkPage } from "./components/teachers-page/homework/Class01buddadarmaya";
import { Class01UploadHomeWorkSinhalaPage } from "./components/teachers-page/homework/class01uploadhomeworksinhala";
import { Class01UploadHomeWorkBuddadarmayaPage } from "./components/teachers-page/homework/class01uploadhomeworkbuddadarmaya";
import { AssigmentPage } from "./components/teachers-page/assigment&monthlytest/assigment";
import { MonthlyTestPage } from "./components/teachers-page/assigment&monthlytest/monthlytest";
import { AssigmentListPage } from "./components/teachers-page/assigment&monthlytest/assigmentlist";
import { UploadAssigmentPage } from "./components/teachers-page/assigment&monthlytest/assigmentupload";
import { AssigmentMarkingUploadPage } from "./components/teachers-page/assigment&monthlytest/assigmentmarkingupload";
import { MonthlyTestListPage } from "./components/teachers-page/assigment&monthlytest/monthlytestlist";
import { UploadMonthlyTestPage } from "./components/teachers-page/assigment&monthlytest/monthlytestupload";
import { MonthlyTestMarkingUploadPage } from "./components/teachers-page/assigment&monthlytest/monthlytestmarkingupload";
import { Class01TermTestPage } from "./components/teachers-page/TermTestMarking/Class01";
import { Class01TermTestSinhalaPage } from "./components/teachers-page/TermTestMarking/Class01TermTestSinhala";
import { Class01SinhalaTermTestIMarkingUploadPage } from "./components/teachers-page/TermTestMarking/class01SinhalatermImarkingupload";
import { Class01SinhalaTermTestIIMarkingUploadPage } from "./components/teachers-page/TermTestMarking/class01SinhalatermIImarkingupload";
import { Class01SinhalaTermTestIIIMarkingUploadPage } from "./components/teachers-page/TermTestMarking/class01SinhalatermIIImarkingupload";
import { Class01TermTestBuddadarmayaPage } from "./components/teachers-page/TermTestMarking/Class01TermTestBuddadarmaya";
import { Class01BuddadarmayaTermTestIMarkingUploadPage } from "./components/teachers-page/TermTestMarking/class01BuddadarmayatermImarkingupload";
import { Class01BuddadarmayaTermTestIIMarkingUploadPage } from "./components/teachers-page/TermTestMarking/class01BuddadarmayatermIImarkingupload";
import { Class01BuddadarmayaTermTestIIIMarkingUploadPage } from "./components/teachers-page/TermTestMarking/class01BuddadarmayatermIIImarkingupload";
import { Grade0105Page } from "./components/teachersInchargePage/grade 01-05/grade01-05";
import { Grade0609Page } from "./components/teachersInchargePage/grade 06-09/grade06-09";
import { Grade1011Page } from "./components/teachersInchargePage/grade 10-11/grade10-11";
import { Grade1213Page } from "./components/teachersInchargePage/grade 12-13/grade12-13";
import { TeachersInchargeMyAccountPage } from "./components/teachersInchargePage/myAccount/myaccount";
import { Grade01TeachersInchagePage } from "./components/teachersInchargePage/grade 01-05/grade01teachersinchage";
import { Grade01TeachersInchageStudentsAndTeachersInformationPage } from "./components/teachersInchargePage/grade 01-05/grade01teachersandstudentinfo";
import { Grade01TeachersInchageTeachersInformationPage } from "./components/teachersInchargePage/grade 01-05/grade01teachersinformation";
import { Grade01TeachersInchageStudentsInformationPage } from "./components/teachersInchargePage/grade 01-05/grade01studentsinformation";
import { Grade01TeachersInchageStudentsProgressPage } from "./components/teachersInchargePage/grade 01-05/grade01studentsprogress";
import { Grade01TeachersInchageTeachersProgressPage } from "./components/teachersInchargePage/grade 01-05/grade01teachersprogress";
import { Grade06TeachersInchageStudentsAndTeachersInformationPage } from "./components/teachersInchargePage/grade 06-09/grade06teachersandstudentinfo";
import { Grade06TeachersInchageTeachersInformationPage } from "./components/teachersInchargePage/grade 06-09/grade06teachersinformation";
import { Grade06TeachersInchagePage } from "./components/teachersInchargePage/grade 06-09/grade06teachersinchage";
import { Grade06TeachersInchageStudentsInformationPage } from "./components/teachersInchargePage/grade 06-09/grade06studentsinformation";
import { Grade06TeachersInchageStudentsProgressPage } from "./components/teachersInchargePage/grade 06-09/grade06studentsprogress";
import { Grade06TeachersInchageTeachersProgressPage } from "./components/teachersInchargePage/grade 06-09/grade06teachersprogress";
import { Grade10TeachersInchagePage } from "./components/teachersInchargePage/grade 10-11/grade10teachersinchage";
import { Grade10TeachersInchageStudentsAndTeachersInformationPage } from "./components/teachersInchargePage/grade 10-11/grade10teachersandstudentinfo";
import { Grade10TeachersInchageTeachersInformationPage } from "./components/teachersInchargePage/grade 10-11/grade10teachersinformation";
import { Grade10TeachersInchageStudentsInformationPage } from "./components/teachersInchargePage/grade 10-11/grade10studentsinformation";
import { Grade10TeachersInchageStudentsProgressPage } from "./components/teachersInchargePage/grade 10-11/grade10studentsprogress";
import { Grade10TeachersInchageTeachersProgressPage } from "./components/teachersInchargePage/grade 10-11/grade10teachersprogress";
import { Grade12TeachersInchagePage } from "./components/teachersInchargePage/grade 12-13/grade12teachersinchage";
import { Grade12TeachersInchageStudentsAndTeachersInformationPage } from "./components/teachersInchargePage/grade 12-13/grade12teachersandstudentinfo";
import { Grade12TeachersInchageTeachersInformationPage } from "./components/teachersInchargePage/grade 12-13/grade12teachersinformation";
import { Grade12TeachersInchageStudentsInformationPage } from "./components/teachersInchargePage/grade 12-13/grade12studentsinformation";
import { Grade12TeachersInchageStudentsProgressPage } from "./components/teachersInchargePage/grade 12-13/grade12studentsprogress";
import { Grade12TeachersInchageTeachersProgressPage } from "./components/teachersInchargePage/grade 12-13/grade12teachersprogress";
import { PrincipleDashboradPage } from "./components/principle-page/dashborad/principledashborad";
import { PrincipleStudentsPage } from "./components/principle-page/students/principlestudent";
import { PrincipleTeachersPage } from "./components/principle-page/teachers/principleteachers";
import { PrincipleOfficeStaffPage } from "./components/principle-page/office staff/principleofficestaff";
import { PrincipleResultsPage } from "./components/principle-page/results/principleresults";
import { PrincipleMyAccountPage } from "./components/principle-page/myaccount/myaccount";
import { PSGrade01Page } from "./components/principle-page/students/Grade01/psgrade01";
import { PSGrade01A } from "./components/principle-page/students/Grade01/psgrade01A";
import { Grade01APrincipleStudentsInformationPage } from "./components/principle-page/students/Grade01/grade01Astudentsinformation";
import { Grade01APrincipleStudentsProgressPage } from "./components/principle-page/students/Grade01/grade01Astudentsprogress";
import { PTGrade01 } from "./components/principle-page/teachers/Grade01/ptgrade01";
import { Grade01PrincipleTeachersInformationPage } from "./components/principle-page/teachers/Grade01/grade01teachersinformation";
import { Grade01PrincipleTeachersProgressPage } from "./components/principle-page/teachers/Grade01/grade01teachersprogress";
import { PRGrade05ScholarshipPage } from "./components/principle-page/results/grade5scholarship";
import { PROLResultsPage } from "./components/principle-page/results/olresults";
import { PRALResultsPage } from "./components/principle-page/results/alresults";
import { StudentDashboradPage } from "./components/student-page/dashborad/studentdashborad";
import { StudentGrade0105Page } from "./components/student-page/grade01-05/studentgrade01-05";
import { StudentGrade0609Page } from "./components/student-page/grade06-09/studentgrade06-09";
import { StudentGrade1011Page } from "./components/student-page/grade10-11/studentgrade10-11";
import { StudentGrade1213Page } from "./components/student-page/grade12-13/studentgrade12-13";
import { StudentMyAccountPage } from "./components/student-page/my account/myaccount";
import { StudentGrade01Page } from "./components/student-page/grade01-05/grade01";
import { SGrade01SubjectNotePage } from "./components/student-page/grade01-05/subjectnotes";
import { SGrade01SinhalaNoteViewPage } from "./components/student-page/grade01-05/sinhalanoteview";
import { SGrade01BuddadarmayaNoteViewPage } from "./components/student-page/grade01-05/buddadarmayanoteview";
import { SGrade01ParisarayaNoteViewPage } from "./components/student-page/grade01-05/parisarayanoteview";
import { SGrade01MathsNoteViewPage } from "./components/student-page/grade01-05/mathsnoteview";
import { SGrade01TermTestPage } from "./components/student-page/grade01-05/TermTest";
import { SGrade01SubjectTermtestPage } from "./components/student-page/grade01-05/subjecttermtest";
import { SGrade01SinhalaTermTestPaperViewPage } from "./components/student-page/grade01-05/sinhalatermtestpaperview";
import { SGrade01BuddadarmayaTermTestPaperViewPage } from "./components/student-page/grade01-05/buddadarmayatermtestpaperview";
import { SGrade01ParisarayaTermTestPaperViewPage } from "./components/student-page/grade01-05/parisarayatermtestpaperview";
import { SGrade01MathsTermTestPaperViewPage } from "./components/student-page/grade01-05/mathstermtestpaperview ";
import { SGrade01TermTestMarkingPage } from "./components/student-page/grade01-05/termtestmarking";
import { SGrade01SubjectMonthlyTestPage } from "./components/student-page/grade01-05/subjectmonthlytest";
import { SGrade01MonthlyTestPage } from "./components/student-page/grade01-05/MonthlyTest";
import { SGrade01SinhalaMonthlyTestPaperViewPage } from "./components/student-page/grade01-05/sinhalamonthlytestpaperview";
import { SGrade01BuddadarmayaMonthlyTestPaperViewPage } from "./components/student-page/grade01-05/buddadarmayamonthlytestpaperview";
import { SGrade01ParisarayaMonthlyTestPaperViewPage } from "./components/student-page/grade01-05/parisarayamonthlytestpaperview";
import { SGrade01MathsMonthlyTestPaperViewPage } from "./components/student-page/grade01-05/mathsmonthlytestpaperview";
import { SGrade01MonthlyTestMarkingPage } from "./components/student-page/grade01-05/monthlytestmarking";
import { SGrade01SubjectCoCurricularActivitiesPage } from "./components/student-page/grade01-05/subjectcoactivities";
import { SGrade01SinhalaCoCurricularActivitiesViewPage } from "./components/student-page/grade01-05/sinhalacoactivitiesview";
import { SGrade01BuddadarmayaCoCurricularActivitiesViewPage } from "./components/student-page/grade01-05/buddadarmayacoactivitiesview";
import { SGrade01ParisarayaCoCurricularActivitiesViewPage } from "./components/student-page/grade01-05/parisarayacoactivitiesview";
import { SGrade01MathsCoCurricularActivitiesViewPage } from "./components/student-page/grade01-05/mathscoactivitiesview";
import { SGrade01SubjectEXCurricularActivitiesPage } from "./components/student-page/grade01-05/subjectexactivities";
import { SGrade01SinhalaEXCurricularActivitiesViewPage } from "./components/student-page/grade01-05/sinhalaexactivitiesview";
import { SGrade01BuddadarmayaEXCurricularActivitiesViewPage } from "./components/student-page/grade01-05/buddadarmayaexactivitiesview";
import { SGrade01ParisarayaEXCurricularActivitiesViewPage } from "./components/student-page/grade01-05/parisarayaexactivitiesview";
import { SGrade01MathsEXCurricularActivitiesViewPage } from "./components/student-page/grade01-05/mathsexactivitiesview";
import { StudentGrade06Page } from "./components/student-page/grade06-09/grade06";
import { SGrade06SubjectNotePage } from "./components/student-page/grade06-09/subjectnotes";
import { SGrade06SinhalaNoteViewPage } from "./components/student-page/grade06-09/sinhalanoteview";
import { SGrade06TermTestPage } from "./components/student-page/grade06-09/TermTest";
import { SGrade06TermTestMarkingPage } from "./components/student-page/grade06-09/termtestmarking";
import { SGrade06SubjectTermtestPage } from "./components/student-page/grade06-09/subjecttermtest";
import { SGrade06SinhalaTermTestPaperViewPage } from "./components/student-page/grade06-09/sinhalatermtestpaperview";
import { SGrade06MonthlyTestPage } from "./components/student-page/grade06-09/MonthlyTest";
import { SGrade06SubjectMonthlyTestPage } from "./components/student-page/grade06-09/subjectmonthlytest";
import { SGrade06SinhalaMonthlyTestPaperViewPage } from "./components/student-page/grade06-09/sinhalamonthlytestpaperview";
import { SGrade06MonthlyTestMarkingPage } from "./components/student-page/grade06-09/monthlytestmarking";
import { SGrade06AssigmentTestPage } from "./components/student-page/grade06-09/assigmentTest";
import { SGrade06AssigmentTestMarkingPage } from "./components/student-page/grade06-09/assigmenttestmarking";
import { SGrade06SubjectAssigmenttestPage } from "./components/student-page/grade06-09/subjectassigmenttest";
import { SGrade06SinhalaAssigmentTestPaperViewPage } from "./components/student-page/grade06-09/sinhalaassigmenttestpaperview";
import { SGrade06SubjectEXCurricularActivitiesPage } from "./components/student-page/grade06-09/subjectexactivities";
import { SGrade06SinhalaEXCurricularActivitiesViewPage } from "./components/student-page/grade06-09/sinhalaexactivitiesview";
import { StudentGrade10Page } from "./components/student-page/grade10-11/grade10";
import { SGrade10SubjectNotePage } from "./components/student-page/grade10-11/subjectnotes";
import { SGrade10SinhalaNoteViewPage } from "./components/student-page/grade10-11/sinhalanoteview";
import { SGrade10TermTestPage } from "./components/student-page/grade10-11/TermTest";
import { SGrade10SubjectTermtestPage } from "./components/student-page/grade10-11/subjecttermtest";
import { SGrade10SinhalaTermTestPaperViewPage } from "./components/student-page/grade10-11/sinhalatermtestpaperview";
import { SGrade10TermTestMarkingPage } from "./components/student-page/grade10-11/termtestmarking";
import { SGrade10MonthlyTestPage } from "./components/student-page/grade10-11/MonthlyTest";
import { SGrade10SinhalaMonthlyTestPaperViewPage } from "./components/student-page/grade10-11/sinhalamonthlytestpaperview";
import { SGrade10MonthlyTestMarkingPage } from "./components/student-page/grade10-11/monthlytestmarking";
import { SGrade10SubjectMonthlyTestPage } from "./components/student-page/grade10-11/subjectmonthlytest";
import { SGrade10AssigmentTestPage } from "./components/student-page/grade10-11/assigmentTest";
import { SGrade10SubjectAssigmenttestPage } from "./components/student-page/grade10-11/subjectassigmenttest";
import { SGrade10SinhalaAssigmentTestPaperViewPage } from "./components/student-page/grade10-11/sinhalaassigmenttestpaperview";
import { SGrade10AssigmentTestMarkingPage } from "./components/student-page/grade10-11/assigmenttestmarking";
import { SGrade10SubjectEXCurricularActivitiesPage } from "./components/student-page/grade10-11/subjectexactivities";
import { SGrade10SinhalaEXCurricularActivitiesViewPage } from "./components/student-page/grade10-11/sinhalaexactivitiesview";
import { StudentGrade12Page } from "./components/student-page/grade12-13/grade12";
import { SGrade12SubjectNotePage } from "./components/student-page/grade12-13/subjectnotes";
import { SGrade12SinhalaNoteViewPage } from "./components/student-page/grade12-13/sinhalanoteview";
import { SGrade12TermTestPage } from "./components/student-page/grade12-13/TermTest";
import { SGrade12SubjectTermtestPage } from "./components/student-page/grade12-13/subjecttermtest";
import { SGrade12SinhalaTermTestPaperViewPage } from "./components/student-page/grade12-13/sinhalatermtestpaperview";
import { SGrade12TermTestMarkingPage } from "./components/student-page/grade12-13/termtestmarking";
import { SGrade12MonthlyTestPage } from "./components/student-page/grade12-13/MonthlyTest";
import { SGrade12SubjectMonthlyTestPage } from "./components/student-page/grade12-13/subjectmonthlytest";
import { SGrade12SinhalaMonthlyTestPaperViewPage } from "./components/student-page/grade12-13/sinhalamonthlytestpaperview";
import { SGrade12MonthlyTestMarkingPage } from "./components/student-page/grade12-13/monthlytestmarking";
import { SGrade12AssigmentTestPage } from "./components/student-page/grade12-13/assigmentTest";
import { SGrade12SubjectAssigmenttestPage } from "./components/student-page/grade12-13/subjectassigmenttest";
import { SGrade12SinhalaAssigmentTestPaperViewPage } from "./components/student-page/grade12-13/sinhalaassigmenttestpaperview";
import { SGrade12AssigmentTestMarkingPage } from "./components/student-page/grade12-13/assigmenttestmarking";
import { SGrade12SubjectEXCurricularActivitiesPage } from "./components/student-page/grade12-13/subjectexactivities";
import { SGrade12SinhalaEXCurricularActivitiesViewPage } from "./components/student-page/grade12-13/sinhalaexactivitiesview";
import { SOLeaxaminfoPage } from "./components/student-page/grade10-11/olexamination";
import { SOLNewSubjectIntroPage } from "./components/student-page/grade10-11/olnewsubject";
import { SOLnewsubjectapplicationPage } from "./components/student-page/grade10-11/olnewsubjectapplication";
import { SOLaddmisionapplicationPage } from "./components/student-page/grade10-11/oladmissionapplication";
import { SALeaxaminfoPage } from "./components/student-page/grade12-13/alexamination";
import { SALNewSubjectIntroPage } from "./components/student-page/grade12-13/alnewsubject";
import { SALnewsubjectapplicationPage } from "./components/student-page/grade12-13/alnewsubjectapplication";
import { SALaddmisionapplicationPage } from "./components/student-page/grade12-13/aladmissionapplication";

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
        <Route path="/teachers" exact element={<TeachersDashboradPage/>}/>
        <Route path="/teachers-timetable" exact element={<FullTimetablePage/>}/>
        <Route path="/teachers-classes" exact element={<TeacherClassesPage/>}/>
        <Route path="/teachers-classes-class01" exact element={<Class01Page/>}/>
        <Route path="/teachers-classes-class01-sinhala" exact element={<Class01SinhalaPage/>}/>
        <Route path="/teachers-classes-class01-uploadnote-sinhala" exact element={<UploadNoteSinhalaPage/>}/>
        <Route path="/teachers-classes-class01-buddadarmaya" exact element={<Class01BuddadarmayaPage/>}/>
        <Route path="/teachers-classes-class01-uploadnote-buddadarmaya" exact element={<UploadNoteBuddadarmayaPage/>}/>
        <Route path="/teachers-classes-class02" exact element={<Class02Page/>}/>
        <Route path="/teachers-classes-class02-sinhala" exact element={<Class02SinhalaPage/>}/>
        <Route path="/teachers-classes-class02-uploadnote-sinhala" exact element={<Class02UploadNoteSinhalaPage/>}/>
        <Route path="/teachers-classes-class02-buddadarmaya" exact element={<Class02BuddadarmayaPage/>}/>
        <Route path="/teachers-classes-class02-uploadnote-buddadarmaya" exact element={<Class02UploadNoteBuddadarmayaPage/>}/>
        <Route path="/teachers-classes-class03" exact element={<Class03Page/>}/>
        <Route path="/teachers-classes-class03-sinhala" exact element={<Class03SinhalaPage/>}/>
        <Route path="/teachers-classes-class03-uploadnote-sinhala" exact element={<Class03UploadNoteSinhalaPage/>}/>
        <Route path="/teachers-classes-class03-buddadarmaya" exact element={<Class03BuddadarmayaPage/>}/>
        <Route path="/teachers-classes-class03-uploadnote-buddadarmaya" exact element={<Class03UploadNoteBuddadarmayaPage/>}/>
        <Route path="/teachers-classes-class04" exact element={<Class04Page/>}/>
        <Route path="/teachers-classes-class04-sinhala" exact element={<Class04SinhalaPage/>}/>
        <Route path="/teachers-classes-class04-uploadnote-sinhala" exact element={<Class04UploadNoteSinhalaPage/>}/>
        <Route path="/teachers-classes-class04-buddadarmaya" exact element={<Class04BuddadarmayaPage/>}/>
        <Route path="/teachers-classes-class04-uploadnote-buddadarmaya" exact element={<Class04UploadNoteBuddadarmayaPage/>}/>
        <Route path="/teachers-classes-classroom" exact element={<ClassroomPage/>}/>
        <Route path="/teachers-students" exact element={<TeacherStudentPage/>}/>
        <Route path="/teachers-students-class01" exact element={<MyStudentClass01Page/>}/>
        <Route path="/teachers-students-class01-sinhala" exact element={<MyStudentClass01SinhalaPage/>}/>
        <Route path="/teachers-students-class01-buddadarmaya" exact element={<MyStudentClass01BuddadarmayaPage/>}/>
        <Route path="/teachers-students-class02" exact element={<MyStudentClass02Page/>}/>
        <Route path="/teachers-students-class02-sinhala" exact element={<MyStudentClass02SinhalaPage/>}/>
        <Route path="/teachers-students-class02-buddadarmaya" exact element={<MyStudentClass02BuddadarmayaPage/>}/>
        <Route path="/teachers-students-class03" exact element={<MyStudentClass03Page/>}/>
        <Route path="/teachers-students-class03-sinhala" exact element={<MyStudentClass03SinhalaPage/>}/>
        <Route path="/teachers-students-class03-buddadarmaya" exact element={<MyStudentClass03BuddadarmayaPage/>}/>
        <Route path="/teachers-students-class04" exact element={<MyStudentClass04Page/>}/>
        <Route path="/teachers-students-class04-sinhala" exact element={<MyStudentClass04SinhalaPage/>}/>
        <Route path="/teachers-students-class04-buddadarmaya" exact element={<MyStudentClass04BuddadarmayaPage/>}/>
        <Route path="/teacher-attendance" exact element={<AttendancePage/>}/>
        <Route path="/teachers-home-work" exact element={<HomeworkPage/>}/>
        <Route path="/teachers-home-work-class01" exact element={<Class01HomeworkPage/>}/>
        <Route path="/teachers-home-work-class01-sinhala" exact element={<Class01SinhalaHomeworkPage/>}/>
        <Route path="/teachers-home-work-class01-buddadarmaya" exact element={<Class01BuddadarmayaHomeworkPage/>}/>
        <Route path="/teachers-home-work-class01-upload-home-work-sinhala" exact element={<Class01UploadHomeWorkSinhalaPage/>}/>
        <Route path="/teachers-home-work-class01-upload-home-work-buddadarmaya" exact element={<Class01UploadHomeWorkBuddadarmayaPage/>}/>
        <Route path="/teachers-Assigment-monthly-test" exact element={<AssigmentAndMonthlyTestPage/>}/>
        <Route path="/teachers-Assigment-monthly-test-Assigmnet" exact element={<AssigmentPage/>}/>
        <Route path="/teachers-Assigment-monthly-test-Assigmnet-list" exact element={<AssigmentListPage/>}/>
        <Route path="/teachers-Assigment-monthly-test-Assigmnet-upload" exact element={<UploadAssigmentPage/>}/>
        <Route path="/teachers-Assigment-monthly-test-Assigmnet-marking-upload" exact element={<AssigmentMarkingUploadPage/>}/>
        <Route path="/teachers-Assigment-monthly-test-MonthlyTest" exact element={<MonthlyTestPage/>}/>
        <Route path="/teachers-Assigment-monthly-test-MonthlyTest-list" exact element={<MonthlyTestListPage/>}/>
        <Route path="/teachers-Assigment-monthly-test-MonthlyTest-upload" exact element={<UploadMonthlyTestPage/>}/>
        <Route path="/teachers-Assigment-monthly-test-MonthlyTest-marking-upload" exact element={<MonthlyTestMarkingUploadPage/>}/>
        <Route path="/teachers-Term-Test-Marking" exact element={<TermTestMarkingPage/>}/>
        <Route path="/teachers-term-test-class01" exact element={<Class01TermTestPage/>}/>
        <Route path="/teachers-term-test-class01-sinhala" exact element={<Class01TermTestSinhalaPage/>}/>
        <Route path="/teachers-term-test-class01-sinhala-term-i" exact element={<Class01SinhalaTermTestIMarkingUploadPage/>}/>
        <Route path="/teachers-term-test-class01-sinhala-term-ii" exact element={<Class01SinhalaTermTestIIMarkingUploadPage/>}/>
        <Route path="/teachers-term-test-class01-sinhala-term-iii" exact element={<Class01SinhalaTermTestIIIMarkingUploadPage/>}/>
        <Route path="/teachers-term-test-class01-buddadarmaya" exact element={<Class01TermTestBuddadarmayaPage/>}/>
        <Route path="/teachers-term-test-class01-budda-darmaya-term-i" exact element={<Class01BuddadarmayaTermTestIMarkingUploadPage/>}/>
        <Route path="/teachers-term-test-class01-budda-darmaya-term-ii" exact element={<Class01BuddadarmayaTermTestIIMarkingUploadPage/>}/>
        <Route path="/teachers-term-test-class01-budda-darmaya-term-iii" exact element={<Class01BuddadarmayaTermTestIIIMarkingUploadPage/>}/>
        <Route path="/teachers-my-account" exact element={<TeachersMyAccountPage/>}/>
        <Route path="/teachers-incharge" exact element={<TeachersInchargePage/>}/>
        <Route path="/teachers-incharge-grade-01-05" exact element={<Grade0105Page/>}/>
        <Route path="/teachers-incharge-grade-01" exact element={<Grade01TeachersInchagePage/>}/>
        <Route path="/teachers-incharge-grade-01-students-and-teachers-information" exact element={<Grade01TeachersInchageStudentsAndTeachersInformationPage/>}/>
        <Route path="/teachers-incharge-grade-01-teachers-information" exact element={<Grade01TeachersInchageTeachersInformationPage/>}/>
        <Route path="/teachers-incharge-grade-01-students-information" exact element={<Grade01TeachersInchageStudentsInformationPage/>}/>
        <Route path="/teachers-incharge-grade-01-students-progress" exact element={<Grade01TeachersInchageStudentsProgressPage/>}/>
        <Route path="/teachers-incharge-grade-01-teachers-progress" exact element={<Grade01TeachersInchageTeachersProgressPage/>}/>
        <Route path="/teachers-incharge-grade-06-09" exact element={<Grade0609Page/>}/>
        <Route path="/teachers-incharge-grade-06" exact element={<Grade06TeachersInchagePage/>}/>
        <Route path="/teachers-incharge-grade-06-students-and-teachers-information" exact element={<Grade06TeachersInchageStudentsAndTeachersInformationPage/>}/>
        <Route path="/teachers-incharge-grade-06-teachers-information" exact element={<Grade06TeachersInchageTeachersInformationPage/>}/>
        <Route path="/teachers-incharge-grade-06-students-information" exact element={<Grade06TeachersInchageStudentsInformationPage/>}/>
        <Route path="/teachers-incharge-grade-06-students-progress" exact element={<Grade06TeachersInchageStudentsProgressPage/>}/>
        <Route path="/teachers-incharge-grade-06-teachers-progress" exact element={<Grade06TeachersInchageTeachersProgressPage/>}/>
        <Route path="/teachers-incharge-grade-10-11" exact element={<Grade1011Page/>}/>
        <Route path="/teachers-incharge-grade-10" exact element={<Grade10TeachersInchagePage/>}/>
        <Route path="/teachers-incharge-grade-10-students-and-teachers-information" exact element={<Grade10TeachersInchageStudentsAndTeachersInformationPage/>}/>
        <Route path="/teachers-incharge-grade-10-teachers-information" exact element={<Grade10TeachersInchageTeachersInformationPage/>}/>
        <Route path="/teachers-incharge-grade-10-students-information" exact element={<Grade10TeachersInchageStudentsInformationPage/>}/>
        <Route path="/teachers-incharge-grade-10-students-progress" exact element={<Grade10TeachersInchageStudentsProgressPage/>}/>
        <Route path="/teachers-incharge-grade-10-teachers-progress" exact element={<Grade10TeachersInchageTeachersProgressPage/>}/>
        <Route path="/teachers-incharge-grade-12-13" exact element={<Grade1213Page/>}/>
        <Route path="/teachers-incharge-grade-12" exact element={<Grade12TeachersInchagePage/>}/>
        <Route path="/teachers-incharge-grade-12-students-and-teachers-information" exact element={<Grade12TeachersInchageStudentsAndTeachersInformationPage/>}/>
        <Route path="/teachers-incharge-grade-12-teachers-information" exact element={<Grade12TeachersInchageTeachersInformationPage/>}/>
        <Route path="/teachers-incharge-grade-12-students-information" exact element={<Grade12TeachersInchageStudentsInformationPage/>}/>
        <Route path="/teachers-incharge-grade-12-students-progress" exact element={<Grade12TeachersInchageStudentsProgressPage/>}/>
        <Route path="/teachers-incharge-grade-12-teachers-progress" exact element={<Grade12TeachersInchageTeachersProgressPage/>}/>
        <Route path="/teachers-incharge-my-account" exact element={<TeachersInchargeMyAccountPage/>}/> 
        <Route path="/principle" exact element={<PrincipleDashboradPage/>}/>
        <Route path="/principle-students" exact element={<PrincipleStudentsPage/>}/>
        <Route path="/principle-students-grade01" exact element={<PSGrade01Page/>}/>
        <Route path="/principle-students-grade01-grade01-A" exact element={<PSGrade01A/>}/>
        <Route path="/principle-grade-01-grade-01-A-students-information" exact element={<Grade01APrincipleStudentsInformationPage/>}/>
        <Route path="/principle-grade-01-grade-01-A-students-progress" exact element={<Grade01APrincipleStudentsProgressPage/>}/>
        <Route path="/principle-teachers" exact element={<PrincipleTeachersPage/>}/>
        <Route path="/principle-grade-01" exact element={<PTGrade01/>}/>
        <Route path="/principle-grade-01-teachers-information" exact element={<Grade01PrincipleTeachersInformationPage/>}/>
        <Route path="/principle-grade-01-teachers-progress" exact element={<Grade01PrincipleTeachersProgressPage/>}/>
        <Route path="/principle-office-staff" exact element={<PrincipleOfficeStaffPage/>}/>
        <Route path="/principle-results" exact element={<PrincipleResultsPage/>}/>
        <Route path="/principle-result-grade5scholarship" exact element={<PRGrade05ScholarshipPage/>}/>
        <Route path="/principle-result-olresults" exact element={<PROLResultsPage/>}/>
        <Route path="/principle-result-alresults" exact element={<PRALResultsPage/>}/>
        <Route path="/principle-my-account" exact element={<PrincipleMyAccountPage/>}/>
        <Route path="/student" exact element={<StudentDashboradPage/>}/>
        <Route path="/student-grade-01-05" exact element={<StudentGrade0105Page/>}/>
        <Route path="/student-grade-01" exact element={<StudentGrade01Page/>}/>
        <Route path="/view-notes" exact element={<SGrade01SubjectNotePage/>}/>
        <Route path="/student-grade-01-subject-sinhala" exact element={<SGrade01SinhalaNoteViewPage/>}/>
        <Route path="/student-grade-01-subject-budda-darmaya" exact element={<SGrade01BuddadarmayaNoteViewPage/>}/>
        <Route path="/student-grade-01-subject-parisaraya" exact element={<SGrade01ParisarayaNoteViewPage/>}/>
        <Route path="/student-grade-01-subject-maths" exact element={<SGrade01MathsNoteViewPage/>}/>
        <Route path="/view-term-test" exact element={<SGrade01TermTestPage/>}/>
        <Route path="/student-term-test-paper" exact element={<SGrade01SubjectTermtestPage/>}/>
        <Route path="/student-grade-01-subject-term-test-sinhala" exact element={<SGrade01SinhalaTermTestPaperViewPage/>}/>
        <Route path="/student-grade-01-subject-term-test-budda-darmaya" exact element={<SGrade01BuddadarmayaTermTestPaperViewPage/>}/>
        <Route path="/student-grade-01-subject-term-test-parisaraya" exact element={<SGrade01ParisarayaTermTestPaperViewPage/>}/>
        <Route path="/student-grade-01-subject-term-test-maths" exact element={<SGrade01MathsTermTestPaperViewPage/>}/>
        <Route path="/student-term-test-marking" exact element={<SGrade01TermTestMarkingPage/>}/>
        <Route path="/view-monthly-test" exact element={<SGrade01MonthlyTestPage/>}/>
        <Route path="/student-monthly-test-paper" exact element={<SGrade01SubjectMonthlyTestPage/>}/>
        <Route path="/student-grade-01-subject-monthly-test-sinhala" exact element={<SGrade01SinhalaMonthlyTestPaperViewPage/>}/>
        <Route path="/student-grade-01-subject-monthly-test-budda-darmaya" exact element={<SGrade01BuddadarmayaMonthlyTestPaperViewPage/>}/>
        <Route path="/student-grade-01-subject-monthly-test-parisaraya" exact element={<SGrade01ParisarayaMonthlyTestPaperViewPage/>}/>
        <Route path="/student-grade-01-subject-monthly-test-maths" exact element={<SGrade01MathsMonthlyTestPaperViewPage/>}/>
        <Route path="/student-monthly-test-marking" exact element={<SGrade01MonthlyTestMarkingPage/>}/>
        <Route path="/view-co-curricular-activities" exact element={<SGrade01SubjectCoCurricularActivitiesPage/>}/>
        <Route path="/student-grade-01-subject-co-curricular-activities-sinhala" exact element={<SGrade01SinhalaCoCurricularActivitiesViewPage/>}/>
        <Route path="/student-grade-01-subject-co-curricular-activities-budda-darmaya" exact element={<SGrade01BuddadarmayaCoCurricularActivitiesViewPage/>}/>
        <Route path="/student-grade-01-subject-co-curricular-activities-parisaraya" exact element={<SGrade01ParisarayaCoCurricularActivitiesViewPage/>}/>
        <Route path="/student-grade-01-subject-co-curricular-activities-maths" exact element={<SGrade01MathsCoCurricularActivitiesViewPage/>}/>
        <Route path="/view-extra-curricular-activities" exact element={<SGrade01SubjectEXCurricularActivitiesPage/>}/>
        <Route path="/student-grade-01-subject-ex-curricular-activities-sinhala" exact element={<SGrade01SinhalaEXCurricularActivitiesViewPage/>}/>
        <Route path="/student-grade-01-subject-ex-curricular-activities-budda-darmaya" exact element={<SGrade01BuddadarmayaEXCurricularActivitiesViewPage/>}/>
        <Route path="/student-grade-01-subject-ex-curricular-activities-parisaraya" exact element={<SGrade01ParisarayaEXCurricularActivitiesViewPage/>}/>
        <Route path="/student-grade-01-subject-ex-curricular-activities-maths" exact element={<SGrade01MathsEXCurricularActivitiesViewPage/>}/>
        <Route path="/student-grade-06-09" exact element={<StudentGrade0609Page/>}/>
        <Route path="/student-grade-06" exact element={<StudentGrade06Page/>}/>
        <Route path="/grade-06-view-notes" exact element={<SGrade06SubjectNotePage/>}/>
        <Route path="/student-grade-06-subject-sinhala" exact element={<SGrade06SinhalaNoteViewPage/>}/>
        <Route path="/grade-06-view-term-test" exact element={<SGrade06TermTestPage/>}/>
        <Route path="/student-grade-06-term-test-paper" exact element={<SGrade06SubjectTermtestPage/>}/>
        <Route path="/student-grade-06-subject-term-test-sinhala" exact element={<SGrade06SinhalaTermTestPaperViewPage/>}/>
        <Route path="/student-grade-06-term-test-marking" exact element={<SGrade06TermTestMarkingPage/>}/>
        <Route path="/grade-06-view-monthly-test" exact element={<SGrade06MonthlyTestPage/>}/>
        <Route path="/student-grade-06-monthly-test-paper" exact element={<SGrade06SubjectMonthlyTestPage/>}/>
        <Route path="/student-grade-06-subject-monthly-test-sinhala" exact element={<SGrade06SinhalaMonthlyTestPaperViewPage/>}/>
        <Route path="/student-grade-06-monthly-test-marking" exact element={<SGrade06MonthlyTestMarkingPage/>}/>
        <Route path="/grade-06-view-assigment" exact element={<SGrade06AssigmentTestPage/>}/>
        <Route path="/student-grade-06-assigment-test-paper" exact element={<SGrade06SubjectAssigmenttestPage/>}/>
        <Route path="/student-grade-06-subject-assigment-test-sinhala" exact element={<SGrade06SinhalaAssigmentTestPaperViewPage/>}/>
        <Route path="/student-grade-06-assigment-test-marking" exact element={<SGrade06AssigmentTestMarkingPage/>}/>
        <Route path="/grade-06-view-extra-curricular-activities" exact element={<SGrade06SubjectEXCurricularActivitiesPage/>}/>
        <Route path="/student-grade-06-subject-ex-curricular-activities-sinhala" exact element={<SGrade06SinhalaEXCurricularActivitiesViewPage/>}/>
        <Route path="/student-grade-10-11" exact element={<StudentGrade1011Page/>}/>
        <Route path="/student-grade-10" exact element={<StudentGrade10Page/>}/>
        <Route path="/grade-10-view-notes" exact element={<SGrade10SubjectNotePage/>}/>
        <Route path="/student-grade-10-subject-sinhala" exact element={<SGrade10SinhalaNoteViewPage/>}/>
        <Route path="/grade-10-view-term-test" exact element={<SGrade10TermTestPage/>}/>
        <Route path="/student-grade-10-term-test-paper" exact element={<SGrade10SubjectTermtestPage/>}/>
        <Route path="/student-grade-10-subject-term-test-sinhala" exact element={<SGrade10SinhalaTermTestPaperViewPage/>}/>
        <Route path="/student-grade-10-term-test-marking" exact element={<SGrade10TermTestMarkingPage/>}/>
        <Route path="/grade-10-view-monthly-test" exact element={<SGrade10MonthlyTestPage/>}/>
        <Route path="/student-grade-10-monthly-test-paper" exact element={<SGrade10SubjectMonthlyTestPage/>}/>
        <Route path="/student-grade-10-subject-monthly-test-sinhala" exact element={<SGrade10SinhalaMonthlyTestPaperViewPage/>}/>
        <Route path="/student-grade-10-monthly-test-marking" exact element={<SGrade10MonthlyTestMarkingPage/>}/>
        <Route path="/grade-10-view-assigment" exact element={<SGrade10AssigmentTestPage/>}/>
        <Route path="/student-grade-10-assigment-test-paper" exact element={<SGrade10SubjectAssigmenttestPage/>}/>
        <Route path="/student-grade-10-subject-assigment-test-sinhala" exact element={<SGrade10SinhalaAssigmentTestPaperViewPage/>}/>
        <Route path="/student-grade-10-assigment-test-marking" exact element={<SGrade10AssigmentTestMarkingPage/>}/>
        <Route path="/grade-10-view-extra-curricular-activities" exact element={<SGrade10SubjectEXCurricularActivitiesPage/>}/>
        <Route path="/student-grade-10-subject-ex-curricular-activities-sinhala" exact element={<SGrade10SinhalaEXCurricularActivitiesViewPage/>}/>
        <Route path="/grade-10-view-O/L-examination-related-information" exact element={<SOLeaxaminfoPage/>}/>
        <Route path="/ol-new-suject-information" exact element={<SOLNewSubjectIntroPage/>}/>
        <Route path="/ol-new-suject-apply-application" exact element={<SOLnewsubjectapplicationPage/>}/>
        <Route path="/ol-exam-admission-application" exact element={<SOLaddmisionapplicationPage/>}/>
        <Route path="/student-grade-12-13" exact element={<StudentGrade1213Page/>}/>
        <Route path="/student-grade-12" exact element={<StudentGrade12Page/>}/>
        <Route path="/grade-12-view-notes" exact element={<SGrade12SubjectNotePage/>}/>
        <Route path="/student-grade-12-subject-sinhala" exact element={<SGrade12SinhalaNoteViewPage/>}/>
        <Route path="/grade-12-view-term-test" exact element={<SGrade12TermTestPage/>}/>
        <Route path="/student-grade-12-term-test-paper" exact element={<SGrade12SubjectTermtestPage/>}/>
        <Route path="/student-grade-12-subject-term-test-sinhala" exact element={<SGrade12SinhalaTermTestPaperViewPage/>}/>
        <Route path="/student-grade-12-term-test-marking" exact element={<SGrade12TermTestMarkingPage/>}/>
        <Route path="/grade-12-view-monthly-test" exact element={<SGrade12MonthlyTestPage/>}/>
        <Route path="/student-grade-12-monthly-test-paper" exact element={<SGrade12SubjectMonthlyTestPage/>}/>
        <Route path="/student-grade-12-subject-monthly-test-sinhala" exact element={<SGrade12SinhalaMonthlyTestPaperViewPage/>}/>
        <Route path="/student-grade-12-monthly-test-marking" exact element={<SGrade12MonthlyTestMarkingPage/>}/>
        <Route path="/grade-12-view-assigment" exact element={<SGrade12AssigmentTestPage/>}/>
        <Route path="/student-grade-12-assigment-test-paper" exact element={<SGrade12SubjectAssigmenttestPage/>}/>
        <Route path="/student-grade-12-subject-assigment-test-sinhala" exact element={<SGrade12SinhalaAssigmentTestPaperViewPage/>}/>
        <Route path="/student-grade-12-assigment-test-marking" exact element={<SGrade12AssigmentTestMarkingPage/>}/>
        <Route path="/grade-12-view-extra-curricular-activities" exact element={<SGrade12SubjectEXCurricularActivitiesPage/>}/>
        <Route path="/student-grade-12-subject-ex-curricular-activities-sinhala" exact element={<SGrade12SinhalaEXCurricularActivitiesViewPage/>}/>
        <Route path="/grade-12-view-A/L-examination-related-information" exact element={<SALeaxaminfoPage/>}/>
        <Route path="/al-new-suject-information" exact element={<SALNewSubjectIntroPage/>}/>
        <Route path="/al-new-suject-apply-application" exact element={<SALnewsubjectapplicationPage/>}/>
        <Route path="/al-exam-admission-application" exact element={<SALaddmisionapplicationPage/>}/>
        <Route path="/student-my-account" exact element={<StudentMyAccountPage/>}/>
      </Routes>
      </Container>
  </Suspense>
   </BrowserRouter>
)