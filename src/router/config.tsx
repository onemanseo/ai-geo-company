import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import HomeLight from "../pages/home-light/page";
import OldHome from "../pages/old/page";
import NewHome from "../pages/new/page";
import NewTwoHome from "../pages/new2/page";
import NewThreeHome from "../pages/new3/page";
import NewFourHome from "../pages/new4/page";
import NewFourPrivacyPage from "../pages/new4/privacy";
import NewFourTermsPage from "../pages/new4/terms";
import NewFourCookiesPage from "../pages/new4/cookies";
import NewFourAboutPage from "../pages/new4/about";
import NewFourContactPage from "../pages/new4/contact";
import NewFourGeoPage from "../pages/new4/geo";
import NewFourDataLayerPage from "../pages/new4/data-layer";
import NewFourContentEnginePage from "../pages/new4/content-engine";
import NewFourCroPage from "../pages/new4/cro";
import NewFourLeadScoringPage from "../pages/new4/lead-scoring";
import NewFourWhitepaperPage from "../pages/new4/whitepaper";
import NewFourAuditPage from "../pages/new4/audit";

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
    path: "/new4",
    element: <NewFourHome />,
  },
  {
    path: "/new4/privacy",
    element: <NewFourPrivacyPage />,
  },
  {
    path: "/new4/terms",
    element: <NewFourTermsPage />,
  },
  {
    path: "/new4/cookies",
    element: <NewFourCookiesPage />,
  },
  {
    path: "/new4/about",
    element: <NewFourAboutPage />,
  },
  {
    path: "/new4/contact",
    element: <NewFourContactPage />,
  },
  {
    path: "/new4/geo",
    element: <NewFourGeoPage />,
  },
  {
    path: "/new4/data-layer",
    element: <NewFourDataLayerPage />,
  },
  {
    path: "/new4/content-engine",
    element: <NewFourContentEnginePage />,
  },
  {
    path: "/new4/cro",
    element: <NewFourCroPage />,
  },
  {
    path: "/new4/lead-scoring",
    element: <NewFourLeadScoringPage />,
  },
  {
    path: "/new4/whitepaper",
    element: <NewFourWhitepaperPage />,
  },
  {
    path: "/new4/audit",
    element: <NewFourAuditPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
