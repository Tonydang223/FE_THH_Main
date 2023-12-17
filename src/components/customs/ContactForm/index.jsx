import "./Contact.scss";
import { Button, Form, Input } from "antd";

const ContactFormIntro = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="wrap_contactFormIntro">
      <div className="row">
        <div className="col-6">
          <h1>Liên lạc tực tiếp với chúng tôi</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul>
            <li><span>Email:</span> tranhoanghai@gmail.com</li>
            <li><span>Điện thoại:</span> 0908789789 - 0908789789</li>
            <li><span>Địa chỉ chính:</span> 32 Đường Lam, quận Cẩm Hà</li>
          </ul>
        </div>
        <div className="col-6">
          <h4>Thông tin liên lạc</h4>
          <Form name="basic" style={{ maxWidth: "100%" }} onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Làm ơn nhập tên!" }]}
            >
              <Input placeholder="Tên của bạn" />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Làm ơn nhập số điện thoại!" },
              ]}
            >
              <Input type="number" placeholder="Số điện thoại" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Làm ơn nhập email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="content"
              rules={[
                { required: true, message: "Làm ơn nhập nội dung tư vấn!" },
              ]}
            >
              <Input.TextArea placeholder="Nội dung tư vấn" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Gửi
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormIntro;
