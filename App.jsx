import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Announcements from "./pages/Announcements";
import Homework from "./pages/Homework";
import Discussion from "./pages/Discussion";
import Materials from "./pages/Materials";
import Grading from "./pages/Grading";
import Attendance from "./pages/Attendance";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";
import HomePage from "./pages/HomePage";

const App = () => (
<Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route 
        path="/home" 
        element={<ProtectedRoute><HomePage /></ProtectedRoute>} 
    />
    <Route 
        path="/announcements" 
        element={<ProtectedRoute><AnnouncementsPage /></ProtectedRoute>} 
    />
    <Route 
        path="/homework" 
        element={<RoleBasedRoute role="student"><HomeworkPage /></RoleBasedRoute>} 
    />
    <Route 
        path="/discussion" 
        element={<ProtectedRoute><DiscussionBoardPage /></ProtectedRoute>} 
    />
    <Route 
        path="/materials" 
        element={<ProtectedRoute><LectureMaterialsPage /></ProtectedRoute>} 
    />
    <Route 
        path="/grading" 
        element={<RoleBasedRoute role="instructor"><GradingPage /></RoleBasedRoute>} 
    />
    <Route 
        path="/attendance" 
        element={<RoleBasedRoute role="instructor"><AttendancePage /></RoleBasedRoute>} 
    />

<Route 
        path="/resources" 
        element={<ProtectedRoute><Resources/></ProtectedRoute>} 
    />
    <Route 
    <Route path="*" element={<NotFoundPage />} />
    </Routes>
</Router>
);
