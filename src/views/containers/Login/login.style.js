import styled from 'styled-components';

const LoginWrapper = styled.div`
  border: 1px solid grey;
  margin: 10px;
  padding: 20px;

  h4 {
    text-align: center;
  }

  .form-login {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    .ant-form-item {
      width: 100%;
      text-align: center;
    }
    .ant-col-offset-8{
      margin-left: 0;
    }
  }
`;

export {
  LoginWrapper,
};
