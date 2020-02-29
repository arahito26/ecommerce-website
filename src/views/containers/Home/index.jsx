import React, { memo } from 'react';
import {
  Row,
  Col,
  Input,
} from 'antd';

import { HeartOutlined, SearchOutlined } from '@ant-design/icons';
import { HomeWrapper } from './home.style';

const Home = memo(() => {
  return (
    <HomeWrapper>
      <Row type="flex" justify="center" align="middle">
        <Col span={2}>
          <HeartOutlined style={{ fontSize: '22px' }} />
        </Col>
        <Col span={22}>
          <Input placeholder="default size" prefix={<SearchOutlined />} />
        </Col>
      </Row>
    </HomeWrapper>
  )
});

export default Home;
