import { Link } from "react-router-dom";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";

export default function App() {
  return (
    <>
      <Header />
      <Slideshow />
      <Link to="home">HOME</Link>
    </>
  );
}
