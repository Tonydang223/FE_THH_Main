import "./Blog.scss";
import VectorUnder from "../../assets/vectorUnderline.png";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";

export default function MainBlog() {
  const blog = useSelector((state) => {
    return state.posts;
  });

  const { posts, activeLoading } = blog;

  const navigate = useNavigate();
  return (
    <div className="mainBlogWrap">
      {activeLoading ? (
        <Skeleton />
      ) : (
        <>
          <div className="mainBlog_1">
            {posts.slice(0, 4).map((i) => (
              <div
                onClick={() => navigate(`/blog/detail/${i._id}`)}
                key={i._id}
              >
                <h4>{i.title}</h4>
                <img src={i.thumbnail.url} />
                <p>{i.short_des}</p>
              </div>
            ))}
          </div>
          <div className="mainBlog_2">
            <div className="title_home">
              <p>Một cơ thể khoẻ mạnh</p>
              <div>
                <img
                  src={VectorUnder}
                  alt="vector under thh"
                  className="vectorUnder"
                />
              </div>
              <h3>Chuyên mục sức khoẻ cho bạn</h3>
            </div>
            <div className="row">
              {posts
                .filter((f) => f.categories !== "trick")
                .slice(0, 6)
                .map((i) => (
                  <div
                    className="col-4"
                    onClick={() => navigate(`/blog/detail/${i._id}`)}
                    key={i._id}
                  >
                    <img src={i.thumbnail.url} />
                    <h4>{i.title}</h4>
                    <p>{i.short_des}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="mainBlog_3">
            <div className="title_home">
              <p>Tin tức hôm nay</p>
              <div>
                <img
                  src={VectorUnder}
                  alt="vector under thh"
                  className="vectorUnder"
                />
              </div>
              <h3>Bài viết mới nhất</h3>
            </div>
            <div className="row">
              <div
                className="col-12"
                onClick={() => navigate(`/blog/detail/${posts[0]?._id}`)}
              >
                <div className="d-flex">
                  <img src={posts[0]?.thumbnail.url} />
                  <div>
                    <h4>{posts[0]?.title}</h4>
                    <p>{posts[0]?.short_des}</p>
                    <div className="box_author d-flex flex-rows">
                      <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                      <div>
                        <h5>Nhà thuốc Nam Y Đường</h5>
                        <p>12/12/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {posts.slice(0, 4).map((i) => (
                <div
                  className="col-3"
                  onClick={() => navigate(`/blog/detail/${i._id}`)}
                  key={i._id}
                >
                  <div className="content_top">
                    <img src={i.thumbnail.url} />

                    <h4>{i.title}</h4>
                    <p>{i.short_des}</p>
                  </div>
                  <div className="box_author d-flex flex-rows">
                    <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                    <div>
                      <h5>Nhà thuốc Nam Y Đường</h5>
                      <p>12/12/2023</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mainBlog_4">
            <div className="title_home">
              <h3>Video</h3>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="ban_vid">
                  <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                  <div className="log0_mid_banVid">
                    <div>
                      <FaPlay size={30} />
                    </div>
                  </div>
                </div>
                <div className="content_ban_vid">
                  <h5>Lorem is spum lomee</h5>
                  <h1>Lorem is spum lomee lomee lomee lomee lomee</h1>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-rows">
                  <div className="ban_vid">
                    <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                    <div className="log0_mid_banVid">
                      <div>
                        <FaPlay size={23} />
                      </div>
                    </div>
                  </div>
                  <div className="content_ban_vid">
                    <h5>Lorem is spum lomee</h5>
                    <h1>Lorem is spum lomee lomee lomee lomee lomee</h1>
                  </div>
                </div>
                <div className="d-flex flex-rows">
                  <div className="ban_vid">
                    <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                    <div className="log0_mid_banVid">
                      <div>
                        <FaPlay size={23} />
                      </div>
                    </div>
                  </div>
                  <div className="content_ban_vid">
                    <h5>Lorem is spum lomee</h5>
                    <h1>Lorem is spum lomee lomee lomee lomee lomee</h1>
                  </div>
                </div>
                <div className="d-flex flex-rows">
                  <div className="ban_vid">
                    <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                    <div className="log0_mid_banVid">
                      <div>
                        <FaPlay size={23} />
                      </div>
                    </div>
                  </div>
                  <div className="content_ban_vid">
                    <h5>Lorem is spum lomee</h5>
                    <h1>Lorem is spum lomee lomee lomee lomee lomee</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
