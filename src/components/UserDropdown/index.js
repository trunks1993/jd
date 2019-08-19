/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Dropdown, Icon, Menu } from 'antd';
import { UserContext } from '@/utils/contexts';
import { connect } from 'react-redux';
import { loginOut } from '@/redux/actions';

const UserDropdown = ({ handleLoginOut }) => {
  const user = useContext(UserContext);
  return (
    <Dropdown className="user-dropdown" overlay={
      <Menu onClick={({ item, key, keyPath, domEvent }) => {
        handleLoginOut();
      }}>
        <Menu.Item key="0">
          <a href="#">系统设置</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="#">个人中心</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">退出登录</Menu.Item>
      </Menu>
    } trigger={['click']}>
      <a className="ant-dropdown-link" href="#">
        hello, {user.name} <Icon type="down" />
      </a>
    </Dropdown>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleLoginOut: () => dispatch(loginOut())
  };
};

export default connect(null, mapDispatchToProps)(UserDropdown);
