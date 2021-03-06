import React, { memo } from 'react';
import { connect } from 'react-redux';

import ListProducts from 'views/components/ListProducts';

const PurchasedHistory = memo(({ listPurchaseHistory, isLoading }) => {
  return (
    <ListProducts
      title="Purchase History"
      listProducts={listPurchaseHistory}
      isLoading={isLoading}
    />
  )
});

const mapStateToProps = ({ ecommerce }) => ({
  listPurchaseHistory: ecommerce.purchaseHistories,
  isLoading: ecommerce.isLoading,
});

export default connect(mapStateToProps)(PurchasedHistory);
