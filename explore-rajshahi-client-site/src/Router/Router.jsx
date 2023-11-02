import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePage';
import DashboardLayout from '../Layout/DashboardLayout';
import Dashboard from '../Pages/Dashboard';
import AddDistrict from '../Pages/AddDistrict';
import Manage from '../Pages/ManageDistrict';
import AddPlace from '../Pages/AddPlace';
import ManageDistrict from '../Pages/ManageDistrict';
import ManageTourPlace from '../Pages/ManageTourPlace';
import AddThana from '../Pages/AddThana';
import ManageThana from '../Pages/ManageThana';
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';
import Thanas from '../Pages/Thanas';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/districts/:districtName',
                element: <Thanas />,
                loader: async ({ params }) => await fetch(`http://localhost:5000/thanas/${params.districtName}`) 
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Registration />
            },
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element:<Dashboard />
            },
            {
                path: '/dashboard/add-district',
                element: <AddDistrict children={"Add District"}/>
            },
            {
                path: '/dashboard/manage-district',
                element: <ManageDistrict children={"Manage District"} />
            },
            {
                path: '/dashboard/add-tourplace',
                element: <AddPlace children={"Add Tour Place"} />
            },
            {
                path: '/dashboard/add-thana',
                element: <AddThana />
            },
            {
                path: '/dashboard/manage-thana',
                element: <ManageThana />,
                loader: async () => await fetch('http://localhost:5000/thanaCount')
            },
            {
                path: '/dashboard/manage-tourplace',
                element: <ManageTourPlace children={"Manage Tout Place"} />
            },
        ]
    }
])

export default router