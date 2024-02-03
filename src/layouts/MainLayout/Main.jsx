import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./MainLayout.scss";
import IcZalo from "../../assets/ic-zalo-out.png";
import IcMess from "../../assets/ic-mess-out.png";

export default function Main() {
  return (
    <div className="wrapMain">
      <Header />
      <Outlet />
      <Footer />
      <div className="ics-highlight">
        <p>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src={IcZalo} width={50} height={50} />
          </a>
        </p>
        <p>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src={IcMess} width={50} height={50} />
          </a>
        </p>
      </div>
    </div>
  );
}
