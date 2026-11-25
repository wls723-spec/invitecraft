import styled from '@emotion/styled';

export const Heading1 = styled.h2`
  font-family: 'HSSanTokki20-Regular', serif;
  font-size: 1.45rem;
  font-weight: 400;
  margin: 0 0 18px;
  color: #d97a96;
  letter-spacing: 0.02em;
  white-space: pre-line;
`;

export const PointTitle = styled.h3`
  font-family: 'HSSanTokki20-Regular', serif;
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 6px;
  color: #d97a96;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  font-size: 0.98rem;
  line-height: 2.05rem;
  color: #3a2e2c;
  margin: 0;
  white-space: pre-line;
  word-break: keep-all;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-size: 0.92rem;
  line-height: 1.65;
  color: #5b504e;
  margin: 0;
  text-align: ${(props) => props.textAlign ?? 'center'};
  white-space: pre-line;
  word-break: keep-all;
`;
