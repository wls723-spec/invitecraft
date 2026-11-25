import { useState } from 'react';
import styled from '@emotion/styled';
import ImageLightbox from '@/components/ImageLightbox.tsx';
import { Eyebrow, SectionTitle } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Calendar from '@/layout/Calendar/Calendar.tsx';
import Container from '@/layout/Container.tsx';
import Gallery from '@/layout/Gallery/Gallery.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';

function App() {
  const [zoomed, setZoomed] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Container>
      <Main />

      <Wrapper tinted>
        <Eyebrow>Invitation</Eyebrow>
        <SectionTitle>모시는 글</SectionTitle>
        <Invitation />
      </Wrapper>

      <Wrapper>
        <Eyebrow>Portrait</Eyebrow>
        <SectionTitle>첫돌의 기록</SectionTitle>
        <Gallery onZoom={(src, alt) => setZoomed({ src, alt })} />
      </Wrapper>

      <Wrapper tinted>
        <Eyebrow>The Day</Eyebrow>
        <SectionTitle>일시 안내</SectionTitle>
        <Calendar />
      </Wrapper>

      <Wrapper>
        <Eyebrow>Location</Eyebrow>
        <SectionTitle>오시는 길</SectionTitle>
        <Location onZoom={(src, alt) => setZoomed({ src, alt })} />
      </Wrapper>

      <Footer>연우의 첫 생일을 함께 축복해 주셔서 감사합니다.</Footer>

      <ImageLightbox
        src={zoomed?.src ?? null}
        alt={zoomed?.alt ?? ''}
        onClose={() => setZoomed(null)}
      />
    </Container>
  );
}

export default App;

const Footer = styled.footer`
  padding: 36px 24px 44px;
  background-color: var(--paper-alt);
  border-top: 1px solid var(--line);
  font-family: var(--font-serif);
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--muted);
  word-break: keep-all;
`;
