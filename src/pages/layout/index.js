import React from 'react';
import { connect } from 'react-redux';
import SiderMenu from './SiderMenu';
import { Layout } from 'antd';
import { RouteList } from '@/router';
import { UserContext } from '@/utils/contexts';
const { Header, Sider } = Layout;

const StoreLayout = ({ match, user }) => {
  return (
    <UserContext.Provider value={user}>
      <Layout className="layout">
        <Sider width={270}>
          <div className="logo" />
          <SiderMenu match={match} />
        </Sider>
        <Layout>
          <Header className="header" style={{ background: '#fff', padding: 0, height: '110px' }} />
          <Layout style={{ padding: '0 24px 24px' }}>
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

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreLayout);
