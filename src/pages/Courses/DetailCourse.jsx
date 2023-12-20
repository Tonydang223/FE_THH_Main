import { useState } from "react";
import { IoTimeSharp } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import "./Course.scss";
import { Button, Skeleton } from "antd";
import VectorUnder from "../../assets/vectorUnderline.png";
import parse from "html-react-parser";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { closeGlobal, showGlobal } from "../../components/Modals/ModalFirm";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetLecturesOfCourseQuery,
  useGetOneCourseQuery,
} from "./course.service";
import moment from "moment";

export default function DetailCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching, isError } = useGetOneCourseQuery(id, {
    skip: !id,
  });

  const lectureOfCourse = useGetLecturesOfCourseQuery(id, {
    skip: !id,
  });



  if (id && isError) {
    navigate("/404");
  }
  const [activeLectures, setActiveLectures] = useState({});

  return (
    <div className="wrapCourseDetail">
      {isFetching || lectureOfCourse.isFetching ? (
        <Skeleton style={{margin: '5rem'}}/>
      ) : (
        <>
          <div className="boxTop row">
            <div className="col-6">
              <h1>{data.name}</h1>
              <div className="boxTop_c1">
                <p>Mới nhất</p>
                <p>{data.level}</p>
              </div>

              <p>
                <span>Giảng viên</span>: &nbsp;
                <span
                  style={{
                    textTransform: "capitalize",
                    textDecoration: "none",
                  }}
                >{`${data.instructor_by}`}</span>
              </p>
              <div className="boxTop_c2">
                <span>
                  <IoTimeSharp /> {moment(data.createdAt).format("LL")}
                </span>
                <span>
                  <IoIosDocument /> {`${lectureOfCourse.data.length} Bài học`}
                </span>
                <span>
                  <FaVideo />
                  {`${
                    lectureOfCourse.data.filter((i) => i.videoIntro).length
                  } Video`}
                </span>
              </div>
              <Button>Liên hệ</Button>
            </div>
            <div className="col-6">
              <img src={data.thumbnail.url} />
            </div>
          </div>
          <div className="boxUnder2">
            <div className="title_home">
              <h3>Nội dung bài học</h3>
              <div>
                <img
                  src={VectorUnder}
                  alt="vector under thh"
                  className="vectorUnder"
                />
              </div>
            </div>
            {lectureOfCourse.data.length > 0 ? (
              <div className="contentSection">
                <div className="contentSection_note">
                  <p>{`${lectureOfCourse.data.length} Bài học, ${
                    lectureOfCourse.data.filter((i) => i.videoIntro).length
                  } Video`}</p>
                </div>
                <ul>
                  {lectureOfCourse.data.map((i, index) => (
                    <>
                      <li>
                        <div
                          className="topAcordition"
                          onClick={() => {
                            if (activeLectures?.[`lecture${index}`]) {
                              let newKeys = { ...activeLectures };
                              delete newKeys[`lecture${index}`];
                              setActiveLectures(newKeys);
                            } else {
                              setActiveLectures({
                                ...activeLectures,
                                [`lecture${index}`]: i._id,
                              });
                            }
                          }}
                        >
                          <p>
                            {activeLectures[`lecture${index}`] ? (
                              <MdOutlineKeyboardArrowUp size={22} />
                            ) : (
                              <MdOutlineKeyboardArrowDown size={22} />
                            )}{" "}
                            {i.title}
                          </p>
                        </div>
                        <div
                          className={`underAcordition ${
                            activeLectures[`lecture${index}`]
                              ? " activeAniSlide"
                              : ""
                          }`}
                        >
                          <ul>
                            {i.videoIntro && (
                              <li>
                                <p>
                                  <MdVideoLibrary />
                                  {`Video ${index + 1}`}
                                </p>
                                <p>
                                  <span>
                                    <Button
                                      onClick={() => {
                                        showGlobal({
                                          body: (
                                            <>
                                              <ReactPlayer
                                                url={i.videoIntro.url}
                                                width="100%"
                                                height="300px"
                                                controls
                                              />
                                            </>
                                          ),
                                          onOk: () => {
                                            closeGlobal();
                                          },
                                          footer: [],
                                        });
                                      }}
                                    >
                                      Xem trước
                                    </Button>
                                  </span>
                                </p>
                              </li>
                            )}

                            {i.desc && <li>{parse(i.desc)}</li>}
                          </ul>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Chưa có bài học nào</p>
            )}
          </div>
          <div className="boxUnder">
            <div className="desc">
              <div className="title_home">
                <h3>Chi tiết khoá học</h3>
                <div>
                  <img
                    src={VectorUnder}
                    alt="vector under thh"
                    className="vectorUnder"
                  />
                </div>
              </div>

              <div className="desc_c">{parse(data.desc)}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
