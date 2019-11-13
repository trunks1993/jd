import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { actions as userActions } from '@/redux/user';
import { createHashHistory } from 'history';
const history = createHashHistory();

const LoginPage = Form.create({})(({ handleLogin, isFetching, form: { getFieldDecorator, validateFields } }) => {
  const formItemLayout = {
    wrapperCol: { span: 24 }
  };
  return (
    <div className="login-container">
      <Form className="login-container-form">
        <h2>物联网管控系统平台</h2>
        <Form.Item {...formItemLayout}>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入用户名',
              },
            ],
          })(<Input
            prefix={<Icon type="user" style={{ color: '#79A8E0' }} />}
            placeholder="用户名"
          />)}
        </Form.Item>
        <Form.Item {...formItemLayout}>
          {
            getFieldDecorator('passWord', {
              rules: [
                {
                  required: true,
                  message: '请输入密码',
                }
              ]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: '#79A8E0' }} />}
                type="password"
                placeholder="密码"
              />
            )
          }
        </Form.Item>
        <Form.Item {...formItemLayout}>
          <Button type="primary" onClick={() => {
            validateFields((err, value) => {
              if (!err) {
                handleLogin(value).then(() => {
                  history.push('/');
                });
              }
            });
          }} className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (value) => dispatch(userActions.loginByUsername(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
