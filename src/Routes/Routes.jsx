import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";





import PrivateRoute from "../components/PrivateRoute";
import Page404 from "../components/page404";

import AllColleges from "../components/AllColleges";
import Admission from "../components/Admission";
import CollegeAdmissionForm from "../components/CollegeAdmissionForm";
import MyCollege from "../components/MyCollege";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "allcolleges",
        element: <AllColleges></AllColleges>,
        loader: () =>
          fetch("https://college-admission-server-end.vercel.app/addacollege"),
      },
      {
        path: "mycolleges",
        element: <MyCollege></MyCollege>
        
      },
      
      
     
      
      
  {
    path: "admission",
    element: <Admission />,
  },
  {
    path: "admission/:collegeId",
    element: <CollegeAdmissionForm />,
  }
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  }
]);

export default router;
