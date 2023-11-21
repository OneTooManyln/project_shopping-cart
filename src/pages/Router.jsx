import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Home from "./Home";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "home",
      element: (
        <>
          <Header />
          <Slideshow />
          <Home />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
