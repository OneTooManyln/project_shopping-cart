import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "../App";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
