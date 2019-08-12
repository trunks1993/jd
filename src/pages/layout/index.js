import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Router, { routes } from '@/router';
import { createHashHistory } from 'history'; 

const { SubMenu } = Menu;
const { Header, Sider } = Layout;
const history = createHashHistory();

const recursion = dataSource => {
  return (
      dataSource.map((menu, index) => {
          if (menu.children) {
              return (
                  <SubMenu key={menu.id} title={menu.title}>
                      {recursion(menu.children)}
                  </SubMenu>
              )
          } else {
              return (<Menu.Item key={menu.id} onClick={e => history.push(menu.path)}>{menu.title}</Menu.Item>)
          }
      })
  )
}

export default () => (
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
						recursion(routes)
					}
		        </Menu>
		      </Sider>
		      <Layout style={{ padding: '0 24px 24px' }}>
			        <Breadcrumb style={{ margin: '16px 0' }}>
			          <Breadcrumb.Item>Home</Breadcrumb.Item>
			          <Breadcrumb.Item>List</Breadcrumb.Item>
			          <Breadcrumb.Item>App</Breadcrumb.Item>
			        </Breadcrumb>

			        <Router />

		      </Layout>
	    </Layout>
  </Layout>
);
