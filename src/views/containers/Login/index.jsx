import React, { memo } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col, Form, Input, Checkbox, Button } from "antd";

import {
  signIn,
  signInSuccess,
  signInFacebook,
  signInGoogle
} from "state/redux/auth/actions";
import { LoginWrapper } from "./login.style";

const Login = memo(props => {
  const {
    history,
    doSignIn,
    doSignInSuccess,
    doSignInFacebook,
    doSignInGoogle
  } = props;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  const onFinish = values => {
    if (values.username && values.password && values.remember) {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
      doSignIn();
      setTimeout(() => {
        doSignInSuccess({
          username: values.username,
          password: values.password
        });
        return history.push("/", { refresh: true });
      }, 1000);
    }
  };

  const onClickFbLogin = async () => {
    const auth = await doSignInFacebook();
    localStorage.setItem("username", auth.username);
    localStorage.setItem("password", auth.password);
    setTimeout(() => {
      doSignInSuccess({
        username: auth.username,
        password: auth.password
      });
      return history.push("/", { refresh: true });
    }, 1000);
  };
  const onClickGoogleLogin = async () => {
    const auth = await doSignInGoogle();
    console.log(auth, "-----");
    localStorage.setItem("username", auth.username);
    localStorage.setItem("password", auth.password);
    setTimeout(() => {
      doSignInSuccess({
        username: auth.username,
        password: auth.password
      });
      return history.push("/", { refresh: true });
    }, 1000);
  };

  return (
    <LoginWrapper>
      <h4>LOGIN</h4>
      <div className="form-login">
        <Form
          {...layout}
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Row>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" }
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" }
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
          </Row>
          <Row gutter={8} type="flex" justify="space-between">
            <Col md={24} lg={16}>
              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col md={24} lg={8}>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Sign In
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item {...tailLayout}>
              <Button onClick={() => onClickFbLogin()} type="primary">
                Sign In with Facebook
              </Button>
            </Form.Item>
          </Row>
          <Row>
            <Form.Item {...tailLayout}>
              <Button onClick={() => onClickGoogleLogin()} type="danger">
                Sign In with Google
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    </LoginWrapper>
  );
});

const mapDispatchToProps = dispatch => ({
  doSignIn: () => dispatch(signIn()),
  doSignInSuccess: data => dispatch(signInSuccess(data)),
  doSignInFacebook: () => dispatch(signInFacebook()),
  doSignInGoogle: () => dispatch(signInGoogle())
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
