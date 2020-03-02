import styled from 'styled-components';

const PurchasedWrapper = styled.div`
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
`;

export default PurchasedWrapper;
