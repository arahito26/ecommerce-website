import styled from 'styled-components';

const ProductWrapper = styled.div`
  width: -webkit-fill-available;
  display: inline-block;
  margin: 10px;

  .icon {
    font-size: 22px;
    cursor: pointer;
  }

  .card-image {
    width: -webkit-fill-available;
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
  }

  .card-product {
    margin-bottom: 20px;
    text-align: center;
    vertical-align: middle;
    img {
      height: 150px;
    }
  }
`;

export { ProductWrapper };
