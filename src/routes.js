// import { Navigate, useRoutes } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import Layout from "../components/Layout";
// import About from "../pages/About";
// import Programs from "../pages/Programs";
// import Home from "../pages/Home";
// import Leaders from "../pages/Leaders";
// import Gallery from "../pages/Gallery";
// import ContactUs from "../pages/contactUs";

// import PageNotFound from "../pages/pageNotFound";
// // import 

// export default function Routeer() {
//   <Router></Router>;
//   const routes = useRoutes([
//     {
//       path: "/",
//       element: (
//         <>
//           <Layout />
//         </>
//       ),
//       children: [
//         { element: <Navigate to="/acts" />, index: true },
//         { path: "acts", element: <Home /> },
//         { path: "aboutUs", element: <About /> },
//         { path: "programs", element: <Programs /> },
//         { path: "management", element: <Leaders /> },
//         { path: "gallery", element: <Gallery /> },
//         { path: "contact", element: <ContactUs /> },

//       ],
//     },
//     {
//       path: "/adminCompose",
//       // element: <AdminLayout />,
//       children: [
//         // { element: <Navigate to="/admnDashboard/allqs" />, index: true },
//         // { path: "allqs", element: <AllQuestions /> },
//     ],
//     },
//     {
//       path: "*",
//       element: <Navigate to="/404" replace />,
//       element: <PageNotFound /> 
//     },
//   ]);

//   return routes;
// }