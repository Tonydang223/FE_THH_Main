import Slider from "react-slick";
import { Button, Skeleton } from "antd";
import "./home.scss";
import VectorUnder from "../../assets/vectorUnderline.png";
// import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import BannerProduct from "../../assets/bannerProduct.png";
import BannerHome from "../../assets/bannerhome.jpg";
import ImageSpace from "../../assets/phongkham1.jpg";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import Banner from "../../components/customs/Banner";
import ContactFormIntro from "../../components/customs/ContactForm";
import { useNavigate } from "react-router-dom";
import { showGlobal } from "../../components/Modals/ModalFirm";
import { TikTokEmbed } from "react-social-media-embed";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useGetLecturesOfCourseQuery } from "../Courses/course.service";
import moment from "moment";
import { numberTest, sicksData } from "../../untils/dataOut";

export default function Home() {
  const navigate = useNavigate();
  const { posts, courses } = useSelector((state) => state);

  const lectureOfCourse = useGetLecturesOfCourseQuery(courses.courses[0]?._id, {
    skip: !courses.courses[0]?._id,
  });

  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const showModalVid = (data) => {
    showGlobal({
      body: (
        <div style={{ margin: "40px" }}>
          {data?.kind === "tiktok" ? (
            <TikTokEmbed url={data.url} width={"100%"} muted={false} />
          ) : (
            <ReactPlayer url={data.url} width="100%" controls />
          )}
        </div>
      ),
      footer: [],
      width: 1000,
      title: data.title,
    });
  };
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
                <a
                  className="col-3"
                  href={i.src}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <img src={i.img} />
                    <h5>{i.title}</h5>
                    <p>{i.content}</p>
                    <Button>Chi tiết</Button>
                  </div>
                </a>
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
            {sicksData.map((t) => (
              <>
                <a
                  style={{ cursor: "pointer" }}
                  className="col-4"
                  key={t._id}
                  href={t.src}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <img src={t.img} />
                    <h5>{t.title}</h5>
                    <p>{t.content}</p>
                  </div>
                </a>
              </>
            ))}
          </div>

          {/* <p style={{ textAlign: "center", margin: "25px 0" }}>
            <Button className="btn-fade" onClick={() => navigate("/blog/list")}>
              Xem Thêm
              <span>
                <HiMiniChevronDoubleRight />
              </span>
            </Button>
          </p> */}
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
          <h3>Khoá học da liễu</h3>
        </div>
        <div className="row">
          <div className="col-4">
            {courses.activeLoading ? (
              <Skeleton />
            ) : (
              <div className="box_course">
                <div className="box_course_img">
                  <img src={courses.courses[0]?.thumbnail.url} />
                </div>
                <div className="box_course_content">
                  <h5>{courses.courses[0]?.title}</h5>
                  <p>{courses.courses[0]?.instructor_by}</p>
                  <p>{courses.courses[0]?.short_des}</p>
                  <Button
                    onClick={() =>
                      navigate(`/course/detail/${courses.courses[0]?._id}`)
                    }
                  >
                    Chi tiết
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="col-8">
            {lectureOfCourse.isFetching ? (
              <Skeleton />
            ) : (
              <>
                <div className="box_wrapDetCour">
                  <h1>Lorem Ipsum is simply dummy text of the printing</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using Content here, content here, making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for lorem ipsum will uncover many web
                    sites still in their infancy.
                  </p>
                </div>
                <div className="box_wrapDetCour_under row">
                  <div className="bar_det_lecture col-6">
                    <h4>bài học</h4>
                    {lectureOfCourse.data?.length > 0 ? (
                      <>
                        {lectureOfCourse.data?.map((i, index) => (
                          <div className="bar_det" key={i._id}>
                            <div>
                              <div className="bar_det_border">
                                <h2>{index + 1}</h2>
                              </div>
                              <h5>{i.title}</h5>
                            </div>
                            <Button
                              onClick={() =>
                                navigate(
                                  `/course/detail/${courses.courses[0]?._id}`
                                )
                              }
                            >
                              Chi tiết
                            </Button>
                          </div>
                        ))}
                      </>
                    ) : (
                      <p>Chưa có khoá học nào</p>
                    )}
                  </div>
                  <div className="bar_det_benefit col-6">
                    <h4>Lợi ích mang lại khi học tại đây</h4>
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
              </>
            )}
          </div>
        </div>
      </div>
      <Banner />
      <div className="vids_wrap">
        <div className="row">
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay
                  color="#fff"
                  size={45}
                  onClick={() =>
                    showModalVid({
                      url: "https://www.youtube.com/watch?v=UJSw8hAI4Ys",
                      title: "Video Youtube",
                    })
                  }
                />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay
                  color="#fff"
                  size={45}
                  onClick={() =>
                    showModalVid({
                      url: "https://www.youtube.com/watch?v=l_7JJ4WpPeU",
                      title: "Video Youtube",
                    })
                  }
                />
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
        <div className="wrap_imgsSpace">
          <div className="row">
            <div className="col-3">
              <img src={ImageSpace} />
            </div>
            <div className="col-3">
              <img src={ImageSpace} />
            </div>
            <div className="col-3">
              <img src={ImageSpace} />
            </div>
            <div className="col-3">
              <img src={ImageSpace} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img src={ImageSpace} />
            </div>
            <div className="col-6">
              <img src={ImageSpace} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="title_home">
            <h3>Kênh youtube của chúng tôi</h3>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay
                  color="#fff"
                  size={45}
                  onClick={() =>
                    showModalVid({
                      url: "https://www.youtube.com/watch?v=SYLv5OM5kcg",
                      title: "Video Youtube",
                    })
                  }
                />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay
                  color="#fff"
                  size={45}
                  onClick={() =>
                    showModalVid({
                      url: "https://www.youtube.com/watch?v=UJSw8hAI4Ys",
                      title: "Video Youtube",
                    })
                  }
                />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay
                  color="#fff"
                  size={45}
                  onClick={() =>
                    showModalVid({
                      url: "https://www.youtube.com/watch?v=l_7JJ4WpPeU",
                      title: "Video Youtube",
                    })
                  }
                />
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
                <FaCirclePlay
                  color="#fff"
                  size={45}
                  onClick={() =>
                    showModalVid({
                      url: "https://www.tiktok.com/@bs.tranhoanghai/video/7256683839639129345",
                      title: "Video Tiktok",
                      kind: "tiktok",
                    })
                  }
                />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay
                  color="#fff"
                  size={45}
                  onClick={() =>
                    showModalVid({
                      url: "https://www.tiktok.com/@bs.tranhoanghai/video/7207330070128495873",
                      title: "Video Tiktok",
                      kind: "tiktok",
                    })
                  }
                />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
          <div className="col-4">
            <div className="vid">
              <div className="vid_content">
                <FaCirclePlay
                  color="#fff"
                  size={45}
                  onClick={() =>
                    showModalVid({
                      url: "https://www.tiktok.com/@bs.tranhoanghai/video/7199840736706039041",
                      title: "Video Tiktok",
                      kind: "tiktok",
                    })
                  }
                />
              </div>
              <img src={BannerProduct} />
            </div>
          </div>
        </div>
      </div>
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
          {posts?.posts.slice(0, 2).map((i) => (
            <div
              className="col-4"
              key={i._id}
              onClick={() => navigate(`/blog/detail/${i._id}`)}
            >
              <div className="box_blog">
                <img src={i.thumbnail.url} />
                <h4>{i.title}</h4>
                <p>{i.short_des}</p>
              </div>
            </div>
          ))}
          <div className="col-4">
            <div>
              {posts?.posts.slice(0, 3).map((i) => (
                <div
                  className="box_blog_sm"
                  key={i._id}
                  onClick={() => navigate(`/blog/detail/${i._id}`)}
                >
                  <h4>{i.title} </h4>
                  <p>{moment(i.createdAt).format("ll")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactFormIntro id="1" />
    </div>
  );
}
