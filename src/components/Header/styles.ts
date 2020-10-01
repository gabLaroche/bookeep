import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;

  #header-logo {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.primary};
    text-decoration: none;

    span {
      font-weight: 500;
      font-size: 23px;
      margin-left: 7px;
    }
  }
  
  .header-nav {
    display: flex;
    .header-link:nth-child(2) {
      margin-left: 15px;
    }
  }

  #header-link, .header-link {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.primary};
    text-decoration: none;

    span {
      margin-right: 10px;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
