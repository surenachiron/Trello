import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "@/pages/Home";
import Auth from "@/pages/Auth";
import Protected from "./Protected";
import { isAuthenticated } from "./Helpers";
import Layout from "@/components/layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<Protected />}>
        <Route index element={<Home />} />
      </Route>
      <Route
        path="/login"
        loader={async () => await isAuthenticated()}
        element={<Auth />}
      />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>,
  ),
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
