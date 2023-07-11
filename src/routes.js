import { Navigate, useRoutes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import MastersPrograms from "./Pages/MastersPrograms";
import PhdPrograms from "./Pages/PhdPrograms";
import EntryRequirements from "./Pages/EntryRequirements";
import ApplicationForm from "./Pages/ApplicationForm";
import PageNotFound from "./Pages/PageNotFound";

export default function Routeer() {
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
        { path: "admission/entry_requirements", element: <EntryRequirements /> },
        { path: "admission/acts_online_application", element: <ApplicationForm /> },
        // { path: "programs", element: <Programs /> },
        // { path: "management", element: <Leaders /> },
        // { path: "gallery", element: <Gallery /> },
        // { path: "contact", element: <ContactUs /> },

      ],
    },
    {
      path: "/adminCompose",
      // element: <AdminLayout />,
      children: [
        // { element: <Navigate to="/admnDashboard/allqs" />, index: true },
        // { path: "allqs", element: <AllQuestions /> },
    ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
      element: <PageNotFound /> 
    },
  ]);

  return routes;
}