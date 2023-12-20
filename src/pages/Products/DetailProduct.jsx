import { useEffect, useRef, useState } from "react";
import "./Product.scss";
import Slider from "react-slick";
import { CgNotes } from "react-icons/cg";
import { closeGlobal, showGlobal } from "../../components/Modals/ModalFirm";
import { Form, Input, Button, message, Avatar, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { FaCircleCheck } from "react-icons/fa6";
import moment from "moment";
import parse from "html-react-parser";
import { useParams, useNavigate } from "react-router-dom";

import {
  useAddCommentMutation,
  useDelCommentMutation,
  useEditCommentMutation,
  useGetAllCommentsQuery,
  useGetOneProductQuery,
} from "./product.service";

export default function DetailProduct() {
  const [form] = Form.useForm();
  const { user } = useSelector((state) => state.user);

  const [slideChange, setSlideChange] = useState("");

  const [comment, commentRes] = useAddCommentMutation();
  const [editComment, editCommentRes] = useEditCommentMutation();
  const [delComment, delCommentRes] = useDelCommentMutation();

  const [isActionComment, setIsActionComment] = useState({
    del: false,
    edit: false,
    reply: false,
    id: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const oneProduct = useGetOneProductQuery(id, {
    skip: !id,
  });

  if (id && oneProduct.isError) {
    navigate("/404");
  }


  const { data, isFetching } = useGetAllCommentsQuery("product");

  const refSlide = useRef(null);
  const refComment = useRef(null);

  const submitComment = async (v) => {
    if (!user) {
      message.error("Bạn cần đăng nhập để thực hiện!");
    } else {
      let data = {
        type: "product",
        message: v.comment,
        product_id: id,
      };

      if (isActionComment.reply) {
        data["reply"] = isActionComment.id;
      }

      if (!isActionComment.edit) {
        await comment(data);
      } else {
        await editComment({ id: isActionComment.id, body: data }).unwrap();
      }
      setIsActionComment({
        edit: false,
        reply: false,
        id: "",
      });
      form.resetFields();
    }
  };

  const dataComment = (d) => {
    return !d ? [] : d.filter((i) => !i.reply);
  };

  const dataCommentChild = (d, id) => {
    return !d
      ? []
      : d
          .filter((i) => i.reply && i.reply === id)
          .sort((a, b) => b.commentAt - a.commentAt);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setSlideChange(current),
  };
  const showModalImgs = (data) => {
    showGlobal({
      body: (
        <div style={{ margin: "40px" }}>
          <Slider
            ref={refSlide}
            settings={{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
            }}
          >
            {oneProduct.data.imgs.map((img) => {
              return (
                <>
                  <div key={img.uid}>
                    <img src={img.url} />
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      ),
      footer: [],
      width: 1000,
      title: data.title,
    });
  };
  useEffect(() => {
    if (!isActionComment.edit) {
      if (commentRes.isSuccess) {
        message.success("Bình luận thành công !");
      }

      if (commentRes.isError) {
        if (Array.isArray(commentRes.error.data.error)) {
          commentRes.error.data.error.forEach((el) =>
            commentRes.error(el.message)
          );
        } else {
          commentRes.error(commentRes.error.data.msg);
        }
      }
    } else {
      if (editCommentRes.isSuccess) {
        message.success("Bình luận cập nhập thành công !");
      }

      if (editCommentRes.isError) {
        if (Array.isArray(editCommentRes.error.data.error)) {
          editCommentRes.error.data.error.forEach((el) =>
            message.error(el.message)
          );
        } else {
          message.error(editCommentRes.error.data.msg);
        }
      }
    }

    if (isActionComment.del) {
      if (delCommentRes.isSuccess) {
        message.success("Bình luận xoá thành công !");
      }

      if (delCommentRes.isError) {
        if (Array.isArray(delCommentRes.error.data.error)) {
          delCommentRes.error.data.error.forEach((el) =>
            message.error(el.message)
          );
        } else {
          message.error(delCommentRes.error.data.msg);
        }
      }
    }
  }, [commentRes.isLoading, editCommentRes.isLoading, delCommentRes.isLoading]);


  const replyac = (data) => {
    refComment.current.focus();
    setIsActionComment({
      ...isActionComment,
      reply: true,
      id: data._id,
    });
  };

  const editac = (data) => {
    refComment.current.focus();
    setIsActionComment({
      ...isActionComment,
      edit: true,
      id: data._id,
    });
    form.setFieldValue("comment", data.message);
  };

  const delac = (id) => {
    setIsActionComment({
      ...isActionComment,
      del: true,
    });

    showGlobal({
      body: <p>Bạn có muốn xoá bình luận không</p>,
      onOk: async () => {
        await delComment(id).unwrap();
        closeGlobal();
      },
      onCancel: () => closeGlobal(),
    });
  };

  return (
    <>
      {oneProduct.isFetching || isFetching ? (
        <Skeleton style={{margin:'45px'}}/>
      ) : (
        <div className="wrap_product_detail container">
          <div className="row wrap_product_detail_top">
            <div className="info_left">
              <div className="slideImgs">
                <Slider ref={refSlide} {...settings}>
                  {oneProduct.data.imgs.slice(0, 5).map((img) => {
                    return (
                      <>
                        <div key={img.uid}>
                          <img src={img.url} />
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
              <div className="menu_slide_sm">
                {oneProduct.data.imgs.slice(0, 5).map((img, index) => {
                  return (
                    <>
                      <div
                        className={`boxsm ${
                          slideChange == index ? "active_boxsm" : ""
                        }`}
                        onClick={() => refSlide.current?.slickGoTo(index)}
                        key={img.uid}
                      >
                        <img src={img.url} />
                      </div>
                    </>
                  );
                })}
                <div className="boxsm" onClick={() => showModalImgs(oneProduct.data)}>
                  <CgNotes
                    fontSize={22}
                    color={"#6e6e6e"}
                    style={{ marginTop: "10px" }}
                  />
                  <p>Ảnh sản phẩm</p>
                </div>
              </div>
            </div>

            <div className="info">
              <h1>{oneProduct.data.title}</h1>
              <div className="d-flex flex-rows">
                {oneProduct.data.sold > 0 && (
                  <div className="stock">
                    <FaCircleCheck
                      color="#7F1416"
                      style={{ marginBottom: "4px" }}
                    />
                    <span>Còn hàng</span>
                  </div>
                )}
                <span className="line"></span>
                <h5 className="code">
                  Mã sản phẩm: <span> {oneProduct.data.code}</span>
                </h5>
              </div>

              <div className="weight warn-banner">
                <p>
                  <span>Khối lượng:</span> {oneProduct.data.size}
                </p>
              </div>
              <div className="banner_advertising">
                <img
                  src="https://cdn.tgdd.vn/2023/09/banner/Desktop-460x82.png"
                  alt="banner quang cao san pham tran hoang hai"
                />
              </div>
              <div className="banner_price">
                <div className="banner_price_top d-flex flex-rows">
                  <p>
                    <span>
                      {Number(
                        oneProduct.data.discount > 0
                          ? Math.round(
                            oneProduct.data.price * ((100 -  oneProduct.data.discount) / 100)
                            )
                          :  oneProduct.data.price
                      ).toLocaleString("en-US")}{" "}
                      đ
                    </span>
                  </p>
                  { oneProduct.data.discount > 0 && <p>- { oneProduct.data.discount}%</p>}
                </div>
                <div className="banner_price_under">
                  <p>Giá đã bao gồm Thuế.</p>
                  <p>
                    Phí vận chuyển và các chi phí khác (nếu có) sẽ được thể hiện
                    khi đặt hàng.
                  </p>
                </div>
              </div>

              <Button className="btn_contact_detailP">Liên hệ</Button>
              <p className="text_remider_detailP">
                Hãy gọi theo số: <span>(024)71096699 - (024)71096699</span>
              </p>
            </div>
          </div>
          <div className="content_details">
            <h5 className="title_detail_pan">Thông tin sản phẩm</h5>

            <div className="desc">{parse(oneProduct.data.desc)}</div>
          </div>
          <div className="comment_wrap">
            <h5 className="title_detail_pan">Đánh giá</h5>

            <Form
              form={form}
              style={{ marginTop: "10px" }}
              onFinish={submitComment}
            >
              <Form.Item
                style={{ marginBottom: "10px" }}
                name="comment"
                className="form_i_comment"
                rules={[{ required: true, message: "Hãy nhập bình luận !" }]}
              >
                <Input.TextArea
                  ref={refComment}
                  placeholder="Nhập đánh giá của bạn tại đây ..."
                  style={{ height: "170px" }}
                />
              </Form.Item>
              <Form.Item name="comment" className="form_i_comment">
                <div className="d-flex flex-rows">
                  <Button
                    htmlType="submit"
                    style={{
                      border: "none",
                      background: "#7F1416",
                      width: "130px",
                      height: "35px",
                      color: "#fff",
                    }}
                  >
                    Gửi
                  </Button>
                  {(isActionComment.edit || isActionComment.reply) && (
                    <Button
                      htmlType="submit"
                      onClick={() => {
                        setIsActionComment({
                          edit: false,
                          reply: false,
                          id: "",
                        });
                        form.resetFields();
                      }}
                      style={{
                        border: "none",
                        background: "#7F1416",
                        width: "130px",
                        height: "35px",
                        color: "#fff",
                        marginLeft: "25px",
                      }}
                    >
                      Huỷ
                    </Button>
                  )}
                </div>
              </Form.Item>
            </Form>
            <div className="comments_list">
                <>
                  <div className="comments_wrap">
                    <h3
                      style={{
                        fontSize: "22px",
                        textTransform: "uppercase",
                        lineHeight: "32px",
                      }}
                    >
                      Chuyên mục hỏi đáp cùng Nam Y Đường
                    </h3>
                    <div className="warn-banner">
                      <p style={{ marginTop: 0 }}>
                        Quý khách có thể liên hệ qua zalo để biết thêm nhiều chi
                        tiết. Liên hệ số (024)71096699 - (024)71096699
                      </p>
                    </div>
                    {dataComment(data).map((i) => (
                      <>
                        <div className="parentComment" key={i._id}>
                          <div>
                            <div className="comments_list_parentChild">
                              {i.by_user?.thumbnail?.url ? (
                                <Avatar
                                  size={"large"}
                                  src={i.by_user?.thumbnail?.url}
                                />
                              ) : (
                                <Avatar
                                  icon={<UserOutlined />}
                                  size={"large"}
                                />
                              )}
                              <div className="comments_list_content">
                                <h6>
                                  {i.by_user.role === 1
                                    ? "Nhà thuốc Nam Y Đường"
                                    : `${i.by_user.firstName}`}
                                </h6>
                                <p>
                                  {moment(new Date(i.commentedAt)).format(
                                    "DD/MM/YYYY"
                                  )}
                                </p>
                              </div>
                            </div>
                            <p>{i.message}</p>
                            <div className="comments_list_content_btn d-flex flex-rows">
                              {i.by_user._id !== user?._id && (
                                <Button onClick={() => replyac(i)}>
                                  Phản hồi
                                </Button>
                              )}
                              {i.by_user._id === user?._id && (
                                <>
                                  <Button onClick={() => editac(i)}>Sửa</Button>
                                  <Button onClick={() => delac(i._id)}>
                                    Xoá
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                          {dataCommentChild(data, i._id).length > 0 && (
                            <div className="childComment">
                              {dataCommentChild(data, i._id).map((ism) => (
                                <>
                                  <div
                                    className="box-wrapEachComment"
                                    key={ism._id}
                                  >
                                    <div className="comments_list_parentChild">
                                      {ism.by_user?.thumbnail?.url ? (
                                        <Avatar
                                          size={"large"}
                                          src={ism.by_user?.thumbnail?.url}
                                        />
                                      ) : (
                                        <Avatar
                                          icon={<UserOutlined />}
                                          size={"large"}
                                        />
                                      )}
                                      <div className="comments_list_content">
                                        <h6>
                                          {ism.by_user.role === 1
                                            ? "Nhà thuốc Nam Y Đường"
                                            : `${ism.by_user.firstName}`}
                                        </h6>{" "}
                                        <p>
                                          {moment(
                                            new Date(ism.commentedAt)
                                          ).format("DD/MM/YYYY")}
                                        </p>
                                      </div>
                                    </div>
                                    <p>{ism.message}</p>
                                    <div className="comments_list_content_btn d-flex flex-rows">
                                      {ism.by_user._id === user?._id && (
                                        <>
                                          <Button onClick={() => editac(ism)}>
                                            Sửa
                                          </Button>
                                          <Button
                                            onClick={() => delac(ism._id)}
                                          >
                                            Xoá
                                          </Button>{" "}
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </>
                              ))}
                            </div>
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
}
