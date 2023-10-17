import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/shared/Layout";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";

const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <Layout>
        <Home />
        <Link to="/about">About Us</Link>
      </Layout>
    )
  },

  {
    path: "/about",
    element: (<Cart />),
  },
  
  { 
    path: "*",
    element: (<div>Not Found</div>), 
  },
    
]);

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);