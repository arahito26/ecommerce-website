import React, { memo } from 'react';
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Search from 'views/containers/Search';
import { ArrowLeftOutlined } from '@ant-design/icons';
import PurchasedWrapper from './purchased.style';

const PurchasedHistory = memo(({ listPurchaseHistory, isLoading, history }) => {
  const handleBackToHome = () => {
    return history.goBack();
  };

  return (
    <PurchasedWrapper>
      <Row className="header-content">
        <Col span={2}>
          <ArrowLeftOutlined className="icon" onClick={() => handleBackToHome()} />
        </Col>
        <Col span={22}>Purchase History</Col>
      </Row>
      <Search resultsProduct={listPurchaseHistory} isSearching={isLoading} history={history} />
    </PurchasedWrapper>
  )
});

const mapStateToProps = ({ purchased }) => ({
  listPurchaseHistory: purchased.purchaseHistories,
  isLoading: purchased.isLoading,
});

export default connect(mapStateToProps)(withRouter(PurchasedHistory));
