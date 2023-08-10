import { Navigate, useRoutes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import MastersPrograms from "./Pages/MastersPrograms";
import PhdPrograms from "./Pages/PhdPrograms";
import EntryRequirements from "./Pages/EntryRequirements";
import ApplicationForm from "./Pages/ApplicationForm";
import PageNotFound from "./Pages/PageNotFound";
import AdminLayout from "./components/adminComponents/AdminLayout";
import AdminHomePage from "./Pages/ADMINPAGES/Home";
import CampusTour from "./Pages/CompusTour";
import CampusGallery from "./Pages/CampusGallery";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Blogs from "./Pages/ADMINPAGES/Blog";
import CreateBlog from "./Pages/ADMINPAGES/CreateBlog";
import Login from "./Pages/ADMINPAGES/Login";
import RequireAuth from "./App/AdminRequireAuth";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./App/AuthSlice";
import SingleEvent from "./Pages/SingleEvent";
import AllEvents from "./Pages/AllEvents";

export default function Routeer() {
  const token = useSelector(selectCurrentToken);
  <Router></Router>;
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Layout />
        </>
      ),
      children: [
        { element: <Navigate to="/acts" />, index: true },
        { path: "acts", element: <Home /> },
        { path: "academics/masters_programs", element: <MastersPrograms /> },
        { path: "academics/Phd_programs", element: <PhdPrograms /> },
        {
          path: "admission/entry_requirements",
          element: <EntryRequirements />,
        },
        {
          path: "admission/acts_online_application",
          element: <ApplicationForm />,
        },
        { path: "acts/campus_tour", element: <CampusGallery /> },
        { path: "acts/about_us", element: <AboutUs /> },
        { path: "acts/campus_gallery", element: <CampusGallery /> },
        { path: "acts/contact_us", element: <ContactUs /> },
        { path: "acts/events", element: <SingleEvent /> },
        { path: "acts/allEvents", element: <AllEvents /> },
      ],
    },
    {
      path: "actsAdimin/login",
      element: <Login />,
    },
    {
      path: "/acts/admin/*",
      element: (
        //  token?  
         <AdminLayout />
        //  : <Navigate to="/actsAdimin/login"  />
      ),
      children: [
        { element: <Navigate to="/acts/admin/create_events" />, index: true },
        { path: "AdminHome", element: <AdminHomePage /> },
        { path: "events", element: <Blogs /> },
        { path: "create_events", element: <CreateBlog /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
      element: <PageNotFound />,
    },
  ]);

  return routes;
}
