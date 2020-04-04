import React, { memo } from 'react';
import { connect } from 'react-redux';

import ListProducts from 'views/components/ListProducts';

const PurchasedHistory = memo(({ products, isLoading }) => {
  const loveHistories = products && products.filter(item => item.loved === 1);
  return (
    <ListProducts
      title="Feed"
      listProducts={loveHistories}
      isLoading={isLoading}
    />
  );
});

const mapStateToProps = ({ ecommerce }) => ({
  products: ecommerce.data && ecommerce.data.productPromo,
  isLoading: ecommerce.isLoading,
});

export default connect(mapStateToProps)(PurchasedHistory);
