import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '@/redux/actions';
import { getToken } from '@/utils/auth';

const authRoute = ({ component: Component, authTo, user, getUserByToken, ...rest }) => (
  // eslint-disable-next-line complexity
  <Route {...rest} render={props => {
    const isLogin = props.match.path === '/login';
    const token = getToken();
    const c = <Component {...props} />;
    const r = <Redirect to={{ pathname: authTo, state: { from: props.location } }} />;
    if (token) {
      // 如果有token 判断有没有用户信息没有就去拉取
      if (!user.id) {
        getUserByToken(token).then(
          () => !isLogin ? c : r,
          error => !isLogin ? r : c
        );
      } else {
        return !isLogin ? c : r;
      }
    } else {
      return !isLogin ? r : c;
    }
  }
  }
  />
);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserByToken: token => dispatch(getUser(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(authRoute);
