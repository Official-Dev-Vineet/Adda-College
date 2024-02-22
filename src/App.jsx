import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
const RootLayout = lazy(() => import("./Helper/RootLayout.jsx"));
const Error = lazy(() => import("./Helper/Error.jsx"));
const PageNotFound = lazy(() => import("./Helper/PagenotFound.jsx"));
const Home = lazy(() => import("./Components/Home.jsx"));
export const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index exact element={<Home />} />
        <Route path="/about-us" element={<>About us</>} />
        <Route path="/services" element={<>Services</>} />
        <Route path="/connect" element={<>Connect</>} />
        <Route path="/contact-us" element={<>Contact us</>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <Suspense fallback={<div className="line"></div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
