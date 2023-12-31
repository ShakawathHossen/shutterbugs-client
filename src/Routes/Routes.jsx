import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Instructor from "../Pages/Home/Instructor/Instructor";
import Classes from "../Pages/Home/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageCourses from "../Pages/Dashboard/ManageCourses/ManageCourses";
import Payment from "../Pages/Dashboard/Payment/Payment";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "registration",
        element: <Registration></Registration>
      },
      {
        path: "instructors",
        element: <Instructor></Instructor>
      },
      {
        path: "classes",
        element: <Classes></Classes>
      },
    ],

  },
  {
    path: "dashboard",
    element:  <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>

      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>
      },
      {
        path: "managecourses",
        element: <ManageCourses></ManageCourses>
      },
      {
        path: "payment/:id",
        element: <Payment> </Payment>,
        loader:({params})=> fetch(`https://shutter-bugs-server.vercel.app/carts/${params.id}`)
      },

    ]
  },
  {
    path: "*",
    element: <ErrorPage />

  }
]);

export default router;