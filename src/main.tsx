import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/shared/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </Layout>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);