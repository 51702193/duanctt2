import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "antd/dist/antd.css";

import './App.scss';
import { routes } from 'constants/paths';
import { Layout, Menu } from 'antd';
import PageIcon from 'components/PageIcon';
import PageHeader from 'components/PageHeader';
import { GoogleAuthProvider, useGoogleAuth } from 'components/GoogleAuth';

const { Content } = Layout;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App() {
  return (
    <Layout>
      <div className="top-nav-header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} style={{ display: 'flex' }}>
          <Menu.Item key="0">
            <a href="/">
              <PageIcon />
            </a>
          </Menu.Item>
          <Menu.Item key="1" disabled>Nhà đất bán</Menu.Item>
          <Menu.Item key="2" disabled>Nhà đất cho thuê</Menu.Item>
          <Menu.Item key="3" disabled>Dự án</Menu.Item>
          <Menu.Item key="4" disabled>Cần mua - cần thuê</Menu.Item>
          <Menu.Item key="5" disabled>Tin tức</Menu.Item>
          <Menu.Item key="6" disabled>Nội - Ngoại thất</Menu.Item>
          <Menu.Item key="7" disabled>Phong thủy</Menu.Item>
          <Menu.Item key="8" disabled>Danh bạ</Menu.Item>
          <Menu.Item key="9">
            <a href="/dang-tin">
              Đăng tin tức
                    </a>
          </Menu.Item>
        </Menu>
      </div>
      <Content>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={`router${i}`} {...route} />
            ))}
          </Switch>
        </Router>
      </Content >
    </Layout >
  );
}

function App2() {
  return (
    <GoogleAuthProvider>
      <PageHeader />
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={`router${i}`} {...route} />
          ))}
        </Switch>
      </Router>
    </GoogleAuthProvider>
  );
}

export default App2;