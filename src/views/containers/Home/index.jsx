import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import {
  Row,
  Col,
  Input,
} from 'antd';

import Search from 'views/containers/Search';
import SwapCategory from './components/SwapCategory';
import Card from './components/Card';
import { getListData } from 'state/redux/ecommerce/actions';
import mockProduct from './mockProducts';
import useDebounce from 'utils/use-debounce';
import {
  HeartOutlined,
  SearchOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import { HomeWrapper, Footer } from './home.style';

const Home = memo((props) => {
  const {
    doListData,
    categories,
    products,
    isLoading,
    history,
  } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [resultsProduct, setResultsProduct] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 3000);

  useEffect(() => {
    if (categories === null && products === null) {
      doListData('home');
    }
  }, [doListData, categories, products]);

  const onSearchProduct = (key) => {
    let list = mockProduct && mockProduct.filter(m => {
      return m.name.toLowerCase().includes(key.toLowerCase());
    });
    setIsSearching(false);
    return list;
  };

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        const resultSearch = onSearchProduct(debouncedSearchTerm);
        setResultsProduct(resultSearch);
      } else {
        setResultsProduct([]);
      }
    },
    [debouncedSearchTerm]
  );

  const handleInputSearch = ({ value }) => {
    if (value) setIsSearching(true);
    setSearchTerm(value);
  };

  const handleBackToHome = () => {
    return history.goBack();
  };

  return (
    <HomeWrapper>
      <div className="header-content">
        <Row type="flex" justify="center" align="middle">
          <Col span={2}>
            {searchTerm
              ? <ArrowLeftOutlined className="icon" onClick={() => handleBackToHome()} />
              : <HeartOutlined className="icon" />}
          </Col>
          <Col span={22}>
            <Input
              prefix={<SearchOutlined />}
              onChange={e => handleInputSearch(e.target)}
            />
          </Col>
        </Row>
        {!searchTerm && <SwapCategory categories={categories} loading={isLoading} />}
      </div>
      {!searchTerm && (
        <React.Fragment>
          <Card products={products} loading={isLoading} />
          <Footer>
            <Link to="/">Home</Link>
            <Link to="/">Feed</Link>
            <Link to="/">Card</Link>
            <Link to="/purchased">Profile</Link>
          </Footer>
        </React.Fragment>
      )}
      {searchTerm && <Search resultsProduct={resultsProduct} isSearching={isSearching} />}
    </HomeWrapper>
  )
});

const mapStateToProps = ({ ecommerce }) => ({
  categories: ecommerce.data && ecommerce.data.category,
  products: ecommerce.data && ecommerce.data.productPromo,
  isLoading: ecommerce.isLoading,
});

const mapDispatchToProps = dispatch => ({
  doListData: param => dispatch(getListData(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
