import React, { memo } from 'react';
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';

import Search from 'views/containers/Search';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ListProductsWrapper from './listProducts.style';

const ListProducts = memo(({
  listProducts,
  isLoading,
  history,
  title,
}) => {
  const handleBackToHome = () => {
    return history.goBack();
  };

  return (
    <ListProductsWrapper>
      <Row className="header-content">
        <Col span={2}>
          <ArrowLeftOutlined className="icon" onClick={() => handleBackToHome()} />
        </Col>
        <Col span={22}>{title}</Col>
      </Row>
      <Search resultsProduct={listProducts} isSearching={isLoading} history={history} />
    </ListProductsWrapper>
  )
});

export default withRouter(ListProducts);
