import "./Intro.scss";
import VectorUnder from "../../assets/vectorUnderline.png";
import BannerLife from "../../assets/anhbannerIntro.png";
import BannerIntro from "../../assets/bannerFade.png";
import VictimImg from "../../assets/anhbenhnhan.jpg";
import { FaCheck } from "react-icons/fa6";
import IntroImg from "../../assets/introImg.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ContactFormIntro from "../../components/customs/ContactForm"

export default function Intro() {
  return (
    <div className="wrapIntro">
      <div className="bannerIntro">
        <img src={BannerIntro}/>
        <div className="content_banner_intro">
            <h3>Bác sĩ Trần Hoàng Hải</h3>
            <h1>Nam Y Đường</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
      </div>
      </div>
      <div className="intro_contain">
        <div className="row">
          <div className="col-8">
            <h6>Giới thiệu bản thân</h6>
            <div className="introContent1">
              <div className="title_home">
                <h3>Lương Y như từ mẫu</h3>
                <div>
                  <img
                    src={VectorUnder}
                    alt="vector under thh"
                    className="vectorUnder"
                  />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
            <div className="introContent2">
              <div className="title_home">
                <h3>Kĩ năng nghề nghiệp</h3>
                <div>
                  <img
                    src={VectorUnder}
                    alt="vector under thh"
                    className="vectorUnder"
                  />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="listintroWrap d-flex flex-rows">
                <ul>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="upperAvatar">
              <div>
                <img src={IntroImg} />
                <h5>Trần Hoàng Hải</h5>
                <p>Bác sĩ Đông Y</p>

                <ul>
                  <li>
                    <FaFacebook size={16} />
                  </li>
                  <li>
                    <FaYoutube size={16} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="downAvatarInfo">
              <h4>Học vấn</h4>
              <ul>
                <li>
                  <h5>Bác sĩ Đông Y</h5>
                  <p>Đại Học Y Hà Nội (2009 - 2015)</p>
                </li>
                <li>
                  <h5>Quản lí bệnh viện</h5>
                  <p>Đại Học Y Hà Nội (2009 - 2015)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bannerLife">
        <div className="title_home">
          <h3>Cuộc đời và sự nghiệp</h3>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
        </div>
        <img src={BannerLife} />
      </div>
      <div className="respondVictim">
        <div className="title_home">
          <h3>Phản hồi của bệnh nhân</h3>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
        </div>
        <ul>
          <li>
            <div>
              <img src={VictimImg} />
              <h5>Nguyễn Văn Đạt</h5>
              <p>Bệnh nhân cột sống</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={VictimImg} />
              <h5>Nguyễn Văn Đạt</h5>
              <p>Bệnh nhân cột sống</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={VictimImg} />
              <h5>Nguyễn Văn Đạt</h5>
              <p>Bệnh nhân cột sống</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src={VictimImg} />
              <h5>Nguyễn Văn Đạt</h5>
              <p>Bệnh nhân cột sống</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <ContactFormIntro />
    </div>
  );
}
