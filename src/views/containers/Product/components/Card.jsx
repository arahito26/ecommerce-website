import React from 'react';
import { Row, Col, Skeleton, message } from 'antd';
import { ArrowLeftOutlined, ShareAltOutlined } from '@ant-design/icons';

const CardProduct = ({ product, history }) => {
  const handleBackToHome = () => {
    return history.goBack();
  };

  const handleShareMessage = () => {
    return message.success(`${product.title} has been shared.`);
  };

  return (
    <div className="card-image">
      <Row gutter={8} type="flex" justify="space-between">
        <Col md={24} lg={12}>
          <ArrowLeftOutlined className="icon" onClick={() => handleBackToHome()} />
        </Col>
        <Col md={24} lg={12}>
          <ShareAltOutlined className="icon" onClick={() => handleShareMessage()} />
        </Col>
      </Row>
      <div className="card-product">
        {product && product.imageUrl
          ? <img src={product.imageUrl} alt="card-product" /> 
          : <Skeleton.Avatar size="large" shape="circle" active />}
        
      </div>
    </div>
  )
};

export default CardProduct;
