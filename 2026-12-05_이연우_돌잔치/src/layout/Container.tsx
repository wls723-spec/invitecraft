import styled from '@emotion/styled';

const Container = styled.main`
  background-color: var(--paper);
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  box-shadow: 0 18px 50px rgba(34, 32, 30, 0.08);
  overflow-x: hidden;

  @media screen and (min-width: 500px) {
    margin: 24px auto;
    border: 1px solid var(--line);
  }
`;

export default Container;
