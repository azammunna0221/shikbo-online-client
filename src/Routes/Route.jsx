import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/SignUp/Register";
import Classes from "../Pages/Home/Classes/Classes";
import Instructor from "../Pages/Home/Instructors/Instructor";
import Error from "../Error/Error";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import SelectClasses from "../Pages/Dashboard/selectClasses";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/classes")
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/classes',
            element: <Classes></Classes>,
            loader: () => fetch("http://localhost:5000/classes")
        },
        {
            path: '/instructor',
            element: <Instructor></Instructor>,
            loader: () => fetch("http://localhost:5000/instructors")
        },
      ] 
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'selectClasses',
                element: <SelectClasses></SelectClasses>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'myClasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            }

        ]
    }
  ]);