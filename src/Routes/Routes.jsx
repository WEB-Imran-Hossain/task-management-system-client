import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/SharedPage/NotFound";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Contact from "../Pages/ContactPage/Contact";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegistrationPage/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ],
  }
]);
