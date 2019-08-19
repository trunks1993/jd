import React from 'react';
import { connect } from 'react-redux';
import SiderMenu from './SiderMenu';
import Header from './Header';
import { Layout } from 'antd';
import { RouteList } from '@/router';
import { UserContext } from '@/utils/contexts';
import { logo } from '@/assets/images';

const { Sider } = Layout;

const StoreLayout = ({ match, user }) => {
  return (
    <UserContext.Provider value={user}>
      <Layout className="layout">
        <Sider className="sider-container" width={270}>
          <div className="sider-container-logo">
            <img alt="" src={logo} />
          </div>
          <SiderMenu match={match} />
        </Sider>
        <Layout>
          <Header />
          <Layout className="main-container">
            <RouteList match={ match } />
          </Layout>
        </Layout>
      </Layout>
    </UserContext.Provider>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(StoreLayout);
