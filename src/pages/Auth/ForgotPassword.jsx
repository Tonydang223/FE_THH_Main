import "./auth.scss";
import { Form, Input, Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useForgotPassMutation } from "./auth.service"
import { useEffect } from "react"

const ForgotPassword = () => {
  const [form] = Form.useForm();

  const [forgot, setForgotRes] = useForgotPassMutation()
  useEffect(() => {
    if (setForgotRes.isSuccess) {
        form.resetFields();
        message.success("Kiểm tra email của bạn !");
      }
  
      if (setForgotRes.isError) {
          message.error(setForgotRes.error.data.msg);
      }
  }, [setForgotRes.isLoading])

  const onFinish = async (values) => {
    await forgot(values);
  };
  return (
    <div className="wrapForgot">
      <div className="wrapLoginF_content">
        <h3>Quên mật khẩu</h3>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          form={form}
        >
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
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%", background: "#7F1416", height: "37px" }}
            >
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
