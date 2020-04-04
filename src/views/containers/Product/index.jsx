import React, { memo, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

import { saveToPurchase, saveToLoved } from 'state/redux/ecommerce/actions';
import CardProduct from './components/Card';
import { ProductWrapper } from './product.style';

const Product = memo((props) => {
  const { history, location, handleSavingPurchase, handleSavingLoved } = props;
  const { state } = location;

  const [tempProduct, setTempProduct] = useState(null);

  useEffect(() => {
    if (tempProduct === null) {
      setTempProduct(state.product);
    } 
  }, [tempProduct, state.product])

  const handleLovedProduct = () => {
    const updateProduct = { ...tempProduct, loved: tempProduct.loved === 1 ? 0 : 1}
    setTempProduct(updateProduct)
    handleSavingLoved(updateProduct);
  };

  return (
    <ProductWrapper>
      <CardProduct history={history} product={state.product} />
      {state.product && (
        <Row type="flex" justify="space-between">
          <Col>
            <h3>{state.product.title}</h3>
          </Col>
          <Col onClick={() => handleLovedProduct()}>
            {tempProduct && tempProduct.loved
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
  handleSavingLoved: data => dispatch(saveToLoved(data)),
});

export default connect(null, mapDispatchToProps)(withRouter(Product));
