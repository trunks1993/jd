import React from 'react';
import { Layout, Menu } from 'antd';
import { RouteList, asyncRoutes } from '@/router';
import { createHashHistory } from 'history'; 
const { SubMenu } = Menu;
const { Header, Sider } = Layout;
const history = createHashHistory();

const recursion = (dataSource, match) => {
  return (
      dataSource.map((menu, index) => {
          if (menu.children) {
              return (
                  <SubMenu key={menu.id} title={menu.title}>
                      {recursion(menu.children, match)}
                  </SubMenu>
              )
          } else {
              return (<Menu.Item key={menu.id} onClick={e => history.push(`${match.url + menu.path}`)}>{menu.title}</Menu.Item>)
          }
      })
  )
}

export default ({ match }) => (
    <Layout className="layout">
	    <Header className="header">
	      <div className="logo" />
	      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
	        <Menu.Item key="1">nav 1</Menu.Item>
	        <Menu.Item key="2">nav 2</Menu.Item>
	        <Menu.Item key="3">nav 3</Menu.Item>
	      </Menu>
	    </Header>
	    <Layout>
		      <Sider width={200} style={{ background: '#fff' }}>
		        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
					{
						recursion(asyncRoutes, match)
					}
		        </Menu>
		      </Sider>
		      <Layout style={{ padding: '0 24px 24px' }}>
					<RouteList match={ match } />
		      </Layout>
	    </Layout>
  </Layout>
);
