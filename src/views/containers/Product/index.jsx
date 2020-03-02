import React, { memo, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

import { saveToPurchase } from 'state/redux/purchased/actions';
import CardProduct from './components/Card';
import { ProductWrapper } from './product.style';

const Product = memo((props) => {
  const { history, location, handleSavingPurchase } = props;
  const { state } = location;
  const { product } = state;

  const [isLoved, setIsLoved] = useState(null);

  useEffect(() => {
    if (isLoved === null) {
      setIsLoved(product.loved)
    }
  }, [isLoved, product, product.loved]);

  const handleLovedProduct = () => setIsLoved(!isLoved);

  return (
    <ProductWrapper>
      <CardProduct history={history} product={state.product} />
      {state.product && (
        <Row type="flex" justify="space-between">
          <Col>
            <h3>{state.product.title}</h3>
          </Col>
          <Col onClick={() => handleLovedProduct()}>
            {isLoved
              ? <HeartFilled className="icon" />
              : <HeartOutlined className="icon" />}
          </Col>
        </Row>
      )}
      <div>{state.product.description}</div>
      <Row gutter={8} type="flex" justify="end" align="middle">
        <Col>{state.product.price}</Col>
        <Col span={1} />
        <Col>
          <Button onClick={() => handleSavingPurchase(state.product)}>BUY</Button>
        </Col>
      </Row>
    </ProductWrapper>
  )
});

const mapDispatchToProps = dispatch => ({
  handleSavingPurchase: data => dispatch(saveToPurchase(data)),
});

export default connect(null, mapDispatchToProps)(withRouter(Product));
