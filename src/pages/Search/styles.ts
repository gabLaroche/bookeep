import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 100px;
  height: 100vh;

  #loading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }

  @media screen and (max-width: 650px) {
    padding: 0 20px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;

  background-color: #eee;
  border-radius: 8px;
  height: 40px;
  width: 100%;

  input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 0 20px;
    font-size: 17px;
  }

  #search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.primary};
  }
`;

