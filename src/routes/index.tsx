import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Auth = lazy(() => import("../pages/Auth"));
const Person = lazy(() => import("../pages/Person"));

const routes = [
  {
    name: "home",
    element: <Home />,
    path: "/",
  },
  {
    name: "auth",
    element: <Auth />,
    path: "/auth",
  },
  {
    name: "person",
    element: <Person />,
    path: "/person",
  },
];

export default routes;
