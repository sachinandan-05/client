import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Home from "../pages/Home.js";
import Login from "../pages/Login.js";
import ForgotPassword from "../pages/ForgotPassword.js";
import Signup from "../pages/Signup.js";
import Admin from "../pages/admin.js";
import AllProducts from "../pages/AllProducts.js";
// import AllUsers from "../pages/AllUsers.js";
import AllUsersList from"../pages/AllUsersList.js";
import ProductDetailsView from "../components/ProductDetailsView.js";
// import AddToCart from "../pages/AddedToCart.js";
import AddedToCart from "../pages/AddedToCart.js";
import SearchProduct from "../pages/SearchProduct.js";
import CatogryPage from "../pages/CatogryPage.js";

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
    },
    {
        path:"product/:id",
        element:<ProductDetailsView/>
    },
    {
        path:"search",
        element:<SearchProduct/>
    },
    {
        path:"product-catogry",
        element:<CatogryPage/>
    },
    {
        path:"product/addedtocart",
        element:<AddedToCart/>
    },


    {
        path:"admin",
        element:<Admin/>,
        children:[{
            path:"allproducts",
            element:<AllProducts/>
        },
        {
            path:"allusers",
            element:<AllUsersList/>
        }
    ]
    }
]


}]
)

export default router;