import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Home from "../pages/Home.js";
import Login from "../pages/Login.js";
import ForgotPassword from "../pages/ForgotPassword.js";
import Signup from "../pages/Signup.js";

const router = createBrowserRouter(
    [
    { 
        path:'/',
    element: <App/> ,
children:
    [{
    path:"",
    element:<Home/>
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"forgot-password",
        element:<ForgotPassword/>
    },
    {
        path:"signup",
        element:<Signup/>
    }
]


}]
)

export default router;