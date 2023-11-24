import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Slideshow />
      <Outlet />
      <Footer />
    </>
  );
}
