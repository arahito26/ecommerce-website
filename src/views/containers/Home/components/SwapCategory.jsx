import React from 'react';
import { Skeleton } from 'antd';

import { CategoryWrapper } from '../home.style';

const skeletonItem = [1, 2, 3, 4];
const SwapCategory = ({ categories, loading, selectedCategory, handleSelectedCategory }) => (
  <div className="list-category">
    {(categories && !loading)
      ? categories.map((item, key) => (
        <CategoryWrapper
          key={key.toString()}
          item={selectedCategory}
          onClick={() => handleSelectedCategory(item.name.replace(/ /g, '-').toLowerCase())}
        >
          <div className={item.name.replace(/ /g, '-').toLowerCase()}>
            <img src={item.imageUrl} alt="category" />
            <div>{item.name}</div>
          </div>
        </CategoryWrapper>
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
