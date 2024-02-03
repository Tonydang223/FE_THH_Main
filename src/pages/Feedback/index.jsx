import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./FeedBack.scss";
import { feedback } from "../../untils/dataOut";

const FeedBack = () => {
  const navigate = useNavigate();

  const blog = useSelector((state) => state.posts);
  return (
    <div className="wrapFeedBack">
      <div className="row">
        <div className="col-8">
          <div className="tabline">
            <h5>Câu chuyện chưa kể</h5>
          </div>
          <div className="row">
            <div className="col-7">
              <img src={feedback[0].img} />
            </div>
            <div className="col-5">
              <h2>{feedback[0].title}</h2>
              <p>{feedback[0].content}</p>
            </div>
          </div>
          <div className="row">
            {feedback.slice(1, feedback.length).map((i) => (
              <div key={i.id} className="col-12">
                <div className="row">
                  <div className="col-4">
                    <img src={i.img} />
                  </div>
                  <div className="col-8">
                    <h2>{i.title}</h2>
                    <p>{i.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-4">
          <div className="blog_moreLeft1">
            <div className="blog_moreLeft_title">
              <h4>Liên hệ thắc mắc</h4>
            </div>
            <div className="blog_moreLeft_content">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
              <ul>
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>{" "}
                  0908789789 - 0980789789
                </li>
                <li>
                  <span>
                    <MdEmail />
                  </span>{" "}
                  tstranhoanghai.pmkt@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="blog_moreLeft2">
            <div className="blog_moreLeft_title">
              <h4>Bài viết sức khoẻ</h4>
            </div>
            <div className="blog_moreLeft_content">
              {blog.posts.slice(0, 4).map((i) => (
                <div
                  className="box_blogsm"
                  key={i._id}
                  onClick={() => navigate(`/blog/detail/${i._id}`)}
                >
                  <img src={i.thumbnail.url} />
                  <h5>{i.title}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className="blog_moreLeft3">
            <div className="blog_moreLeft_title">
              <h4>Tư vấn qua Zalo</h4>
            </div>
            <div className="blog_moreLeft_content">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
              <div>
                <Button>Zalo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
