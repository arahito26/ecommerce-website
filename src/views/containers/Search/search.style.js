import styled, { css } from 'styled-components';

const SearchWrapper = styled.div`
  width: -webkit-fill-available;
  overflow-y: scroll;
  margin: 50px 10px 0 10px;

  ${props => props.isSearching
    && css`
    margin: 100px 10px 0 10px;
    text-align: center;
  `}

  .item-product {
    margin-bottom: 10px;
    .image-product {
      width: 72px;
      height: 64px;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export { SearchWrapper };
