import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Instructor from "../Pages/Home/Instructor/Instructor";
import Classes from "../Pages/Home/Classes/Classes";
import PrivateRoutes from "./PrivateRoutes";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>   
        }, 
        {
            path: "login",
            element:<Login></Login>   
        }, 
        {
            path: "registration",
            element:<Registration></Registration>   
        }, 
        {
            path: "instructors",
            element:<PrivateRoutes><Instructor></Instructor></PrivateRoutes>    
        }, 
        {
            path: "classes",
            element:<Classes></Classes>   
        }, 
      ]
    },
    {
      path: "*",
      element:<ErrorPage/>
  
    }
]);

export default router;