import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button, Skeleton } from "antd";
import moment from "moment";
import parse from "html-react-parser";
import "./Blog.scss";
import { useGetOnePostQuery } from "./post.service";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BlogDetail() {


  const navigate = useNavigate();
  const { id } = useParams();

  const blog = useSelector((state) => {
    return state.posts;
  });

  const { data, isFetching, isError } = useGetOnePostQuery(id, {
    skip: !id,
  });

  if (isError) {
    navigate('/404');
  }

  return (
    <div className="blogDetWrap container">
      {isFetching ? (
        <Skeleton />
      ) : (
        <div className="row">
          <div className="col-8">
            <div className="author">
              <div>
                <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
              </div>
              <div>
                <h5>Nhà thuốc Nam Y Đường</h5>
                <p>{moment(data.createdAt).format("LL")}</p>
              </div>
            </div>
            <h5 style={{margin: '25px 0 0 0', fontSize: '21px', fontWeight: '700'}}>{data.title}</h5>
            <div className="content">{parse(data.desc)}</div>
            <div className="tags">
              <ul>
                <li>Đông Y</li>
                <li>Phương pháp</li>
                <li>Liệu trình</li>
                <li>Khám bệnh</li>
              </ul>
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
                <h4>Bài viết mới nhất</h4>
              </div>
              <div className="blog_moreLeft_content">
                {blog.posts.slice(0,4).map((i) => (
                    <div className="box_blogsm" key={i._id} onClick={() => navigate(`/blog/detail/${i._id}`)}>
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
      )}
    </div>
  );
}
