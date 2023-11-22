import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Shop from "./Shop";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "shop",
      element: (
        <>
          <Header />
          <Slideshow />
          <Shop />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
