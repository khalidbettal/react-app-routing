import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Survey from "./views/Survey";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Product from "./assets/Product";

const router = createBrowserRouter([

    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/"/>

            },
            {
                path: "/",
                element: <Dashboard/>
            
            },
            {
                path: "/cart",
                element: <Survey/>
            },
        ]

    },

    

    {
        path: "/",
        element: <GuestLayout/>,
        children : [
            {
                path: "/login",
                element: <Login/>
            },
         
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
    {
        path: "/products",
        element: <Product />
    }
    

])


export default router ;