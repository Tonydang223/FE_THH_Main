import { useEffect, useState } from "react";
import {
  useGetCodeCourseQuery,
  useGetLecturesOfCourseQuery,
  useGetOneCourseQuery,
} from "./course.service";
import { useParams, useNavigate } from "react-router-dom";
import { message, Skeleton } from "antd";
import VectorUnder from "../../assets/vectorUnderline.png";
import ReactPlayer from "react-player";
import parse from "html-react-parser";
import { FaCirclePlay } from "react-icons/fa6";

const Learn = () => {
  const { id, code } = useParams();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(0);

  const { data, isFetching, isError } = useGetLecturesOfCourseQuery(id, {
    skip: !id,
  });

  const dataOneCourse = useGetOneCourseQuery(id, {
    skip: !id,
  });

  const codeRes = useGetCodeCourseQuery(
    {
      id,
      codeHex: code,
    },
    {
      skip: !id || !code,
    }
  );

  useEffect(() => {
    if ((id && isError) || codeRes.isError) {
      navigate(-1);
      message.error("Opps not access this page!");
    }
  }, [codeRes.isError, id, isError, navigate]);

  return (
    <div className="wrapLearningCourse">
      {!isFetching && data ? (
        <div className="row">
          <div className="col-8">
            <div className="title_home">
              <p>Khoá học của tôi</p>
              <div>
                <img
                  src={VectorUnder}
                  alt="vector under thh"
                  className="vectorUnder"
                />
              </div>
              <h3>{dataOneCourse?.data?.name}</h3>
            </div>
            <div className="content">
              <h4>{data[activeId]?.title}</h4>

              <div className="vidUper">
                {data[activeId]?.videoLecture ? (
                  <ReactPlayer
                    url={data[activeId].videoLecture.url}
                    config={{
                      file: { attributes: { controlsList: "nodownload" } },
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                    controls
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <p className="emptyVidLecture">No video</p>
                )}
              </div>
              <div className="desc">
                <h4>Nội dung bài học</h4>
                <div>{parse(data[activeId]?.desc)}</div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="title_home">
              <h3>Các bài học</h3>
              <div>
                <img
                  src={VectorUnder}
                  alt="vector under thh"
                  className="vectorUnder"
                />
              </div>
            </div>
            <div className="list_lectures">
              {data.map((i, index) => (
                <div
                  className="item-lec"
                  key={i._id}
                  onClick={() => setActiveId(index)}
                >
                  <FaCirclePlay size={15} color="#7F1416" />
                  <p>{i.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default Learn;
