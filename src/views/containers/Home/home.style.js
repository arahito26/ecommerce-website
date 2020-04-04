import styled, { css } from 'styled-components';

const HomeWrapper = styled.div`
  width: -webkit-fill-available;
  display: inline-block;

  .icon {
    font-size: 22px;
    cursor: pointer;
  }

  .header-content {
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: white;
    padding: 10px;
    width: -webkit-fill-available;
  }

  .list-category {
    display: flex;
    width: -webkit-fill-available;
    overflow: auto;
    white-space: nowrap;
    .item-category{
      display: inline-block;
      margin: 5px;
      padding: 5px;
      text-align: center;
      width: 90px;
      img {
        width: 80px;
        height: 80px;
      }
    }
  }

  .card-products {
    bottom: 40px;
    width: -webkit-fill-available;
    overflow-y: scroll;
    margin: 175px 10px 40px 10px;
    .card-product {
      cursor: pointer;
      .ant-card-body {
        padding: 10px;
      }
      .image {
        padding: 5px;
        border: 1px solid black;
        margin-bottom: 5px;
        div {
          width: 100%;
          text-align: center;
          margin: 10px 0;
        }
        img {
          text-align: center;
          vertical-align: middle;
          height: 150px;
        }
      }
    }
  }
`;

const Footer = styled.div`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: -webkit-fill-available;
  background-color: white;
  z-index: 1;
  border: 1px solid black;

  a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    width: calc(100% / 4);
    color: black;
  }
`;

const CategoryWrapper = styled.div`
  display: inline-block;
  margin: 5px;
  padding: 5px;
  text-align: center;
  width: 90px;
  img {
    width: 80px;
    height: 80px;
  }

  ${props => props.item && css`
    .${props.item} {
      border-bottom: solid #01cec3;
    }
  `}
`;

export {
  HomeWrapper,
  Footer,
  CategoryWrapper
};
