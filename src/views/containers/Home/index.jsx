import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Input,
} from 'antd';

import SwapCategory from './components/SwapCategory';
import Card from './components/Card';
import { getListData } from 'state/redux/ecommerce/actions';
import { HeartOutlined, SearchOutlined } from '@ant-design/icons';
import { HomeWrapper, Footer } from './home.style';

const Home = memo(({
  doListData,
  categories,
  products,
  isLoading,
}) => {

  useEffect(() => {
    if (categories === null && products === null) {
      doListData('home');
    }
  }, [doListData, categories, products]);

  return (
    <HomeWrapper>
      <div className="header-content">
        <Row type="flex" justify="center" align="middle">
          <Col span={2}>
            <HeartOutlined className="icon" />
          </Col>
          <Col span={22}>
            <Input prefix={<SearchOutlined />} />
          </Col>
        </Row>
        <SwapCategory categories={categories} loading={isLoading} />
      </div>
      <Card products={products} loading={isLoading} />
      <Footer>
        <Link to="/">Home</Link>
        <Link to="/">Feed</Link>
        <Link to="/">Card</Link>
        <Link to="/purchased">Profile</Link>
      </Footer>
    </HomeWrapper>
  )
});

const mapStateToProps = ({ ecommerce }) => ({
  categories: ecommerce.data && ecommerce.data.category,
  products: ecommerce.data && ecommerce.data.productPromo,
  isLoading: ecommerce.isLoading,
});

const mapDispatchToProps = dispatch => ({
  doListData: param => dispatch(getListData(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
