import Foot1Logo from "../../assets/foot_p1_logo.png";
import Icon8Fb from "../../assets/icons8-facebook-96.png";
import Icon8Zl from "../../assets/icons8-zalo-96.png";
import { IoTimeOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


export default function Footer() {
  return (
    <footer>
      <div className="wrapInside_foot">
        <div className="foot_p1 d-flex justify-content-between flex-row">
          <div className="foot_p1_logo">
            <img
              src={Foot1Logo}
              alt="Logo Footer Tran Hoang Hai"
              width={85}
              height={125}
            />
          </div>
          <div className="foot_p1_logo_social d-flex flex-row align-items-end">
            <img
              src={Icon8Zl}
              alt="Logo Zalo Tran Hoang Hai"
              className="w-f_p1_loSo"
            />
            <img
              src={Icon8Fb}
              alt="Logo Fb Tran Hoang Hai"
              className="w-f_p1_loSo"
            />
          </div>
        </div>

        <div className="foot_p2">
          <div className="row">
            <div className="col-3">
              <h3>NAM Y ĐƯỜNG</h3>
              <ul>
                <li>
                  <span>
                    <IoTimeOutline />
                  </span>
                  Thứ 2 - Thứ 7 | 08:00 - 17:00
                </li>
                <li>
                  <span>
                    <SlPhone />
                  </span>
                  0908789789
                </li>
                <li>
                  <span>
                    <CiMail />
                  </span>
                  tstranhoanghai.pmkt@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>Cơ Sở</h3>
              <ul>
                <li>
                  <p>Trụ sở chính</p>
                  <p>
                    <span>
                      <CiLocationOn />
                    </span>
                    31 Lê Hy Cát, phường Khuê Mỹ, quận Ngũ Hành Sơn, Tp. Đà Nẵng
                  </p>
                </li>
                <li>
                  <p>Trụ sở phụ</p>
                  <p>
                    <span>
                      <CiLocationOn />
                    </span>
                    31 Lê Hy Cát, phường Khuê Mỹ, quận Ngũ Hành Sơn, Tp. Đà Nẵng
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>Bản đồ</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.946381254835!2d105.7957639593816!3d21.02281475934978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab394353b821%3A0x47c950bb0f081a1c!2zQuG6o28gdMOgbmcgRMOibiB04buZYyBo4buNYyBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1701770792808!5m2!1svi!2s"
                height="165"
                width={"100%"}
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-3">
              <h3>Facebook</h3>
              <a>
                <img
                  height={"165px"}
                  src="https://res.cloudinary.com/hdprivatecloud/image/upload/v1701662596/course/1-Interesting-Facts-about-Big-Ben-04_800x534_dqod3z.jpg"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="foot_p3 d-flex flex-row align-items-start justify-content-between">
          <p>Copyright ©2024 All rights reserved.</p>
          <p>
            This template is made with <span><FaHeart/></span> by{" "}
            <span>TranHoangHai.com</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
