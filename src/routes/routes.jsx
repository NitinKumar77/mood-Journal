import History from "../pages/History";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Statistics from "../pages/Statistics";

export const routes = [
  {
    path: "/",
    element: <Root />,
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
