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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 2000);

  useEffect(() => {
    if (categories === null && products === null) {
      doListData('home');
    }
  }, [doListData, categories, products]);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        const onSearchProduct = (key) => {
          let list = products && products.filter(m => {
            return m.title.toLowerCase().includes(key.toLowerCase());
          });
          setIsSearching(false);
          return list;
        };
        const resultSearch = onSearchProduct(debouncedSearchTerm);
        setResultsProduct(resultSearch);
      } else {
        setResultsProduct([]);
      }
    },
    [debouncedSearchTerm, products]
  );

  const handleInputSearch = ({ value }) => {
    if (value) {
      setResultsProduct([]);
      setIsSearching(true);
    }
    setSearchTerm(value);
  };

  const handleBackToHome = () => {
    setSearchTerm('');
    setResultsProduct([]);
    setIsSearching(false);
    return history.push("/", { refresh: true });
  };

  const handleSelectedCategory = (name) => {
    setSelectedCategory(name === selectedCategory ? null : name);
  };

  let customProducts = [];
  if (selectedCategory === null) {
    customProducts = products;
  } else {
    const filterProductByCategory = mockProduct && mockProduct.filter(item => item.category === selectedCategory);
    customProducts = filterProductByCategory;
  }

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
              value={searchTerm}
              prefix={<SearchOutlined />}
              onChange={e => handleInputSearch(e.target)}
            />
          </Col>
        </Row>
        {!searchTerm && (
          <SwapCategory
            categories={categories}
            loading={isLoading}
            selectedCategory={selectedCategory}
            handleSelectedCategory={handleSelectedCategory}
          />
        )}
      </div>
      {!searchTerm && (
        <React.Fragment>
          <Card products={customProducts} loading={isLoading} history={history} />
          <Footer>
            <Link to="/">Home</Link>
            <Link to="/liked">Feed</Link>
            <Link to="/">Cart</Link>
            <Link to="/purchased">Profile</Link>
          </Footer>
        </React.Fragment>
      )}
      {searchTerm && <Search resultsProduct={resultsProduct} isSearching={isSearching} history={history} />}
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
