import { Breadcrumb, Layout, theme } from 'antd';
import { Route, Routes } from 'react-router-dom';
import NavBar from './component/layout/navbar';
import Home from './pages/home';
import Project from './pages/project';
import CreateProject from './component/project/project-create';

const { Content, Footer } = Layout;
function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <NavBar />

      <Layout>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/project" element={<Project />}></Route>
              <Route path="/project/create" element={<CreateProject />}></Route>
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
