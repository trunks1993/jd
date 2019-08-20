import React from 'react';
import { Layout } from 'antd';
import UserDropdown from '@/components/UserDropdown';

const { Header } = Layout;

export default () => {
  return (
    <Header className="header-container">
      <UserDropdown />
    </Header>
  );
};
