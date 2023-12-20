import { Button, Form, Input, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useUpdatePassMutation } from "../profile.service";

export default function ChangePassword() {
  //   const navigate = useNavigate();
  const [form] = Form.useForm();
  const [updatePass, updatePassRes] = useUpdatePassMutation();

  useEffect(() => {
    if (updatePassRes.isSuccess) {
      message.success("Cập nhập mật khẩu thành công !");
      form.resetFields();
    }

    if (updatePassRes.isError) {
      if (Array.isArray(updatePassRes.error.data.error)) {
        updatePassRes.error.data.error.forEach((el) =>
          message.error(el.message)
        );
      } else {
        message.error(updatePassRes.error.data.msg);
      }
    }
  }, [updatePassRes.isLoading]);

  const onFinish = async (values) => {
    await updatePass(values).unwrap();
  };
  return (
    <Form
      name="normal_login"
      form={form}
      className="login-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ margin: "40px 0 30px 25px" }}
      layout="horizontal"
    >
      <Form.Item
        name="password"
        hasFeedback
        rules={[
          { required: true, message: "Làm ơn nhập mật khẩu!" },
          {
            pattern: new RegExp(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,:+;]).{8,}$/
            ),
            message: "Mật khẩu không đúng format!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu cũ"
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Làm ơn xác nhập mật khẩu lần nữa!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Không trùng khớp với mật khẩu bên trên!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Xác nhận mật khẩu"
        />
      </Form.Item>
      <Form.Item
        name="new_password"
        extra="Mật khẩu phải chứa ít nhất một chữ cái viết hoa và một kí tự đặc biệt"
        hasFeedback
        rules={[
          { required: true, message: "Làm ơn nhập mật khẩu mới!" },
          {
            pattern: new RegExp(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,:+;]).{8,}$/
            ),
            message: "Mật khẩu không đúng format!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu mới"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "100%", background: "#7F1416", height: "37px" }}
        >
          Nhập
        </Button>
      </Form.Item>
    </Form>
  );
}
