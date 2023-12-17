import Slider from "react-slick";
import { Button } from "antd";
import "./home.scss";
import VectorUnder from "../../assets/vectorUnderline.png";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import AnhMat from "../../assets/anhlammat.jpeg";
import BannerProduct from "../../assets/bannerProduct.png";
import BannerHome from "../../assets/bannerhome.jpg";
import ImageDa from "../../assets/anhbenhnhan.jpg";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import Banner from "../../components/customs/Banner";
import ContactFormIntro from "../../components/customs/ContactForm"
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const numberTest = [
    {
      title: "Chỉ số da mặt",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: () => <img src={ImageDa} />,
    },
    {
      title: "Chỉ số tim mạch",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: () => <img src={ImageDa} />,
    },
    {
      title: "Chỉ số huyết áp",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: () => <img src={ImageDa} />,
    },
    {
      title: "Tình trạng dạ dày",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: () => <img src={ImageDa} />,
    },
  ];
  const sicksList = [
    {
      title: "Bệnh Thận – Nội Tiết",
      content:
        "Viêm loét dạ dày, hành tá tràng, trào ngược dạ dày, Viêm đại tràng, đại tràng co thắt, Rối loạn tiêu hóa, Sa dạ dày, Trĩ nội, trĩ ngoại…",
      img: () => <img src={ImageDa} />,
    },
    {
      title: "Bệnh Thận – Nội Tiết",
      content:
        "Viêm loét dạ dày, hành tá tràng, trào ngược dạ dày, Viêm đại tràng, đại tràng co thắt, Rối loạn tiêu hóa, Sa dạ dày, Trĩ nội, trĩ ngoại…",
      img: () => <img src={ImageDa} />,
    },
    {
      title: "Bệnh Thận – Nội Tiết",
      content:
        "Viêm loét dạ dày, hành tá tràng, trào ngược dạ dày, Viêm đại tràng, đại tràng co thắt, Rối loạn tiêu hóa, Sa dạ dày, Trĩ nội, trĩ ngoại…",
      img: () => <img src={ImageDa} />,
    },
    {
      title: "Bệnh Thận – Nội Tiết",
      content:
        "Viêm loét dạ dày, hành tá tràng, trào ngược dạ dày, Viêm đại tràng, đại tràng co thắt, Rối loạn tiêu hóa, Sa dạ dày, Trĩ nội, trĩ ngoại…",
      img: () => <img src={ImageDa} />,
    },
  ];
  return (
    <div className="wrap_home">
      <Slider {...settings}>
        <div className="wrapbanner">
          <img src={BannerHome} alt="Ảnh banner trần hoàng hải" />
          <div className="content_banner_home">
            <h3>Bác sĩ Trần Hoàng Hải</h3>
            <h1>Nam Y Đường</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button>Liên hệ</Button>
          </div>
        </div>
        <div className="wrapbanner">
          <img src={BannerHome} alt="Ảnh banner trần hoàng hải" />
          <div className="content_banner_home">
            <h3>Bác sĩ Trần Hoàng Hải</h3>
            <h1>Nam Y Đường</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button>Liên hệ</Button>
          </div>
        </div>
      </Slider>
      <div className="chisoWrap">
        <div className="title_home">
          <p>Sức khoẻ của bạn</p>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
          <h3>KIỂM TRA CÁC CHỈ SỐ CỦA BẠN</h3>
        </div>
        <div className="list_chiso">
          <div className="row">
            {numberTest.map((i) => (
              <>
                <div className="col-3">
                  <div>
                    {i.img()}
                    <h5>{i.title}</h5>
                    <p>{i.content}</p>
                    <Button>Chi tiết</Button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="sickWrap">
        <div className="title_home">
          <p>Phương pháp đông y</p>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
          <h3>Quản lý dịch vụ chăm sóc sức khỏe của bạn</h3>
        </div>
        <div className="list_sick">
          <div className="row">
            {sicksList.map((t) => (
              <>
                <div className="col-3">
                  <div>
                    {t.img()}
                    <h5>{t.title}</h5>
                    <p>{t.content}</p>
                  </div>
                </div>
              </>
            ))}
          </div>

          <p style={{ textAlign: "center", margin: "25px 0" }}>
            <Button className="btn-fade">
              Xem Thêm{" "}
              <span>
                <HiMiniChevronDoubleRight />
              </span>
            </Button>
          </p>
        </div>
      </div>
      <div className="courseWrap_demo">
        <div className="title_home">
          <p>Liệu trình điều trị</p>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
          <h3>Khoá học gia liễu</h3>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="box_course">
              <div className="box_course_img">
                <img src={AnhMat} />
              </div>
              <div className="box_course_content">
                <h5>KHOÁ HỌC CHĂM SÓC DA CHĂM SÓC DACHĂM SÓC DACHĂM SÓC DA</h5>
                <p>Bác sĩ Hải</p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo. Exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo.
                </p>
                <Button onClick={() => navigate('/course/detail/1')}>Chi tiết</Button>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="box_wrapDetCour">
              <h1>Lorem Ipsum is simply dummy text of the printing</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for lorem ipsum
                will uncover many web sites still in their infancy.
              </p>
            </div>
            <div className="box_wrapDetCour_under row">
              <div className="bar_det_lecture col-6">
                <h4>bài học</h4>
                <div className="bar_det">
                  <div>
                    <div className="bar_det_border">
                      <h2>1</h2>
                    </div>
                    <h5>Bài học 1</h5>
                  </div>
                  <Button>Chi tiết</Button>
                </div>
                <div className="bar_det">
                  <div>
                    <div className="bar_det_border">
                      <h2>1</h2>
                    </div>
                    <h5>Bài học 2</h5>
                  </div>
                  <Button>Chi tiết</Button>
                </div>
                <div className="bar_det">
                  <div>
                    <div className="bar_det_border">
                      <h2>1</h2>
                    </div>
                    <h5>Bài học 3</h5>
                  </div>
                  <Button>Chi tiết</Button>
                </div>
                <div className="bar_det">
                  <div>
                    <div className="bar_det_border">
                      <h2>1</h2>
                    </div>
                    <h5>Bài học 4</h5>
                  </div>
                  <Button>Chi tiết</Button>
                </div>
                <div className="bar_det">
                  <div>
                    <div className="bar_det_border">
                      <h2>1</h2>
                    </div>
                    <h5>Bài học 5</h5>
                  </div>
                  <Button>Chi tiết</Button>
                </div>
              </div>
              <div className="bar_det_benefit col-6">
                <h4>Lợi ích mang lại</h4>
                <ul>
                  <li>
                    <IoCheckmarkDoneCircle color="#7F1416" size={16} />
                    <p>It is a long established fact that</p>
                  </li>
                  <li>
                    <IoCheckmarkDoneCircle color="#7F1416" size={16} />
                    <p>It is a long established fact that</p>
                  </li>
                  <li>
                    <IoCheckmarkDoneCircle color="#7F1416" size={16} />
                    <p>It is a long established fact that</p>
                  </li>
                  <li>
                    <IoCheckmarkDoneCircle color="#7F1416" size={16} />
                    <p>It is a long established fact that</p>
                  </li>
                  <li>
                    <IoCheckmarkDoneCircle color="#7F1416" size={16} />
                    <p>It is a long established fact that</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vids_wrap">
        <div className="row">
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay color="#fff" size={45} />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay color="#fff" size={45} />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="title_home">
              <h3>Hoạt động phòng khám của chúng tôi</h3>
              <div>
                <img
                  src={VectorUnder}
                  alt="vector under thh"
                  className="vectorUnder"
                />
              </div>
            </div>
            <p className="desc_title_home_vids">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="title_home">
            <h3>Kênh youtube của chúng tôi</h3>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay color="#fff" size={45} />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay color="#fff" size={45} />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay color="#fff" size={45} />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="title_home">
            <h3>Kênh tiktok của chúng tôi</h3>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay color="#fff" size={45} />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay color="#fff" size={45} />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay color="#fff" size={45} />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <div className="blog_wrap">
        <div className="title_home">
          <p>Blog New</p>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
          <h3>Tin tức mới nhất tại đây</h3>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="box_blog">
              <img src={BannerProduct} />
              <h4>
                Lorem ipsum dolor sit amet, cons Lorem ipsum dolor sit amet,
                cons cons cons
              </h4>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="box_blog">
              <img src={BannerProduct} />
              <h4>Lorem ipsum dolor sit amet, cons </h4>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div>
              <div className="box_blog_sm">
                <h4>Lorem ipsum dolor sit amet, cons </h4>
                <p>23 Jan 2022</p>
              </div>
              <div className="box_blog_sm">
                <h4>Lorem ipsum dolor sit amet, cons </h4>
                <p>23 Jan 2022</p>
              </div>
              <div className="box_blog_sm">
                <h4>Lorem ipsum dolor sit amet, cons </h4>
                <p>23 Jan 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFormIntro />
    </div>
  );
}
