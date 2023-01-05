import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import s from "./MainLauout.module.scss";

const MainLauout = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLauout;
