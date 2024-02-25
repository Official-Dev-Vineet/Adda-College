import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./Utils/Loader.jsx";
const RootLayout = lazy(() => import("./Helper/RootLayout.jsx"));
const Error = lazy(() => import("./Helper/Error.jsx"));
const PageNotFound = lazy(() => import("./Helper/PagenotFound.jsx"));
const Home = lazy(() => import("./Components/Home.jsx"));
const About = lazy(() => import("./Components/About.jsx"));
const Login = lazy(() => import("./Auth/Login.jsx"));
const Register = lazy(() => import("./Auth/Register.jsx"));
const College = lazy(() => import("./College/College.jsx"));
const AllCollege = lazy(() => import("./College/AllCollege.jsx"));
export const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/college" element={<AllCollege />}>
          <Route path=":id" element={<College />} />
        </Route>
        <Route path="/contact-us" element={<>Contact us</>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
