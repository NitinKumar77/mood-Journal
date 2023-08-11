import History from "../pages/History";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Statistics from "../pages/Statistics";
import { tokenLoader } from "../util/Auth";

export const routes = [
  {
    path: "/",
    element: <Root />,
    loader: tokenLoader,
    children: [
      {
        element: <Home />,
        index: true,
      },

      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
];
