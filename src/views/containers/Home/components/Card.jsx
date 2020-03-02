import React from 'react';
import { Card, Skeleton } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const skeletonItem = [1, 2, 3, 4];
const CardProducts = ({ products, loading, history }) => {
  return (
    <div className="card-products">
      {(products && !loading)
        ? products.map((item, key) => (
          <Card
            hoverable
            className="card-product"
            key={key.toString()}
            bordered={false}
            onClick={() => history.push("/product", { product: item, refresh: true })}
          >
            <div className="image">
              <div>
                <img src={item.imageUrl} alt="card-product" />
              </div>
              {item.loved ? <HeartFilled className="icon" /> : <HeartOutlined className="icon" />}
            </div>
            <div>{item.title}</div>
          </Card>
        ))
        : skeletonItem.map((_, key) => (
          <Card
            hoverable
            className="card-product"
            key={key.toString()}
            bordered={false}
          >
            <div className="image">
              <Skeleton.Avatar loading={loading} size="large" active shape="circle" />
            </div>
            <Skeleton.Input loading={loading} size="small" active />
          </Card>
        ))
      }
    </div>
  )
};

export default CardProducts;
