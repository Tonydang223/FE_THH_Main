import "./Intro.scss";
import VectorUnder from "../../assets/vectorUnderline.png";
import BannerLife from "../../assets/anhbannerIntro.png";
import BannerIntro from "../../assets/bannerFade.png";
import VictimImg from "../../assets/anhbenhnhan.jpg";
import { FaCheck } from "react-icons/fa6";
import IntroImg from "../../assets/introImg.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ContactFormIntro from "../../components/customs/ContactForm";

export default function Intro() {
  return (
    <div className="wrapIntro">
      <div className="bannerIntro">
        <img src={BannerIntro} />
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
                “Tôi muốn đem Đông y vào cuộc sống để giúp mọi người bớt khổ” Đó
                là sứ mệnh Bác sĩ Hải muốn đem tới cho đời. Được truyền cảm hứng
                từ thiền sư Thích Nhất Hạnh, Bác sĩ Hải cũng muốn những bài
                thuốc Đông y của mình có thể giúp mọi người vui cười, khỏe mạnh.
                Bởi tình yêu dành cho Đông y và mong muốn cứu người, cứu đời,
                Bác sĩ Hải đã không ngừng nỗ lực tu bổ “tài - tâm - tốt” cho
                mình. Sau khi học tại Việt Nam, bác sĩ Hải tiếp tục theo học tại
                Trung Quốc và tốt nghiệp Đại học Trung y dược Thiện n với học vị
                Tiến sĩ, trang bị trong mình đủ hiểu biết và kinh nghiệm để thực
                hiện ước mơ cứu người. Năng lực ấy được chứng minh qua 20 năm
                làm nghề, bác sĩ đã giúp được hàng ngàn người từ đau nhức, hết
                hy vọng với bệnh tật tới hồi phục và vui sống khỏe mạnh. Cụ thể
                hơn, có trường hợp chị bệnh nhân thai yếu, cứ 2 tháng lại sảy,
                được bác sĩ cứu chữa, giờ đứa bé đã lớn và đi học đại học. Đó là
                câu chuyện cứu người từ hồi bác sĩ mới về nước làm nghề, tới giờ
                vẫn được bệnh nhân hàm ơn. “Lương y như từ mẫu”, một khi đã chọn
                theo nghề là phải kính nghề. Đó chính là triết lý mà bác sĩ Hải
                luôn noi theo khi hành nghề. Không đơn giản là chữa trị trực
                tiếp, bác sĩ còn muốn lan truyền các mẹo dân gian, cách chữa
                bệnh bằng phương pháp Đông y, giúp những người ở xa không tới
                thăm khám được, có thể tự chữa trị tại nhà. Đó cái tâm của Bác
                sĩ khi giúp mọi người có thể trở thành thầy thuốc của chính mình
                và gia đình mình. Bác sĩ Hải lấy tâm làm nền móng, với trái tim
                và sự nhiệt thành không ngừng đem Đông y vào cuộc sống để cứu
                người, giúp người. Tính đến nay đã gần 20 năm, có cả những giọt
                nước mắt của sự khó khăn, cả tiếng cười của người bệnh khi được
                chữa khỏi. Bác sĩ Hải và phòng khám Nam y đường của mình đã xây
                dựng được một niềm tin yêu trong lòng người bệnh. Trong chặng
                đường tiếp theo, bác sĩ Hải cùng đội ngũ vẫn sẽ lấy tâm sáng làm
                kim chỉ nam, và dùng kiến thức chuyên môn, kinh nghiệm của mình
                để tiếp tục chữa bệnh, mong đem tới sức khỏe cho nhiều người hơn
                nữa.
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
      <ContactFormIntro id="2"/>
    </div>
  );
}
