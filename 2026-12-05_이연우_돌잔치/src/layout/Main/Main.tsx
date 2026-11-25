import styled from '@emotion/styled';
import data from '@/data.json';
import coverImg from '@/assets/images/photo-cover.jpg';

const Main = () => {
  const { greeting } = data;

  return (
    <MainBox>
      <TopBadge>{greeting.badge}</TopBadge>
      <ArchFrame>
        <MainImg src={coverImg} alt="이연우 첫돌 한복 사진" />
      </ArchFrame>
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.subtitle}</SubTitle>
    </MainBox>
  );
};

export default Main;

const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBadge = styled.span`
  display: inline-block;
  padding: 5px 14px;
  margin-bottom: 18px;
  border-radius: 999px;
  background-color: #f3f6ef;
  border: 1px solid #dce4d2;
  color: #6b7c65;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  font-weight: 600;
`;

const ArchFrame = styled.div`
  width: 88%;
  max-width: 340px;
  border-radius: 200px 200px 12px 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(47, 33, 32, 0.08);
  background-color: #f7f6f2;
`;

const MainImg = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  object-position: center 28%;
`;

const MainTitle = styled.h1`
  font-family: 'HSSanTokki20-Regular', serif;
  font-size: 1.95rem;
  font-weight: 400;
  color: #2f2120;
  line-height: 1.32;
  margin: 24px 0 12px;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 0.96rem;
  color: #5b504e;
  line-height: 1.65;
  margin: 0;
  white-space: pre-line;
  word-break: keep-all;
`;
