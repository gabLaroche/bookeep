import styled from 'styled-components';

export const VolumeContainer = styled.div`
  display: flex;

  height: 180px;
  border-radius: 8px;
  background-color: #fff;
  margin: 30px 0;

  img {
    position: absolute;
    width: 120px;
    height: 180px;
    border-radius: 8px 0 0 8px;
    object-fit: cover;
  }

  .volume-info {
    padding: 10px 20px;
    margin-left: 120px;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    scrollbar-width: thin;

    .volume-header {
      display: flex;
      justify-content: space-between;
      color: ${(props) => props.theme.primary};
      width: 100%;

      h1 {
        font-size: 24px;
        font-weight: 500;
      }
      
      a:link, a:visited {
        color: ${(props) => props.theme.primary};
        text-decoration: none;
      }
      
      a:hover, a:focus {
        text-decoration: underline;
      }

      svg {
        cursor: pointer;
      }
    }

    h2 {
      font-weight: 400;
      font-size: 18px;
      color: #555;
    }

    p {
      font-size: 16px;
      color: #555;
      margin: 10px 0;
      text-align: justify;
    }
  }
`;
