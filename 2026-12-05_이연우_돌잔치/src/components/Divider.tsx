import styled from '@emotion/styled';

const Divider = () => (
  <DividerWrap aria-hidden="true">
    <Line />
    <Dot />
    <Line />
  </DividerWrap>
);

export default Divider;

const DividerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 4px auto;
  gap: 10px;
`;

const Line = styled.span`
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #dce4d2, transparent);
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #e88ca6;
  opacity: 0.65;
`;
