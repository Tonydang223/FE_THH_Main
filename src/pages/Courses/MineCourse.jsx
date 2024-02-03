import VectorUnder from "../../assets/vectorUnderline.png";
import { List, Skeleton, Button, Form, Input, message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeGlobal, showGlobal } from "../../components/Modals/ModalFirm";
import { useConfirmCodeMutation } from "./course.service";

const MineCourse = () => {
  const navigate = useNavigate();

  const coursesList = useSelector((state) => state.courses);
  const { user } = useSelector((state) => state.user);

  const [confirmCode] = useConfirmCodeMutation();

  const { activeLoading, courses } = coursesList;

  const onFinishCode = async (v, p) => {
    closeGlobal();

    await confirmCode({ id: p?.idCourse, code: v.code })
      .unwrap()
      .then(() => {
        setTimeout(() => {
          navigate(`/course/learn/${p?.idCourse}`);
        }, 200);
      })
      .catch((e) => {
        message.error(e?.data?.msg);
      });
  };

  const FormConfirmCode = (props) => (
    <Form style={{ margin: "20px 0" }} onFinish={(v) => onFinishCode(v, props)}>
      <Form.Item label="Hãy nhập mã khoá học của bạn:" />
      <Form.Item
        name="code"
        rules={[
          { required: true, message: "Please enter the code !" },
          {
            pattern: new RegExp(/^[a-zA-Z0-9 ]+$/),
            message: "Only numbers and letters",
          },
        ]}
      >
        <Input placeholder="MBLK234" />
      </Form.Item>
      <Form.Item name="code">
        <Button
          type="primary"
          style={{
            width: "30%",
            color: "#fff",
          }}
          htmlType="submit"
        >
          Nhập
        </Button>
      </Form.Item>
    </Form>
  );

  const showModalConfirmCode = (id) => {
    showGlobal({
      body: <FormConfirmCode idCourse={id} />,

      footer: [
        <Button key="back" type="primary" danger onClick={closeGlobal}>
          Huỷ
        </Button>,
      ],
    });
  };
  return (
    <div className="wrapCourseMineList">
      <div className="title_home">
        <p>Khoá học của tôi</p>
        <div>
          <img
            src={VectorUnder}
            alt="vector under thh"
            className="vectorUnder"
          />
        </div>
        <h3>Khoá học dành cho bạn</h3>
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
            dataSource={courses.filter((v) => v?.students.includes(user._id))}
            renderItem={(item) => (
              <div
                className="card_blog"
                onClick={() => {
                  if (item?.confirmer.includes(user._id)) {
                    setTimeout(() => {
                      navigate(`/course/learn/${item._id}`);
                    }, 200);
                  } else {
                    showModalConfirmCode(item._id);
                  }
                }}
              >
                <div>
                  <img src={item.thumbnail.url} />
                </div>
                <div className="card_blog_content">
                  <h5>{item.title}</h5>
                  <p>{item.short_des}</p>
                </div>
                <div className="card_btn">
                  <Button
                    style={{
                      width: "30%",
                      background: "#7F1416",
                      color: "#fff",
                    }}
                    onClick={() => {
                      if (item?.confirmer.includes(user._id)) {
                        setTimeout(() => {
                          navigate(`/course/learn/${item._id}`);
                        }, 200);
                      } else {
                        showModalConfirmCode(item._id);
                      }
                    }}
                  >
                    Vào Học
                  </Button>
                </div>
              </div>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default MineCourse;
