import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./Login.scss";
import { useLogUpMutation, useLoginMutation } from "../../auth.service"
import { useEffect } from "react"
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function Login() {
  const [form] = Form.useForm();
  const [changeForm, setChangeForm] = useState(false);
  const navigate = useNavigate();
  const [login, loginRes] = useLoginMutation();
  const [logUp, logUpRes] = useLogUpMutation();
  const {token} = useSelector(state => state.user);


  useEffect(() => {
    if (!changeForm) {
        if (loginRes.isSuccess) {
          navigate('/');
          message.success("Đăng nhập thành công !");
        }
    
        if (loginRes.isError) {
          if (Array.isArray(loginRes.error.data.error)) {
            loginRes.error.data.error.forEach((el) =>
              message.error(el.message)
            );
          } else {
            message.error(loginRes.error.data.msg);
          }
        }
    } else {
        if (logUpRes.isSuccess) {
          message.success("Đăng ký thành công !");
          setChangeForm(false);
          form.resetFields();
        }
    
        if (logUpRes.isError) {
          if (Array.isArray(logUpRes.error.data.error)) {
            logUpRes.error.data.error.forEach((el) =>
              message.error(el.message)
            );
          } else {
            message.error(logUpRes.error.data.msg);
          }
        }
    }



  }, [loginRes.isLoading, logUpRes.isLoading]);

  useEffect(() => {
    if(token) {
        setTimeout(() => {
            navigate('/');
        }), 800
    }
  }, [token])
  
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    if(!changeForm) {
        await login(values).unwrap();
    } else {
        console.log('sign Up')
        await logUp(values).unwrap();
    }
  };
  return (
    <div className="wrapLoginForm">
      <div className="insideLoginForm">
        <h3>{changeForm ? "Đăng Ký" : "Đăng Nhập"}</h3>
        <div className="wrapLoginF_content">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            form={form}
          >
            {changeForm && (
              <Form.Item
                name="username"
                hasFeedback
                rules={[{ required: true, message: "Làm ơn nhập tên!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
            )}

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

            <Form.Item
              name="password"
              extra="Mật khẩu phải chứa ít nhất một chữ cái viết hoa và một kí tự đặc biệt"
              hasFeedback
              rules={[
                { required: true, message: "Làm ơn nhập mật khẩu!" },
                {
                  pattern: new RegExp(
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,:+;]).{8,}$/
                  ),
                  message: "The password is not right format!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            {changeForm && (
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
            )}

            <Form.Item>
              <div className="d-flex justify-content-between flex-row">
                <p>
                  <a onClick={() => setChangeForm(!changeForm)}>
                  {!changeForm ? "Đăng ký ngay" : "Đăng Nhập"}
                  </a>
                </p>
                <p>
                  <a className="login-form-forgot" href="">
                    Quên mật khẩu
                  </a>
                </p>
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{width: '100%', background: '#7F1416', height: '37px'}}
              >
                Nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
