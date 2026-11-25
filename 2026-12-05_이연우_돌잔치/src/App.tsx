import { useState } from 'react';
import styled from '@emotion/styled';
import ImageLightbox from '@/components/ImageLightbox.tsx';
import Divider from '@/components/Divider.tsx';
import { Heading1 } from '@/components/Text.tsx';
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
      <Wrapper>
        <Main />
      </Wrapper>
      <Divider />
      <Wrapper>
        <Heading1>모시는 글</Heading1>
        <Invitation />
      </Wrapper>
      <Divider />
      <Wrapper>
        <Heading1>첫돌의 기록</Heading1>
        <Gallery onZoom={(src, alt) => setZoomed({ src, alt })} />
      </Wrapper>
      <Divider />
      <Wrapper>
        <Heading1>일시 안내</Heading1>
        <Calendar />
      </Wrapper>
      <Divider />
      <Wrapper>
        <Heading1>오시는 길</Heading1>
        <Location onZoom={(src, alt) => setZoomed({ src, alt })} />
      </Wrapper>
      <Footer>
        연우의 첫 생일을
        <br />
        함께 축복해 주셔서 감사합니다.
      </Footer>
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
  padding: 10px 44px 48px;
  font-size: 0.84rem;
  line-height: 1.65;
  color: #8a7f7c;
  word-break: keep-all;
`;
