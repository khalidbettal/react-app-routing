import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Survey from "./views/Survey";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Dashboard/>
    
    },
    {
        path: "/survey",
        element: <Survey/>
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
    

])


export default router ;