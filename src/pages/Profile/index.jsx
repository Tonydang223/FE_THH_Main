import { Tabs } from "antd";
import FormProfile from "./components/FormProfile";
import ChangePassword from "./components/ChangePassword"
export default function Profile() {
  const items = [
    {
      key: "profile",
      label: "Trang cá nhân",
      children: <FormProfile />,
    },
    {
      key: "lecture",
      label: "Thay đổi mật khẩu",
      children: <ChangePassword />,
    },
  ];
  return (
    <div style={{ margin: "4rem 0" }}>
      <Tabs defaultActiveKey={`profile`} type="card" items={items} />
    </div>
  );
}
