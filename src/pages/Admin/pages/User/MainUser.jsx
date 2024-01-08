import { Table, Input, Skeleton, Button, Form, message, Space } from "antd";
import moment from "moment";
import { useState } from "react";
import {
  useChangePassByAdminMutation,
  useCreateUserMutation,
  useGetUsersQuery,
} from "../../../Profile/profile.service";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  closeGlobal,
  showGlobal,
} from "../../../../components/Modals/ModalFirm";

const { Search } = Input;

export default function MainUser() {
  const [searchFilter, setSearchFilter] = useState("");
  const [form] = Form.useForm();

  const { data, isFetching } = useGetUsersQuery();
  const [createUsr] = useCreateUserMutation();
  const [changePass] = useChangePassByAdminMutation();

  const onFinish = async (v) => {
    await createUsr(v)
      .unwrap()
      .then(() => {
        message.success("Tạo thành công user !");
        form.resetFields();
        closeGlobal();
      })
      .catch((err) => {
        message.error(err?.data?.mgs);
      });
  };

  const onFinishChangePass = async (v, id) => {
    await changePass({ ...v, id: id })
      .unwrap()
      .then(() => {
        message.success("Thay đổi mật khẩu thành công !");
        form.resetFields();
        closeGlobal();
      })
      .catch((err) => {
        message.error(err?.data?.mgs);
      });
  };

  const onSearchData = (data) => {
    setSearchFilter(data);
  };

  const onChangeSearch = (e) => {
    if (e.target.value === "") setSearchFilter("");
  };

  const FormCreateUser = (
    <Form onFinish={onFinish} form={form} style={{ marginTop: "25px" }}>
      <h5 style={{ marginBottom: "20px" }}>Tạo người dùng:</h5>

      <Form.Item
        name="username"
        hasFeedback
        rules={[{ required: true, message: "Làm ơn nhập tên!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Tên người dùng"
        />
      </Form.Item>
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
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "30%", background: "#7F1416", height: "37px" }}
        >
          Nhập
        </Button>
      </Form.Item>
    </Form>
  );

  const FormChangePass = (props) => (
    <Form
      onFinish={(v) => onFinishChangePass(v, props?.id)}
      form={form}
      style={{ marginTop: "25px" }}
    >
      <Form.Item
        name="new_password"
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
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "30%", background: "#7F1416", height: "37px" }}
        >
          Nhập
        </Button>
      </Form.Item>
    </Form>
  );

  const showModalFormSign = () => {
    showGlobal({
      body: FormCreateUser,
      footer: [],
    });
  };

  const showModalFormChangePass = (id) => {
    showGlobal({
      body: <FormChangePass id={id} />,
      footer: [],
    });
  };
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      filteredValue: [searchFilter],
      onFilter: (value, record) => {
        return String(record.firstName)
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },
    {
      title: "Avatar",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (imgs) => (
        <>
          {Object.keys(imgs).length < 1 ? (
            <span>None</span>
          ) : (
            <img src={imgs.url} alt="img" width="50px" />
          )}
        </>
      ),
      responsive: ["lg"],
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Sign Up At",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (time) => (
        <>
          <span>{moment(new Date(time)).format("DD/MM/YYYY")}</span>
        </>
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (usr) => {
        return (
          <>
            <Space size={"middle"}>
              <Button
                type="primary"
                onClick={() => showModalFormChangePass(usr._id)}
              >
                Change Password
              </Button>
            </Space>
          </>
        );
      },
    },
  ];

  const savedData =
    !isFetching && data?.length > 0
      ? data
          .filter((i) => i.role !== 1)
          .map((i) => {
            return {
              ...i,
              key: i._id,
              thumbnail: !i.thumbnail ? {} : i.thumbnail,
            };
          })
      : [];

  return (
    <>
      {isFetching ? (
        <Skeleton />
      ) : (
        <>
          <div className="flex-row">
            <div className="flex-row">
              <Button
                type="primary"
                style={{ marginRight: "15px" }}
                onClick={showModalFormSign}
              >
                Tạo tài khoản
              </Button>
              <Search
                placeholder="Tìm kiếm người dùng..."
                onSearch={onSearchData}
                enterButton
                onChange={onChangeSearch}
              />
            </div>
          </div>
          <Table
            columns={columns}
            dataSource={savedData}
            pagination={{
              total: savedData.length,
              pageSize: 5,
              hideOnSinglePage: true,
            }}
          />
        </>
      )}
    </>
  );
}



