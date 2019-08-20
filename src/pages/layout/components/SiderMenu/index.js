import React, { useContext } from 'react';
import { createHashHistory } from 'history';
import { Menu, Icon } from 'antd';
import { UserContext } from '@/utils/contexts';
const { SubMenu } = Menu;
const history = createHashHistory();

const recursion = (dataSource, match) => {
  return (
    dataSource.map(menu => {
      if (menu.children) {
        return (
          <SubMenu key={menu.id} title={
            <span>
              <Icon type="mail" />
              <span>{menu.title}</span>
            </span>
          }>
            {recursion(menu.children, match)}
          </SubMenu>
        );
      }
      return (<Menu.Item key={menu.id} onClick={e => history.push(`${match.url + menu.path}`)}>{menu.title}</Menu.Item>);
    })
  );
};

export default ({ match }) => {
  const user = useContext(UserContext);
  return (
    <Menu className="sider-menu" mode="inline" theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
      {
        recursion(user.menu, match)
      }
    </Menu>
  );
};
