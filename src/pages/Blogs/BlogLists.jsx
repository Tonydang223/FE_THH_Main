import { useSelector } from "react-redux";
import VectorUnder from "../../assets/vectorUnderline.png";
import { List, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";

const BlogLists = () => {
  const blog = useSelector((state) => {
    return state.posts;
  });
  const { posts, activeLoading } = blog;

  const navigate = useNavigate();
  return (
    <div className="wrapBlogList">
      <div className="title_home">
        <p>Tổng hợp bài viết</p>
        <div>
          <img
            src={VectorUnder}
            alt="vector under thh"
            className="vectorUnder"
          />
        </div>
        <h3>Câu chuyện của chúng tôi</h3>
      </div>
      <div className="productLists">
        {activeLoading ? (
          <Skeleton />
        ) : (
          <List
            itemLayout="horizontal"
            grid={{ gutter: 12, xl: 4, xxl: 4, lg: 3, md: 2, sm: 3, xs: 1 }}
            size="large"
            pagination={{
              pageSize: 12,
              position: "bottom",
              align: "start",
              defaultCurrent: 4,
              hideOnSinglePage: true,
              showQuickJumper: false,
              showSizeChanger: false,
              responsive: true,
              itemRender: (_, type, originalElement) => {
                if (type === "prev") {
                  return <a>{"<<"} Trước</a>;
                }
                if (type === "next") {
                  return <a>Sau {">>"}</a>;
                }
                return originalElement;
              },
            }}
            dataSource={posts}
            renderItem={(item) => (
              <div
                className="card_blog"
                onClick={() => navigate(`/blog/detail/${item._id}`)}
              >
                <div>
                  <img src={item.thumbnail.url} />
                </div>
                <div className="card_blog_content">
                  <h5>{item.title}</h5>
                  <p>{item.short_des}</p>
                </div>
              </div>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default BlogLists;
