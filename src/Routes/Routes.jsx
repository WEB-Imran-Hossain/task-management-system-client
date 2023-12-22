import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/SharedPage/NotFound";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegistrationPage/Registration";
import Plans from "../Pages/PlansPage/Plans";
import About from "../Pages/AboutPage/About";
import Contact from "../Pages/ContactPage/Contact";
import Dashboard from "../Pages/DashboardPage/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/plans",
        element: <Plans></Plans>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
path: "dashboard",
element: <Dashboard></Dashboard>
  }
]);
