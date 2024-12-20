import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Aboute from "./Pages/Aboute/Aboute";
import { Profile } from "./Pages/Profile/Profile";
import Contact from "./Pages/Contact/Contact";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, 
        { path: "about", element: <Aboute /> },
        { path: "portfolio", element: <Profile /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
