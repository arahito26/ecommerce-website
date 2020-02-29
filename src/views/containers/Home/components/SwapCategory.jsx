import React from 'react';
import { Skeleton } from 'antd';

const skeletonItem = [1, 2, 3, 4];
const SwapCategory = ({ categories, loading }) => (
  <div className="list-category">
    {(categories && !loading)
      ? categories.map((item, key) => (
        <div className="item-category" key={key.toString()}>
          <img src={item.imageUrl} alt="category" />
          <div>{item.name}</div>
        </div>
      ))
      : skeletonItem.map((_, key) => (
        <div className="item-category" key={key.toString()}>
          <Skeleton.Avatar loading={loading} size="large" active shape="circle" />
          <div>
            <Skeleton.Input loading={loading} size="small" active />
          </div>
        </div>
      ))
  }
  </div>
);

export default SwapCategory;
