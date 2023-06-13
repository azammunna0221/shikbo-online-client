import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/SignUp/Register";
import Classes from "../Pages/Home/Classes/Classes";
import Instructor from "../Pages/Home/Instructors/Instructor";
import Error from "../Error/Error";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
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
            element: <Classes></Classes>
        },
        {
            path: '/instructor',
            element: <Instructor></Instructor>
        }
      ] 
      
    },
  ]);