import React, { memo } from 'react';
import {
  Spin,
  Row,
  Col,
  Empty,
} from 'antd';

import { SearchWrapper } from './search.style';

const Search = memo(({ resultsProduct, isSearching, history }) => {
  return (
    <SearchWrapper isSearching={isSearching}>
      {resultsProduct && resultsProduct.map((item, key) => (
        <Row
          gutter={8}
          key={key.toString()}
          className="item-product"
          onClick={() => history.push("/product", { product: item, refresh: true })}
        >
          <Col md={24} lg={6} className="image-product">
            <img src={item.imageUrl} alt="item-product" />
          </Col>
          <Col md={24} lg={18}>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </Col>
        </Row>
      ))}
      {isSearching && resultsProduct.length === 0 && (
        <Spin size="large" tip="Loading..." />
      )}
      {!isSearching && resultsProduct.length === 0 && <Empty />}
    </SearchWrapper>
  )
});

export default Search;
