import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  ProjectOutlined,
  OrderedListOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

const { Sider } = Layout;
const getItem = (
  label: string,
  key: string,
  icon: JSX.Element | null,
  children: unknown = null
) => {
  return {
    key,
    icon,
    children,
    label,
  };
};
const items = [
  getItem("DashBoard", "/", <DashboardOutlined />),
  getItem("Setting", "Setting", <SettingOutlined />, [
    getItem("Role", "/Setting/role", null),
    getItem("Screen", "/Setting/screen", null),
    getItem("Screen Right", "/Setting/screenright", null),
    getItem("User", "/Setting/user", null),
  ]),
  getItem("Project", "Project", <ProjectOutlined />, [
    getItem("My Project", "/Project", null),
    getItem("New Project", "/project/create", null),
  ]),

  getItem("Task", "Task", <OrderedListOutlined />, [
    getItem("Tasks", "/Task/overview", null),
    getItem("New Task", "/Task/createmember", null),
  ]),
];

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "inline-flex",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={({ key }) => {
            navigate(key);
          }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </div>
  );
};
export default NavBar;
