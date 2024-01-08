import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  Input,
  Button,
  Menu,
  Drawer,
  Dropdown,
  message,
  Space,
  Avatar,
  Typography,
} from "antd";
import { IoHome } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import LogoHeader from "../../assets/logoheader.png";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../pages/Auth/auth.service";
import { CgProfile } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
const { Text } = Typography;

export default function Header() {
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.user);

  const [, setCurrentProfileSubMeu] = useState("subMenuProfile");
  const [logout, logOutRes] = useLogoutMutation();

  const setCurSubMeuProfile = async (e) => {
    setCurrentProfileSubMeu(e.key);
    if (e.key === "/logout") {
      await logout().unwrap();
    } else {
      navigate(`${e.key}`);
    }
    if (open) {
        setOpen(false);
    }
  };

  const dropDownItem = (role) => {
    let itemDefault = [
        {
          label: "Trang Cá Nhân",
          key: "/profile",
          icon: <CgProfile />,
        },
        {
          label: "Đăng xuất",
          key: "/logout",
          icon: <IoExitOutline />,
        },
    ]
    switch (role) {
      case 1:
        itemDefault.unshift(
          {
            label: "Trang quản lí",
            key: "/dashboard",
            icon: <IoHome />,
          }
        );
        break;
      case 0:
        itemDefault.unshift(
          {
            label: "Khoá học của tôi",
            key: "/course/mine",
            icon: <FaBookOpen />,
          }
        );
        break;
    }
    return itemDefault;
  }

  useEffect(() => {
    setCurrent(`/${location.pathname.split("/")[1]}`);
  }, [location.pathname]);

  const IconProfile = () => (
    <Space style={{ marginRight: "13px" }}>
      {user?.thumbnail?.url ? (
        <Avatar
          style={{
            backgroundColor: user?.thumbnail?.url ? "#fff" : "#7F1416",
            borderRadius: "5px",
          }}
          shape="square"
          src={user?.thumbnail ? user?.thumbnail?.url : ""}
        />
      ) : (
        <Avatar
          style={{ backgroundColor: "#7F1416", borderRadius: "5px" }}
          shape="square"
          icon={<UserOutlined />}
        />
      )}
    </Space>
  );

  useEffect(() => {
    if(logOutRes.isSuccess) {
        window.location.reload(false);
    }
    if (logOutRes.isError) {
      if (Array.isArray(logOutRes.error.data.error)) {
        logOutRes.error.data.error.forEach((el) => message.error(el.message));
      } else {
        message.error(logOutRes.error.data.msg);
      }
    }
  }, [logOutRes.isLoading]);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClickMenuL = (e) => {
    navigate(e.key);
    if (open) {
      setOpen(false);
    }
  };
  const items = [
    {
      label: "Trang chủ",
      key: "/",
    },
    {
      label: "Giới thiệu",
      key: "/intro",
    },
    {
      label: "Liều thuốc",
      key: "/product",
    },
    {
      label: "Khoá Học Gia Liễu",
      key: "/course",
    },
    {
      label: "Blog",
      key: "/blog",
    },
    {
      label: "Tư vấn",
      key: "/contact",
    },
  ];
  return (
    <div>
      <header className="header_top">
        <div className="ip_search">
          <Input
            placeholder="Tìm kiếm..."
            prefix={<CiSearch />}
            style={{
              width: "250px",
              height: "29px",
              backgroundColor: "#fff",
              marginLeft: "30px",
            }}
          />
        </div>
        <div>
          <Link to="/">
            <img
              className="logoheadertop"
              src={LogoHeader}
              alt="Ảnh Logo Nam y đường"
            />
          </Link>
        </div>
        <div className="btn_login">
          {!user ? (
            <Button onClick={() => navigate("/login")}>Đăng Nhập</Button>
          ) : (
            <Dropdown
              menu={{
                items: dropDownItem(user?.role),
                onClick: setCurSubMeuProfile,
              }}
            >
              <div>
                <IconProfile />
                <Text strong style={{ marginRight: "30px" }}>
                  {user?.firstName}
                </Text>
              </div>
            </Dropdown>
          )}
        </div>
      </header>
      <header className="header_bottom">
        <div className="menus">
          <Menu
            onClick={onClickMenuL}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>

        <div className="logoheader">
          <Link to="/">
            <img src={LogoHeader} alt="Ảnh Logo Nam y đường" />
          </Link>
        </div>
        <div className="repo_header_bot">
          <Button
            onClick={showDrawer}
            style={{ background: "#7F1416", color: "#fff" }}
          >
            <IoMenu size={20} style={{ marginBottom: "3px" }} />
          </Button>
          <Drawer
            title="Nam Y Đường"
            placement="right"
            onClose={onClose}
            size="default"
            open={open}
          >
            <Menu
              onClick={onClickMenuL}
              selectedKeys={[current]}
              mode="vertical"
              items={items}
            />

            {!user ? (
              <Button
                style={{
                  background: "#7F1416",
                  color: "#fff",
                  textTransform: "uppercase",
                  marginLeft: "15px",
                  marginTop: "20px",
                }}
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
              >
                Đăng Nhập
              </Button>
            ) : (
              <Dropdown
                trigger={["click"]}
                arrow={true}
                overlayStyle={{ marginLeft: "15px" }}
                menu={{
                  items: dropDownItem(user?.role),
                  onClick: setCurSubMeuProfile,
                }}
              >
                <div>
                  <IconProfile />
                  <Text strong style={{ marginRight: "30px" }}>
                    {user?.firstName}
                  </Text>
                </div>
              </Dropdown>
            )}
          </Drawer>
        </div>
      </header>
    </div>
  );
}
