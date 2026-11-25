import styled from '@emotion/styled';

const Container = styled.main`
  border: 20px solid transparent;
  border-image-source: url('./background.png');
  border-image-slice: 30% 49%;
  border-image-width: 220px;
  background-color: #ffffff;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  box-shadow: 0 12px 36px rgba(47, 33, 32, 0.08);
  overflow-x: hidden;

  @media screen and (min-width: 420px) {
    border-width: 26px;
    border-image-width: 250px;
  }

  @media screen and (min-width: 520px) {
    margin: 24px auto;
  }
`;

export default Container;
