import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 100px 20px;
  min-height: 100vh;

  @media screen and (max-width: 650px) {
    padding: 0 20px;
  }

  #loading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }
  
  .container {
    display: flex;
    @media screen and (max-width: 1023px) {
      display: block;
    }
  }
  
  .tile {
    img {
      @media screen and (max-width: 1023px) {
        display: block;
        margin: 0 auto;
    }
  }
    &:first-child {
      margin-right: 20px;
      @media screen and (max-width: 1023px) {
        margin-right: 0;
      }
    }
  }
  
  .title {
    color: #27426A;
    font-weight: 500;
    font-size: 35px;
    margin: 10px 0;
  }
  
  p {
    margin: 10px 0;
  }
  
  .isbn-list {
    padding: 0 30px;
  }
`;
