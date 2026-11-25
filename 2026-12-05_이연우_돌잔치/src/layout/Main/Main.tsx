import styled from '@emotion/styled';
import data from '@/data.json';
import coverImg from '@/assets/images/photo-cover.jpg';

const Main = () => {
  const { englishName, greeting } = data;

  return (
    <HeroSection>
      <Masthead>
        <span>{englishName}</span>
        <span>2026. 12. 05</span>
      </Masthead>

      <PhotoFrame>
        <HeroImg src={coverImg} alt="이연우 첫돌 한복 사진" />
      </PhotoFrame>

      <TitleArea>
        <Kicker>{greeting.kicker}</Kicker>
        <MainTitle>{greeting.title}</MainTitle>
        <Hairline />
        <EventDate>{greeting.dateLine}</EventDate>
        <EventVenue>{greeting.venueLine}</EventVenue>
      </TitleArea>
    </HeroSection>
  );
};

export default Main;

const HeroSection = styled.header`
  width: 100%;
  padding: 20px 24px 50px;
  background-color: var(--paper);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Masthead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
  margin-bottom: 22px;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: var(--muted);
`;

const PhotoFrame = styled.div`
  width: 100%;
  padding: 8px;
  background-color: #ffffff;
  border: 1px solid var(--line);
`;

const HeroImg = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center 26%;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Kicker = styled.span`
  font-family: var(--font-serif);
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  color: var(--gold);
  margin-bottom: 8px;
`;

const MainTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 1.72rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.38;
  margin: 0;
  word-break: keep-all;
`;

const Hairline = styled.span`
  display: block;
  width: 28px;
  height: 1px;
  background-color: var(--gold);
  margin: 18px 0;
  opacity: 0.7;
`;

const EventDate = styled.p`
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--ink);
  margin: 0 0 4px;
  word-break: keep-all;
`;

const EventVenue = styled.p`
  font-size: 0.86rem;
  color: var(--muted);
  margin: 0;
  word-break: keep-all;
`;
