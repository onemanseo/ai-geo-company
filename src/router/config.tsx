import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import HomeLight from "../pages/home-light/page";
import OldHome from "../pages/old/page";
import NewHome from "../pages/new/page";
import NewTwoHome from "../pages/new2/page";
import NewThreeHome from "../pages/new3/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/light",
    element: <HomeLight />,
  },
  {
    path: "/old",
    element: <OldHome />,
  },
  {
    path: "/new",
    element: <NewHome />,
  },
  {
    path: "/new2",
    element: <NewTwoHome />,
  },
  {
    path: "/new3",
    element: <NewThreeHome />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
