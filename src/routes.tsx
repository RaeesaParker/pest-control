import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Homepage } from "./pages/Homepage";

export const webRoutes = [
  { path: "/", element: ( <Homepage /> ) }, 
  { path: "/about", element: ( <AboutPage />) }, 
  { path: "/contact", element: ( <ContactPage /> ) },
];