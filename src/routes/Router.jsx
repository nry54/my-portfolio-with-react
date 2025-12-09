import { useRoutes, Navigate } from "react-router";
import Home from "../views/Home";
import About from "../views/About";
import Resume from "../views/Resume";
import Portfolio from "../views/Portfolio";
import Services from "../views/Services";
import Contact from "../views/Contact";
import WebSites from "../views/WebSites";
import UIService from "../views/UIService";
import ConsultingService from "../views/ConsultingService";
import Modernisation from "../views/Modernisation";
import AIService from "../views/AIService";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/resume", element: <Resume /> },
    { path: "/portfolio", element: <Portfolio /> },
    {
      path: "/services",
      element: <Services />,
      children: [
        { index: true, element: <Navigate to="web-sites" /> },
        {
          path: "web-sites",
          element: <WebSites />,
        },
        {
          path: "ui-ux-design",
          element: <UIService />,
        },
        {
          path: "consulting",
          element: <ConsultingService />,
        },
        {
          path: "modernisation",
          element: <Modernisation />,
        },
        {
          path: "ai-solutions",
          element: <AIService />,
        },
      ],
    },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Navigate to="/" /> },
  ]);
  return routes;
};

export default Router;
