import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { loginByUsername } from '@/redux/actions';
import { createHashHistory } from 'history';
const history = createHashHistory();

const LoginPage = ({ handleLogin }) => (
  <div className="login-container">
    <Form className="login-form">
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox>Remember me</Checkbox>

        <Button type="primary" onClick={handleLogin} className="login-form-button">
					Log in
        </Button>
      </Form.Item>
    </Form>
  </div>
);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => {
      dispatch(loginByUsername()).then(res => {
        history.push('/');
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
