import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  ProjectOutlined,
  TeamOutlined,
  OrderedListOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;
function getItem(label: any, key: any, icon: any, children: any = null) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('DashBoard', '/', <DashboardOutlined />),
  getItem('Setting', 'Setting', <SettingOutlined />, [
    getItem('Role', '/project/overview', null),
    getItem('Screen', '/Project/myproject', null),
    getItem('Screen Right', '/project/createproject', null),
    getItem('User', '/project/createproject', null),
  ]),
  getItem('Project', 'Project', <ProjectOutlined />, [
    getItem('Overview', '/project/overview', null),
    getItem('My Project', '/Project/myproject', null),
    getItem('New Project', '/project/createproject', null),
  ]),
  getItem('Team', 'Team', <TeamOutlined />, [
    getItem('Overview', '/Team/overview', null),
    getItem('My Team', '/Team/myteam', null),
    getItem('New Team', '/Team/createteam', null),
    getItem('Member', '/Team/createmember', null),
  ]),
  getItem('Task', 'Task', <OrderedListOutlined />, [
    getItem('Tasks', '/Team/overview', null),
    getItem('New Task', '/Team/createmember', null),
  ]),
];

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'inline-flex',
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
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
    </div>
  );
};
export default NavBar;
