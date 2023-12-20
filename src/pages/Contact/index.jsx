import VectorUnder from "../../assets/vectorUnderline.png";
import "./Contact.scss";
import { Button, Form, Input, message } from "antd";
import { LuUser2 } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiStickyNote } from "react-icons/ci";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form] = Form.useForm();
  const onFinish = async () => {
    emailjs.sendForm('service_32lhkul', 'template_ljf35dn', '#formContact', '3sgAogo8uVOFWAfg5')
    .then(() => {
        message.success("Nội dung đã được gửi thành công");
        form.resetFields();
    }, (error) => {
        message.error(error.text)
    });

  };
  return (
    <div className="formContactWrap">
      <div className="d-flex flex-column align-items-center justify-content-center m-5">
        <div className="title_formContact d-flex flex-column align-items-center justify-content-center">
          <h1>ĐĂNG KÝ ĐỂ LIÊN HỆ VỚI CHÚNG TÔI</h1>
          <div>
            <img src={VectorUnder} alt="vector under thh" />
          </div>
          <p className="txt-remider">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="formContact_form">
          <Form
            name="normal_login"
            className="login-form"
            form={form}
            id="formContact"
            onFinish={onFinish}
            style={{ margin: "10px 200px" }}
          >
            <div className="row">
              <div className="col-6">
                <Form.Item
                  name="name"
                  hasFeedback
                  rules={[{ required: true, message: "Làm ơn nhập tên!" }]}
                >
                  <Input
                    style={{ padding: "8px 11px" }}
                    prefix={<LuUser2 />}
                    name="name"
                    placeholder="Họ và tên"
                  />
                </Form.Item>
              </div>
              <div className="col-6">
                <Form.Item
                  name="phone"
                  hasFeedback
                  rules={[
                    { required: true, message: "Làm ơn nhập số điện thoại!" },
                  ]}
                >
                  <Input
                    style={{ padding: "8px 11px" }}
                    type="number"
                    name="phone"
                    prefix={<BsTelephone />}
                    placeholder="Số điện thoại"
                  />
                </Form.Item>
              </div>
            </div>

            <Form.Item
              name="email"
              hasFeedback
              rules={[
                { required: true, message: "Làm ơn nhập email!" },
                {
                  pattern: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
                  message: "The email is not right format!",
                },
              ]}
            >
              <Input
                style={{ padding: "8px 11px" }}
                prefix={<HiOutlineMail />}
                placeholder="Email"
                name="email"
              />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[{ required: true, message: "Làm ơn nhập ghi chú" }]}
            >
              <Input.TextArea
                showCount
                style={{ height: "162px" }}
                placeholder="Ghi chú"
                name="message"
                prefix={<CiStickyNote />}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "221px",
                  height: "45px",
                  fontSize: "15px",
                  background: "#7F1416",
                }}
                className="login-form-button"
              >
                LIÊN HỆ
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
