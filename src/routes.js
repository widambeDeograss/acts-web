import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken } from './App/AuthSlice';
import { useRoutes, Navigate } from 'react-router-dom';
const Layout = React.lazy(() => import('./components/Layout'));
const Home = React.lazy(() => import('./Pages/Home'));
const MastersPrograms = React.lazy(() => import('./Pages/MastersPrograms'));
const PhdPrograms = React.lazy(() => import('./Pages/PhdPrograms'));
const EntryRequirements = React.lazy(() => import('./Pages/EntryRequirements'));
const ApplicationForm = React.lazy(() => import('./Pages/ApplicationForm'));
const PageNotFound = React.lazy(() => import('./Pages/PageNotFound'));
const AdminLayout = React.lazy(() => import('./components/adminComponents/AdminLayout'));
const AdminHomePage = React.lazy(() => import('./Pages/ADMINPAGES/Home'));
const CampusTour = React.lazy(() => import('./Pages/CompusTour'));
const CampusGallery = React.lazy(() => import('./Pages/CampusGallery'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs'));
const AboutUs = React.lazy(() => import('./Pages/AboutUs'));
const Blogs = React.lazy(() => import('./Pages/ADMINPAGES/Blog'));
const CreateBlog = React.lazy(() => import('./Pages/ADMINPAGES/CreateBlog'));
const Login = React.lazy(() => import('./Pages/ADMINPAGES/Login'));
const RequireAuth = React.lazy(() => import('./App/AdminRequireAuth'));
const SingleEvent = React.lazy(() => import('./Pages/SingleEvent'));
const AllEvents = React.lazy(() => import('./Pages/AllEvents'));
const Applications = React.lazy(() => import('./Pages/ADMINPAGES/Applications'));
const UserContacts = React.lazy(() => import('./Pages/ADMINPAGES/UserFeeds'));
const ChangePassword  = React.lazy(() => import('./Pages/ADMINPAGES/ChangePassword'));
const StaffPage = React.lazy(() => import('./Pages/StaffPage'));
const StaffAdminPage = React.lazy(() => import('./Pages/ADMINPAGES/StaffsPage'));
const CorsesAdminPage = React.lazy(() => import('./Pages/ADMINPAGES/Courses'));
const Administration = React.lazy(() => import('./Pages/ADMINPAGES/Administration'));
const FeeStracture = React.lazy(() => import('./Pages/ADMINPAGES/FeeStracture'));
const PhdFeeStructure = React.lazy(() => import('./Pages/ADMINPAGES/PhdFeeStructure'));
const Gallery = React.lazy(() => import('./Pages/ADMINPAGES/Gallery'));
const StaffEditPage = React.lazy(() => import('./Pages/ADMINPAGES/StaffEditPage'));

export default function Routeer() {
  const token = useSelector(selectCurrentToken);
  const RouterLazy = React.lazy(() => import('react-router-dom'));

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
        { path: "acts/our_staff", element: <StaffPage /> },
        { path: "acts/events/:id", element: <SingleEvent /> },
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
        token?
         <AdminLayout />
         : <Navigate to="/actsAdimin/login"  />
      ),
      children: [
        { element: <Navigate to="/acts/admin/AdminHome" />, index: true },
        { path: "AdminHome", element: <AdminHomePage /> },
        { path: "events", element: <Blogs /> },
        { path: "gallery", element: <Gallery /> },
        { path: "Applications", element: <Applications /> },
        { path: "contacts", element: <UserContacts /> },
        { path: "create_events", element: <CreateBlog /> },
        { path: "staff", element: < StaffAdminPage/> },
        { path: "staff/:id", element: < StaffEditPage/> },
        { path: "courses", element: <CorsesAdminPage /> },
        { path: "fee_structure", element: <FeeStracture /> },
        { path: "fee_structure/:id", element: <PhdFeeStructure /> },
        { path: "administration", element: <Administration /> },
        { path: "change_password", element: <ChangePassword /> },
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
