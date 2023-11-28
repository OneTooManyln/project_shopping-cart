import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UseAPI from "../components/UseAPI";
import App from "../App";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";

export default function Router() {
  const { APIData, error, loading } = UseAPI();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home APIData={APIData} error={error} loading={loading} />,
        },
        {
          path: "shop",
          element: <Shop APIData={APIData} error={error} loading={loading} />,
        },
        { path: "cart", element: <Cart error={error} loading={loading} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
