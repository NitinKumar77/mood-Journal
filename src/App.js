import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";
import Root from "./pages/Root";

const router = createBrowserRouter(routes);
function App() {
  return (
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  );
}
export default App;
