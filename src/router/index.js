import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Home from "../pages/Home.js";
import Login from "../pages/Login.js";

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
    }
]


}]
)

export default router;