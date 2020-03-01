import React, { memo } from 'react';
import {
  Spin,
  Row,
  Col,
} from 'antd';

import { SearchWrapper } from './search.style';

const Search = memo(({ resultsProduct, isSearching }) => {
  return (
    <SearchWrapper isSearching={isSearching}>
      {resultsProduct && resultsProduct.map((item, key) => (
        <Row gutter={8} key={key.toString()}>
          <Col md={24} lg={6}>
            <img src={item.imageUrl} alt="item-product" />
          </Col>
          <Col md={24} lg={18}>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </Col>
        </Row>
      ))}
      {isSearching && resultsProduct.length === 0 && (
        <Spin size="large" tip="Loading..." />
      )}
    </SearchWrapper>
  )
});

export default Search;
