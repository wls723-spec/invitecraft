import styled from '@emotion/styled';

const Wrapper = styled.section<{ tinted?: boolean }>`
  padding: 54px 26px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => (props.tinted ? 'var(--paper-alt)' : 'var(--paper)')};
  border-top: 1px solid var(--line);
`;

export default Wrapper;
