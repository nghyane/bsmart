import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import CourseList from '../pages/CourseList';
import MentorProfile from '../pages/MentorProfile';
import LearningManagementSystem from '../pages/LearningManagementSystem';
import Blog from '../pages/BlogList';   
import BlogDetail from '../pages/BlogDetail';   
import CourseDetails from '../pages/CourseDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';


const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />, // Home component should be rendered as a child
            },
            {
                path: "/aboutus",
                element: <AboutUs />,
            },
            {
                path: "/courses",
                element: <CourseList />,
            },
            {
                path: "/view-mentor-profile",
                element: <MentorProfile />,
            },
            {
                path: "/lms",
                element: <LearningManagementSystem />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/blog-detail",
                element: <BlogDetail />
            },
            {
                path: "/course/:courseId",
                element: <CourseDetails />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
