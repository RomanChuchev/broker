import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Auth = lazy(() => import("../pages/Auth"));
const Person = lazy(() => import("../pages/Person"));

const routes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Auth />,
    path: "/auth",
  },
  {
    element: <Person />,
    path: "/person",
  },
];

export default routes;
