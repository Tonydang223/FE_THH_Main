import Banner from "../../components/customs/Banner";
import "./Course.scss";
import AnhMat from "../../assets/anhlammat.jpeg";
import { Button } from "antd";
import VectorUnder from "../../assets/vectorUnderline.png";
import SupportImg from "../../assets/support234.png";
import PhongKhamO from "../../assets/phongkham1.jpg";
import PhongKhamT from "../../assets/phongkham2.jpg";
import PhongKhamTh from "../../assets/phongkham3.jpg";
import BannerWhy from "../../assets/anhbaner234.png";
import StoryImg from "../../assets/stories.jpg";
import AnhBenhNhan from "../../assets/anhbenhnhan.jpg";
import Slider from "react-slick";
import { showGlobal } from "../../components/Modals/ModalFirm";
import { FaCheck } from "react-icons/fa6";
import IntroImg from "../../assets/introImg.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ContactFormIntro from "../../components/customs/ContactForm"

export default function MainCourse() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settingSlide2 = {
    dots: true,
    infinite: true,
    speed: 700,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const dataImgsSlide = [
    {
      child: () => <img src={AnhBenhNhan} />,
    },
    {
      child: () => <img src={AnhBenhNhan} />,
    },
    {
      child: () => <img src={AnhBenhNhan} />,
    },
    {
      child: () => <img src={AnhBenhNhan} />,
    },
    {
      child: () => <img src={AnhBenhNhan} />,
    },
    {
      child: () => <img src={AnhBenhNhan} />,
    },
  ];
  const clickEverySlide = (index) => {
    setTimeout(() => {
      showGlobal({
        body: (
          <div style={{ margin: "40px" }}>
            <Slider
              settings={{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
              }}
            >
              {dataImgsSlide.map((img, index) => {
                return (
                  <>
                    <div key={index}>
                      <p>{img.text}</p>
                      {img.child()}
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        ),
        footer: [],
        width: 1000,
        title: "Hình ảnh cơ sở vật chất",
      });
    }, 400);
  };
  return (
    <div className="wrapMainCourse">
      <Banner />
      <div className="mainCourse1">
        <div className="title_home">
          <h3>Khoá học da liễu</h3>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="box_course">
              <div className="box_course_img">
                <img src={AnhMat} />
              </div>
              <div className="box_course_content">
                <h5>KHOÁ HỌC CHĂM SÓC DA</h5>
                <p>Bác sĩ Hải</p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo. Exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo.
                </p>
                <Button>Chi tiết</Button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="box_course">
              <div className="box_course_img">
                <img src={AnhMat} />
              </div>
              <div className="box_course_content">
                <h5>KHOÁ HỌC CHĂM SÓC DA</h5>
                <p>Bác sĩ Hải</p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo. Exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo.
                </p>
                <Button>Chi tiết</Button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="box_course">
              <div className="box_course_img">
                <img src={AnhMat} />
              </div>
              <div className="box_course_content">
                <h5>KHOÁ HỌC CHĂM SÓC DA</h5>
                <p>Bác sĩ Hải</p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo. Exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo.
                </p>
                <Button>Chi tiết</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainCourse2">
        <img src={BannerWhy} />
        <div className="mainCourse2_wrapContent">
          <div className="title_home">
            <h3>Tại sao nên chọn khoá học</h3>
          </div>
          <div className="row">
            <div className="col-4">
              <div>
                <img src={SupportImg} />
                <h5>Chứng chỉ đại học y</h5>
                <p>Đào tạo hành nghề sau khoá học</p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <img src={SupportImg} />
                <h5>Chứng chỉ đại học y</h5>
                <p>Đào tạo hành nghề sau khoá học</p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <img src={SupportImg} />
                <h5>Chứng chỉ đại học y</h5>
                <p>Đào tạo hành nghề sau khoá học</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div>
                <img src={SupportImg} />
                <h5>Chứng chỉ đại học y</h5>
                <p>Đào tạo hành nghề sau khoá học</p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <img src={SupportImg} />
                <h5>Chứng chỉ đại học y</h5>
                <p>Đào tạo hành nghề sau khoá học</p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <img src={SupportImg} />
                <h5>Chứng chỉ đại học y</h5>
                <p>Đào tạo hành nghề sau khoá học</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainCourse3">
        <div className="title_home">
          <h3>Cơ sở vật chất và hình ảnh hoạt động</h3>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
        </div>
        <div className="mainCourse3_slide">
          <Slider {...settings}>
            {dataImgsSlide.map((da, index) => (
              <>
                <div
                  key={index}
                  onClick={() => clickEverySlide(index)}
                  className="slide-i"
                >
                  {da.child()}
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mainCourse4">
        <div className="intro_contain">
          <div className="row">
            <div className="col-8">
              <h6>BAN GIẢNG HUẤN Và CỐ VẤN CHUYÊN MÔN</h6>
              <div className="introContent1">
                <div className="title_home">
                  <h3>TRƯỞNG BAN GIẢNG HUẤN ,TRƯỞNG Y KHOA</h3>
                  <div>
                    <img
                      src={VectorUnder}
                      alt="vector under thh"
                      className="vectorUnder"
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                </p>
              </div>
              <div className="introContent2">
                <div className="title_home">
                  <h3>TRÌNH ĐỘ CHUYÊN MÔN</h3>
                  <div>
                    <img
                      src={VectorUnder}
                      alt="vector under thh"
                      className="vectorUnder"
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
                <h4>Chuyên môn</h4>
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
      </div>
      <div className="mainCourse5">
        <div className="title_home">
          <h3>Câu chuyện khách hàng</h3>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
        </div>
        <Slider {...settingSlide2}>
          <div className="mainCourse5_content">
            <div className="row">
              <div className="col-4">
                <img src={StoryImg} />
              </div>
              <div className="col-8">
                <h6>Câu chuyện của chúng tôi</h6>
                <ul>
                  <li>
                    Phân loại sai tình trạng da, nhận biết sai type da dẫn đến
                    phương pháp chăm sóc và trẻ hóa sai.
                  </li>
                  <li>Nhận định tình trạng da hiện tại không đúng.</li>
                  <li>Thứ tự dùng các sản phẩm và phương pháp không đúng.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mainCourse5_content">
            <div className="row">
              <div className="col-4">
                <img src={StoryImg} />
              </div>
              <div className="col-8">
                <h6>Câu chuyện của chúng tôi</h6>
                <ul>
                  <li>
                    Phân loại sai tình trạng da, nhận biết sai type da dẫn đến
                    phương pháp chăm sóc và trẻ hóa sai.
                  </li>
                  <li>Nhận định tình trạng da hiện tại không đúng.</li>
                  <li>Thứ tự dùng các sản phẩm và phương pháp không đúng.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mainCourse5_content">
            <div className="row">
              <div className="col-4">
                <img src={StoryImg} />
              </div>
              <div className="col-8">
                <h6>Câu chuyện của chúng tôi</h6>
                <ul>
                  <li>
                    Phân loại sai tình trạng da, nhận biết sai type da dẫn đến
                    phương pháp chăm sóc và trẻ hóa sai.
                  </li>
                  <li>Nhận định tình trạng da hiện tại không đúng.</li>
                  <li>Thứ tự dùng các sản phẩm và phương pháp không đúng.</li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="mainCourse6">
        <div className="title_home">
          <h3>HÌNH ẢNH TẠI PHÒNG KHÁM</h3>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
        </div>
        <div className="mainCourse6_content">
          <div className="row">
            <div className="col-4">
              <img src={PhongKhamO} />
            </div>
            <div className="col-8">
              <img src={PhongKhamT} />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img src={PhongKhamTh} />
            </div>
            <div className="col-4">
              <img src={PhongKhamO} />
            </div>
            <div className="col-4">
              <img src={PhongKhamTh} />
            </div>
          </div>
        </div>
      </div>
      <ContactFormIntro />
    </div>
  );
}
